"""Build offline browser data from the verified upstream documentation."""

import html
from html.parser import HTMLParser
import json
import pathlib
import posixpath
import re
from urllib.parse import urlsplit

import markdown

ROOT = pathlib.Path(__file__).resolve().parent
SOURCE = ROOT / "source"
OUT = ROOT / "assets"
MANIFEST = json.loads((SOURCE / "manifest.json").read_text(encoding="utf-8"))
REV = MANIFEST["revision"]
REPO = "https://github.com/lemomo-ai/lemo-opuscar"
TAGS = {
    "p", "h1", "h2", "h3", "h4", "h5", "h6", "a", "ul", "ol", "li",
    "pre", "code", "blockquote", "strong", "em", "hr", "br", "table",
    "thead", "tbody", "tr", "th", "td", "del", "s", "sup", "sub",
}


class SafeDocument(HTMLParser):
    def __init__(self, source_path):
        super().__init__(convert_charrefs=False)
        self.source_path = source_path
        self.output = []
        self.suppressed = 0

    def link(self, value):
        url = urlsplit(value)
        if url.scheme:
            return value if url.scheme in {"http", "https"} else None
        if value.startswith("//") or "\\" in value:
            return None
        if value.startswith("#"):
            return value
        path = posixpath.normpath(posixpath.join(posixpath.dirname(self.source_path), url.path))
        if path.startswith("../") or path.startswith("/"):
            return None
        local = SOURCE.joinpath(*path.split("/"))
        suffix = ("#" + url.fragment) if url.fragment else ""
        if local.is_file():
            return "@@ROOT@@source/" + path + suffix
        return f"{REPO}/tree/{REV}/{path}" + suffix

    def handle_starttag(self, tag, attrs):
        if tag in {"script", "style", "iframe", "object"}:
            self.suppressed += 1
            return
        if self.suppressed or tag not in TAGS:
            return
        safe = []
        for key, value in attrs:
            if value is None:
                continue
            if key == "href" and tag == "a":
                value = self.link(value)
                if value:
                    safe.append(("href", value))
            elif key in {"id", "title", "colspan", "rowspan"}:
                safe.append((key, value))
            elif key == "class" and tag == "code" and re.fullmatch(r"language-[\w+-]+", value):
                safe.append((key, value))
        if tag == "a":
            safe.extend([("target", "_blank"), ("rel", "noopener noreferrer")])
        self.output.append("<" + tag + "".join(f' {k}="{html.escape(v, quote=True)}"' for k, v in safe) + ">")

    def handle_endtag(self, tag):
        if tag in {"script", "style", "iframe", "object"}:
            self.suppressed = max(0, self.suppressed - 1)
            return
        if not self.suppressed and tag in TAGS and tag not in {"br", "hr"}:
            self.output.append(f"</{tag}>")

    def handle_data(self, data):
        if not self.suppressed:
            self.output.append(html.escape(data))

    def handle_entityref(self, name):
        if not self.suppressed:
            self.output.append(f"&{name};")

    def handle_charref(self, name):
        if not self.suppressed:
            self.output.append(f"&#{name};")


def render(text, source_path):
    document = markdown.markdown(text, extensions=["tables", "fenced_code", "sane_lists", "toc"])
    parser = SafeDocument(source_path)
    parser.feed(document)
    return "".join(parser.output)


def load(path):
    return json.loads((SOURCE / path).read_text(encoding="utf-8"))


def document(path):
    text = (SOURCE / path).read_text(encoding="utf-8")
    return {"raw": text, "html": render(text, path), "path": "source/" + path}


def sections(text):
    matches = list(re.finditer(r"^## (.+)$", text, re.M))
    return [
        {"heading": match[1], "text": text[match.start():matches[i + 1].start() if i + 1 < len(matches) else len(text)]}
        for i, match in enumerate(matches)
    ]


def main():
    OUT.mkdir(exist_ok=True)
    styles = load("styleboard/catalog.json")
    films = load("styleboard/opuscar98_styles.json")
    for style in styles:
        slug = style["slug"]
        style["kind"] = "style"
        style["id"] = slug
        style["image"] = f"source/styleboard/img/{slug}_0.jpg"
        style["poster"] = f"source/styles/{slug}/poster.jpg"
        style["styleDoc"] = document(f"styles/{slug}/STYLE.md")
        style["demoDoc"] = document(f"styles/{slug}/DEMO.md")
        style["credits"] = (SOURCE / f"styles/{slug}/demo/CREDITS").read_text(encoding="utf-8")
        parts = sections(style["styleDoc"]["raw"])
        camera = [p for p in parts if re.search(r"camera|motion|native moves", p["heading"], re.I)]
        style["cameraHtml"] = render("\n\n".join(p["text"] for p in camera), f"styles/{slug}/STYLE.md")
        zh_dir = ROOT / "i18n" / slug
        demo_zh = (zh_dir / "DEMO.zh.md").read_text(encoding="utf-8")
        camera_zh = (zh_dir / "CAMERA.zh.md").read_text(encoding="utf-8")
        style["demoZh"] = {"raw": demo_zh, "html": render(demo_zh, f"styles/{slug}/DEMO.md")}
        style["cameraZhHtml"] = render(camera_zh, f"styles/{slug}/STYLE.md")
        style["ideas"] = json.loads((zh_dir / "ideas.json").read_text(encoding="utf-8"))["ideas"]
        style["sections"] = [{"heading": p["heading"]} for p in parts]
        style["search"] = " ".join([
            style["cn"], style["en"], slug, style["cat"], style["film"],
            style["line"], style["line_cn"], style["styleDoc"]["raw"], style["demoDoc"]["raw"],
            demo_zh, camera_zh, *(i["title"] + " " + i["topic"] for i in style["ideas"]),
        ]).lower()
    film_ideas = {}
    for path in sorted((ROOT / "i18n" / "films").glob("ideas-*.json")):
        film_ideas.update(json.loads(path.read_text(encoding="utf-8")))
    for film in films["films"]:
        film["kind"] = "film"
        film["id"] = str(film["no"])
        film["image"] = f"source/styleboard/img/opuscar98/{film['no']:02d}.jpg"
        film["search"] = json.dumps(film, ensure_ascii=False).lower()
        film["ideas"] = film_ideas.get(str(film["no"]), [])
    guides = {
        "start": {"title": "技能使用流程", **document("AGENTS.md")},
        "director": {"title": "导演与镜头手册", **document("DIRECTOR.md")},
        "technique": {"title": "制作与工具手册", **document("TECHNIQUE.md")},
        "my-styles": {"title": "制作自己的风格", **document("MY-STYLES.md")},
        "index": {"title": "完整风格索引", **document("styles/README.md")},
        "readme": {"title": "项目说明（中文原文）", **document("README.zh-CN.md")},
    }
    data = {
        "styles": styles,
        "films": films["films"],
        "chapters": films["chapters"],
        "guides": guides,
        "revision": REV,
        "retrievedAt": MANIFEST["retrievedAt"],
        "repository": REPO,
        "license": (SOURCE / "LICENSE").read_text(encoding="utf-8"),
    }
    problems = []
    for item in styles + films["films"]:
        if not (ROOT / item["image"]).is_file():
            problems.append(f"Missing image: {item['image']}")
        need = 5 if item["kind"] == "style" else 3
        ideas = item.get("ideas", [])
        if len(ideas) != need or any(
            not all(i.get(k) for k in ("title", "topic", "why")) or i.get("duration") not in ("30", "60", "90") for i in ideas
        ):
            problems.append(f"{item['kind']} {item['id']}: invalid starter ideas")
    for style in styles:
        if not style["demoZh"]["raw"].strip():
            problems.append(f"Style {style['slug']}: missing Chinese DEMO")
    for film in films["films"]:
        for key in ["desc_zh", "desc_en", "prompt_zh", "prompt_en", "direction_zh", "direction_en", "shots"]:
            if not film.get(key):
                problems.append(f"Film {film['no']}: missing {key}")
        if any(not s.get("zh") or not s.get("en") or s.get("sec", 0) <= 0 for s in film["shots"]):
            problems.append(f"Film {film['no']}: incomplete shot")
    assert len(styles) == 66 and len(films["films"]) == 98
    assert len({s["slug"] for s in styles}) == 66
    assert len({f["no"] for f in films["films"]}) == 98
    audit = {
        "revision": REV,
        "styles": len(styles),
        "categories": len({s["cat"] for s in styles}),
        "stylePrompts": sum(bool(s["styleDoc"]["raw"]) for s in styles),
        "styleDemoDocuments": sum(bool(s["demoDoc"]["raw"]) for s in styles),
        "films": len(films["films"]),
        "filmChinesePrompts": sum(bool(f["prompt_zh"]) for f in films["films"]),
        "filmEnglishPrompts": sum(bool(f["prompt_en"]) for f in films["films"]),
        "filmDirectorNotes": sum(bool(f["direction_zh"]) for f in films["films"]),
        "shots": sum(len(f["shots"]) for f in films["films"]),
        "localImages": len(styles) + len(films["films"]),
        "styleChineseDemoTranslations": sum(bool(s["demoZh"]["raw"].strip()) for s in styles),
        "styleChineseCameraTranslations": sum(bool(s["cameraZhHtml"].strip()) for s in styles),
        "starterIdeas": sum(len(i.get("ideas", [])) for i in styles + films["films"]),
        "errors": problems,
    }
    (OUT / "data-audit.json").write_text(json.dumps(audit, ensure_ascii=False, indent=2), encoding="utf-8")
    if problems:
        raise SystemExit("\n".join(problems))
    payload = json.dumps(data, ensure_ascii=False, separators=(",", ":")).replace("\u2028", "\\u2028").replace("\u2029", "\\u2029")
    (OUT / "content.js").write_text("window.LEMO_DATA=" + payload + ";\n", encoding="utf-8")
    print(json.dumps(audit, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
