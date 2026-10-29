"""Verify offline coverage, layout switching and the three final interfaces."""

import asyncio
import json
import pathlib

from playwright.async_api import async_playwright

ROOT = pathlib.Path(__file__).resolve().parent
PAGES = ROOT / "pages"
PREVIEWS = ROOT / "previews"
LAYOUTS = ["catalog", "workbench", "cinema"]


async def main():
    failures = []
    results = []
    PREVIEWS.mkdir(exist_ok=True)
    async with async_playwright() as pw:
        browser = await pw.chromium.launch()
        context = await browser.new_context(viewport={"width": 1440, "height": 1000}, device_scale_factor=1)
        await context.set_offline(True)
        page = await context.new_page()
        page.on("pageerror", lambda error: failures.append(str(error)))
        page.on("request", lambda request: failures.append("Unexpected remote request: " + request.url) if request.url.startswith(("http://", "https://")) else None)
        for number in range(1, 4):
            stem = LAYOUTS[number - 1]
            await page.goto((PAGES / f"{stem}.html").as_uri())
            await page.wait_for_function("window.LEMO_DATA && document.querySelectorAll('.style-card').length > 0")
            await page.locator("img").first.wait_for()
            await page.evaluate("document.fonts.ready")
            await page.screenshot(path=str(PREVIEWS / f"{stem}.png"))
            await page.screenshot(path=str(PREVIEWS / f"{stem}-full.png"), full_page=True)
            for mode, count in [("styles", 66), ("films", 98)]:
                await page.locator(f'button[data-mode="{mode}"]').click()
                assert await page.locator(".style-card").count() == count
                await page.locator("#search").fill("zzzz-no-such-entry-8827")
                assert await page.locator("#empty").is_visible()
                await page.locator("#clearSearch").click()
                assert await page.locator(".style-card").count() == count
                await page.locator("#filters button").nth(1).click()
                assert 0 < await page.locator(".style-card").count() < count
                await page.locator("#filters button").first.click()
            await page.locator("#search").fill("Wings")
            assert await page.locator('.style-card[data-open="1"]').count() == 1
            await page.locator('.style-card[data-open="1"]').click()
            for tab in ["prompt", "shots", "direction", "invoke", "overview"]:
                await page.locator(f'button[data-tab="{tab}"]').first.click()
                if tab == "prompt":
                    await page.evaluate("""Object.defineProperty(navigator, 'clipboard', {
                      configurable: true, value: {writeText: async () => {throw new Error('Test: clipboard denied');}}
                    })""")
                    await page.locator('button[data-copy="prompt"]').click()
                    await page.locator("#copyFallback").wait_for(state="visible")
                    expected = await page.evaluate("window.LEMO_DATA.films[0].prompt_zh")
                    assert await page.locator("#copyText").input_value() == expected
                    await page.locator("#copyFallback form button").click()
                    await page.evaluate("""Object.defineProperty(navigator, 'clipboard', {
                      configurable: true, value: {writeText: async (text) => {window.copiedForTest = text;}}
                    })""")
                    await page.locator('button[data-copy="prompt"]').click()
                    await page.wait_for_function("window.copiedForTest !== undefined")
                    assert await page.evaluate("window.copiedForTest") == expected
                if tab == "shots":
                    assert await page.locator(".shots li").count() == 6
                if tab == "direction":
                    assert "Clawd" in await page.locator(".direction-note").inner_text()
                    await page.locator('button[data-lang="en"]').click()
                    assert "pilot" in await page.locator(".direction-note").inner_text()
                    await page.locator('button[data-lang="zh"]').click()
                if tab == "invoke":
                    await page.locator("#topic").fill("电动汽车热管理")
                    assert "电动汽车热管理" in await page.locator("#invokeText").input_value()
            await page.locator("button[data-close]").click()
            await page.locator("#search").fill("")
            await page.locator('button[data-mode="styles"]').click()
            await page.locator('.style-card[data-open="ink-wash"]').click()
            for tab in ["prompt", "camera", "demo", "invoke"]:
                await page.locator(f'button[data-tab="{tab}"]').first.click()
                if tab == "prompt":
                    assert "Chinese Ink Wash" in await page.locator(".prose").inner_text()
                if tab == "camera":
                    assert "镜头语法" in await page.locator(".prose").inner_text()
                    await page.locator('button[data-lang="en"]').first.click()
                    assert "Camera grammar" in await page.locator(".prose").inner_text()
                    await page.locator('button[data-lang="zh"]').first.click()
                if tab == "demo":
                    assert "Score structure" not in await page.locator(".prose").inner_text()
                    await page.locator('button[data-lang="en"]').first.click()
                    assert "Score structure" in await page.locator(".prose").inner_text()
                    await page.locator('button[data-lang="zh"]').first.click()
                    await page.locator('button[data-credits="ink-wash"]').click()
                    assert len(await page.locator("#guideContent pre").inner_text()) > 500
                    await page.locator("#guideDialog form button").click()
                if tab == "invoke":
                    assert await page.locator("[data-idea]").count() == 5
                    await page.locator("[data-idea]").nth(2).click()
                    assert await page.locator("#topic").input_value() in await page.locator("#invokeText").input_value()
            await page.locator("button[data-close]").click()
            await page.locator("#licenseButton").click()
            assert "MIT License" in await page.locator("#guideContent").inner_text()
            await page.locator("#guideDialog form button").click()
            await page.locator('[data-guide="director"]').first.click()
            assert "Directing a Lemo-Opuscar film" in await page.locator("#guideContent").inner_text()
            await page.locator("#guideDialog form button").click()
            await page.locator('[data-guide="start"]').first.click()
            assert "整理编写的中文导读" in await page.locator("#guideContent").inner_text()
            await page.locator("#guideDialog form button").click()
            await page.set_viewport_size({"width": 375, "height": 812})
            await page.goto((PAGES / f"{stem}.html").as_uri())
            await page.wait_for_function("document.querySelectorAll('.style-card').length > 0")
            assert await page.evaluate("document.documentElement.scrollWidth <= innerWidth"), f"Mobile overflow: {number}"
            assert await page.locator(".layout-switch a").count() == 3
            for link in await page.locator(".layout-switch a").all():
                assert await link.is_visible()
                assert (await link.bounding_box())["height"] >= 44
            await page.screenshot(path=str(PREVIEWS / f"{stem}-mobile.png"))
            await page.locator('.style-card[data-open="1"]' if number == 3 else '.style-card[data-open="ink-wash"]').click()
            await page.locator('button[data-tab="prompt"]').first.click()
            assert await page.evaluate("document.documentElement.scrollWidth <= innerWidth"), f"Reader mobile overflow: {number}"
            await page.locator("button[data-close]").click()
            results.append({"layout": stem, "offline": True, "styles": 66, "films": 98, "mobile": True})
            await page.set_viewport_size({"width": 1440, "height": 1000})
        await page.goto((PAGES / "catalog.html").as_uri())
        await page.locator('button[data-category="手绘与绘画"]').click()
        await page.locator("#search").fill("水墨")
        await page.locator('.style-card[data-open="ink-wash"]').click()
        await page.locator('button[data-tab="camera"]').click()
        for target in ["workbench", "cinema", "catalog"]:
            await page.locator(f'.reader-layouts a[data-layout-link="{target}"]').click()
            await page.wait_for_url(f"**/{target}.html#*")
            assert await page.locator("#search").input_value() == "水墨"
            assert await page.locator(".style-card").count() == 1
            assert await page.locator('button[data-category="手绘与绘画"]').get_attribute("aria-pressed") == "true"
            assert await page.locator('button[data-tab="camera"]').get_attribute("aria-current") == "page"
            assert "镜头语法" in await page.locator(".prose").inner_text()
        await page.locator('button[data-tab="invoke"]').click()
        await page.locator("#topic").fill("热管理")
        await page.locator("#duration").select_option("90")
        await page.locator('.reader-layouts a[data-layout-link="workbench"]').click()
        await page.wait_for_url("**/workbench.html#*")
        assert await page.locator("#topic").input_value() == "热管理"
        assert await page.locator("#duration").input_value() == "90"
        assert "90 秒" in await page.locator("#invokeText").input_value()
        await page.locator("button[data-close]").click()
        await page.locator(".layout-switch a[data-layout-link='catalog']").click()
        await page.wait_for_url("**/catalog.html#*")
        assert not await page.locator("#detailDialog").is_visible()
        assert await page.locator("#search").input_value() == "水墨"
        await page.goto((ROOT / "index.html").as_uri())
        await page.wait_for_url("**/workbench.html")
        results.append({"layoutSwitching": "all three", "retained": ["query", "category", "selected style", "tab", "topic", "duration"], "entry": "index.html"})
        await context.close()
        await browser.close()
    report = {"results": results, "errors": failures}
    (PREVIEWS / "verification.json").write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False, indent=2))
    if failures:
        raise SystemExit(1)


if __name__ == "__main__":
    asyncio.run(main())
