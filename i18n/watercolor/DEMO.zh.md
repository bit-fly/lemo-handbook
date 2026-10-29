# 水彩笔刷 — 我们的示范片

这只是众多示例之一。不要照搬它的故事、结构、镜头、道具或时间安排。

示范片：*Follow the Rain*（追随雨水）（113.6 s，1920×1080，60 fps）· `watercolor.mp4` · 源码见 [`demo/`](demo/) · 引擎：Canvas2D 笔触引擎（`engine.js` 中的 `mk`/`drawS`，可变宽度的色带 + 断续的笔毛轨迹）、程序化植物生成器、逐株植物的精灵图缓存、无头 Chrome 逐帧截取。


这部示范片是一本博物学家的野外笔记：沿着一条降雨梯度横向穿越澳大利亚大地的一次长途漫步，配有手写笔记和一个安静的降雨量计，随后拉镜到一幅手绘地图，地图再穿越地质深时。

## 故事与结构

这部片子看起来就像一本手绘野外笔记正在你眼前被画出来。一切都在同一张温暖、带纤维的纸上（`#f1e9da`）。每一样东西——一丛三齿稃草丘、一棵桉树、一只袋鼠、一朵云、地平线、一段海岸线——都由**一笔一笔独立的笔触**构成：以部分不透明度铺下的一条可变宽度色带，再加上 3–9 条会断成虚线的细**笔毛轨迹**（干笔的*飞白*）。笔触彼此重叠，交叉处颜色加深，就像真实的透明颜料。没有任何矢量描边；树干上那道较深的边缘笔触（`edgeOf`）是唯一的"线"。

物体进入画面时会**自己被画出来**：一笔接一笔，先树干，再枝条，最后树叶。画完后，植物被缓存为精灵图，之后只做摇曳。整片风景是一个连续的长幅手绘世界，镜头从中横穿而过，分为四个视差层的晕染和植物；同时一个**注释层**（手写的 Caveat 标签配笔画引线、等宽字体的降雨量计、Cormorant Garamond 的生物群落标题）解释我们所看到的内容。影片结尾用纸色的雾气把风景洗去，再把整片大陆画成一幅手绘地图。

基调：平静、好奇、精确。这是一部纪录片，不是童话：数字是真实的，标签用拉丁学名，色板跟随数据。

示范片如何运用这一媒介：

| 媒介本色 | 在故事中的用法 |
|---|---|
| **沿一条梯度漫步** | 把一个可测量的量映射到水平距离上，然后沿它走过去：降雨量（示范片）、登山时的海拔、沿礁壁下潜的深度、与市中心的距离、从赤道到极地的纬度、沿河流的时间。镜头运动*本身*就是论证。 |
| **以绘制作为揭示** | 每个新区域在到达时真的被一笔笔画出来——观众看着一种新的生命一笔一笔出现。在高潮区域（雨林）用 `burst` 让整个区域一下子迸发出来。 |
| **区域色板** | 颜色承载数据：赭红色荒漠 → 鼠尾草绿的金合欢灌丛 → 稻草色林地 → 蓝灰色湿润森林 → 深绿色雨林。天空、地面、山丘和远处的树都按区域混合。 |
| **标本 + 注释** | 每个区域一个主角标本，用手写标签配引线标注（`spinifex · Triodia`、`mountain ash · Eucalyptus regnans`）。每个区域一只小动物，带来生气和尺度感（袋鼠、虎皮鹦鹉、考拉、鹤鸵，以及一个用来比例参照的小人）。 |
| **每个区域一个事件** | 每个区域安排一个小小的示范性事件：雨水顺着金合欢枝条流到根部、一道火线与树干上的不定芽再生、俯仰镜头向上测量一棵 100 m 的大树、一张雨林分层示意图。 |
| **拉镜到地图** | 漫步结束后，把风景洗去并画出地图；在地图上画出"我们走过的路"。地图随后可以在**时间**中移动（50 Ma → 今天），把一次空间上的漫步变成一次历史上的漫步。 |

**故事形态（已在示范片中验证）：** 空白冷纸 → 刷出地平线 → 朱红色太阳像印章一样"盖"上 → 标题 → 以笔刷边缘擦除揭开风景 → 5 个区域（每个约 10–18 s），降雨量计随之上升 → 雾气把一切洗回白纸 → 画出海岸线 → 填充地图 → "我们走过的路"箭头 → 倒回 5000 万年前（一片绿色）→ 慢慢漂移并干燥回到今天（干燥的腹地、绿色的边缘）→ 片尾标题叠在淡化的地图上 + 演职员表。

改编一个题材：选定梯度；列出 4–6 个区域，并在每条边界处给出一个真实数值；给每个区域一个色板、一个主角标本、一只小动物和一个事件；以一幅地图或示意图收尾，重新框定这次漫步（先在空间上，再在时间上）。

## 镜头

| 节拍 | 镜头 |
|---|---|
| 标题（0–10.9 s） | 固定在空白纸上；地平线被刷过画面，太阳盖印（1.6 s），标题擦入。 |
| 漫步（10.3–73 s） | 一个连续的横向移动镜头：`camXf = monotone([[0,700],[10.3,700],[16,1400],…,[66,9300],[73,9800]])`，单位为世界像素；在区域之间加速，在事件（山火、王桉）处放慢。四个视差层 + 视差 0.2 的云层。 |
| 大树 | 一个垂直俯仰 `camYf`：在 54.2–57.8 s 内沿王桉向上 980 px，同时画出标注"≈ 100 m"的尺寸线，然后在 58.4–60.9 s 回落。 |
| 雾气 | 70.3–73.6 s：两层波浪状的纸色图层从底部升起，擦除整个世界（没有剪切）。 |
| 地图 | 固定，大陆居中（等距圆柱投影，cos 26° 校正，24 px/°），在时间倒回时有 90 px 的轻微垂直沉降。 |
| 结尾 | 地图淡至 30 %，标题区块重新出现在其上。 |

全片没有任何剪切：整部影片就是一张手绘的纸。

- **绘制进入**：`plantP`——一株植物的进度为 `(REV(t) − screenX) / (span × max(.55, parallax))`。揭示阶段（10.2–13.4 s）`REV` 从 −300 扫到 1650 px；之后所有从右侧进入的东西都在约 380 px 的行进距离内画完。`drawList` 按顺序绘制 N 笔，每笔占进度的 `clamp(4/N, .12, .5)`，因此树干最先出现，叶丛最后出现。
- **摇曳**：水平错切 `sway × (sin(1.15t+φ) + .4 sin(2.7t+2φ))`，树木为 0.006，草和蕨类为 0.01–0.03。
- **笔刷边缘擦除**：整片风景由一条垂直的波浪形裁剪揭开（`drawStripAt(..., reveal)`），地平线由从左到右的 `drawS` 进度画出，海岸线逐段画出，标签由从左向右打开的矩形裁剪显现（`hand`），引线通过增加点数生长（`leader`）。
- **与音乐锁定的动画**：袋鼠的跳跃按配乐的节拍网格定相（`BEAT0 = 11.865`，`BEAT = .5805` s，每 2 拍跳一次），所以每次落地都踩在拍点上。
- **事件**：雨滴落在金合欢枝梢上并沿茎滑下（14 滴，间隔 0.36 s），同时一片湿痕和一条虚线主根向下蔓延；火线在 3 s 内从世界坐标 5650 扫到 6900 px，树木交叉淡变为 `#2a2320` 的烧焦精灵图，一条灰烬带让地面变暗，然后绿色的不定芽用 `drawList` 重新画回来；雨林的 `burst` 在 0.9 s 内画出所有可见的雨林植物。
- **地图**：降雨场每帧根据站点数值乘以时间系数（`mapTau`）重新计算，所以 50 Ma → 今天是一个连续的"变干"过程，配合放射状的填充揭示；在变干过程中，500–900 mm 降雨带里有山火闪烁。
- 缓动函数：`engine.js` 中的 `ss`、`eio`、`eo`、`ei`；一切都是 `t` 的纯函数。

## 声音结构

- **人声**：Kokoro（`kokoro-onnx`，模型 `core/tts/kokoro-v1.0.onnx`），音色 **`af_heart`**，**语速 0.93**，`lang en-us`——温暖、从容的纪录片式朗读。按峰值的 1 % 修剪，头部保留 10 ms、尾部保留 100 ms。数字在 TTS 文本中用英文单词拼写（"two hundred and fifty millimetres"），在字幕中写成阿拉伯数字。共 13 句，故事的每个节拍一句，每句 1.7–7.4 s。
- **校验**：`asr.py` 用 faster-whisper `base.en` 转写每一句；13 句全部回读正确（只有拼写差异："millimeters"、"Red Center"、"1%"）。
- **音乐**：Scott Buckley — *Wildflowers*（CC BY 4.0）。322 s 的曲目通过**一次与节拍对齐的跳接**剪成 117.8 s：`analyze.py`（librosa 节拍跟踪，103.4 BPM，502 拍；色度 + MFCC 的节拍同步自相似矩阵）→ `jump.py` 对跳接结果落在 100–128 s 的跳接对排序 → 选中第 85 拍（61.23 s）→ 第 437 拍（265.61 s），色度相似度 0.915，4 拍相位对齐，在拍点前 60 ms 开始一个 0.18 s 的等功率交叉淡化（`edit.py`）。画面中的节拍常量来自同一个 `wf_beats.json`。
- **音效**：全部在 `mix.py` 中合成（numpy/scipy）：纸面笔刷沙沙声（带通噪声、9 Hz 颤音、声像扫动）、太阳盖印的一声闷响、荒漠风声、46 声虎皮鹦鹉鸣叫、14 声与金合欢雨滴同步的雨滴叮咚声、山火轰鸣 + 噼啪声、渐强的雨声、两声东部鞭鸟的鸣叫、一次雾气涌起声，以及地图上轻微的山火噼啪声。使用由滤波噪声 IR 生成的短卷积混响。
- **混音**（`mix.py`）：人声 → 48 kHz，90 Hz 高通，RMS 压缩器（−24 dB，3:1）。**Kokoro 的峰值与 RMS 之差约为 17 dB**，所以在电平匹配*之前*先运行一个 **5 ms 前视峰值限制器**（上限 = 语音 RMS + 11 dB）；然后在说话期间令人声 RMS = 音乐 RMS + 8 dB；音乐在人声下以 0.3 s 的平滑包络闪避 ×0.62（约 −4 dB）；混音归一化到 0.89 峰值。最终响度在 `mux.sh` 中处理：单遍 `loudnorm=I=-14:TP=-1` → −14.2 LUFS，−1.0 dBFS 峰值。

## 色板与道具

**纸张**：`demo/paper.jpg`，由 `paper.py` 生成——底色 `#f1e9da`，三个倍频的平滑噪声（±3.5 %），2,600 根短弯曲纤维（±3.5 % 明/暗），细颗粒，5 % 暗角。每帧最先绘制它，它也是擦除风景的雾气（`drawMist` 用一条波浪形上升边缘裁剪 `PAPER_IMG`）。

**墨色**：`INK #2b2520`（线条、文字、树干边缘），`INK2 #3d3129`（枝条、茎）。强调色：朱红色太阳 `#cf4f2c`，带 7 道水平的 `#b8401f` 干笔横纹（看起来像一枚印章）；雨水蓝 `#3f7fa8`（雨滴、雨量计填充）。

**区域色板**（`scene.js` 中的 `ZCOL`，通过 `mixZone`/`zoneGrad` 按镜头位置混合）：

| 区域 | 天空 | 远山 | 中景地面 | 主地面 |
|---|---|---|---|---|
| desert（荒漠） | `#f0d6b8` | `#dcae8e` | `#dba47e` | `#dda27a` |
| mulga（金合欢灌丛） | `#efdcc6` | `#c89b8c` | `#d0ae80` | `#dbb584` |
| wood（林地） | `#ece2cd` | `#bdb99c` | `#cbc28f` | `#dccb92` |
| wet（湿润森林） | `#dfe3dc` | `#9fb1b8` | `#98aa8a` | `#a7b48e` |
| rain（雨林） | `#dbe3d8` | `#9ab19f` | `#6f8d6d` | `#6e8b69` |

植物配色集在 `plants.js` 的 `COL` 中（straw、mulga、salt、gum、gold、ash、fern、rain、rainLite、palm、wattle）。地图降雨色阶（`main.js` 中的 `MSTOP`）：150 mm `#cf7c4f` → 300 `#cda35f` → 650 `#b3b07a` → 1150 `#7f9a6c` → 2000 `#46705a` → 4000 `#2f5a45`，在地图上量化为 5 个色带。

**笔触材质**（`engine.js`）：一条色带，其宽度遵循一条轮廓（`brush`、`leaf`、`even`、`tip`、`trunk`），带 ±22 % 的值噪声粗糙度，以 `a × rib` 填充（有笔毛时约 0.57，所以主体是一层薄薄的晕染），外加 `nb` 条不透明度 30–85 % 的笔毛轨迹，每条有随机的虚线模式（18–90 px 的长段，间隙最大 w/2）和随机的提前结束——这就是飞白。晕染（`washPoly`）是同一多边形以抖动顶点、`a/3 × 1.6` 的不透明度绘制 3 遍，因此几遍不一致的地方边缘会变深，就像水彩积色的边缘。

**图层**（`LAY`）：远景（视差 0.25，地面 y 640，缩放 0.38，透明度 0.5）· 中景（0.55，690，0.62，0.78）· 主景（1.0，745，1.0，1.0）· 前景（1.55，1115，1.75，0.95）。越远越小、越淡、饱和度越低；在湿润区域，图层之间有两条雾带（`mistBand`）。

**字体**：Cormorant Garamond（生物群落标题 500 52 px，副标题斜体 500 36 px，片名斜体 124 px，地图年份 150 px / "today" 斜体 104 px），Caveat 500/600（手写笔记，26–42 px，在一层纸色 12 px 阴影光晕上绘制两遍），IBM Plex Mono 400（`ANNUAL RAINFALL`、`01 / 05` 之类的标签，3 px 字间距），Noto Serif SC 400（中文字幕行）。通过 `fetch_fonts.mjs` 自托管在 `demo/fonts/` 中；Noto Serif SC **只子集化为 `scene.js` + `main.js` 中出现的 CJK 字符**。

## 标题、字幕与片尾卡

- **烧录的双语字幕**，底部居中：英文用 Cormorant Garamond 斜体 36 px（在 1400 px 处自动换成两行均衡的文字，基线 1000 或 962/1000）+ 中文 Noto Serif SC 24 px，基线 1042，`INK` 78 %，两者都叠在 18 px 纸色阴影光晕之上，绘制两遍以加深浓度。显示时间从 `start − .15` 到 `start + dur + .45`，淡入/淡出 0.25/0.35 s。同一张表（`scene.js` 中的 `VO`）同时驱动混音和 `watercolor.srt`。
- **生物群落卡片**（左上）：一小块手绘色样，等宽字体的 `01 / 05`，Cormorant 52 px 的名称，斜体副标题。**雨量计**（右上）：`ANNUAL RAINFALL`，数值用 Cormorant 54 px（`< 250 mm`、`≈ 1,600 mm`），一条 100–4,000 mm 的对数刻度条，带一个蓝色水滴标记。
- **片名**："Follow the Rain"，Cormorant 斜体 124 px 擦入，接着是加宽字距的大写副标题和中文行。
- **片尾卡**：标题区块叠在淡化的地图上 + IBM Plex Mono 15 px 的演职员表（音乐及其许可、人声、海岸线来源、"rainfall bands are schematic"），下面是署名 **"LemoLab × Claude Opus 5.5"**，Cormorant Garamond 斜体 30 px，`INK` 85 %，居中于 y 1010，与演职员表一同淡入（105–106.2 s）——用衬线斜体，让它读起来像影片的签名，而不是又一条素材致谢。不要让它压到地图（塔斯马尼亚位于 y ≈ 845–915）。这个署名只属于本库的示范片：用户的影片不带 LemoLab 署名，也不要复制这张片尾卡。

## 我们踩过的坑（示范片记录）

- **条带画布太矮会把山压平**：远景/中景的晕染预先画进很长的离屏条带。如果条带的 `yTop` 太低，高耸的山脊和雨林的树冠墙会被切成平顶，而 980 px 的向上俯仰会暴露这道切口。远景条带覆盖 y 150–1500，起点为世界坐标 x −6000；中景条带覆盖 200–1500。
- **半透明的条带底部会露出硬边**：在画布底部截止的晕染，被一个半透明图层盖住时会留下一道明显的水平接缝。把每个条带都延伸到画面以下（到 1500 px），并用垂直渐变把主地面淡化到纸色，而不是直接截断。
- **顶层 `const` 的顺序 → `READY` 永远不被设置**：五个脚本共享同一个全局作用域。如果初始化在某个 `const`（例如 `CLOUDS`、`PAPER_IMG`）声明之前就访问它，异步初始化会抛错，`window.READY` 一直是 false，每次截图都会在 60 s 后超时。把所有构建工作放进 `main.js` 的异步初始化中，并查看渲染日志里的 `[pageerror]` 行。
- **确定性**：`mk()` 会消耗全局 RNG。任何在 `render(t)` 里创建的笔触都必须包在 `withSeed(seed, …)` 中（太阳、HUD 色样、动物、火焰、图例行），或者在 `build()` 中预先构建；否则帧会依赖渲染历史，并行的工作进程之间结果会不一致。
- **性能**：每帧绘制成千上万笔太慢了。把每株画完的植物缓存为精灵图（`sprite()`）；只有进度 < 1（正在绘制）或正在燃烧的植物才逐笔绘制。
- **Kokoro 的人声峰值非常尖**（峰值与 RMS 之差约 17 dB）：只做 RMS 匹配，要么把人声埋掉，要么削波——先限制，再匹配。
- **与节拍锁定的动画**：以配乐的节拍网格（`wf_beats.json`）作为 `BEAT0`/`BEAT` 的来源；如果音乐剪辑改变了，要重新推导它们。
- **CJK 子集**：新的中文字幕字符会以后备字体渲染，直到你重新运行 `node fetch_fonts.mjs`（它会把 Noto Serif SC 子集化为 `scene.js` + `main.js` 中的字符）。
- **`mix.py` 会解析 `scene.js`**，用正则 `\['(v\d\d)', ([\d.]+),` 来放置人声句子——`VO` 的行必须严格保持这种形式。
- `playwright-core` 从仓库根目录解析（`demo/` 里没有 `node_modules`）。zsh 不会对 `$TS` 做分词；传入多个时间戳时用 `${=TS}`。

## 构建说明

```
styles/watercolor/demo/
  index.html      loads fonts.css + aus.js, engine.js, plants.js, scene.js, main.js (classic scripts, one global scope)
  engine.js       RNG/easing/noise, monotone spline, colours, the stroke engine (mk, drawS, drawList, sprite, clump, edgeOf)
  plants.js       plant & prop generators (spinifex, desertOak, mulga, saltbush, wattle, tussock, gum, ash, treeFern,
                  groundFern, rfTree, fanPalm, vine, farTree, uluru, cloud, shrub)
  scene.js        VO table, layers, zones, camera, world build, wash strips, landscape drawing, animals, fire, rain, notes
  main.js         canvas, map (deep time), mist, HUD, subtitles, title/end card, render(t), async init → READY
  aus.js          coastline rings (from extract_aus.mjs + vendor/)   paper.jpg (paper.py)   fonts/ + fonts.css (fetch_fonts.mjs)
  tts/lines.json  voice script   tts/gen.py  Kokoro   asr.py  whisper check   voices/  v01–v13.wav + dur.json
  music/          prep.sh (source files) · analyze.py · lag.py · jump.py · edit.py → score.wav
  mix.py          SFX + voice + music → mix.wav      render.mjs  stills / video / part     mux.sh  → ../watercolor.mp4
```

所有命令都在仓库根目录运行，Python = `.venv/bin/python`：

```sh
D=styles/watercolor/demo
# 1. voice (13 lines, ~10 s) and whisper check
.venv/bin/python $D/tts/gen.py                 # → $D/voices/v01..v13.wav + dur.json  (OUT=dir to write elsewhere)
.venv/bin/python $D/asr.py                     # prints each transcript; compare with tts/lines.json
#    copy the durations into the VO table in scene.js (id, start, dur, en, zh) and set the start times
# 2. music
sh $D/music/prep.sh                            # Wildflowers.mp3 → Wildflowers.wav (22.05k mono) + wf48.wav (48k)
.venv/bin/python $D/music/analyze.py           # → wf_beats.json (plot skipped: no matplotlib in .venv)
.venv/bin/python $D/music/jump.py              # ranked jump candidates; pick one, put its beat indices in edit.py
.venv/bin/python $D/music/edit.py              # → score.wav, score_beats.json
# 3. look at frames while building (≈0.35 s/frame as PNG)
OUT=$D/out/review node $D/render.mjs stills 5 20 43 66 90 106
.venv/bin/python core/render/sheet.py $D/out/review/sheet.jpg $D/out/review/t_*.png --cols 3 --w 640
# 4. mix (4 s) — writes $D/mix.wav, or pass a path
.venv/bin/python $D/mix.py
# 5. video: 6816 frames at 60 fps, ~50 ms/frame/worker (8 workers ≈ 2 min; keep 2–3 when other jobs run)
node $D/render.mjs video 8                     # → $D/out/seg_0..7.mp4 + out/list.txt  (x264 crf 12 intermediates)
# 6. mux (≈70 s): concat + x264 slow crf 16 g 120 + loudnorm −14 → styles/watercolor/watercolor.mp4
sh $D/mux.sh                                   # or: sh $D/mux.sh path/to/test.mp4
# 7. subtitles: VO table → srt
#    ($D/out/srt_cues.json = VO rows as {t0: s-.15, t1: s+dur+.45, text: "en\nzh"}, dumped from scene.js with a 5-line node script)
.venv/bin/python core/render/srt.py $D/out/srt_cues.json styles/watercolor/watercolor.srt
```

局部重渲染（用于片尾署名）：`node $D/render.mjs part 99.4 113.6 $D/out/seg_7.mp4` 可以精确重建 8 个工作进程中的最后一段（第 5964–6815 帧），然后运行 `sh $D/mux.sh`。
一次性素材脚本（已运行过）：`node $D/extract_aus.mjs`（海岸线），`cd $D && ../../../.venv/bin/python paper.py`（纸张），`node $D/fetch_fonts.mjs`（字体，需要联网）。

## 引擎参考

**页面约定**（`render.mjs` 依赖于它）：`window.DUR`（秒），`window.render(t)`（t 的纯函数，绘制整帧），在字体、纸张和 `build()` 完成后设置 `window.READY = true`。画布 1920×1080，全局 `ctx` 来自 `main.js`。

**笔触引擎 — `engine.js`**

| 函数 | 用途 / 参数 |
|---|---|
| `mk(pts, w, col, o)` | 由中心线 `[[x,y],…]`、基础宽度 `w` px 和十六进制颜色构建一笔。`o.prof`：`'brush'`（默认：起笔粗，逐渐收细）、`'leaf'`（正弦式鼓起）、`'even'`（平直，两端短收尖）、`'tip'`（根部粗 → 尖端细）、`'trunk'`（底部外扩，到顶部收窄 −62 %）。`o.nb`：笔毛轨迹数（当 `w ≥ 6` 时默认 `clamp(round(w/3.2), 3, 9)`，否则为 0）。`o.a`：不透明度（0.92）。`o.rib`：主体不透明度系数（有笔毛时 0.62，无笔毛时 0.92）。`o.rough`：宽度噪声（0.22）。会消耗 RNG。 |
| `drawS(c, s, p=1, col, am=1)` | 在上下文 `c` 上把笔触 `s` 画到其长度的 `p` 比例处（一个移动的笔尖），可选颜色覆盖和透明度乘数。 |
| `drawList(c, L, p)` | 按顺序绘制一组笔触；`p ∈ [0,1]` 对应整组。 |
| `sprite(L, col)` | 把一组笔触栅格化到离屏画布 → `{cv, x0, y0, x1, y1}`（在局部坐标的 `x0,y0` 处绘制）。`col` 把所有笔触重绘为同一种颜色（烧焦的剪影）。 |
| `qcurve(x0,y0,x1,y1,bend,n)`、`qctrl(...)`、`polar(x,y,ang,len,bend,n)` | 中心线辅助函数（二次曲线；`bend` 是控制点的侧向偏移）。 |
| `clump(S, cx, cy, r, n, cols, o)` | 在一个椭圆（`o.sx`、`o.sy`）内压入 `n` 个叶片点笔，可选方向 `o.dir ± o.spread`，长度 `o.l0–l1`，宽度 `o.w0–w1`，透明度 `o.a0–a1`。 |
| `edgeOf(s, side, w, col, a)` | 沿笔触一侧运行的阴影/墨线边缘（树干、枝干）。 |
| `withSeed(seed, fn)` | 用固定 RNG 运行 `fn`——任何在 `render` 中构建的东西都**必须**这样做。 |
| `monotone([[t,v],…])` | 单调三次关键帧轨道（镜头路径）。 |
| `ss eio eo ei seg clamp lerp vnoise fbm hash mixc rgba` | 缓动、区间、噪声、颜色辅助函数。 |

**植物 — `plants.js`**：每个生成器都接收一个缩放 `sc`（以及可选参数），在局部坐标系中工作，根部位于 (0,0)，向上为 y 负方向，返回 `{ S: strokes, … }`（`gum` 还返回 `woody`、`leaves`、`shoots`、`fork`；`mulga` 返回 `stems`；`ash`/`rfTree` 返回 `top`）。

**世界 — `scene.js`**：`add(layer, worldX, generator, scale, {dy, span, sway, args, extra})` 把一株植物放进 `PL[layer]` 并缓存其精灵图；`build()` 通过 `zoneJit` 沿世界 x 方向遍历来填充各区域；`buildStrips()` 用 `washPoly(c, pts, fill, alpha, passes, jitter)` 预先绘制山丘/地面晕染；`drawLandscape(t)` 依次绘制天空 → 远景条带/植物 → 雾 → 中景 → 地面 → 地平线 → 主景植物（带主角事件的钩子）→ 动物 → 火 → 前景 → 雨。注释：`hand(txt, x, y, p, {size, w, align, col})`、`leader(x0,y0,x1,y1,p,bend)`、`note(t, t0, t1, anchorX, anchorY, labelX, labelY, txt, o)`；`scr(plant, dx, dy, t)` 把植物局部坐标点转换为屏幕坐标，用于放置标签。

**最小示例**——用下面的代码替换 `scene.js` + `main.js`，就能得到一棵在纸上自己画出来的桉树（保留 `index.html`、`engine.js`、`plants.js`、`paper.jpg` 和字体）：

```js
const cv = document.getElementById('c'), ctx = cv.getContext('2d');
window.DUR = 6; let PAPER_IMG, tree, horizon;
function render(t) {
  ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalAlpha = 1; ctx.drawImage(PAPER_IMG, 0, 0);
  drawS(ctx, horizon, seg(t, .2, 1.6));                                   // horizon brushed across
  const p = seg(t, 1, 4.5), sk = .006 * Math.sin(t * 1.15);                // paint-in progress + sway
  ctx.setTransform(1, 0, sk, 1, 960, 820);
  if (p < 1) drawList(ctx, tree.S, p); else ctx.drawImage(tree.spr.cv, tree.spr.x0, tree.spr.y0);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  withSeed(7, () => drawS(ctx, mk(qcurve(80, 90, 120, 90, 0, 5), 9, '#b3b07a', { prof: 'even', nb: 3 }), seg(t, 4.5, 5)));
  ctx.font = '500 52px "Cormorant Garamond"'; ctx.fillStyle = rgba(INK, ss(seg(t, 4.6, 5.2))); ctx.fillText('Eucalypt woodland', 76, 150);
}
window.render = render;
(async () => {
  PAPER_IMG = new Image(); PAPER_IMG.src = 'paper.jpg'; await PAPER_IMG.decode();
  await document.fonts.load('500 52px "Cormorant Garamond"');
  tree = withSeed(1, () => gum(1.2)); tree.spr = sprite(tree.S);
  horizon = withSeed(2, () => mk(qcurve(120, 822, 1800, 822, -4, 40), 5.2, INK2, { prof: 'even', nb: 5, a: .88, rough: .3 }));
  window.READY = true;
})();
```

做一部完整的片子：保留 `engine.js`/`plants.js`（用同样的风格为你的标本添加生成器），重写 `scene.js` 中的 `VO`、`LAY`、`ZONES`、类似 `RAINK` 的数值表、`camXf`、`ZCOL` 和 `build()`，以及 `main.js` 中的地图 / HUD / 标题。
