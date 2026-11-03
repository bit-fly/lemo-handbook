# Lemo-Opuscar 本地手册

[Lemo-Opuscar](https://github.com/lemomo-ai/lemo-opuscar) 视频风格技能的离线中文使用手册。

## 打开方式

下载并解压整个文件夹后，直接双击 `index.html` 即可在浏览器中运行，无需安装、无需启动任何后台服务器。所有数据和图片都在本地，离线可用；只有点击图片跳转原视频时需要联网。请保留 `pages`、`assets` 和 `source` 等完整目录，不要单独移动 HTML 文件。

手机窄屏会自动使用单列浏览和换行的详情栏目；电脑上保留图像目录、阅读工作台和放映阅读室原有布局。调整窗口或旋转屏幕后会自动适配，无需手动选择手机版。

在手机上使用时，把完整文件夹复制到手机，用浏览器打开其中的 `index.html`；聊天软件或文件管理器的单文件预览可能不支持加载本地脚本。

## 内容与操作

- 66 个技能风格：完整风格提示词、镜头语法、Demo 与导演说明，后两个栏目可切换中文译文和英文原文。
- OPUSCAR 98 的 98 个影片段落：双语描述、提示词、302 个镜头和导演编排。
- 点击目录、详情、放映阅读室中的图片，可在新窗口观看官方示例视频，需要联网；点击图片下方的文字可阅读手册。影片案例链接到官方 OPUSCAR 98 合集的对应时间段，不是版权电影原片。
- 点击“收藏”加入“我的收藏”页，再次点击可取消。收藏保存在当前浏览器，不上传、不跨设备同步；清除浏览器数据会移除收藏。离线文件模式下请使用页面内的导航切换，以传递收藏列表。浏览器禁用存储时会显示提示，此时不保证关闭页面后仍保留收藏。
- 调用模板附 624 个新手示例选题，点击即填入主题和建议时长。

中文译文、选题、调用模板和导读为整理编写，以官方原文为准。

## 构建与检查

```powershell
python -m venv .venv
.\.venv\Scripts\pip install -r requirements.txt
.\.venv\Scripts\python build_handbook.py
python verify_handbook.py
python verify_mobile.py
```

阅读无需安装依赖。构建需要 Python-Markdown；检查需要 Python 版 Playwright 及 Chromium。`source` 保留官方资料，`i18n` 保存译文和示例选题，`assets/content.js` 由构建脚本生成。

## 来源与授权

来源为 LemoLab 的 [lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar)，固定版本 `f17136060781a0068a7951245a3aa7835a7230de`。本手册为独立整理的阅读界面，非官方发布。

- 代码与文档：MIT，见 `source/LICENSE`。
- 原始样片静帧：© LemoLab，[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)，图片字节未修改。
- 第三方素材沿用各自授权，详见各风格的 `demo/CREDITS`。
- 未包含视频或音频文件，视频仅通过外链访问。

完整署名说明见 [ATTRIBUTION.txt](ATTRIBUTION.txt)。
