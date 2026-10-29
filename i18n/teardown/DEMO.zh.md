# 产品拆解 — 我们的示范片

这只是众多示例之一。不要照搬它的故事、结构、镜头、道具或时间安排。

示范片：*21 Keys, Opened* 《二十一键》（38.75 s）· `teardown.mp4` · 源码见 [`demo/`](demo/)

开源分体键盘 Corne v4（foostan/crkbd，CC BY 4.0 / MIT）的一半，完全依据该项目自己的 KiCad 电路板、定位板文件、外壳 STEP、物料清单和组装指南搭建。屏幕上是中文，旁白是英文，字幕为双语（中文在上，英文在下）。屏幕上和旁白中的每一个数字都在 [`demo/FACTS.md`](demo/FACTS.md) 中。画面中不出现该项目的名称和标志（只出现在片尾卡的致谢行）；芯片和元件编号是物料清单中的元件标识，所有封装顶面都没有印字。这是一部依据该项目公开文件制作的非官方影片；Corne 项目及其作者（foostan）没有参与制作，也没有为其背书。

## 故事与结构

一句话梗概：二十一个键看起来是一个整体；打开后，它们是公开文件中画出的六个层，一直深入到芯片、灯和插座；重新合上后，它身上的每一个尺寸都是公开发布的数字。

结构：触感（贴着键帽掠过的微距镜头，一次真实的按键）→ 打开（一圈环绕，各层从顶层开始升起，按键呈波浪升起，六个标签）→ 内部（钻进电路板与外壳之间的空间，仰视电路板背面：RP2040、闪存、一颗反贴的 LED；然后穿过定位板升到轴体引脚）→ 重新合上（快速拉镜，从底层开始闭合，按键带着键程落下）→ 物体上的数字（键距、宽度、深度、高度以尺寸线标出）→ 片尾卡。

用到的原生手法：开场的*一次真实运动*；分离时的*波浪升起*；三个停留点的*深入缝隙*和*落在零件上的引线*；在 LED 处的*内部亮灯*；片尾卡之前的*在实物上画出尺寸*。

## 镜头

一个连续的镜头。时间单位为秒；96 BPM，一小节 = 2.5 s。

| # | 时间 | 镜头 | 运镜 | 原生手法 / 备注 |
|---|---|---|---|---|
| 1 | 0.0–2.5 | 键帽顶面，前景是橙色的 1.5u 键，一道柔光滑过 | 贴面掠过的微距移动镜头，视点离地面 33 mm，镜头视角 30° | 钩子：材质，一道扫光 |
| 2 | 2.5–4.4 | 橙色键在 3.13 处走完 4 mm 键程并回弹；拉起到看见整个半边 | 移动镜头 → 3/4 主视角，330 mm | 一次真实的按键 |
| 3 | 4.4–5.0 | 停留 | 环绕继续 | 静默 1（房间底噪，一声上升的吸气声） |
| 4 | 5.0–7.5 | 按键从左后角开始呈波浪升起，然后是轴体、定位板、电路板、铜柱、外壳；脚垫留在地面上 | 环绕 −31° → −9°，拉远到 432 mm，模型向左滑（视图偏移 170 px） | 波浪升起；重击在 5.0 |
| 5 | 6.9–11.9 | 六个标签沿右侧一列依次画出：键帽 1u ×20 · 1.5u ×1，机械轴体 十字轴 ×21，定位板 FR-4 1.6 mm，电路板 双层 1.6 mm，铜柱 M2 × 7.5 mm ×4，外壳 底厚 2.0 mm | 缓慢环绕到 +18°；在 10.0 时电路板及其以上的所有层再升高 30 mm | 9.75 处为标志性画面（海报） |
| 6 | 12.5–15.0 | 向下越过定位板和电路板边缘进入缝隙；外壳内部亮起 | 下潜，452 mm → 30 mm，向上仰起 | 下潜的嗖声提前 0.35 s 开始 |
| 7 | 15.0–18.1 | 电路板背面：RP2040（7 × 7 mm）、闪存（16 MB）、晶振、0402 元件、插座，全部位于封装焊盘的位置 | 停留的微距镜头，视点位于电路板下方 24 mm，缓慢漂移 | 引线落在芯片上 |
| 8 | 18.1–21.3 | 滑到 LED10：反贴的 LED；顶面的灯亮起 | 微距横移 9 mm | 内部亮灯 |
| 9 | 21.3–22.3 | 从电路板下方出来，向上越过定位板 | 穿过层叠升起 | 转场 |
| 10 | 22.3–25.0 | 从下方看拇指排的轴体：引脚位于热插拔孔上方；标签 热插拔 ×21 | 在引脚高度停留的微距镜头，轴体再抬高 16 mm | 静默 2 在 24.6–25.0 |
| 11 | 25.0–27.6 | 快速拉镜；外壳升起，接着是电路板、定位板、轴体；按键最后以波浪落下，每个都走完键程 | 拉到 380 mm，3/4 高视角 | 最响的时刻（26.6） |
| 12 | 27.5–33.7 | 闭合后的半边键盘上的尺寸线：键距 19.05 mm、138.4 mm、97.6 mm、11.1 mm | 高 3/4 视角漂移，方位角 20° → 40°，374 → 336 mm | 在实物上画出尺寸 |
| 13 | 33.75–38.75 | 左侧是片尾卡，右侧是旋转的键盘 | 漂移，方位角 40° → 59°，视图偏移 −230 px | |

## 声音结构

96 BPM，4/4 拍，D 调（每小节 Dm9 – B♭maj7 – F – C/E），片尾卡上转为 D 大调。每一记重击都落在 `src/timeline.js` 的拍点或半拍上。

| 段落 | 时间 | 音色 | 备注 |
|---|---|---|---|
| 触感 | 0–4.4 | 八分音符的马林巴（轻柔）、弓擦颤音琴、房间底噪 | 按键声：轴体咔嗒 + 低沉的"咚"声 + 回弹的咔哒声 |
| 静默 1 | 4.4–5.0 | 房间底噪，一声滤波噪声的吸气声 | |
| 打开 | 5.0–12.5 | 十六分音符的马林巴、电贝斯、第 1 和第 3 拍的合成器底鼓、第 2 和第 4 拍的响棒、十六分音符的闭镲 | 波浪中 21 声塑料滴答声，每一层一声嗖响，铜柱一声金属铃音，外壳一声闷响，每个标签一声滴答 |
| 内部 | 12.5–24.4 | 弓擦颤音琴和弦、玻璃音色动机、八分音符的踏板踩镲、每小节一次超低音底鼓 | 每个停留点一声钟琴叮响（A5、D6、E6），亮灯时一段琶音 |
| 静默 2 | 24.6–25.0 | 只有房间底噪 | |
| 闭合 | 25.0–33.75 | 律动回归，四四拍底鼓 | 21 声按键落地（咔哒 + 咔嗒），电路板轻敲声，外壳闷响；每条尺寸线一声笔划嘶声 |
| 片尾卡 | 33.75–38.75 | D 大调马林巴滚奏，弓擦颤音琴 D–F♯–A，贝斯 D，钟琴应答 | 长尾音 |

混音（`demo/mix.py`）：人声经压缩，说话时比音乐高约 8–10 dB（音乐按人声包络闪避 55 %），音乐在 44 Hz 高通，拟音在 36 Hz 高通；最响的时刻依次为：按键落地（26.6）、片尾卡、拉镜（25.0）、打开时的重击（5.0）。影片测得综合响度 −14.2 LUFS，LRA 4.9 LU，真峰值约 −1 dBTP；20–60 Hz 比全频段低 12.5 dB。

## 色板与道具

- 背景 #34363a → #0d0e10；文字墨色 #f1efe9；强调色 #ff6b3d（标签的序号、尺寸线、1.5u 键、轴心）。
- 键帽：米白 #d9d4c9，外侧一列和拇指键为灰色 #686c73，1.5u 拇指键为橙色；等高的雕刻键帽轮廓，用代码绘制。轴体：通用十字轴（底壳 14 mm，上盖 15.6 mm），用代码绘制。定位板为黑色 FR-4，带暖色的芯材边缘；电路板为绿色阻焊层、金色焊盘；黄铜六角铜柱；深色螺丝；阳极氧化质感的外壳（文件中没有指明材质；这种质感是渲染上的选择）。
- 旁白：Kokoro `am_michael`，语速 0.95。

## 片尾卡

二十一键（Noto Sans SC 500），*21 Keys, Opened*（Inter Light），`产品拆解 · EXPLODED TEARDOWN`，`CAD：foostan/crkbd · CC BY 4.0`，`LemoLab × Claude Opus 5.5`，一条橙色细线；闭合的键盘在右侧漂移。5 s。"LemoLab × Claude Opus 5.5"署名只属于本库的示范片；用户的影片不带 LemoLab 署名，也不要复制这张卡片。

## 构建说明

```
demo/
  build.sh          one command: voice → speech check → cues → events → video → mix → master → .srt → checks → poster
  index.html        WebGL canvas + 2D marks canvas, fonts
  src/timeline.js   the single timeline: beats, layer timings, gaps, narration, label windows, camera keys
  src/main.js       scene, layers, explode/gap, camera (monotone keys), lights, render(t), window.EV
  src/parts.js      keycap, switch, outline extrusion, spacer, screw geometry
  src/pcbtex.js     board textures painted from the KiCad data
  src/comps.js      back-side parts at footprint positions
  src/overlay.js    labels, dimensions, subtitles, end card, readcheck texts, subtitle width check
  mix.py            score (sampler), foley (synthesised), voice, mix → out/mix.wav + out/stems/
  tools/            extract_pcb.py, kicad_geom.py, sexp.py, step2mesh.mjs, fetch_cad.sh (data); fetch_fonts.py;
                    export.mjs (voice lines, cues, timeline.json); subcheck.mjs, motioncheck.py (checks)
  data/             pcb.json (left half, extracted), case.bin (case mesh)
  FACTS.md, CREDITS, stills/styleframe.jpg
```

- `sh demo/build.sh` 在 Apple 芯片上约需 3 分钟（画面部分用 4 个工作进程约 60 s）。在全新克隆中，它会先重建 git 不包含的内容：从固定提交的 CAD 生成 `data/case.bin` 和 `data/pcb.json`（需要联网，并用 npm 临时安装 occt-import-js）、从 Google Fonts 获取字体，以及任何缺失的库资源包（HDRI、Kokoro、vcsl / freepats / vsco2ce 采样）。`FETCH=1` 会强制重新获取 CAD 和字体。
- 它运行的检查：用 `small.en` 运行 `asr_check.py`（有两句采用 Whisper 的写法："RP 2040"、"19.05 millimeters"），用真实字体检查字幕单行宽度（最宽 552 px，上限 1500），`readcheck.mjs`（全部 19 条文字通过），`motioncheck.py`（没有单帧黑块；每秒运动量）。
- 示范片特有的坑：v4 的电路板文件是一张带分离耳的拼板，所以电路板轮廓采用 3x6 定位板轮廓向内缩 0.4 mm（定位板的 21 个开孔与轴体封装偏差 0.4 mm，经测量后已校正）；外壳 STEP 是 y 轴朝上，必须翻转并平移到电路板上（偏移量在 `tools/step2mesh.mjs` 中），并用四个螺丝孔核对；提取时跳过项目标志的封装；Kokoro 人声把"RP2040"读得很糟，所以朗读文本写成"R P twenty forty"。
