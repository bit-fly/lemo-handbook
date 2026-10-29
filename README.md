# Lemo-Opuscar 本地手册

[Lemo-Opuscar](https://github.com/lemomo-ai/lemo-opuscar) 视频风格技能的离线中文使用手册，基于官方画廊与风格索引整理，不需要服务器或安装即可阅读。

## 打开方式

下载或克隆整个仓库后，双击 `index.html`。必须保留完整目录结构，`pages\` 与 `assets\` 需与 `index.html` 放在一起。

## 内容

- **66 个技能风格**：官方完整 STYLE.md 风格提示词、DEMO.md、样片署名，以及“镜头语法”和“Demo 与导演”的中文译文（可切换英文原文）。
- **OPUSCAR 98 的 98 个影片段落**：官方中英文描述、风格提示词、302 个镜头拆解和导演编排。
- **164 张画廊图片**，按分类 / 年代筛选，支持全文搜索。
- **调用模板**：填写主题和时长后复制给智能体；每个风格附 5 个、每个影片段落附 3 个新手示例选题，点击即可填入。
- **三种阅读方式**：阅读工作台（默认）、图像目录、放映阅读室，切换时保留当前搜索、分类、选中项和栏目。

中文译文、示例选题、调用模板和中文导读为整理编写，以官方英文原文为准。

## 目录

| 路径 | 说明 |
|---|---|
| `index.html` | 入口，跳转到阅读工作台 |
| `pages/` | 三种阅读界面 |
| `assets/` | 样式、脚本和生成的数据包 `content.js` |
| `source/` | 固定版本的官方原始资料快照与校验清单 |
| `i18n/` | 中文译文与示例选题 |
| `collect_sources.py` | 下载并校验官方资料 |
| `build_handbook.py` | 生成 `assets/content.js` |
| `verify_handbook.py` | Playwright 离线回归测试 |

## 重新构建

```powershell
python -m venv .venv
.\.venv\Scripts\pip install -r requirements.txt
.\.venv\Scripts\python build_handbook.py
python verify_handbook.py   # 需要 Python 版 Playwright
```

## 来源与授权

官方资料来自 LemoLab 的 [lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar)，固定版本 `f17136060781a0068a7951245a3aa7835a7230de`。本仓库为独立整理的阅读界面，非官方发布。

- 代码与文档：MIT License（原文见 `source/LICENSE`）。
- 样片静帧：© LemoLab，按 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 授权；本仓库未修改原图。
- 第三方素材沿用各自授权，见各风格的 `source/styles/<slug>/demo/CREDITS`。
- 未包含视频与音频。

完整署名说明见 [`ATTRIBUTION.txt`](ATTRIBUTION.txt)。
