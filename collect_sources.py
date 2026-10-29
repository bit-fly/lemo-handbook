"""Download a pinned, licensed documentation snapshot, without demo code or video."""

import concurrent.futures
import hashlib
import json
import pathlib
import time
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent
SOURCE = ROOT / "source"
TREE = json.loads((SOURCE / "tree.json").read_text(encoding="utf-8-sig"))
REV = TREE["sha"]
BASE = f"https://raw.githubusercontent.com/lemomo-ai/lemo-opuscar/{REV}/"
GUIDES = {
    "LICENSE", "AGENTS.md", "DIRECTOR.md", "TECHNIQUE.md", "MY-STYLES.md",
    "README.md", "README.zh-CN.md", "styles/README.md",
    "styleboard/catalog.json", "styleboard/opuscar98_styles.json",
    "styleboard/index.html", "styleboard/opuscar98.html",
    "styleboard/opuscar98/index.html",
}


def wanted(path):
    parts = path.split("/")
    return (
        path in GUIDES
        or (len(parts) == 3 and parts[0] == "styles"
            and parts[1] != "_template"
            and parts[2] in {"STYLE.md", "DEMO.md", "style.json", "poster.jpg"})
        or path.startswith("styleboard/img/")
        or path.startswith("docs/frames/")
        or (parts[0] == "styles" and any(term in parts[-1].lower() for term in ("credit", "license", "notice")))
    )


def download(entry):
    path = entry["path"]
    target = SOURCE.joinpath(*path.split("/"))
    target.parent.mkdir(parents=True, exist_ok=True)
    if target.exists() and target.stat().st_size == entry["size"]:
        data = target.read_bytes()
        blob = hashlib.sha1(f"blob {len(data)}\0".encode() + data).hexdigest()
        if blob == entry["sha"]:
            return path
    last_error = None
    for attempt in range(3):
        try:
            request = urllib.request.Request(BASE + path, headers={"User-Agent": "Local-Lemo-Handbook"})
            with urllib.request.urlopen(request, timeout=60) as response:
                data = response.read()
            blob = hashlib.sha1(f"blob {len(data)}\0".encode() + data).hexdigest()
            if blob != entry["sha"]:
                raise ValueError(f"Git blob checksum mismatch for {path}")
            target.write_bytes(data)
            return path
        except (OSError, ValueError) as error:
            last_error = error
            time.sleep(attempt + 1)
    raise RuntimeError(f"Cannot download {path}: {last_error}")


def main():
    entries = [e for e in TREE["tree"] if e["type"] == "blob" and wanted(e["path"])]
    print(f"Snapshot {REV}: {len(entries)} files, {sum(e['size'] for e in entries):,} bytes", flush=True)
    failures = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as pool:
        jobs = {pool.submit(download, entry): entry["path"] for entry in entries}
        for count, future in enumerate(concurrent.futures.as_completed(jobs), 1):
            try:
                future.result()
            except Exception as error:
                failures.append(str(error))
                print(str(error), flush=True)
            if count % 50 == 0:
                print(f"{count}/{len(entries)}", flush=True)
    manifest = {
        "repository": "https://github.com/lemomo-ai/lemo-opuscar",
        "revision": REV,
        "retrievedAt": time.strftime("%Y-%m-%dT%H:%M:%S%z"),
        "license": "Code/docs MIT; demo stills CC BY 4.0, LemoLab; third-party credits retain original licenses",
        "files": [{"path": e["path"], "gitBlob": e["sha"], "bytes": e["size"]} for e in entries],
        "errors": failures,
    }
    (SOURCE / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    if failures:
        raise SystemExit(f"{len(failures)} downloads failed; see source/manifest.json")
    print("Source snapshot complete.", flush=True)


if __name__ == "__main__":
    main()
