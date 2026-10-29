# 纸雕灯影 — 我们的演示片

这只是众多可能中的一个例子。不要照搬它的故事、结构、镜头、道具或时间安排。

演示片：*一个月饼的相思 · A Mooncake's Longing*（121.8 s）· `paper-lantern.mp4` · 源码在 [`demo/`](demo/) · 引擎：three.js 0.170（WebGL、SSAA 2×、VSM 软阴影、自定义景深 + 泛光合成器）、Canvas2D 绘制的纸层、无头 Chrome 逐帧捕获。


**演示片的旁白是普通话**（edge-tts `zh-CN-XiaoxiaoNeural`），配中文字幕。本库默认使用英语和 Kokoro（`core/tts/`）；“配乐与声音结构”和“引擎参考”两节说明了如何切换。演示片时长 2 分钟；这种风格做 45–120 s 都可以。

**配音许可例外。** 演示片的旁白由微软 Edge 神经网络 TTS（通过开源客户端 `edge-tts`）生成，其音频再分发条款并不明确，因此 `paper-lantern.mp4` 的人声音轨**不在本库演示片所采用的 CC BY 4.0 许可范围内**。我们计划用 Kokoro 重新配音。在你自己的影片里，请使用 Kokoro（`core/tts/`）或你有权使用的声音；`tts.py` 仅作为时间安排的草稿保留。

## 故事与结构

影片从桌上一只真实的灯箱开场，并推镜进入灯箱。箱体内腔为 **0.56 × 0.33 m，深 0.16 m**。影片首尾都以**真实世界**收束：昏暗房间里的一张胡桃木桌、木框里点亮的灯箱、一套茶具和一盘真实的月饼，被灯箱溢出的光照亮。第一个镜头从房间推进箱内；最后一个镜头再拉出来。

演示片如何运用这种媒介的天然能力：

| 天然能力 | 在故事中的用法 |
|---|---|
| **灯亮起来** | 开场就是字面意义上的开灯：先是月亮，然后远景层，然后窗户一扇扇亮起。“灯亮了” = 故事开始、一个家、有人在等待。 |
| **纵深 = 距离** | 层层叠叠的山、河、城市让*距离*变得可见。旅途、思念、“远方”类的故事天生契合。 |
| **剪影** | 人物是黑色剪纸，只有几个可活动的关节部件（一只手臂、一只袖子）。没有面孔的人物可以代表每一个人——适合民间故事、家庭、节日。 |
| **窗户** | 一扇亮着的窗、窗里一个剪影，是这种风格最有力的画面。两扇亮窗共享一轮月亮，是演示片的主旨镜头。 |
| **纸上的文字** | 标题、书信和诗也都是纸：剪纸条上的竖排毛笔书法，一列一列显现，配一枚红色印章。 |
| **灯箱本身** | 结尾拉回到真实的桌面，意思是“这是一件纪念物 / 一个在家里讲的故事”。 |

**故事形态（已在演示片中验证）：**房间 → 开灯 → 推镜进入灯箱，出标题 → 起源（奶奶的厨房，压制月饼）→ 一点文化（一段明代卷轴引文）→ 缺席（一个空座位）→ 旅途（火车穿过层叠的山峦，途中讲一个神话，一只盒子朝反方向经过）→ 抵达远方的城市 → 信 → **反转：另一只盒子正往相反方向去**（互相思念——两扇窗，一轮月）→ 一首古诗 → 拉出灯箱，“中秋快乐”。

改编任何题材：找到**两个地方**和它们共享的**一束光**（月亮、灯塔、一扇窗）。把每个地方搭成一个层叠；在两地之间搭一段旅途序列；以两地同时亮起收尾。

## 镜头

| 节拍 | 摄影机 |
|---|---|
| 开场 | 房间全景（z 1.45）对着暗着的灯箱 → 开灯 → 7 s 缓入缓出推镜穿过画框到 z ≈ 0.56，然后继续缓缓推进。焦点从前景层转到村庄。 |
| 箱内镜头 | 几乎正面，缓慢的移动镜头推进/拉出（`aim(cam, [px,py,pz, tx,ty,tz], t)`），手持式微漂移 `hand ≈ .0006 m`。光圈 12–26（在 `post()` 中），焦点落在故事层，让前景芦苇和后方山峦虚化。 |
| 俯拍插入镜头 | 月饼压模和打开的礼盒用平面俯拍层叠来拍（同一引擎，不同布景）。 |
| 火车 | 横向移动：各层以与深度成比例的速度滚动（视差）。 |
| 结尾 | 在箱内推镜，然后拉出到桌面（z 0.5 → 1.08），茶具入画，标题「中秋快乐」在箱内淡入，下方出现片尾字幕，1.2 s 淡出到黑场。 |

演示片中实际做出的运动：

- **一切都像插在小棍上的纸那样运动**：各层滑动（x/y）、绕支点旋转（`ax/ay` 锚点 = 关节）、沿一个轴从 0 缩放出来（“写出来”），或者亮起来。没有挤压拉伸，没有变形。
- **带关节的人物**：一张身体纸片 + 一张单独的手臂纸片，锚定在肩部（`people.js` 里的 `GRAN_SHOULDER`、`GIRL_SHOULDER`、`SUSHI_SHOULDER`）；只动画 `rotation.z`。
- **光的变化是最大的运动**：S01 中的开灯序列——月亮（0.5–3.2 s）→ 天空 → 每层的透光度依次错开 0.42 s → 主光 → 窗户 → 灯笼闪烁（`1 + .06·sin(7.3t)·sin(3.1t)`）。
- **文字显现**：纸条从锚定边缘生长出来（`s13_note.js` 中的 `reveal()` 同时缩放网格*和*纹理重复，避免字形被压扁），与口播字词对齐。
- **硬动作节拍落在 whisper 词的时间点上**：木模在「啪」上砸下（`E.word('L04', 13)`），「圆」字在念到它时闪亮，光弧从「互」开始生长。
- **转场**：镜头之间 0.5–1.2 s 的叠化（`in: { type: 'dissolve', dur }`），另有 `iris` 模式（从 `center` 开始的圆形划像）。标志性转场是**近景平面的祥云幕布**（`s17_sushi.js` 中的 `cloudCurtain()`），在一个镜头的最后 1.2 s 合拢，并在下一个镜头上打开——两半必须在前缘精确相接。

## 配乐与声音结构

**人声（演示片，普通话）：**`edge-tts`，声音 `zh-CN-XiaoxiaoNeural`，语速 `+10%`，音高 `-2Hz`（`demo/tts.py`）；`script.json` 中可逐行覆盖 `rate`（L01 `+5%`，引用的书信 `+2%`，诗 L23 **`-12%`**，结束语 `-6%`）。输出在峰值的 2 % 处裁切（20 ms 前置，120 ms 尾部）→ 48 kHz 单声道 `vo/<id>.wav` + `vo/dur.json`。
- **多音字**：通过 `say` 字段给 TTS 一个同音替代，字幕保留真实文本：「相思的"相"」→ `say: 原来，相思的香，是互相的香。`（否则 TTS 会读成 xiàng）。
- **校对**：`demo/asr.py`（faster-whisper **medium**，zh）逐行打印 OK/DIFF；同音字或数字造成的 DIFF（八月十五 → 8月15，她 → 他）没问题——其余的要亲耳听。
- **字词时间**：`demo/words.py <ids…>` → `vo/words.json`（whisper 词时间戳）。镜头通过 `E.word(id, k)` 读取；**k 是 whisper 词元索引，不是字符索引**（whisper 会把「我们」作为一个词元）——把列表打印出来数一数。

**人声（英语，本库默认）：**编写 `lines.json`，包含 `{id, text, voice, speed}`，运行 `core/tts/tts.py`（Kokoro，例如 `bf_emma` / `af_heart`，speed ≈ .9）输出到 `demo/vo/`，然后运行 `core/tts/asr_check.py`，它会写出 `vo/dur.json` 和兼容的 `vo/words.json`（英语单词索引）。在 `script.json` 中填入相同的 id/文本。字幕分行的修改见“引擎参考”下的“切换到英语”。

**音乐：**Kevin MacLeod —— **"Ripples"**（古筝，0 → 约 37 s）以 4.5 s 交叉淡化交接给 **"Nu Flute"**（笛子 + 弦乐）；两首均为 CC BY 4.0（incompetech.com）。交接点是倒推出来的，好让 Nu Flute 自身在 70 s 处的渐强落在诗上：`T_FLU = C.L23.at − 70 + .3`。Nu Flute 相对 −3.3 dB。2 s 淡入，3 s 淡出。选它们的原因：五声音阶，没有鼓（打击能量 < 0.02）——librosa 数据在 `demo/music/analysis.json`。

**混音（`demo/mix.py`）：**人声 → 降采样包络压缩器（−22 dB，3:1）→ 高通 70 Hz → RMS −18 dB；音乐 RMS −27.5 dB，说话时**闪避 5.5 dB**（0.25 s 平滑包络）；程序生成的拟音在 −24…−34 dB：开关咔哒声 + 上升的闪烁音（开灯）、木模的闷响 + 噗声、显现时的风铃、纸张沙沙声、盒盖闷响、火车底噪（隆隆声 + 0.62 s 的“咔嗒咔嗒”）、火车经过和祥云幕布的呼啸声、城市嗡鸣、一口咬下的脆响。所有声音都依据 `out/timeline.json`（台词起点）和 `vo/words.json` 放置。峰值限制到 −1 dBFS；最终封装归一化到 **−14 LUFS**（`core/render/mux.sh` 中的两遍 loudnorm）。

## 色板与道具

**单位与布局。**一切以米为单位，y 轴朝上。箱体内腔 `BOX = { w: .56, h: .33, d: .16 }`（`src/room.js`）。各层位于 z 约 **−0.14（天空）到 0（前景）**之间；箱内摄影机位于 z ≈ 0.3–0.56，fov 26°。箱内满幅图层为 `.558 × .328`——**绝不能大于内腔**，否则在房间镜头里会从木框穿出来。

**夜景外景的层叠（S01）：**
| z | 图层 | 颜色 | 背光 `trans` |
|---|---|---|---|
| −.135 | 天空渐变（不受光，`skyPanel`）+ 星星 | `#0a1330 → #172a58 → #2e4478 → #43598a` | — |
| −.125 | 月盘 + 叠加光晕 | `#fffaf0 / #fff0cf / #f7dca4` | — |
| −.112 | 祥云 | `#c3cbe8` | .9 |
| −.098 | 远处喀斯特山峦，刻出轮廓缝隙 | `#6a86c2` | .7 |
| −.080 | 中景山峦 | `#3f5a92` | .45 |
| −.062 | 村庄（江南民居）+ 自发光窗户 | 墙 `#5a70a6` / 屋顶 `#1b284f`，辉光 `#ffb862` | .25 |
| −.046 | 河流 + 月光倒影（自发光） | `#22325e`，倒影 `#e9cf96` | .3 |
| −.030 | 桂花树 + 桥，自发光花朵 | `#17224a`，花 `#d9a24a` | .12 |
| −.014 | 前景河岸 + 芦苇 | `#0e1532` | .05 |
| +.004 | 悬挂的灯笼（自发光） | `#0d1328`，辉光 `#ff8a48` | .05 |

规则：**后层明亮 + 半透光，前层暗 + 不透光**。室内用同样的明暗阶梯，换成暖棕色（厨房墙 `#b08058`，道具 `#6e3b1f`，人物 `#2e170d`，灯光 `#ffc878`）；远方城市用紫色调（`#2a2456`，窗户 `#e8cc90`）。

**强调色：**印章红 `#b3302a`，金色标题纸 `#f1dbac` / `#f3d998`，盒子红 `#9e2a20`，一只蓝色盒子 `#2a4f7a` 代表孙女的回礼。

**纸张质感**（`src/paper.js` 中的 `finish()`）：平铺的纤维纹理（`GRAIN`，512²，α .9，`source-atop`），顶部边缘亮带 `rgba(255,236,200,.35)` 偏移 3 px，底部阴影 `rgba(0,0,0,.28)` 偏移 3 px。画布分辨率 `PPM = 5200` px/m。

**背光着色器**（`paperMat()`）：`emissive += albedo × lightCol × trans × uLit × fall × (.35 + 1.3·cloud)`，`fall = mix(.22, 1, exp(−d²/R²))`，围绕每个镜头的光点 `uLight`（通常是月亮）。`cloud` 是一张平铺的纸浆斑驳纹理（`CLOUD()`）。自发光窗户来自第二张 Canvas（`glowDraw`，白色 = 光），由 `glow` 缩放并由 `uGlowLit` 控制（0→1 即“开灯”）。

**字体**（`demo/fonts/`，OFL）：Ma Shan Zheng `FONT.brush` 用于标题/诗，Zhi Mang Xing `FONT.xing` 用于行书，Long Cang `FONT.hand` 用于孩子的笔迹，Noto Serif SC `FONT.song` 用于字幕和片尾字幕。

**真实世界布景**（`src/room.js` 中的 `lightbox()`）：挤出成型的胡桃木画框（Poly Haven `american_walnut_veneer`，色调 `#8a6a52`），内衬黑纸，胡桃木桌，暗色径向墙面 `#2a2018 → #0a0806`，箱口一盏 `RectAreaLight` 溢光 `#ffc98a`（强度 6–7），半球补光 `.25`，Poly Haven `tea_set_01`（茶壶、茶杯、茶托、盘子），以及两个程序生成的 3D 月饼（圆柱体 + 来自 `cakeFace` 的凹凸贴图饼面）。

## 标题、字幕与片尾卡

- 烧录的 DOM 字幕（`index.html` 中的 `#sub`）：Noto Serif SC 500，40 px，`#fbf3e4`，字间距 .06em，距底部 74 px，柔和黑色阴影；台词开始前 0.15 s 淡入，结束后 0.3 s 淡出。超过 21 个字符的台词在最靠近中间的逗号处断行；句末标点删去，句中 `，。：` 替换为全角空格。
- **以纸的形式出现在画面中的台词不加字幕**（`script.json` 中 `"sub": false`）：奶奶的信（L17）和诗（L23）。同样的文字不要出现两次。
- 标题：灯箱内一张纸条上的竖排 Ma Shan Zheng 字体（「一个月饼 / 的相思」），配红色印章「中秋」，在第二句台词之后淡入。
- 片尾卡：灯箱内的「中秋快乐」纸标题 + 红色印章「团圆」；片尾字幕块（`#credit`，19 px，两行：音乐 / 素材 / 字体）在最后一句台词后 0.6 s 淡入。
- **署名（仅限本库演示片）：**我们演示片的片尾卡以**灯箱内的一条剪纸纸条**呈现 **"LemoLab × Claude Opus 5.5"**，而不是叠加文字：`src/shots/s18_finale.js` 中的 `sign` 纸片——`w .26, h .02`，居中于暗色前景河岸上的 `y −.1515`，`z −.024`（在河岸图层前面，靠近最终焦平面），`text(…, .0115, FONT.song, { fill: '#f3d998', weight: 600 })`，`trans .3`，`shadow/recv: false`。它在 `tT + 1.0 → tT + 2.0` 期间淡入（「中秋快乐」开始后 1 s，约 116.6–117.6 s）并保持到结束，因此看起来是灯的一部分，而片尾字幕块则落在下方的桌面上。它只属于本库自己的演示片：用户的影片不带 LemoLab 署名，不要有这样的纸条，也不要复制这张片尾卡。
- `paper-lantern.srt` 包含全部 25 句台词（包括两句画面内的台词），时间与口播一致。

## 我们踩过的坑（演示片记录）

- **`destination-out` 镂空需要不透明的 fillStyle**：打孔前先设置 `x.fillStyle = '#000'`（或任何不透明颜色）；透明或辉光白色的填充会让孔只镂空一半。`props.js` 的 `cut(x, fn)` 会帮你处理。
- **VSM 阴影会漏光 / 产生自阴影光晕**：不应参与阴影的图层（标题、前方的灯笼、光弧、幕布）需要**同时**设置 `shadow: false` **和** `recv: false`。
- **叠加辉光**：透明的径向渐变 `CanvasTexture` 会露出明显的方形边缘。打开盒子时溢出的光要用解析式的 `ShaderMaterial` 衰减（`paper.js` 中的 `burst()`）。
- **近景平面祥云幕布**：计算合拢位置，让两片幕布的**前缘**相接（`s16_mutual.js` 中的 `±.035` 偏移），否则会露出一条旧镜头的缝。
- **比内腔大的图层**在房间镜头里会从木框穿出——满幅纸片保持 ≤ `.558 × .328`。
- **调色 uniform 不能有“粘滞”**：如果 `Pipe.final()` 只在镜头的 `grade()` 返回 `lift`/`gain` 时才写入它们，那么没有返回这些值的镜头就会继承上一个镜头的值，结果取决于渲染进程从哪一帧开始（在进程边界处出现可见的调色跳变，例如 60.9 s / S09 和 101.5 s / S16）。所以每个缺失的调色键都回退到 `GRADE0`（`post.js`：lift `[0, .005, .018]` 冷色夜景默认值，gain `[1.03, 1, .95]`），这样无论进程数多少，渲染结果都一致。夜景外景依赖默认值；室内必须显式返回暖色 `lift`（如 S08 所做）。
- Whisper medium 会听错中文同音字（八月 → 8月，她 → 他，婵娟 → 禅绢）；判断 DIFF 要靠耳朵，而不是字符串比对。
- 无头 Chrome 必须带 GPU 参数运行（`--use-angle=gl --enable-gpu --ignore-gpu-blocklist`，`render/browser.mjs`）；SwiftShader 大约慢 6 倍。

## 构建说明

```
styles/paper-lantern/demo/
  index.html        page: canvas + #sub + #credit, importmap → /node_modules/three (repo root is the static server root)
  script.json       lines: {id, text, rate?, say?, sub?}
  tts.py asr.py words.py   edge-tts → vo/*.wav + dur.json; whisper proof; word timings → vo/words.json
  src/main.js       timeline (GAP table), shot scheduler (lazy build / dispose), dissolves, subtitles, credits, window.render(t)
  src/shots/index.js   shot list, each start anchored to a line: start: L('L06') - .5
  src/shots/sNN_*.js   one module per shot: build(E) → { S, update(t), post(t), grade(t) }
  src/paper.js stage.js post.js room.js art.js people.js props.js lib.js   engine (see Engine reference)
  render/still.mjs video.mjs cues.mjs   stills, parallel video render, export out/timeline.json
  mix.py            voice + music + foley → out/mix.wav
  music/            analysis.json (librosa numbers); km_Ripples.mp3 + km_Nu_Flute.mp3 (incompetech, git-ignored)
```

所有命令都从仓库根目录（`lemo-opuscar/`）运行。Python = `.venv/bin/python`；`edge-tts` 必须在 `PATH` 上（用户级 `pip install edge-tts`；它不在 `.venv` 中）。

```sh
D=styles/paper-lantern/demo
# 1. voice (Mandarin demo) — delete vo/<id>.mp3 or set "redo": true to regenerate a line
python3 $D/tts.py                          # → $D/vo/<id>.wav, $D/vo/dur.json
.venv/bin/python $D/asr.py                 # OK / DIFF per line (≈1.5 min, whisper medium, CPU)
.venv/bin/python $D/words.py L01 L02 … L25 # → $D/vo/words.json (pass ALL ids: it rewrites the file)
#    English instead: .venv/bin/python core/tts/tts.py $D/lines_en.json $D/vo && .venv/bin/python core/tts/asr_check.py $D/lines_en.json $D/vo

# 2. timeline + review stills (any number of times, seconds)
node $D/render/cues.mjs                    # → $D/out/timeline.json (DUR, line cues C, shot plan P)
node $D/render/still.mjs 5 12.5 62.5 116 --out $D/out/review          # add --q '?ssaa=1' for fast previews
#    core renderer works too: node core/render/still.mjs $D 12.5 --out $D/out/review
#    debug: ?sheet (character sheet), ?nolit=1 (backlight off), ?hide=clouds,far (S01 layers)

# 3. mix
.venv/bin/python $D/mix.py                 # → $D/out/mix.wav   (optional arg: other output path)

# 4. render video (≈90 s for 3653 frames with 6 workers on an M-series Mac; ≈3 min with 2)
node $D/render/video.mjs --workers 6       # → $D/out/video.mp4 (segments written next to the output; any worker count gives the same frames)

# 5. mux: two-pass loudnorm −14 LUFS, 30 fps, no grain
sh core/render/mux.sh $D/out/video.mp4 $D/out/mix.wav styles/paper-lantern/paper-lantern.mp4 30 0
```

审片流程：在每个镜头的关键词时间点出静帧 → 拼成样张（`ffmpeg … tile=6x5`）→ 修正 → 然后才做完整渲染。房间镜头（前 10 s、最后 8 s）要用完整 SSAA 检查；“这是一件真实物件”的错觉全靠它们撑起来。

## 引擎参考

**页面约定**（`src/main.js`）：暴露 `window.READY`、`window.DUR`、`window.render(t)`（逐帧确定性）、`window.CUES`（台词时间点）、`window.PLAN`（镜头表）。查询参数 `?ssaa=N`（默认 2）。

**时间线**：台词从 2.6 s 开始；每句台词持续其 `dur.json` 中的时长，然后接 `GAP[id]` 秒（`main.js` 中的 `GAP` 表，例如标题节拍 `L02: 4.2`，结尾 `L25: 5.0`）。镜头在 `src/shots/index.js` 中锚定到台词；修改一句配音会自动重新计算所有时间。

**镜头上下文 `E`**（传给 `build`）：`dur`、`T0`、`C`（所有时间点）、`env`（PMREM 房间环境贴图）、`W`（字词）、`cue(id)` / `cueEnd(id)`（以镜头本地秒数表示的台词起止）、`word(id, k)`（whisper 词元 k 在镜头本地的起始时间）。

| 模块 | 关键 API | 说明 |
|---|---|---|
| `paper.js` | `sheet({ U, w, h, draw, glowDraw?, glow, glowCol, trans, z, x, y, ax, ay, shadow, recv, finish, ppm, bumpDraw? })` | 一个纸层。`draw(x, k)` 以米为单位绘制（原点在中心，y 朝上）。`glowDraw` 绘制自发光贴图（白 = 光，黑 = 遮罩）。`trans` = 背光透光度。`ax/ay` = 支点。返回一个 Mesh；`m.material.userData.u` 包含 `uTrans`、`uGlowLit`、`uClip`（圆形裁切 `[cx, cy, r, inside?]`）。 |
| | `skyPanel({ w, h, z, stops, stars, starMinY, gain })` | 不受光的渐变背板。 |
| | `moon({ x, y, z, r, gain, halo, haloGain, art? })`、`setMoon(m, k)` | 月盘 + 叠加光晕；`k` = 亮度 0…1+。 |
| | `text(x, s, px, py, size, font, o)`、`vtext(…)` | 米制空间中的文字（`vtext` 为竖排）。 |
| | `burst(w, h, col)` → `m.userData.set(k)` | 解析式叠加辉光。 |
| | `paint(w, h, draw, ppm)`、`finish(c, o)`、`tex(c)`、`PPM`、`GRAIN`、`CLOUD()` | 底层画布辅助函数。 |
| `stage.js` | `stage({ light, lightR, lightCol, key, keyCol, keyPos, keyTarget, keyAngle, amb, ambCol, shadowR, fov, bg })` → `{ scene, U, cam, key, amb, add(...) }` | 场景 + 顶部 LED 聚光（VSM，2048²，半径 10）+ 环境光 + 背光 uniform `U`。 |
| | `aim(cam, [px,py,pz, tx,ty,tz], t, { hand, handF, roll, fov })` | 带手持漂移的摄影机。 |
| | `dispose(scene)` | 镜头离开时由调度器调用。 |
| `post.js` | `Pipe.shot(scene, cam, { focus, aper, maxCoc, bloom: { strength, radius, threshold } }, target)` | MSAA4 半精度浮点 → CoC → 96 采样聚集景深 → UnrealBloom。`focus` = 以米为单位的距离。 |
| | `Pipe.final({ mixB, mode, center, expo, fade, vig, sat, contrast, lift, gain })` | 叠化 / 圆形划像、调色、暗角、中性色调映射、sRGB。镜头省略的键每帧都回退到 `GRADE0`。 |
| `room.js` | `await lightbox(S, E, { spill, spillCol })` → `{ g, frame, spill, table, props }`、`BOX` | 真实世界的灯箱、桌子、茶具、月饼。纹理从 `/core/assets/polyhaven/` 加载。 |
| `art.js` | `karst`、`ridge`、`xiangyun`、`waves`、`waterTop`、`osmanthus`、`pine`、`willow`、`reeds`、`jiangnanHouse(x, o, g)`、`pavilion`、`lantern(x, o, g)`、`mooncake`、`FONT` | 剪纸图案；带 `g` 参数的函数会把窗户画进辉光画布。 |
| `people.js` | `grannyStand/Sit`、`girlStand/Sit`、`childStand`、`sushi`、`change`（嫦娥）、`rabbit`、`arm(x, s, a, b)`、`spline`、`ribbon`、`*_SHOULDER` | 剪影人物，缩放 `s` = 以米为单位的身高。 |
| `props.js` | `cut(x, fn)`、`roundWindow`、`steamers`、`stove`、`jar`、`bowl`、`teapot`、`pendant`、`calendar`、`table`、`chair`、`boxFront`、`label`、`cake3q` | 室内道具。 |
| `lib.js` | `ss`、`seg`、`eio`、`eo`、`ei`、`back`、`spring`、`lerp`、`clamp`、`mulberry`、`vnoise`、`track`、`env` | 确定性辅助函数。 |

**最小镜头**（一座月光下的小山和一扇亮着的窗；以 `{ id: 'S99', start: L('L05') - .3, in: { type: 'dissolve', dur: .8 }, build: s99.build }` 的形式加入 `SHOTS()`）：

```js
import { sheet, skyPanel, moon, setMoon } from '../paper.js';
import { karst, jiangnanHouse } from '../art.js';
import { stage, aim } from '../stage.js';
import { seg, ss, eio, lerp } from '../lib.js';

export function build(E) {
  const MN = [.08, .07, -.13];
  const S = stage({ light: MN, lightR: .15, lightCol: '#ffe2ae', key: 1.0, amb: .3, ambCol: '#7d90c8', keyCol: '#d6dcff' });
  const { U } = S;
  S.add(skyPanel({ w: .56, h: .33, z: -.14, stops: [[0, '#0a1330'], [1, '#43598a']], stars: 200 }));
  const mn = S.add(moon({ x: MN[0], y: MN[1], z: MN[2], r: .035 }));
  S.add(sheet({ U, w: .558, h: .328, z: -.1, trans: .7, draw: x => { x.fillStyle = '#6a86c2';
    karst(x, { x0: -.28, x1: .28, base: -.03, peaks: [[-.15, .06, .03], [.1, .05, .025]], carve: .0005 }); } }));
  const house = { cx: -.05, by: -.09, w: .06, h: .03, windows: [[.012, .01, .01, .01]], wall: '#5a70a6', tile: '#1b284f' };
  const town = S.add(sheet({ U, w: .558, h: .328, z: -.06, trans: .25, glow: 2.2, glowCol: '#ffb862',
    draw: x => jiangnanHouse(x, house), glowDraw: g => jiangnanHouse(null, house, g) }));
  S.add(sheet({ U, w: .558, h: .328, z: -.02, trans: .05, draw: x => { x.fillStyle = '#0e1532'; x.fillRect(-.28, -.165, .56, .075); } }));
  const tOn = E.word('L05', 2);                        // light the window on the 3rd spoken token
  return {
    S,
    update(t) {
      setMoon(mn, ss(seg(t, 0, 1.5)));
      town.material.userData.u.uGlowLit.value = ss(seg(t, tOn, tOn + .6));
      aim(S.cam, [0, 0, lerp(.56, .48, eio(t / E.dur)), 0, 0, -.07], t);
    },
    post() { return { focus: S.cam.position.z + .06, aper: 14, maxCoc: 14, bloom: { strength: .35, radius: .6, threshold: 1.15 } }; },
    grade() { return { expo: 1.05, vig: .42, sat: 1.05, contrast: .1 }; },   // missing lift/gain → GRADE0 (cool night); interiors add lift: [.012, .006, 0]
  };
}
```

**切换到英语**：`main.js` 中的字幕分行器默认是中文（`st.length > 21`，在 `[，。：]` 处断行，标点 → 全角空格）。改为英语时，超过约 42 个字符就在最靠近中间的 `, ` 处断行，并保留标点；把 `#sub` 设为一种拉丁衬线字体（例如在 `fonts/` 中加入 Cormorant 这类 OFL 字体），约 38 px。此时 `E.word(id, k)` 按英语单词计数。其余部分（时间线、混音、渲染）与语言无关。
