"""Verify responsive layouts, original-video links and persistent favorites."""
import json
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent


def main():
    errors = []
    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context()
        page = context.new_page()
        page.on("pageerror", lambda error: errors.append(str(error)))
        for width in [320, 360, 390, 768, 1440]:
            page.set_viewport_size({"width": width, "height": 844})
            for layout in ["workbench", "catalog", "cinema", "favorites"]:
                page.goto((ROOT / "pages" / f"{layout}.html").as_uri())
                page.wait_for_function("document.querySelector('#snapshotDate').textContent.length > 0")
                assert page.evaluate("document.documentElement.scrollWidth <= innerWidth"), (layout, width)
                if layout == "favorites":
                    assert page.locator("#empty").is_visible()
                    continue
                if layout == "cinema":
                    page.locator('button[data-mode="styles"]').click()
                page.locator('.style-card [data-open="ink-wash"]').click()
                for tab in ["camera", "demo", "invoke", "overview"]:
                    button = page.locator(f'button[data-tab="{tab}"]').first
                    button.click()
                    box = button.bounding_box()
                    assert box["x"] >= 0 and box["x"] + box["width"] <= width, (layout, width, tab)
                assert page.locator(".video-image").get_attribute("href").endswith("/ink-wash.mp4")
                if width == 390:
                    page.screenshot(path=str(ROOT / "previews" / f"responsive-{layout}.png"))
                page.locator("[data-close]").click()
        page.set_viewport_size({"width": 390, "height": 844})
        page.goto((ROOT / "pages" / "catalog.html").as_uri())
        assert page.locator(".style-card .frame[href]").count() == 66
        page.locator('[data-favorite="style:ink-wash"]').click()
        page.locator('button[data-mode="films"]').click()
        assert page.locator(".style-card .frame[href]").count() == 98
        assert "#t=" in page.locator(".style-card .frame").first.get_attribute("href")
        page.locator('[data-favorite="film:1"]').click()
        for target in ["workbench", "cinema", "favorites"]:
            page.locator(f'.layout-switch [data-layout-link="{target}"]').click()
            page.wait_for_url(f"**/{target}.html#*")
        assert page.locator(".style-card").count() == 2
        page.reload()
        assert page.locator(".style-card").count() == 2
        page.locator('.style-card [data-open="1"]').click()
        page.locator('.reader-actions [data-favorite="film:1"]').click()
        page.locator("[data-close]").click()
        assert page.locator(".style-card").count() == 1
        page.locator('.style-card [data-favorite="style:ink-wash"]').click()
        assert page.locator("#empty").is_visible()
        page.reload()
        assert page.locator("#empty").is_visible()
        page.goto((ROOT / "pages" / "workbench.html").as_uri())
        page.set_viewport_size({"width": 1440, "height": 900})
        page.reload()
        assert page.locator("#inlineReader").is_visible()
        page.set_viewport_size({"width": 390, "height": 844})
        assert page.locator("#inlineReader").is_hidden()
        assert not errors, errors
        browser.close()
    print(json.dumps({"widths": [320, 360, 390, 768, 1440], "layouts": 4,
                      "videos": 164, "favorites": "passed", "errors": errors}))


if __name__ == "__main__":
    main()
