# 体育运动图标 — 我们的示范片

这只是众多例子中的一个。不要复用它的故事、情节走向、镜头、道具或时间安排。

示范片：*Aichi-Nagoya 2026 — All 43 Sports*（爱知·名古屋 2026 — 全部 43 个大项）（英日版，163.6 秒，1920×1080 @ 60 fps，150 BPM，70 张项目卡，无旁白）· `pictogram-motion.mp4` · 源文件见 [`demo/`](demo/) · 引擎：Canvas2D（`engine.js` + `scenes.js` + `poses/*.js`），无头 Chrome 逐帧抓取，numpy 合成的配乐。


> **版权说明。** 本示范片是为一项真实赛事——第 20 届亚运会爱知·名古屋 2026——制作的非官方粉丝宣传片；爱知·名古屋亚运会组委会和亚洲奥林匹克理事会并未制作或认可它。红日加圆环的标志是用代码绘制、模仿官方会徽的，口号则是引用的官方口号；两者都不归我们复用。在你自己的影片里，请把两者都换成原创内容。赛事名称（AICHI-NAGOYA 2026 / THE 20TH ASIAN GAMES）、口号（IMAGINE ONE ASIA / ここで、ひとつに。）、用代码绘制的类似会徽的红日加圆环标志、五色色板及其颜色名称，以及网格图案语言，都沿用了主办方的视觉识别。它们属于主办方（爱知·名古屋亚运会组委会 / 亚洲奥林匹克理事会）。`demo/ref/` 中存放的是从赛事官网下载的官方图片，仅供参考。它们从不会被画进影片，也不得再分发。**用这套代码制作的任何其他影片都必须替换所有赛事专属元素**（见 [替换赛事元素](#replacing-the-event-elements)）。

## 故事与结构

一部粉丝宣传片，按节拍列出一届综合性运动会的所有大项，每个大项一张卡片。示范片如何使用这种风格的原生能力：

| 原生能力 | 故事中的用法 |
|---|---|
| **一张卡片 = 一个条目** | 任何 20–80 项的清单：一届运动会的所有项目、一套工具包里的每件工具、一个流程中的每个站点。数量本身就是钩子（"ALL 43 SPORTS"）。 |
| **章节 = 颜色** | 把清单分成 5–7 个家族。每个家族分配一个色板色相，让观众始终知道自己在哪里。 |
| **图标动作** | 每个条目都需要一个能在 1.6 秒内看懂的*动词*（投、跳、挥、蹬）。如果条目没有身体动作，就给它一个道具动作（齿轮转动、杯子倒水）。 |
| **节奏阶梯** | 普通卡片为 4 拍（1.6 秒）。子家族变成 2 拍的快速连发（4 种泳姿、4 个自行车项目、各类持拍运动），在不改变 BPM 的前提下给影片第二种速度。 |
| **长镜头** | 第一个也是最大的章节是一次沿跑道的横向摄影机运动：14 个站点各隔一屏，每次踩拍剪切时快速甩镜。把它用在"主角"家族上。 |
| **盛大终章网格** | 所有条目以 9×5 图标墙的形式回归，翻入，变成同一种颜色，收拢成一轮太阳，然后是口号和片尾卡。 |

**故事形态（示范片）：** 心跳式冷开场（墨色底上一个红点像心跳一样搏动，圆环围绕它画出）→ 标题重重砸在满版五色图案上 → 三组数字滚动（43 SPORTS / 469 EVENTS / 16 DAYS）→ "ON YOUR MARKS… SET…" 后留半拍静默 → 7 个章节，70 张卡片 → 图标墙终章 → 口号 → 片尾卡 → 在音乐余韵中淡出到黑。

改编一个主题：列出条目；分成 5–7 个章节；给每个条目一个一拍内的动词；挑一个章节做长镜头；决定哪些连发用 2 拍；为终章写两行口号。

### 示范片的视觉，按实际搭建

一部**目录片**：一组 N 个条目（运动、产品、功能、菜品、步骤）一次一张卡片，快速、踩着节拍呈现。每张卡片 = **一个做一个动作的图标人 + 一个巨大的标题 + 一行第二语言 + 一个等宽字体编号 "07 / 43"**。卡片按章节分组。每个章节拥有五色色板中的一种颜色。每组由一张满版图案的章节卡开场。

可辨识的要素有：
1. **网格图案**（"核心图形"）：180 px 的方形网格。大圆和半圆跨越多个格子。大约一半的格子里带一个小图案（鱼鳞波纹、圆点鳞纹、三角鳞纹、条纹落日、齿轮/太阳轮、新月、同心圆弧、棋盘格、渐变四分之一圆……）。图案使用**同一色相的 5 个色阶**，并且**整行被切开、向侧面错位**。行错位是标志性手法：它驱动背景、章节节拍和主要转场。
2. **图标运动员**：扁平、无脸，由圆头长条和一个圆形头部构成。近侧肢体用前景色绘制，远侧肢体用向背景色混合 42 % 的颜色。道具同样是几何形：圆、环、胶囊形、直线。
3. **文字即建筑**：900 字重的无衬线标题（Inter Tight），字高 150–330 px，下方是一行粗重的 CJK 文字（Noto Sans JP）。小号的 DM Mono 元信息文字位于四角，就像广播电视的 HUD。

氛围是高端体育转播的视觉识别：平涂色彩，除了一道柔和的光扫过外没有渐变，没有描边，除了极轻的胶片颗粒外没有纹理。

## 镜头

| # | 段落 | 镜头 / 画面 | 原生手法 / 备注 |
|---|---|---|---|
| 1 | 冷开场 | 固定画面：墨色底上一个红点像心跳一样搏动，圆环围绕它画出 | 唯一一次使用 `oBack` 缓动 |
| 2 | 标题 | 重重砸在满版五色图案上；各行错位转出 | 行错位揭示 |
| 3 | 数字滚动 | 43 SPORTS / 469 EVENTS / 16 DAYS，每组一小节 | 数字滚动重击 |
| 4 | "ON YOUR MARKS… SET…" | 固定；第一章前留半拍静默 | 重击前的静默 |
| 5 | 田径（第 1 章） | 长镜头：14 个站点各隔一屏，每次剪切都甩镜 | 沿跑道的长镜头 |
| 6 | 第 2–7 章 | 固定卡片，A/B/C/M 版式按章节轮换，泳姿、自行车和持拍项目用 2 拍连发 | 章节 = 颜色；节奏阶梯 |
| 7 | 终章 | 9×5 图标墙翻入，变成同一种颜色，缩放到 0.9，图块收拢成一轮红日 | 图标墙；万众归一 |
| 8 | 口号 + 片尾卡 | 太阳和圆环上升并缩小；口号、标题、日期、色条、署名行；在余韵中淡出到黑 | 见片尾卡 |

摄影机只存在于**长镜头**（`trackScene`）中。在那里，14 个站点各隔一个屏幕宽度排列。摄影机以 42 px/s 漂移，每次剪切时甩过整整一屏（`E.ioExp`，从拍点前 0.14 秒到拍点后 0.24 秒）。两行 360 px 图案格的背景以 0.28 和 0.42 的视差滚动。深红色跑道（y 780）有奶油色分道线，跑步项目的虚线滚动得更快（`RUNNING` 速度）。项目规格（`100M`、`4×100M`、`7.26 KG`……）以 −0.35 的错切、12 % 的奶油色画在跑道上。其他地方画面都是固定而扁平的；能量来自行错位、转场和人物动作。

开场和终章的"摄影机"：终章图标墙缩放到 0.9，留 10 px 间隙，然后每个图块收拢到中心，一轮红日从中长出。片尾卡的太阳和圆环从中心上升到 y 330，同时缩小到 0.62×。

## 配乐结构

- **没有旁白。** 影片由文字和音乐承载。字幕文件只是一条标题卡轨道（见片尾卡）。
- **配乐**：原创，完全在 `demo/music/music.py` 中合成（numpy + scipy；不用采样）。"和太鼓 × 电子"，150 BPM 4/4，D *都节*音阶（D Eb G A Bb），建在 D 小调和声上，101 小节 = 161.6 秒，外加 2 秒余韵。乐器都是合成的：大太鼓 / 长胴太鼓 / 缔太鼓、*ka* 鼓边敲击、底鼓、拍手、军鼓、踩镲、沙锤、强音镲，以及类似拟音的打击声（水花、坠落、啵、铿锵、爆裂）。三味线和筝用 Karplus-Strong 拨弦合成（`ks_render`，筝带滑音）；另外还有合成贝斯、铺底、失谐锯齿波和弦重音、上升音效和持续音。
- **按数据与画面锁定**：`music.py` 读取 `music/timeline.json`（由 `edl.js` 导出）。每个镜头起点都按章节选择一个重音（`card_accent`：水上项目用水花，持拍项目用*啵*声，格斗项目用大太鼓 + 和弦重音，力量项目用铿锵声……）。章节和终章的起点用 `big_hit`，**之前留半拍静默**（鼓和贝斯静音）。报告逐一检查 79 个镜头起点，误差在 ±15 ms 以内（示范片：79/79 通过，偏差 ≤ 0.2 ms）。
- **母带**：分轨 `music_bed.wav` + `sfx.wav`，一个 2:1 黏合压缩器和一个限幅器，整体响度 −14 LUFS，≤ −1 dBTP（示范片：−14.11 LUFS，−1.12 dBTP）。`music/report.txt` 记录响度、频段能量、起点和间隙检查。渲染时间约 30 秒。
- **段落布局硬编码**在 `compose()` 中（以小节计的 `EXPECTED = dict(intro=0, ath=12, …, finale=89)`）。如果 EDL 改变，断言就会触发。做新片时，按新的章节小节重写 `compose()`（把 `timeline.json` 和这一节交给一个音乐子智能体），`card_accent`、`big_hit` 和报告保持不变。

## 色板与道具

**画布**：1920×1080，网格 `G.CELL = 180`（10.7 列 × 6 行）。一切都对齐到这个网格：章节色带高 2 行，转场按 180 px 的行或 240 px 的列切分，终章图标墙为 9×5。

**色板**（`engine.js` → `G.PAL`；每个色相有五个色阶，`t[0]` 最深 → `t[4]` 最浅；`t[2]` 为基准色）。示范片的取值采样自官方核心图形：

| key | 示范片名称 | t[0] | t[1] | **t[2] 基准** | t[3] | t[4] | fg（文字与人物） |
|---|---|---|---|---|---|---|---|
| red | Jonetsu Red | `#c21d15` | `#d22419` | **`#e83220`** | `#ec5a26` | `#f07a45` | 奶油色 `#fbf6ec` |
| purple | Kakitsubata Purple | `#231a6e` | `#2c2084` | **`#4e3a93`** | `#644d9d` | `#7a62a9` | 奶油色 |
| green | Shinrin Green | `#006d35` | `#008440` | **`#079a3e`** | `#2da547` | `#68b15d` | 奶油色 |
| gold | Kinshachi Gold | `#b48900` | `#c69b00` | **`#d5b102`** | `#debc2f` | `#e7d16c` | 深色 `#211904` |
| ochre | Dento Ocher | `#946a2e` | `#ac7d38` | **`#c18e46`** | `#d2a55c` | `#e0bf84` | 深色 `#1e1409` |
| ink | Sumi | `#0f0c15` | `#16121d` | **`#1e1a27`** | `#2a2535` | `#3a3447` | 奶油色，强调色 = gold |

奶油色 `G.CREAM = #fbf6ec`，墨色 `G.INK = #15111c`。**gold 和 ochre 配深色文字和深色人物**；其余配奶油色。`G.CYCLE = ['red','purple','green','gold','ochre']` 是多色章节和开场图案使用的轮换顺序。卡片上的图案以 `spread 0.42` 绘制（低对比度，让文字可读），章节卡上用 `spread 0.95`（完全对比）。

**图案**（`G.pattern(palKey, seed, {spread, density})`）：用 `t[1]` 填底。在每个网格节点上，34 % 的概率放一个半径为 `CELL`、随机色阶的圆，16 % 的概率放一个 `t[3]` 圆并在其中套一个 `t[0]` 的半径减半的圆。然后比例为 `density` 的格子各获得 14 种图案之一（`G.motif` 类型 0–13）：四分之一圆、半圆、圆 + 点、条纹落日、*青海波*鱼鳞波纹、圆点鳞纹圆、三角鳞纹、同心圆弧、太阳轮 / 齿轮、棋盘格、新月、S 形波、渐变四分之一圆、渐隐条。每个图案随机旋转 90° 的整数倍。画布比屏幕宽 3 格，所以任何一行都可以错位 ±1 格。**所有图案都是通用几何形。** 不要在格子里画赛事吉祥物、地标或产品。

**图标人物**（`G.joints` + `G.drawFigure`）：单位是身高 = 1，原点在髋部。各段长度：躯干 0.30，颈 0.045，头部半径 0.082，上臂 0.16，前臂 0.15，大腿和小腿 0.225。宽度：躯干 0.145，手臂 0.076，腿 0.094，均为圆头。绘制顺序为远侧腿、远侧臂（颜色 `far` = fg 向背景混合 42 %），然后是躯干、近侧腿、近侧臂、头（fg）。第二个人（对手或搭档）用 `far2`（混合 60 %）画在后面。在卡片中，人物站在一个**太阳圆盘**上（r 360–380 px，浅 fg 色相用 `t[1]`，gold/ochre 用 `t[4]`，ink 用 `t[3]`），圆盘上有一道缓慢扫过的 9 % 白色光带。

**卡片版式**（`layoutOf(s)`，按章节用一串顺序字符串轮换，例如 `ball: 'ACBAB'`）：
- **A**：文字块在左（x 130，基线 610）；圆盘和人物在右（中心 1290，水平姿态的游泳运动员为 1370）；右下角一个 300 px 的描边编号，透明度 20 %。
- **M**：A 的镜像（人物在左 640 处，文字右对齐于 1800）。
- **B**：标题**撑满画面**（330 px，颜色为 `t[1]`/`t[4]` 的"幽灵"色阶，单行适配到 1760 px）。圆盘和人物*压在*标题上面。底部信息条：日文名 80 px，英文名 44 px，等宽元信息右对齐。2 拍持拍连发始终使用 B。
- **C**：一块 820 px 的实色左侧面板（`t[0]` 或 `t[4]`）划入，上面有 10 % 透明度、90 px 的细线网格和文字块；图案、圆盘和人物在右侧（1370）。

**字体**（`demo/fonts/`，均为 OFL）：
- 标题：Inter Tight 900，170 px（C 版式 150，跑道上 160），字距 −0.02 em，用 `G.fitFont` 自动适配到 820 px。
- 第二语言：Noto Sans JP 900，92 px（英日版），或 Noto Sans SC 900（中文版，另加一行 28 px/500 的日文）。
- 元信息：DM Mono 500 22 px，字距 3 px，例如 `ATHLETICS   01 / 43`。标签：一个等宽字体小胶囊（`5×5 · 3×3`，`NEW` 为红色）。
- HUD（每张卡片和章节卡）：四角都是 DM Mono 17 px（左上为项目行，右上为章节），底部有一条 **43 格的进度刻度条**。当前条目是一根 4 px 高的长刻度；已完成的条目为 75 %，其余为 28 %。

**颗粒**：只在封装时添加（`noise=c0s=4:c0f=t+u`）。画布本身是干净的。

### 运动，按实际搭建

- **时间网格**：150 BPM，1 拍 = 0.4 秒，1 小节 = 1.6 秒。每个镜头都从一个拍点开始（`edl.js`），姿态中的每个关键动作都落在整数拍 `u` 上（出手、接触、落地）。
- **缓动**：几乎所有入场都用 `E.oExp`（指数缓出）；甩镜和划像用 `E.ioExp`；面板和圆盘用 `E.o5`/`E.o3`；`E.oBack` 只用于开场的第一个点。
- **文字入场**：`G.maskText` 让每一行从裁切矩形下方向上滑出（标题 0–0.5 秒，日文行在 +0.08 秒，标签在 +0.2 秒）。元信息行逐字打出（`G.typeText`，无光标）。2 拍卡片把所有时间压缩为 0.7。
- **人物组装**：前 0.42 秒（2 拍卡片为 0.28 秒）里，人物层被切成 54 px 的水平条带，起始时交替向左、向右偏移 90–250 px，然后滑动对齐（`stageFigure(..., asm)`）。这呼应了图案的行错位。
- **背景在呼吸**：奇数行向右漂移，偶数行向左漂移，速度 26 px/s，每行再加一个固定的正弦偏移。在章节卡上，每一行**在第二小节的每一拍上跳四分之一格**（第 4–7 拍），与鼓点同步。
- **章节卡**：一条 2 行高的实色色带从中心长出（`E.o5`）。一个 330 px 的描边章节数字升入其中，标题和日文行向上滑出。色带上下各有一条细线。
- **转场**（`transType`，窗口为剪切前 0.12 秒到剪切后 0.26 秒）：`rows`（6 行以交替方向滑入，用于进入每个章节和退出开场），`cols`（8 列下落或上升，用于章节卡之后和 2 拍连发中），`slide`（持拍连发：一次带细阴影边的推移），`quarter`（四分之一圆从格子角上长出，用于进入终章），`iris`（一个圆从上一张卡片人物的中心张开，伴随一个收缩的圆环），`flip`（11×6 的图块网格翻转）。普通卡片按 `['quarter','rows','iris','flip','cols'][ci % 5]` 轮换。在田径长镜头内部**没有**转场：改由摄影机甩镜。
- **只在运动处加运动模糊**：在转场窗口内 `isFast(t)` 为真，此时 `G.renderFrame` 在 0.5/60 秒的快门内平均 5 个子帧。静止的卡片帧只渲染一次。

## 片尾卡

- 卡片上的文字*就是*文字层；没有额外烧录任何内容。`pictogram-motion.srt` 列出所有标题卡（开场文字、章节标题、每张卡片 "01/43  ATHLETICS — SPRINT / 短距離"、口号、片尾卡），由 `demo/srt.cjs` 从 EDL 生成。
- **双语规则**：英文始终是大标题。第二语言由 `?lang=` 决定：`ej` 把日文放在大号第二行（`s.jpBig || s.jp`）并去掉小号日文行；不带 `?lang=ej` 时（页面自身的默认值，`scenes.js`），中文为大号、日文为小号。渲染和静帧脚本会传入 `?lang=ej`，除非 `LANGQ=zh`，所以发布的影片是英日版。
- **结尾序列（示范片）**：奶油色片尾卡，红日 + 五色圆环 → **IMAGINE ONE ASIA / ここで、ひとつに。**（官方口号）→ **AICHI-NAGOYA 2026**、日期、五条色条和署名行 → 淡出到黑（最后 1.3 秒）→ 2 秒黑场尾巴，伴随音乐余韵。
- **署名行**：我们库的示范片以 "LemoLab × Claude Opus 5.5" 结尾。它位于片尾卡上，在五条色条下方居中：`finaleScene` 中的 `G.maskText(ctx, 'LemoLab × Claude Opus 5.5', W / 2, 1000, F.mono(24), rgba(G.INK, 0.6), inv(0.6, 1.2, l), { ls: '4px', align: 'center' })`（紧跟在色条循环之后）。它在片尾卡落定 0.6 秒后向上滑出（紧接色条之后），停留约 3.5 秒，并随卡片一起淡出。它比日期行更低调，所以永远不会与标题争夺注意力。这个落款只属于本库示范片；用户的影片不带 LemoLab 署名，也不要复制这张卡片（改编代码时请把这一行从 `finaleScene` 中删掉）。

## 制作笔记

```
styles/pictogram-motion/demo/
  index.html      loads fonts + edl.js + engine.js + poses/*.js + scenes.js; exposes window.render(t), DUR, READY
  edl.js          edit decision list: every intro/chapter/card/finale shot with beats, names (EN/ZH/JP), pose, flags
  engine.js       G: easing, rng, palette, grid pattern + motifs, pictogram skeleton, text helpers
  poses/          base.js (pose API + props G.P) + one file per chapter: ath aqua ball combat power nature asia (70 poses)
  scenes.js       intro, chapter card, card layouts A/B/C/M, athletics long take, finale, HUD, transitions, motion blur
  render.mjs      headless-Chrome frame renderer (stills / video, N workers → seg_*.mp4 + list.txt)
  shot.mjs        quick JPEG stills (+ --sheet contact sheet via sheet.py)
  lab.mjs lab.html   pose check sheets; lab.mjs also screenshots cover.html / cover34.html (4:3 and 3:4 posters)
  mux.sh          concat segments → 2 s tail → grain → + music.wav → mp4
  srt.cjs         title-card .srt from the EDL
  music/          music.py (score), export_timeline.cjs (EDL → timeline.json), timeline.json, report.txt
  fonts/          Inter Tight, Noto Sans SC, Noto Sans JP, DM Mono (OFL)
  ref/            official reference images (NOT used by the film, do not publish)
```

所有命令都在 `styles/pictogram-motion/demo/` 下运行。Node 使用仓库的 `node_modules/playwright-core`，Chrome 由 `core/render/browser.mjs` 查找（playwright 无头 shell 或 `PLAYWRIGHT_CHROME`）。**脚本默认为英日版**（`LANGQ=ej`）；设置 `LANGQ=zh` 得到中文版。

```sh
cd styles/pictogram-motion/demo

# 1. Edit → timeline for the music (re-run after every change to edl.js)
node music/export_timeline.cjs                       # → music/timeline.json

# 2. Score (≈30 s; writes music/music_bed.wav, sfx.wav, music.wav, report.txt)
../../../.venv/bin/python music/music.py
grep "shots pass" music/report.txt                  # expect 79/79

# 3. Pose check sheets and stills while working
node lab.mjs stills/lab_ath.png "p=sprint,hurdles,relay&n=8&beats=4"
node shot.mjs 24.8 63.2 104.9 153 --sheet            # EN-JP stills → stills/t_*.jpg + stills/sheet.jpg
LANGQ=zh node shot.mjs 63.2                          # Chinese version still

# 4a. Render — EN-JP (default): 9696 frames → out_ej/seg_*.mp4
node render.mjs video 12                             # 12 workers ≈ 2 min on an M-series Mac; use 2–3 when sharing the machine
./mux.sh                                             # → ../pictogram-motion.mp4 (163.6 s, 9816 frames)

# 4b. Render — Chinese version
LANGQ=zh node render.mjs video 12                    # → out/seg_*.mp4
OUTDIR=out ./mux.sh                                  # → out/pictogram-motion_zh.mp4

# Partial re-render (e.g. only the ending): START/END in seconds, into a separate folder
START=148.1333 END=161.6 OUTDIR=out_tail node render.mjs video 2

# 5. Subtitles and posters
node srt.cjs                                         # → ../pictogram-motion.srt
node lab.mjs stills/cover_ej.png "lang=ej" cover.html      # 2880×2160 poster
node lab.mjs stills/cover34_ej.png "lang=ej" cover34.html  # 2160×2880 poster
```

两个语言版本的区别：唯一的开关是 URL 查询参数 `?lang=ej`。`render.mjs` 和 `shot.mjs` 根据 `LANGQ`（默认 `ej`）添加它；`scenes.js` 把它读入 `G.EJ` 并切换第二语言行（开场标题、数字滚动标签、ON YOUR MARKS、卡片、章节卡、片尾卡）。`render.mjs` 把英日版分段写到 `out_ej/`，中文版写到 `out/`；`mux.sh` 读取 `OUTDIR`（默认 `out_ej`）。画面时间和音乐完全相同。

`render.mjs` 在每个 worker 中把 JPEG-100 截图通过管道送入 ffmpeg（`libx264 -crf 12`）；`mux.sh` 把拼接后的影片以 `-preset slow -crf 14`、60 fps、GOP 120、AAC 320k 重新编码，并克隆出 2 秒尾巴，让音乐余韵在黑场上播完。

我们踩过的坑（其中几条与本片的道具有关）：

- **人物环境吃掉了文字。** 水面、坡道、栅栏和球网属于人物层，会蔓延到文字栏里。解决：`stageFigure` 渲染到独立缓冲区，并应用一个 `destination-in` 渐变遮罩（`{x0|x1|y1, f}`），在文字区域前 90–120 px 把该层淡到零。
- **gold 和 ochre 需要深色文字和深色人物**（`fg #211904 / #1e1409`），它们的圆盘用*更浅*的色阶 `t[4]`。金色上的奶油色对比度不达标。
- **ink 章节的圆盘在 `t[1]` 下消失了。** ink 上的太阳圆盘用 `t[3]`。
- **图案画布很大**（每张 2520×1260，而且每张卡片都用新的种子）。要缓存它们，但给缓存设上限：`G.pattern` 保留约 10 项的 LRU。当 12 个浏览器同时渲染时，无上限的缓存会迅速吃光内存。
- **zsh 循环**：在 `while read line` 循环中变量不会按词拆分。把时间列表传给 `node shot.mjs` 时用 `${=line}`。
- **水平姿态**（游泳）需要把舞台右移（`wide`：圆盘在 1370，文字最大宽度 700），否则手臂会穿过标题。
- **官方视觉识别**：示范片非常接近地模仿了一项真实赛事的视觉识别。这只有在非官方粉丝作品中才勉强可以接受；用这套代码制作的影片必须替换它，见 [替换赛事元素](#replacing-the-event-elements)。

## 引擎参考

### `engine.js`（window.G）

| API | 作用 |
|---|---|
| `G.E.{lin,io,o2,o3,i3,io3,oExp,iExp,ioExp,oBack,o5}` | 缓动函数（输入限制在 0..1） |
| `G.clamp, G.lerp, G.inv(a,b,x)` | `inv` = x 在 a 和 b 之间的归一化进度并做限幅；所有时间控制都用它 |
| `G.rng(seed)` | 确定性的 mulberry 风格随机数生成器 |
| `G.PAL[key]`, `G.CYCLE`, `G.CREAM`, `G.INK`, `G.mix(a,b,t)`, `G.rgba(hex,a)` | 色板与颜色辅助函数 |
| `G.pattern(pk, seed, {spread=1, density=0.5, cell=180})` | 返回一张缓存的图案画布（比屏幕宽 3 格） |
| `G.drawPattern(ctx, pat, offs(row)→px, {oy})` | 按每行的水平偏移绘制图案（限制在 ±1 格） |
| `G.motif(ctx, kind 0–13, x, y, size, [bg, main, sub, accent], rng)` | 一个带图案的格子 |
| `G.joints(pose)` → `{hip, neck, sho, head, up, aL, aR, lL, lR}` | 由姿态对象生成骨架 |
| `G.drawFigure(ctx, J, nearCol, farCol)` | 绘制图标人物（单位 = 身高） |
| `G.keyPose(keys, u, loop?)`, `G.lerpPose(a,b,t)` | 以拍为单位的关键帧姿态；每个关键帧为 `{b, ...angles, e:'easing'}` |
| `G.runCycle(phase, k, {lean})`, `G.walkCycle(phase, k)` | 程序化步态（相位以周期计） |
| `G.fitFont(ctx, text, 'en'/'zh'/'jp', weight, px, maxW, ls)` | 缩小字号以适配宽度 |
| `G.maskText(ctx, text, x, y, font, col, p, {align, ls, dir})` | 遮罩上滑入场，p 0→1 |
| `G.typeText(ctx, text, x, y, font, col, p, {align, ls, caret})` | 打字机效果 |
| `G.hair(ctx, x, y, w, col, p, lw)` | 细线划出 |

**姿态角度约定**：`rot` = 整个身体（正值 = 向前倾）；`torso` = 上身前倾；`head` = 点头。四肢从"竖直向下 = 0°"开始计量，向前 = 90°，举过头顶 = 180°，向后为负。手臂在躯干空间中，腿在身体空间中。`aR2` 和 `lR2`（前臂、小腿）是同一坐标系下的绝对角度，而不是相对于上一段。R = 近侧（亮），L = 远侧（暗）。`x, y` 移动髋部。

### 姿态定义（`poses/*.js`，约定见 `poses/base.js`）

```js
POSES.name = {
  pose: (u) => ({...}),            // or keys: [...] + loop: beats   (u = beats since the card started)
  back:  (ctx, J, u, C) => {},      // props/environment behind the figure (unit = body height, origin = hip)
  front: (ctx, J, u, C) => {},      // props in front (ball, racket, bow)
  second: (u) => ({...}), secondX: [dx, dy], secondFace: -1,   // opponent / partner, drawn in C.far2
  fig: { s, x, y },                 // scale/offset inside the stage
  iconU: 0.6,                       // which beat to freeze for the finale icon wall
};
// C = { fg, far, far2, acc, bg, line } from G.colorsFor(pk, discColour)
// props: G.P.ball, G.P.racket, G.P.stick, G.P.ground, G.P.speed (speed lines), G.P.arc (flight arc)
```
用 `node lab.mjs out.png "p=a,b,c&n=8&beats=4&pal=red"` 检查姿态：每一行是一个姿态，在 `beats` 范围内采样 n 个时刻。

### `edl.js`

`chapter(id, no, en, zh, jp, palKey)` 添加一张 8 拍的章节卡。`card(n, en, zh, jp, pose, {beats=4, sub, fam, jpBig, track, water, racket, family})` 添加一个条目。`fam: true` 表示大标题是 `sub`，`en` 变成小号的家族行。`track: true` 把卡片放进长镜头（所有跑道卡片必须连续）。`racket: true` 生成带滑动转场的 2 拍 B 版式卡片。`palKey 'multi'` 每张卡片轮换一次 `G.CYCLE`。开场和终章为 `{kind:'intro'|'finale', beats: 48}`。脚本计算 `b0, t0, dur`，然后 `EDL.DUR` = 总拍数 × 0.4 秒。

### `scenes.js`

`G.renderFrame(ctx, t)` → `frame()` 用二分查找找到镜头，判断 t 是否处于转场窗口内，把 A 和 B 渲染到离屏缓冲区并合成，然后绘制 HUD。关键函数：`cardScene`（通过 `layoutOf` 选择版式）、`chapterScene`、`trackScene`（`trackCam`、`stationX`、`SPEC`、`RUNNING`）、`introScene`、`finaleScene`（`GRID 9×5`、`rings()`）、`hud`、`transType` / `composite`、`stageFigure(ctx, poseName, u, C, x, y, scalePx, asm, mask)`、`patBg`、`multiBg`、`textBlock`、`sun`、`bigNumber`。

### 最小示例 — 一张新卡片和一个新姿态

```js
// poses/nature.js (or a new poses/xxx.js added to index.html)
POSES.kite = {
  iconU: 1,
  keys: [
    { b: 0, torso: -6, aR1: 150, aR2: 160, aL1: 20, aL2: 40, lR1: 10, lL1: -12 },
    { b: 1, torso: -12, aR1: 170, aR2: 175, aL1: 30, aL2: 60, lR1: 18, lL1: -20, e: 'oExp' }, // tug on the beat
  ],
  loop: 2,
  front: (ctx, J, u, C) => {                     // string + diamond kite, all geometry
    const h = J.aR[2], k = [h[0] + 0.55, h[1] - 0.75 + 0.04 * Math.sin(u * Math.PI)];
    G.seg(ctx, h, k, 0.01, C.line);
    G.poly(ctx, [[k[0], k[1] - 0.12], [k[0] + 0.08, k[1]], [k[0], k[1] + 0.12], [k[0] - 0.08, k[1]]], C.acc);
  },
};
// edl.js, inside a chapter
card(44, 'KITE FLYING', '放风筝', '凧揚げ', 'kite', { sub: 'NEW' });   // n = index shown as "44 / N"; update the total (see below)
```
然后：`node lab.mjs stills/lab_kite.png "p=kite&n=8&beats=4"` → `node music/export_timeline.cjs` →（如果章节移动了，更新 `compose()`）→ `node shot.mjs <t>` → 渲染。

### 替换赛事元素

| 内容 | 位置 | 替换为 |
|---|---|---|
| 赛事名称、届次、主办城市、日期 | `scenes.js` 372–373、398–407、417、539–541、562–566；`cover.html` 94–114；`cover34.html` 90–113 | 你自己的标题和日期行 |
| 口号 "IMAGINE ONE ASIA / ここで、ひとつに。/ 在这里，合而为一" | `scenes.js` 534–536；封面 | 你自己的两行口号 |
| 类似会徽的标志（红日 + 五环，`rings()`、`RINGS`） | `scenes.js` 341–352，开场 356–375，终章 509–531 | 一个原创标志，例如用网格图案搭出的你自己的形状 |
| 色板名称（Jonetsu Red、Kakitsubata Purple、Shinrin Green、Kinshachi Gold、Dento Ocher）及色值 | `engine.js` `PAL`（第 45–51 行）；名称会印在章节卡上（`scenes.js` 246） | 一套自定义的五色相、每色 5 个色阶；浅色相保留深色 fg 规则 |
| 条目清单、数量 "/ 43"、43 格 HUD 刻度、"469 EVENTS / 16 DAYS"、终章 "2026" 图块 | `edl.js`；`scenes.js` 118、184、414–418、512、570 | 你的清单和数字（从 `CARDS` 推导，而不是硬编码 43） |
| 配乐中的章节布局 | `music/music.py` `EXPECTED` + `compose()` | 重新编排的段落 |
| 官方参考图片 | `demo/ref/` | 绝不发布；自己收集参考资料 |

保留这套语法：带行错位的网格图案、图标运动员、双语遮罩上滑文字、带编号和进度的 HUD、带节奏阶梯的踩拍卡片、一个长镜头，以及图标墙终章。
