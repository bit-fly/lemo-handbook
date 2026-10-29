# 复古半调案卷 — 我们的示例片

这只是众多可能中的一个例子。不要照搬它的故事、结构、镜头、道具或时间安排。

示例片：*胖橘案卷 Case File: Chubby*（30.0 s）· `halftone-dossier.mp4` · 源文件见 [`demo/`](demo/) · 引擎：一个自包含的 `demo/index.html`（SVG 场景图 + 两层 Canvas 2D 叠加层），由 Playwright 无头 Chromium 以 1920×1080 / 30 fps 逐帧渲染；配乐和音效由 `demo/music.py` 合成。


**示例片的画面文字是中文**（标题卡、字幕、印章）。没有旁白。见下文"制作英文版"。

## 故事与结构

一场针对一只胖橘猫的模拟调查。结构就是一份案卷：**标题 → 指控 → 嫌疑人档案（档案照）→ 罪状 01 / 02 / 03 → "综上所述" → 判决印章 → 理由 → 结案**。角落里的案卷编号 HUD 和章节标签（"罪状 01 · 测试重力"）让观众始终知道自己在哪。笑点来自官僚式的一本正经（案卷编号、身高标尺、印章、"罪状 01"）和一个微不足道又惹人喜爱的对象之间的反差。

它很吵闹，但清晰易读：每张卡 2–4 秒只讲一件事，一个大标题、一个视觉笑料、一行字幕。

示例片如何使用这些原生手法：

| 原生能力 | 示例片的用法 |
|---|---|
| **指控框架** | 任何话题都能变成"X 的案子"。一个产品、一个习惯、一只宠物、一位同事、一个历史人物——列出它的"罪状"。 |
| **编号罪状** | 每个节拍都是罪状 01/02/03，背后衬一个巨大的半调数字。30 s 用三条罪状最合适；60 s 用五条。 |
| **印章** | 每个判决都是一次实打实的盖章：惯犯、无罪释放、结案。印章就是这部片子的标点符号。 |
| **档案照** | 正面站在身高标尺前的主体，配姓名牌和闪光灯。非常适合介绍任何"嫌疑人"。 |
| **证物卡** | "综上所述"节拍：几条罪状变成三张钉在板上的证物卡回来，带图标，然后一起抖动。 |
| **网点密度 = 情绪** | 网点在主角周围膨胀成光晕，在画面边缘堆积制造紧张，放射状绽放表达喜悦。 |

我们如何塑造这个话题：一个**惹人喜爱的犯人**，加上三条**具体、可视化**的劣迹（一只掉下去的杯子、钟上的 04:00、一份被乱码填满的文档）。我们的反转是一个与证据相矛盾的判决（"罪状全部成立 → 无罪释放：太可爱了"）。

**示例片结构（30 s，120 BPM，一小节 = 2 s）**：标题（1 小节）→ 指控 + 第一个印章（1 小节）→ 档案照（2 小节）→ 罪状 01（2）→ 罪状 02（2，"夜晚"配色切换）→ 罪状 03（2）→ 总结 + 铺垫（1）→ 在 drop 上落下判决印章（1）→ 理由（1）→ 结案 + 署名（2）。每个剪切都落在小节线上。

## 镜头

摄像机是一个 2D 组（`#cam`）；没有 3D。

| 节拍 | 摄像机 |
|---|---|
| 标题 / 指控 | 锁定、正面，每一拍有 0.6 % 的**节拍脉动**（`pulse`，只在"groove"段落）。 |
| 档案照、总结 | 对场景组缓慢推镜：4 s 内 1 → 1.05（档案照），2 s 内 1 → 1.08 并带 ease-in（总结，紧张感上升）。 |
| 冲击 | `SHAKES = [t0, 振幅 px, 时长]`：第一个印章 16 px，杯子摔碎 14 px，判决 26 px / 0.45 s，小的落地 5–7 px；二次衰减，x/y 使用不同的 sin/cos 频率。 |
| 档案照闪光 | 两次相机闪光帧（白色叠加层 0.95 → 0，历时 0.3 s），吉祥物眯起眼睛。 |
| 结尾 | 在 29.25–29.95 s 内淡出到海军蓝 `#1D2340`。 |

像印刷页面一样平面、正面地构图：标题在左上，主角在右侧居中，字幕条在底部居中（y = 980），HUD 在四角。

示例片的运动数值：CHUBBY 每个字母在 0.2 s 内下落 700 px，间隔 0.25 s（每个八分音符一个），然后带阻尼 `cos` 晃动压扁。印章盖下（`stampAnim`）在 0.09 s 内从 2.6× 到 1×，23.0 s 处有一次白色闪光。压扁落地：趴着（loaf）在 17.45，蜷缩在 26.6（`sq = 1 − k·e^(−a·7)·cos(a·20…22)`）。奔跑循环（`runCycle`）：4 条胶囊形腿以 30 rad/s 摆动 ±50°，身体起伏 `|sin(28t)|·12`，拉伸 `scaleX 1 + 0.35·speed`，4 条速度线。网点擦除（`wipeUpdate`）：80 px 网格，r → 62，以每个剪切为中心历时 0.44 s；22 和 24 处是踩在 drop 上的硬切。原"运动语言"一节全文如下：

- **一切都带过冲入场**：`E.back`（过冲 1.9），历时 0.3–0.45 s。物体从画面下方升起（`lerp(1200, 470, E.back(...))`）或从 0 缩放出现（`pop()`）。
- **逐字弹出**（`charsPop`）：每个字形下落 30–100 px，以挤压拉伸的方式缩放进入，错开 0.05–0.08 s（小字幕 0.02 s）。标题始终这样构建；文字永远不用淡入。
- **标题字母下落并压扁**：CHUBBY 每个字母在 0.2 s 内下落 700 px，间隔 0.25 s（每个八分音符一个），然后带阻尼 `cos` 晃动压扁。
- **印章盖下**（`stampAnim`）：0.09 s 内从 2.6× 到 1×（`E.in`），然后 5 % 的阻尼回弹；同一瞬间触发摄像机抖动（`SHAKES`）、白色闪光（23.0 s）和印章音效。
- **压扁落地**：落地的角色（趴着在 17.45，蜷缩在 26.6）使用 `sq = 1 − k·e^(−a·7)·cos(a·20…22)` 配合 `scale(1/sq, sq)`，以保持体积不变。
- **待机生命感**：呼吸（y 方向缩放 ±2 %）、尾巴摆动、耳朵抽动、在脚本设定的时间眨眼（`blinkAt`）、爱心/Zz 循环、星星闪烁、REC 圆点以 1 Hz 闪烁、时钟的冒号闪烁。
- **奔跑循环**（`runCycle`）：4 条胶囊形腿以 30 rad/s 摆动 ±50°，身体起伏 `|sin(28t)|·12`，加上拉伸 `scaleX 1 + 0.35·speed` 和身后 4 条速度线。
- **线条抖动 10 fps**（line boil）作用于角色，而它们的变换以 30 fps 运动——有手绘感，但位置不抖。
- **转场是网点擦除**（`wipeUpdate`）：80 px 网格的圆点放大到 r = 62（完全覆盖），再缩回，以每个剪切为中心历时 0.44 s，带对角线延迟；每个剪切有自己的擦除颜色（`WIPES`）。场景切换发生在画面被完全覆盖的时候。部分剪切（22、24）是踩在 drop 上的硬切，用来制造对比。

## 配乐结构

- **没有人声。** 整部片子靠卡片和音乐撑起；如果某个话题需要旁白，可以加，但字幕仍是主要信息通道。
- **配乐**（`music.py`，44.1 kHz 立体声，完全合成，固定种子 RNG → 输出逐位一致）：120 BPM，一小节 = 2 s，C 大调，每小节一个和弦（`PLAN`，15 小节）。乐器：合成底鼓/军鼓/拍手/踩镲，八分音符型的方波感贝斯，三角波铺底，**类马林巴的 `pluck`** 旋律（基频 + 3.99× 泛音）加一层轻声的八度回声，夜晚潜行段（第 6–7 小节 = 罪状 02）用 `pizz` 拨弦和响指，**铺垫段**（第 10 小节 = "综上所述"）用军鼓滚奏 + 上升的正弦扫频，**drop** 把第 11 小节前半段留空，让判决印章在 23.0 单独落下，然后是八音盒 `bell` 尾声和最后一串铃声琶音。
- **音效跟随画面**（`music.py` 末尾的 SFX 表，时间从 `index.html` 复制）：每个标题字母一个 pop，猫头探出时一声 boing，每个印章用 `stamp()`（音高下坠的轰响 + 咔嗒声；`big=True` 再加一层噼啪声），档案照闪光用 `shutter()`，合成的 `meow()`（共振峰从 /i/→/a/→/u/ 扫过），推杯子用 `clink`，摔碎时 `crash_glass()`，每次擦除前一声 whoosh，猫躺上键盘时一声 `plop` 加一串 `key_click`，"太可爱了"用 `sparkle`。
- **母带**：峰值归一化 ×1.6 → `tanh` 软削波 ×0.9 → 1.2 s 淡出。混流时 −1.6 dB，AAC 256 k / 48 kHz → 示例片实测综合响度 −14.5 LUFS，−1.2 dBTP。
- 做新片时：保留小节网格，重写 `PLAN`（哪一小节是 intro/full/sneak/build/drop/outro/end），并按新的场景时间重新排定 SFX 列表。保留一处"印章落下前的静默"。

## 配色与道具

**配色**（`index.html` 第 56–60 行的 `C`）——只用这些颜色：

| 标记 | Hex | 用途 |
|---|---|---|
| `paper` | `#F4ECDD` | 浅色场景的背景 |
| `navy` | `#1D2340` | 所有描边、正文、字幕条、淡出颜色 |
| `blue` | `#2E55D6` | 标题背景、光晕网点、表格、一层油墨 |
| `pink` | `#FF5A87` | 点缀色、套印错位阴影、字幕偏移、判决印章 |
| `yellow` | `#FFC628` | 高亮词、数字、爆炸星、文件夹 |
| `orange` / `ored` | `#F58A34` / `#D9621E` | 吉祥物的毛色 / 条纹 |
| `cream` | `#FFF4E2` | 肚皮、爪子、深色上的文字 |
| `red` | `#E8384F` | 印章、"17"、REC 圆点 |
| `night` / `night2` | `#18203F` / `#2A3568` | 夜景背景 / 网点 |
| `mint`, `skin` | `#56C29E`, `#F7C9A1` | 仅作极小的点缀 |

**半调**（`halftone()`）：单个 SVG path 里的一组旋转圆点网格。`step` 20–26 px，每一层的网屏 `angle` 都不同（15°/20°/25°/30°/45°/60°/70°），点半径 = `density × step × maxK`，`maxK` 取 0.6–0.72（约 0.7 时，满密度下网点会融成实心油墨）。密度场：`radial(cx, cy, R, pw)` 用于光晕/绽放/角落辉光，`edge(R, pw)` 用于网点挤向画面边缘的暗角，或线性渐变 `(x,y) => 0.25 + 0.75*clamp((y-250)/650)` 用于"自上而下照亮"的填充。把第二层放进 `class="mul"`（正片叠底混合），让油墨叠印。

**半调填充的数字**：巨大的 Bagel Fat One 数字（700–760 px）从右边缘出血，先用平涂填色（`yellow` / `#FFD3DF`），再叠印一层裁剪到字形内的更深半调（用同一个 `<text>` 做 `<clipPath>`）。见第 513–518 行和第 709–714 行。

**纸张**（`buildPaper()`，`#paper` canvas，以正片叠底盖在所有内容之上，只构建一次）：96×54 的随机贴图放大（242–255 灰）做出斑驳感 + 每像素 ±13 的噪点并带 −4 的蓝色偏移（偏暖）+ 径向暗角 `rgba(120,100,80,.35)` + 在 x = 960 处一道淡淡的折痕。深色场景也同样正片叠底，这让它们看起来是"印出来的"，而不是在发光。

**颗粒**（`drawFx(frame)`，`#fx` canvas，每帧绘制）：520 个奶油色斑点（r 0.6–2.4，α .75）+ 90 个海军蓝斑点，每 2 帧重新播种——是印刷品上的灰尘，不是胶片颗粒。

**线条抖动**（`#boil` SVG 滤镜）：`feTurbulence` 0.022 → `feDisplacementMap` scale 5，每 0.1 s 重新播种（`render()` 设置 `boilT` 种子，40 个种子循环），再加一层精细的油墨颗粒遮罩（频率 0.75），让每块填充都被吃掉一点点。只应用于角色和手绘道具——绝不用于文字、半调、HUD 或字幕。

**角色**：粗壮的萌系造型，**7 px 海军蓝描边**（`LW`），平涂填色，奶油色肚皮/爪子，粉色耳朵内侧和脸颊，较深的橙色条纹用圆头描边绘制。大而有光泽的眼睛（海军蓝椭圆 + 两个奶油色高光），可以眯眼、闭成开心的弧线（`happy`）或眨眼。一个头部（`catHead`）供所有身体姿势共用。

**字体**（第 61–64 行的 `F`；全部为 Google Fonts，OFL）：
- 标题：**Noto Serif SC 900**，100–230 px，左对齐于 x ≈ 120–170，带**套印错位阴影**（`chars(..., {shadow:{fill: pink|yellow, dx: 8, dy: 8}})`，以正片叠底绘制）。
- 展示字 / 数字：**Bagel Fat One**（CHUBBY 330 px，01/03 700+ px，99+，17，18:00，Zz）。
- 可爱感叹词：**ZCOOL KuaiLe**（喵。 呼噜～ 啪！ 太可爱了）。"太可爱了"使用奶油色填充 + 16 px 海军蓝描边 + 蓝色偏移阴影。
- 数据 / HUD：**JetBrains Mono 800**（案卷编号、"PANG JU, O."、时钟 04:00、cm 标尺、文件名）。
- 字幕和印章：**Noto Sans SC 900**。

**印章**（`stampEl`）：双层圆角矩形（外框 10–14 px，内框 0.35×）+ 120–210 px 文字，全部经过 `#stampInk`（位移 7 + 粗糙的油墨颗粒遮罩），让墨色斑驳、边缘粗糙。不透明度 0.93，倾斜 −10° … +12°。

**道具与笑料**：爆炸星（24 角星，黄色 + 海军蓝描边，红色"啪！"）、对话气泡（奶油色，6 px 海军蓝描边，带尾巴补丁）、爱心（`heartPath`）、彩纸（五色矩形，`scaleY` 翻转）、放射光线（28 片交替的楔形，以 12°/s 旋转）、爪印、便利贴、敲出乱码的笔记本电脑、数字时钟。全部是平涂 + 海军蓝描边。

## 标题与字幕

- **卡片就是字幕。** 每个节拍都有一个标题（衬线 900，逐字弹出），罪状段还有一条**字幕条**（`caption`）：海军蓝圆角胶囊（r 14），带粉色偏移阴影（+8/+8，正片叠底），Noto Sans SC 900 46 px 奶油色文字，**关键词用黄色或粉色**（通过 tspan）。它在标题出现约 1 s 后弹出（0.4 s，略微 −1.2° 倾斜），一直停留到场景结束（≥ 1.8 s）。
- **HUD**（`hudUpdate`）：左上是案卷编号（`案卷 No.2026-CAT-001`，JetBrains Mono 22），下面是一个写着章节 + 标题的标签（`罪状 01 | 测试重力`）；右上是 REC 圆点 + 日期。在深色场景中颜色反转。标题卡上隐藏，因为标题卡有自己的角标。
- **标题卡**：蓝色背景，大号 Bagel Fat One 单词（对象的昵称），奶油色带海军蓝偏移阴影，下方一行副标题，吉祥物从字母后面探出头来，爪子搭在字母上。
- `halftone-dossier.srt` 列出了所有卡片（中文 + 英文释义）；没有语音需要转录。

## 片尾卡

**片尾卡**：带文件标签的案卷文件夹、睡着的吉祥物、结案印章，以及一个写着收尾笑话的对话气泡（「本片由 Claude 用代码一帧一帧画完。胖橘表示：全程没有配合。」）。我们的示例片以 "LemoLab × Claude Opus 5.5"（× = U+00D7）结尾。这个署名只属于本库的示例片；用户的影片不带 LemoLab 署名，也不复制这张卡片或它的收尾笑话。在示例片中，它是片尾卡底部居中的一行（2026-09-26 添加，`index.html` S10）：`txt(g, 'LemoLab × Claude Opus 5.5', {x: 960, y: 1040, 'font-size': 30, 'font-family': F.mono, 'font-weight': 800, fill: C.navy, 'text-anchor': 'middle', 'letter-spacing': 3})`，在 27.6–27.9 s 内上升 12 px 淡入（气泡弹出后 0.3 s），一直停留到海军蓝淡出。把它放在文件夹下方的空白带里；绝不遮挡吉祥物或印章。在源码中直接写出这个字符串，以便 `init()` 预加载它的字形。

## 制作英文版

**制作英文版**（全部在 `index.html` 中）：替换每个 `scene()` 中的字符串字面量（`chars()` 里的标题、`caption()` 的各部分、`stampEl()` 的文字、姓名牌/档案/文件夹文字、第 905–907 行的片尾气泡）、HUD 的 `chips` 数组（第 948–951 行）以及 `txt(... 'CASE FILE · 2026')`；把 `F.serif`/`F.cute`/`F.sans` 换成拉丁展示字体（例如标题用粗黑板衬线字体或 Bagel Fat One，感叹词用圆润的展示字体），把它们加入 `fetch_fonts.mjs` 的 `fams` 和 `init()` 的预加载列表（第 1069 行）；设置 `lang="en"`。宽度在构建时测量（`measure()`），所以字幕条和印章会自动调整大小，但英文长度是中文的 2–3 倍：降低标题字号（230 px → ~130 px），把印章缩短到 1–2 个词（GUILTY、ACQUITTED、CLOSED），并使用更小的 `charsPop` 错开时间（0.02–0.03 s）。

## 构建说明

```
styles/halftone-dossier/demo/
  index.html        the whole film: helpers, halftone, paper, cat rig, 10 scenes, HUD, wipes, render(t)
  render.mjs        Playwright renderer: stills | video [workers] | mux [out.mp4]
  music.py          score + SFX + master → music.wav (seeded, deterministic)
  fetch_fonts.mjs   downloads the 5 Google Fonts families → fonts/*.woff2 + fonts.css
  fonts/ fonts.css  local font slices (OFL)       CREDITS   licences
  stills/           styleframe.jpg                   out/     intermediates (gitignored)
```
从仓库根目录（`lemo-opuscar/`）运行；脚本内部的所有路径都相对于 `demo/`。

1. （仅在更换字体时）`cd styles/halftone-dossier/demo && node fetch_fonts.mjs` —— 需要联网；会重写 `fonts/` + `fonts.css`。
2. 人声/TTS：本风格没有（跳过）。如果你加了旁白，先按旁白给场景定时。
3. 音乐：`.venv/bin/python styles/halftone-dossier/demo/music.py` → `demo/music.wav`（≈1 s）。传入一个路径可写到别处。
4. 审看：在 Chrome 中打开 `demo/index.html?t=11.2`，或运行 `node styles/halftone-dossier/demo/render.mjs stills 3.3 7.2 11.25 23.3 27.8 --dir out/review`（每帧 ≈0.25 s）→ `demo/out/review/t_*.png`。
5. 渲染：`node styles/halftone-dossier/demo/render.mjs video 2` → `demo/out/seg_*.mp4` + `demo/out/video_noaudio.mp4`（CRF 12 母版）。900 帧 ≈ 每帧每 worker 0.24 s → 在空闲机器上用 2 个 worker 约 2 分钟（另有六个渲染同时占用 CPU 时实测 5.6 分钟）。
6. 混流：`node styles/halftone-dossier/demo/render.mjs mux` → `styles/halftone-dossier/halftone-dossier.mp4`（x264 CRF 16 + 音乐 −1.6 dB，AAC 256 k/48 kHz；≈15 s；用同一母版可逐位复现已发布的视频流）。传入另一个路径可避免覆盖已发布的影片。

### 我们踩过的坑

- **字体必须在 `buildAll()` 之前加载完成**：排版使用 canvas 的 `measureText`；如果某个 Google Fonts 的 unicode-range 分片还没加载，逐字位置就会按回退字体计算，字形会重叠。`init()` 会针对**整个页面源码**预加载每个字体族（`documentElement.innerHTML` 包含脚本，所以代码里的每个字符串字面量都覆盖到了），然后再针对构建好的 SVG 文字预加载一次。任何在运行时生成的字符串，只能包含在文件中某处以字面量出现过的字符（或 ASCII）。
- 使用 `font-display: block`（`fonts.css` 中已设置）——`swap` 会在最初渲染的几帧显示回退字形。
- `<clipPath>` 的 id 是全局的：每个被裁剪的数字/表格都需要唯一的 id（`num01`、`num03`、`tclip`）。
- 不要让 boil 滤镜作用于文字和半调：对 20 px 的网点做位移会把它们变成一团糊，还会让文字晃得无法阅读。
- 场景按时间窗口显示/隐藏；场景的 update 只在它显示时运行，所以任何在提示点之前必须不可见的元素，都需要在 `t < t0` 时显式 `op(…, 0)`（见 `charsPop`、`stampAnim`）。
- 网点擦除必须在剪切时刻达到完全覆盖（80 px 网格上 r 62），否则生硬的场景切换会透出来。
- 100 % 的白色闪光看起来像掉帧；判决闪光被限制在 0.5。
- `index.html` 中未使用的遗留物：`#ink` 滤镜、`charsIdle()`、`E.elastic` ——已定义，从未调用。

## 引擎参考

一切都在 `demo/index.html` 里。它刻意做成单文件；要开始一部新片，**把 `demo/` 复制到新文件夹，然后重写 `buildAll()`**。可复用的部分，按行号范围：

| 行号 | 模块 | 可复用的内容 |
|---|---|---|
| 8–13, 16–49 | 页面 + SVG 骨架 | 1920×1080 的 body；带 `boil`、`stampInk` 滤镜的 `<svg id="stage">`；图层顺序 `#cam > #world`（场景）、`#hud`、`#wipe`、`#flash`、`#fade`；然后是 `<canvas id="paper">`（正片叠底）和 `<canvas id="fx">`。原样复制。 |
| 55–94 | 核心辅助函数 | `C` 配色、`F` 字体、`el(tag, attrs, parent)`、`txt`、`tf(e, x, y, s, rot, sy)`、`op`、`show`、`clamp`、`seg(t,a,b)`（0..1 进度）、`lerp`、缓动 `E.out/in/io/back`、`pop(t, t0, d)`、带种子的 `rng(seed)`、`measure(str, size, family, weight)`。 |
| 97–132 | 逐字文本 | `chars(parent, str, {x, y, size, family, weight, fill, anchor, ls, shadow:{fill,dx,dy}, stroke, sw})` → `{g, items}`；用 `charsPop(c, t, t0, stagger, d, from)` 做动画。 |
| 135–150 | **半调** | `halftone(parent, {x0, y0, w, h, step, angle, color, f, maxK})` 返回一个 `<path>`；密度场 `radial(cx, cy, R, pw)`、`edge(R, pw)`；加上 `.setAttribute('class','mul')` 实现叠印。 |
| 152–171 | 背景 + 字幕条 | `bg(parent, color)`；`caption(parent, [[text, colour?], …], {x, y, size})` + `captionAnim(c, t, t0)`。 |
| 174–190 | **印章** | `stampEl(parent, str, {size, color, family, padX, padY, border})` + `stampAnim(s, t, t0, x, y, rot)`。在 `t0` 配一条 `SHAKES` 记录和一个 `stamp()` 音效。 |
| 192–194 | 爱心 | `heartPath(scale)` → path d 字符串。 |
| 199–337 | **吉祥物骨架** | `catHead`（耳朵、条纹、眼睛、嘴、胡须）+ `setFace(cat, {open, lookX, lookY, mouthOpen, earL, earR, happy})` + `blinkAt(t, [times])`；身体 `catSit`（正面）、`catRun`（侧面，+ `runCycle(c, t, speed, amp)`）、`catLoaf`（趴着）、`catCurl`（睡觉）；`tailEl(parent, d, width)` = 带描边的尾巴，条纹用虚线。要做不同的吉祥物，保留这套配方（7 px 海军蓝描边、平涂、奶油色肚皮、`boil` 滤镜）并重画路径；保留 `setFace` 接口。 |
| 349–355 | 时间线 | `scene(t0, t1, build)`：`build(g, s)` 一次性创建场景元素并返回 `update(t)`；`render()` 只在 `t0 ≤ t < t1` 时显示该场景，并用**绝对**时间调用 `update`。 |
| 358–935 | 10 个场景 | 实例：字母下落的标题（359–403）、标题 + 印章 + 爪印（406–435）、带身高标尺、姓名牌、闪光、爱心和气泡的档案照（438–508）、半调数字 + 杯子物理 + 爆炸星（511–625）、带月亮、星星、床、速度线的夜间奔跑（628–704）、笔记本打字笑料 + 趴着（707–782）、证物卡 + 抖动（785–819）、判决光线 + 彩纸（822–849）、理由特写 + 爱心爆发（852–882）、文件夹 + 蜷缩 + 片尾气泡 + 署名行（885–935）。 |
| 937–967 | HUD | 案卷编号 + 来自 `chips` 表 `[t0, t1, section, title]` 的章节标签；自动宽度；深色场景下反色（修改 `dark` 判断）。 |
| 969–988 | 网点擦除 | `WIPES = [[cutTime, colour], …]`，80 px 网格，0.44 s 窗口。 |
| 995–1032 | 纸张 + 颗粒 | `buildPaper()` 执行一次；`drawFx(frame)` 每帧执行。 |
| 1037–1064 | `render(t)` | boil 重新播种、场景切换、`SHAKES` + 节拍脉动（`inGroove` 窗口）、闪光时间、最终淡出窗口、HUD、擦除、颗粒。 |
| 1066–1084 | `init()` | 字体预加载（两遍）→ `buildPaper()` → `buildAll()` → `window.READY = true`；`?t=` 查询参数可在普通浏览器中渲染指定时间。 |

与 `render.mjs` 的约定只有 `window.READY` 和 `window.render(t)`；要改变时长，就在两个文件里同时修改 `FPS`/`DUR`。

**最小新场景**（粘贴到 `buildAll()` 中，然后把它的剪切加入 `WIPES`，加一行 `chips`，为印章加 `SHAKES`，并在 `music.py` 中加上音效时间）：

```js
scene(8, 12, (g) => {
  bg(g, C.paper);
  halftone(g, { color: C.yellow, step: 22, angle: 15, f: radial(1500, 520, 700, 1.0), maxK: 0.68 });
  halftone(g, { color: C.pink, step: 22, angle: 70, f: radial(0, 1080, 520, 1.2), maxK: 0.6 }).setAttribute('class', 'mul');
  const h1 = chars(g, '罪状 01', { x: 120, y: 330, size: 150, family: F.serif, fill: C.navy, shadow: { fill: C.yellow, dx: 8, dy: 8 } });
  const catG = el('g', {}, g); const cat = catSit(catG);
  const st = stampEl(g, '属实', { size: 160, color: C.red });
  const cap = caption(g, [['证据确凿，'], ['当场抓获', C.yellow], ['。']]);
  return (t) => {
    charsPop(h1, t, 8.05, 0.06);
    tf(catG, 960, lerp(1200, 470, E.back(seg(t, 8.2, 8.6))), 1.1);
    setFace(cat.head, { open: blinkAt(t, [9.4, 11.2]), lookX: Math.sin(t) * 4 });
    cat.tail.setAttribute('transform', `translate(90 285) rotate(${Math.sin(t * 2.4) * 10})`);
    stampAnim(st, t, 10.0, 1450, 640, -8);
    captionAnim(cap, t, 9.0);
  };
});
```
