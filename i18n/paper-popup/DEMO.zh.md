# 纸片立体书 — 我们的示范片

这只是众多可能中的一个例子。不要照搬它的故事、结构、镜头、道具或时间安排。

示范片：*The Little Sprite's Adventure*（*Pip's Paper Adventure*，小精灵冒险记）（133.0 s，1920×1080，60 fps）· `paper-popup.mp4` · 源文件在 [`demo/`](demo/) · 引擎：three.js r170（WebGL2）在 headless Chrome 中逐帧渲染，所有纸片美术用 Canvas2D 绘制，配乐剪辑与混音用 Python


## 故事与结构

一本故事书在真实的木书桌上打开，变成一座舞台；结尾时主角从书页上跳出来，落进真实的房间。

示范片如何运用这些原生手法：

| 原生能力 | 在示范片中的故事用法 |
|---|---|
| **书本打开** | 开场是一个实体的仪式：一本合着的书，一声吱呀，封面向上掀起，世界伴着一点闪光一块一块弹立起来。这就是“很久很久以前”。 |
| **翻页 = 换场** | 每一章就是一个跨页。转场是真实的翻页：一张弯曲的纸，正面是旧的地面，背面是新的天空，旧的立体件折倒的同时新的立体件弹起。书内没有剪切。 |
| **纸片机关** | 拉条机关就是故事节拍：一根小棍上的太阳从山后升起、黄昏时落下，一扇装了铰链的门，由三条波浪纸条滑动组成的河流，一片由**四块百叶从白天翻到黑夜**的天空（像三面翻广告牌），还有用线吊下来的月亮和星星。 |
| **纸就是角色** | 一个皱成一团的坏脾气家伙（Crumple）被**抚平**，“噗”地一声变成一架折好的纸飞机（Fold），成了朋友，后来又成了交通工具。 |
| **书页的边缘** | 最后一页没有画完（铅笔草图，“The End”印在地面上）；主角望向书页边缘之外，纵身一跳，落在真实台灯下的真实书桌上。 |
| **真实的光一直都在** | 黄昏时那句“另一盏灯亮了”，就是真实的台灯在书页上方变亮。回报在结尾：“一盏阅读灯……还有一个人，在跟着一起读。” |

故事形状：真实书桌的定场（10 s）→ 书本打开 → 第 1 章：家园世界与主角的愿望（书页之外的光）→ 第 2 章：一个障碍角色，先被跺脚打败，然后被*帮助*（被抚平），变成了同伴 → 第 3 章：一段旅程，带一个笑点（鲸鱼喷出彩纸屑）和一次白天 → 黑夜的翻转 → 最终章：空白的最后一页，恐惧，“Here goes!” → 同伴接住主角，两人飞出书本、掠过书桌 → 落地、揭示、“Hello, big world!” → 书桌上的片尾标题，加上“The End?”。

我们当时建议的改编方式（作为历史保留；现在的范围见 STYLE.md §11）：把题材的世界做成书的各个跨页（3–4 章，每章一个纸片机关），给主角一个指向书*外*的愿望，结尾跨进真实的房间。

## 镜头

单一的虚拟微距摄影机，fov 30（反打镜头为 56），以 `[t, pos xyz, target xyz, fov, aperture, focus]` 的形式在 `main.js SH` 中设关键帧，并用单调三次插值（`track`）过渡。每个内层列表是一个连续镜头；新的列表 = 一次硬切。

| 节拍 | 摄影机 |
|---|---|
| 定场 | 高高位于书桌上方（1.1 m 远），缓慢下降的移动镜头推向合着的书；台灯光束中漂着灰尘微粒。 |
| 书本打开 | 低位、正面地停在书页上，封面竖起；闪光上升。 |
| 书中 | 与纸片演员平视：摄影机离书页 5–10 cm 高、后退 30–45 cm，焦点在演员上（光圈 2.2–2.5，浅景深）。缓慢的横向移动，跟随角色行走。 |
| 翻页 | 向上向后拉到能看到整个跨页的 3/4 视角（光圈 1.8–2，景深更深），让翻动的书页看得清，然后再降入新世界。 |
| 情绪特写 | 推镜到距脸部 28 cm（光圈 2.5）。 |
| 书页的边缘 | **反打镜头**：摄影机在 Pip 身后（fov 56，对焦 11 cm），越过书页边缘望向真实、虚化的房间和巨大的台灯。这是唯一一次看到“外面”。 |
| 飞出 | 切到书桌的正面全景（1 m，fov 32）；跟着纸飞机掠过书桌，然后摄影机低低地停在木桌面上 Pip 的高度（光圈 4，对焦约 0.52 m）。 |
| 结尾 | 缓慢向后、向上拉镜，揭示整张书桌和身后打开的书，用于片尾标题。 |

景深（`post.js`）：CoC 以像素计，最大 14，64 采样黄金角螺旋采集。

## 运动参数

- 立体件弹起：`back(seg(t, t0, t0+.55), 1.7)`；每块的延迟是在所属跨页的 `RISE` 时间之后 `(.3 − z) × 1.2` s；靠后的块向后躺倒（`dir −1`），其余块正面朝下向前倒（`dir +1`）。
- 摇摆：绕底部 `sin(1.6t + phase) × sway`（0.01–0.08 rad）。
- 角色：姿态量化到 1/40；眼睛 `open/happy/wide/closed/dizzy`，嘴巴 `smile/open/o/grin/worried/determined`，每 3.7 s 眨一次眼。行走 = 双腿按 `sin(phase)` 摆动，弹跳 `|sin(phase)| × 1.2 mm`，手臂反向摆动；每半步相位前进 1.8 cm。转身：`S.face = cos(...)` 驱动 `scale.x` 翻转（FrontSide 是正面画，BackSide 是后脑勺画）。
- 跳跃：`arc(t, t0, t1, a, b, h)` + 起跳和落地时的挤压（`pipState` 中的 `land`、`crouch`）+ 一团纸屑烟。
- 翻页（`book.setLeaf(u)`）：40 段条带，`φ = θ·(1 − L·(s − ½))`，弯曲 `L = .55·sin(πu)`，用 `eio` 在 2.3 s 内缓动。
- 机关：四块天空百叶依次翻转，间隔 0.28 s；门用 `back()` 摆动；河流纸条在旁白每说一次“swish”时滑动 ±12 mm。

## 声音结构

- **旁白**：一位温暖的讲故事人，Kokoro `af_bella`，语速 0.9，en-us；15 句短句（2–9 s），写得像绘本（“The cardboard hills. The paper sun on its wooden stick.”）。发音与屏幕显示不同的句子写在 `tts/lines.json` 里（例如 “Swish Swash Sea” 不带连字符；用 “...” 代替 “…”）；显示文本在 `story.js VO` 中。以峰值的 1 % 为阈值裁掉静音（头部 +10 ms，尾部 +100 ms）。每一句都用 whisper 核对（`asr.py`；`words.py` 取词级时间，用来对齐笑点）。
- **角色说话音**：对话气泡以每秒 30 个字符打字，每隔一个字母发一声“哔”；Pip = 方波，明亮的音高（约 C6），Crumple = 低沉的 180–240 Hz，Fold = 三角波。
- **音乐**：三首 Kevin MacLeod 的曲子（CC BY 4.0），在 `music/edit.py` 中剪辑：*Dreamy Flashback*（0–16.2 s，1.6 s 淡出）用于真实书桌；*Jaunty Gumption* 从 15.4 s 起贯穿整个纸片世界，内部有**一处与小节对齐的跳剪**（曲子的 73.21 s → 102.79 s，0.42 s 交叉淡化），由 `music/jump.py`/`jump2.py` 选出（节拍同步的色度 + MFCC 自相似度，剪掉的长度是 4 拍的整数倍），让歌曲真正的结尾落在 104.22 s——正是 Pip 跳出书页的那一刻；*Heartwarming* 从其 39.38 s 处开始，在 104.8 s 进入（×1.15），用于真实世界和片尾卡。
- **音效**，全部在 `mix.py` 中根据 `events.json`（由 `render.mjs events` 导出的 250 个事件）合成：书本吱呀声 + 闷响、立体件弹起声（正弦扫频 + 纸张窸窣）、翻页嗖声、门的吱嘎声、“boing”弹簧声、小跳、脚步声（每个行走半周期一下轻敲 + 窸窣）、纸卷声、“!”的砰声、跺脚、NICE/GREAT 琶音、闪光（铃声）、“噗”、折纸声、呼啸、水花、鲸鱼喷水、百叶咔嗒、星星叮声、台灯开关 + 温暖和弦、落地滑擦。各类型增益见 `G` 表。
- **环境声底**按跨页区分：书桌上是房间底噪 + 时钟滴答，山谷里是鸟鸣 + 河流，黄昏是蟋蟀，森林里是鸟鸣 + 树叶沙沙，海上是海浪，最后一页和真实世界里是房间底噪。
- **混音**：人声 90 Hz 高通，压缩（−24 dB，3:1），限幅，在有语音的段落比音乐高 8.5 dB；语音下音乐闪避 40 %（300 ms 平滑）；人声加 7 % 混响；音效每个声道限幅到 0.5；环境声 ×2。归一化到峰值 0.89，然后 `mux.sh` 应用 `loudnorm I=−14 TP=−1.2 LRA=11`。

## 色板与道具

**尺度（米）：** 书页 0.44 × 0.30（`BW`、`BD`），书页块高度 `PG` = 0.0175。Pip 高 `H = 0.036`，Crumple 0.042，纸飞机长 0.052，鲸鱼宽 0.10，小船 0.062。山丘宽 0.2–0.26，树高 0.05–0.16。摄影机近裁剪面 0.004 m。

**书桌：** 胡桃木桌、台灯、茶杯、闹钟、铅笔、盆栽（Poly Haven CC0）；`lythwood_lounge_2k.hdr` 作为环境和背景（模糊度 .22，偏航 2.3），胡桃木贴皮（`#c9a88a` 色调，env .8），一支程序化生成的铅笔。书：精装 44 × 30 cm，书脊在远侧，封面翻到 90° 并立在书页后面，充当一幅画出来的天空。

**剪纸质感**（`paper.js finishCut(art, border, o)`），在三圈（r、.66r、.33r）上取 16 个以上角度：灰色纸板边 `#b9ad9c`，比白边宽 2.5 px，向下偏移 1.5 px；米白边框 `#fffdf7`，12–16 px（静态道具在 5200 px/m 下为 14 px，角色 16 px）；512 px 纹理颗粒，alpha .5–.85。

**绘制**（`art.js`）：墨线 `#3a2a24`，轮廓线 9 px（`LW`），细节线 5 px（`LW2`）；`crescent(x, path, shade, dx, dy, base)`；`blob`、带 3 次谐波噪声的 `smoothClosed`。脸部：大大的黑色椭圆眼睛带两个白色高光，弧形嘴巴，粉色腮红。

| 用途 | 颜色 |
|---|---|
| 家园山谷 | 草地 `#86c763`→`#9fd57a`，山丘 `#b5e39a` `#a9dd8c` `#8fd06e`（阴影 `#6fb553`），小路 `#ecd49a`，天空 `#7cc6ef`→`#c9ecf7` |
| 森林 | 地面 `#4f8f46`→`#62a653`，后排松树 `#8cc9a0`，前排松树 `#3f9a5c`，天空 `#a8e0cf` 带光柱 |
| 大海 | 波浪由浅到深 `#9ad8f5` `#79c3ee` `#58ade3` `#3f95d6` `#2f7fc4`，白天天空 `#4fb3ea`，夜晚 `#131d44`→`#4a5a94` |
| 最后一页 | 奶油色纸 `#f5eedc`，石墨铅笔线 `rgba(70,72,82,.45)`，IM Fell English 字体的 “The End” |
| 主角 Pip | 皮肤 `#ffe2bd`（阴影 `#f3c393`），叶子帽 `#62c24c`/`#3e9a34`，短袍 `#3fa1de`/`#2a78b3`，靴子 `#8a5530`，翅膀 `#d4f3ff` |
| 点缀色 | 蘑菇屋红 `#e8413a`，太阳 `#ffd766`，路牌/横幅金色 `#ffcf3f`，缎带红 `#d8423a` |
| 书 | 布面 `#1f5566`，烫金 `#e0b456`（金属度贴图），书页边缘 `#efe6d2` 带细线 |

**立体件**（`cutmesh.js cutMesh`）：背面颜色 `#efe8da`（门是 `#8a5a34`），通过 `onBeforeCompile` 实现；`alphaTest .5` + `alphaToCoverage`；`customDepthMaterial`。小船 = 后面一张船帆卡 + 前面一张船身卡；Fold = 四个三角形铰接在一条龙骨上。

**字体：** Fredoka 500/600/700（字幕、气泡、路牌），Lilita One（封面、章节横幅、动作字、片尾标题），IM Fell English（封面标语、“The End”、“The End?”），ZCOOL KuaiLe（中文）。全部为 OFL 授权，由 `fetch_fonts.mjs` 下载到 `demo/fonts/`（中文子集 = 只包含源文件中出现的字符）。

**实际制作的标题与字幕：**
- 旁白字幕（`hud.js drawSubs`）：英文 Fredoka 500 40 px，奶油色 `#fffaf0`，8 px 深棕描边，柔和阴影，1720 px 处换行；中文用 ZCOOL KuaiLe 32 px 放在下方。在台词前 0.3 s 淡入，停留到音频结束后 0.25 s，0.3 s 淡出。
- 对话气泡（`drawBubbles`）：圆角半径 44，6 px 墨线轮廓，柔和投影，尾巴每帧从 3D 位置投影得到，用 `back()` 弹出，英文以每秒 30 字符打出（Fredoka 600 46 px），然后是中文（ZCOOL KuaiLe 32 px，`#7a5e4c`）和一个上下浮动的红色“下一句”三角形。
- 章节横幅（`drawChapter`）：用两根线吊着的纸板牌子，红缎带写“Chapter N”，标题用 Lilita One 84 px 金色 `#ffcf3f` 加 12 px 墨色描边，中文在下方。
- 动作字（`drawAction`、`drawBang`）：“NICE!” / “GREAT!” 用斜体 Lilita One 120 px，渐变填充，白色 + 墨色双重描边，放射线；受惊的主角头上出现一个红色“!”。
- 标题：书的封面（布纹纹理 + 带粗糙度/金属度贴图的烫金字 “The Little Sprite's Adventure ~ a paper tale ~”，以及一幅圆形的 Pip 插画）。
- 由 `story.js` 生成双语 `.srt`（`make_srt.mjs`）：旁白 + 气泡，先一行英文再一行中文。

## 片尾卡

`drawEnd`，从 123.4 s 开始，叠在实时的书桌镜头上：标题用 Lilita One 96 px 金色（y 170），中文标题（y 262），斜体 “The End?” 弹出（y 350），然后从 127.6 s 起署名和素材致谢（22 px，y 960/998/1036；中文一行用 `'"ZCOOL KuaiLe", Fredoka'`）一起淡入；最后 1.5 s 淡出到黑场。

署名 **“LemoLab × Claude Opus 5.5”**（× = U+00D7）只属于本库的示范片；用户的影片不带 LemoLab 署名，也不复制这张卡。在示范片中它居中放在 “The End?” 下方 y 430 处：Fredoka 600 36 px，奶油色 `#fffaf0` 填充加 7 px `rgba(30,20,14,.75)` 描边（它压在奶油色的背景页上，靠描边才看得清），在 127.6 s 与素材致谢一起淡入，绝不遮挡角色。

## 与本示范片相关的坑

- **单平面的小船挡住了坐在里面的角色**：拆成船帆（在后，z −3 mm）和船身（在前，z +2 mm），Pip 夹在中间。
- **前景虚化**：在 20.9 s，森林里的蕨类和一丛灌木贴近镜头，占满了画面。
- **混音器 bug**：把立体声（N×2）数组传给一维限幅器，会悄无声息地把所有音效压到 −96 dB。要对每个声道分别限幅。
- **可用的阴影设置**：聚光灯阴影贴图 4096²，bias −6e-5，normalBias 4e-4。树叶材质：自发光贴图 = 颜色贴图，自发光 .42。
- **Headless WebGL 速度**：默认的 Chrome 使用 SwiftShader（约 620 ms/帧）；在 Apple Silicon 上加 `--use-angle=gl --enable-gpu --ignore-gpu-blocklist` 可降到每帧几十毫秒。通过 HTTP 提供页面（`serve.mjs`，在 `render.mjs` 内部启动）。
- **Poly Haven API**：Python 的 `urllib` 会得到 403；用 `curl` 下载。
- **字体子集化**：`fetch_fonts.mjs` 只包含下载时 `story.js/hud.js/main.js/art.js` 中出现的字符。ZCOOL KuaiLe 子集没有拉丁字形，所以中文致谢行里的拉丁单词回退成了系统衬线体；请用 `'"ZCOOL KuaiLe", Fredoka'`。
- **重绘开销**：Pip 的画布只在姿态（量化到 1/40）变化时才重绘。

## 制作说明

```
styles/paper-popup/demo/
  index.html  importmap (three from demo/node_modules) + fonts.css + main.js
  main.js     scene: renderer, HDRI, desk & props, book, particles, choreography (pipState/crumpleState/foldState),
              camera keys SH, lightsAt(t), sound-event list EV, window.render(t)
  story.js    timeline (single source of truth): DUR, VO narration, BUB bubbles, CHAPTERS, CREDITS, OPEN, TURNS
  book.js     the book (cover, spine, page blocks, ground/back pages, curling leaf), texOf()
  sets.js     page art per spread (pages()), pop-up pieces (buildSets), sky slats, updatePops/riseOf, RISE/FOLD
  art.js      all Canvas2D drawings: drawPip/drawPipBack, drawCrumple, drawWhale, props (hill, pine, mushHouse, …)
  paper.js    canvas helpers: finishCut (white border + card edge + grain), paperFill, crescent, blob, sh
  cutmesh.js  cutMesh (front art / back paper / cut-out shadow), blobShadow, thread, particles (InstancedMesh)
  actors.js   makePip, makeCrumple, makeFold (foldable paper plane), makeWhale, makeBoat
  post.js     DOF pass (CoC + 64-tap gather) → bloom → vignette/warmth → output
  hud.js      2D overlay: subtitles, bubbles, chapter banners, NICE/GREAT, "!", end card, blip times
  render.mjs  stills / events / video (N workers → out/seg_*.mp4)    serve.mjs  static server
  tts/        lines.json + gen.py (all lines) / gen1.py (selected lines) → voices/*.wav + dur.json
  asr.py words.py   whisper check / word timestamps      music/edit.py  score.wav    mix.py  mix.wav
  mux.sh      segments + mix → ../paper-popup.mp4        make_srt.mjs  → ../paper-popup.srt
```

所有命令都可以在仓库根目录运行。Python = 仓库里的 `.venv`（其中已安装 numpy、scipy、soundfile、librosa、kokoro-onnx、faster-whisper）。

```sh
D=styles/paper-popup/demo; PY=.venv/bin/python
# 0. once: fonts (re-run after changing Chinese text) and music
(cd $D && node fetch_fonts.mjs)
#    download the three MP3s from incompetech.com into $D/music/, then convert to 48 kHz WAV:
for f in Dreamy_Flashback Jaunty_Gumption Heartwarming; do ffmpeg -y -i $D/music/$f.mp3 -ar 48000 -ac 2 $D/music/$f.wav; done
# 1. voice (Kokoro model is shared from core/tts/): all lines, or only some
$PY $D/tts/gen.py af_bella            # → voices/v01..v15.wav + voices/dur.json
$PY $D/tts/gen1.py v04 v07            # regenerate selected lines
# 2. proof-listen
$PY $D/asr.py; $PY $D/words.py        # whisper transcript / word timestamps for gag sync
# 3. timeline: edit story.js (VO start times use voices/dur.json), then check stills
node $D/render.mjs stills 6.5 30 61.8 82.6 118     # → demo/stills/t_*.jpg (STILLS_DIR=out/x to redirect)
# 4. score (only when the edit points change)
$PY $D/music/edit.py                  # → music/score.wav (jump-cut search: music/jump.py, jump2.py)
# 5. sound events + mix
node $D/render.mjs events             # → events.json (250 events)
$PY $D/mix.py                         # → mix.wav (argument = other output path)
# 6. video: 7980 frames, N workers (8 used for the demo ≈ 2.5 min; use 2 when other jobs share the GPU)
node $D/render.mjs video 8            # → out/seg_0..7.mp4 + out/list.txt
# 7. mux (+ film grain noise=c0s=2, loudnorm −14 LUFS) and subtitles
zsh $D/mux.sh                         # → styles/paper-popup/paper-popup.mp4 (OUT=... to write elsewhere)
node $D/make_srt.mjs                  # → styles/paper-popup/paper-popup.srt
```
辅助工具：`shot.mjs page.html out.png`（截取任意页面，例如 `sheet.html` = 角色与道具设定图），`probe.mjs '<js expr>'`（在已加载的场景中求值；`window.DBG` 暴露了 pip/boat/fold/whale/book/cam），`gltest.mjs`（GPU 参数基准测试），`tile.py`（静帧拼图），`music/survey.py`（候选曲目的速度/响度调查）。通用的 `node core/render/still.mjs styles/paper-popup/demo 30` 也能用（页面只用相对 URL）。

## 引擎参考

**坐标系。** 世界单位 = 米，y 轴向上；书桌桌面相对于书页在 y = −PG 处。`book.stage` 是书页坐标系：x ∈ [−0.22, 0.22] 从左到右，z ∈ [0, 0.30] 从书脊（远）到读者（近），y 从书页向上。`book.sky` 是立起来的背景板坐标系（封面打开之后）：x 同上，y ∈ [0, 0.30] 沿背景板向上，小的 +z = 在背景板前面。角色放在 `book.stage` 中；吊着的云/月亮/星星放在 `book.sky` 中。

| 模块 | 关键 API | 说明 |
|---|---|---|
| `lib.js` | `seg(t,a,b)`, `ss`, `eio`, `eo`, `ei`, `back(t,s)`, `spring(t,k,z)`, `env(t,a,b,fi,fo)`, `mulberry(seed)`, `track([[t,[…]],…])` | 所有动画都是 `f(t)`；`track` = 单调三次关键帧（摄影机、飞行路径） |
| `paper.js` | `cv(w,h)`, `finishCut(art, border=14, {paper, edge, grain, grainA})`, `paperFill(x,w,h,col,seed,mott)`, `crescent(x,pathFn,shade,dx,dy,base)`, `blob(x,cx,cy,rx,ry,wob,seed)`, `sh(x,fill,lw,stroke)`, `smoothClosed/smoothOpen`, `GRAIN`, `INK` | 用于一切纸片效果的 Canvas2D 工具包 |
| `art.js` | `cut(wm,hm,draw,{pad,border,ax,ay,raw})` → `{c,w,h,ax,ay}` at `PPM`=5200 px/m; props `hill(w,h,col,shade,seed,{bumps,dots})`, `lolliTree(h,col,shade,seed)`, `pine`, `bush`, `flower(h,petal,seed)`, `mushHouse(h)`, `door`, `windowGlow`, `sunOnStick(r,stick)`, `cloud(w,seed)`, `sign(w,text)`, `fence(w,h)`, `waveStrip(w,h,col,dark,seed,n)`, `boat(w,'sail'|'hull')`, `moon`, `star`, `island`, `mushroom`, `log`, `fern`, `sketchTree`, `sketchHouse`, `leafBit`, `bang`; characters `drawPip(x,pose)`, `drawPipBack`, `drawCrumple(x,{mood,blink,mouthOpen})`, `drawWhale(x,{happy})` | 每个道具都返回一个供 `cutMesh` 使用的条目；锚点（ax, ay）默认 = 底部中心 |
| `cutmesh.js` | `cutMesh(item,{s,backCol,shadow,tex})` → Group (origin = anchor), `blobShadow(r,a)`, `thread(len)`, `particles(geo,mat,n,(i,t)=>({x,y,z,rx,ry,rz,s,col})|null)` → InstancedMesh with `.userData.update(t)` | 剪纸形状的阴影，纸色背面 |
| `book.js` | `coverCanvases(drawIcon)` → `{c,m}`; `makeBook(cover)` → `{root, stage, sky, groundMat, backMat, leafFront, leafBack, setOpen(θ), setLeaf(u), coverMat}`; `texOf(canvas,{linear})`; `BW BD PG` | `setOpen(π/2)` = 完全打开；每个跨页设置 `groundMat.map`/`backMat.map`；`setLeaf(0..1)` = 翻页（0/1 时隐藏这张页） |
| `sets.js` | `pages()` → canvases `sky0 ground0 sky1 ground1 sky2day sky2night ground2 sky3 ground3` (2048 × 1396, `gx(x)`/`gz(z)` map metres to pixels); `buildSets(book)` → `{L, ex}`; `updatePops(L,t)`; `RISE[spread]`, `FOLD[spread]`; internal `popper(list, spread, parent, item, x, y, z, {d, dir, sway, ph, pop, ry})` | 增加一个跨页 = 页面美术 + 一组使用新跨页编号的 `popper` 调用，并扩展 `RISE/FOLD/TURNS` |
| `actors.js` | `makePip(H)` → `{root, body, shadow, pose(p), head()}`; `makeCrumple(D)`; `makeFold(L,S,KD)` → `{fold(f 0..1), drawFace(mood,blink)}`; `makeWhale(w)` → `{setHappy}`; `makeBoat(w)` | 姿态 `p` = `{walk, stride, armL, armR, flap, eyes, mouth, look:[x,y], blink, lean}` |
| `post.js` | `makePost(renderer, scene, cam, w, h)` → `{composer, dof:{focus, aper, maxCoc}, bloom, vig:{uniforms:{amt,fade,warm}}}` | 用 `post.composer.render()` 代替 `renderer.render` |
| `hud.js` | `drawSubs(ctx,t,dur)`, `drawBubbles(ctx,t,{who:[sx,sy]})`, `drawChapter`, `drawAction(ctx,t,[{t0,text,p,col}])`, `drawBang`, `drawEnd`, `blipTimes()` | 全部读取 `story.js`；绘制在 1920×1080 的 `#ov` 画布上 |

**页面约定**（`render.mjs` 需要的东西）：资源加载完后 `window.READY = true`；`window.render(t)` 确定性地绘制第 `t` 秒；`window.DUR`；`window.EV = [{t, type, …}]` 供 `mix.py` 使用（类型列表见“声音结构”；新类型要在 `mix.py` 中加一个新分支）。

**最小示例**——一个新跨页，带一座弹起的山丘、一个在上面行走的主角和一段翻页式的摄影机运动，写成 `main.js` 风格的代码：

```js
import * as THREE from 'three';
import { makeBook, coverCanvases, texOf, BW, BD } from './book.js';
import { cutMesh } from './cutmesh.js';
import { makePip } from './actors.js';
import { makePost } from './post.js';
import * as A from './art.js';
import { cv, paperFill } from './paper.js';
import { seg, back, eio, track } from './lib.js';

const renderer = new THREE.WebGLRenderer({ antialias: false, preserveDrawingBuffer: true });
renderer.setSize(1920, 1080); renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.NeutralToneMapping; renderer.outputColorSpace = THREE.SRGBColorSpace;
document.getElementById('stage').appendChild(renderer.domElement);
const scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(30, 16 / 9, .004, 30);
const post = makePost(renderer, scene, cam, 1920, 1080);
// (load the HDRI + desk exactly as main.js lines 34–43)

const book = makeBook(coverCanvases((x, px, py, w, h) => { /* draw the cover medallion */ }));
scene.add(book.root);
const ground = cv(2048, 1396); paperFill(ground.getContext('2d'), 2048, 1396, '#9fd57a', 2);
book.groundMat.map = texOf(ground);

// a pop-up hill: lies flat (rotation.x = −π/2 · (1−k)) and springs up around its bottom edge
const hill = new THREE.Group(); hill.add(cutMesh(A.hill(.24, .075, '#b5e39a', '#93cc78', 11)));
hill.position.set(0, 0, .04); book.stage.add(hill);

const pip = makePip(); book.stage.add(pip.root, pip.shadow);
const camKeys = track([[0, [.0, .27, .78, 0, .1, .1]], [4, [0, .06, .38, 0, .04, .13]]]);
const sun = new THREE.DirectionalLight('#fff3e0', 2.6); sun.position.set(-.35, .55, .75); sun.castShadow = true;
Object.assign(sun.shadow.camera, { left: -.3, right: .3, top: .3, bottom: -.3 }); scene.add(sun);

window.render = t => {
  book.setOpen(Math.PI / 2 * eio(seg(t, .5, 3.1)));                     // cover swings up into the backdrop
  const k = back(seg(t, 3.0, 3.55), 1.7);                               // pop-up with overshoot
  hill.visible = k > .002; hill.rotation.x = -(Math.PI / 2) * (1 - k);
  const w = seg(t, 4, 7), ph = w * .15 / .018 * Math.PI * 2;            // walk 15 cm, phase from distance
  pip.pose({ walk: ph, stride: w > 0 && w < 1 ? 1 : 0, armL: .25 + Math.sin(ph) * .5, armR: .25 - Math.sin(ph) * .5 });
  pip.root.position.set(-.1 + .15 * w, Math.abs(Math.sin(ph)) * .0012, .15);
  pip.shadow.position.set(pip.root.position.x, .0004, .15);
  const c = camKeys(t); cam.position.set(c[0], c[1], c[2]); cam.lookAt(c[3], c[4], c[5]); cam.updateProjectionMatrix();
  post.dof.focus = cam.position.distanceTo(new THREE.Vector3(c[3], c[4], c[5])); post.dof.aper = 2.3;
  scene.updateMatrixWorld(true); post.composer.render();
};
window.DUR = 8; window.EV = [{ t: .5, type: 'creak' }, { t: 3.1, type: 'pop' }];
window.READY = true;
```

若要把这个引擎用于另一部影片（你自己的故事，而不是这一部），复制引擎文件，写一个新的 `story.js`（台词、气泡、章节、`OPEN`、`TURNS`、`DUR`），替换 `sets.js` 中的跨页（`pages()` + `buildSets`），在 `art.js` 中重画角色，然后在 `main.js` 中重新设置 `pipState`、摄影机列表 `SH` 和 `lightsAt` 的关键帧。book/paper/cutmesh/post/render/mix 保持不变。
