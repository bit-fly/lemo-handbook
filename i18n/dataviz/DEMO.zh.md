# 数据叙事 — 我们的示范片

这只是众多例子中的一个。不要复用它的故事、情节走向、镜头、道具或时间安排。

示范片：*A Hundred Summers*（一百个夏天）（50.0 秒）· `dataviz.mp4` · 源文件见 [`demo/`](demo/)


一百零一个夏天的真实全球气温（NASA GISTEMP v4，6–8 月），讲成一位女性从 1926 年到 2026 年的一生。

## 故事与结构

我们的数据是时间序列，所以画成点和线，再变形为条纹。这只是针对这一份数据集做出的一个选择。

形态：以一个点作冷开场。早期的点温柔而稀疏。中段平稳。加速：手写注记越来越密，铅笔越写越急。画框被冲破，铅笔一缩，翻转到红色那一端。一阵冲刺。**一切提前半拍停止；这是全片唯一的剪切，切入静默。** 然后是最后一个数据点，孤零零的，接着是整条序列的全景。随后变形为条纹，再接入更长的记录，最后是一个留给下一个数值的空格（"Next summer?"）。片尾卡就放在那个空格里。

如何与数据相匹配：101 个点（60–150 个点的序列适合这种形态）；3 条关于人生的注记钉在最先画出的几个标记上（"1926 — she is born."），用蓝色；2 条破纪录注记钉在最后几个标记上，用红色；在数据中找到一个冲破画框的时刻；最后一个点单独享有一段静默。

## 镜头

| 节拍 | 镜头 |
|---|---|
| 冷开场 | 对第一个点的极致特写（约 4×）。写注记时向上俯仰，跟随引线。 |
| 标题 | 拉回到 1.55×。垂线变成 x 轴；大标题在上方排版出现。 |
| 早年 | 再推回去，然后跟随铅笔，最新的点位于画面宽度约 62 % 处。随着时间加速缓慢拉镜（2.3 → 1.7×）。 |
| 攀升 | 随曲线上升做升降镜头，同时荷兰角悄然出现（0 → −1.5°）。 |
| 冲破画框 | 2 帧内急推（1.22 → 1.42×），加逐渐衰减的震动。重新缩放时一个小顿挫。 |
| 冲刺 | 快速拉回到 1.0×，滚转到 −3°，持续 2 px 的微颤。 |
| **那一剪** | 硬切到空位的特写：虚线柱、`2026` 标签、水平的地平线。从虚焦的前景铅笔移焦到笔尖落下的那一点。 |
| 揭示 | 在写最后一个点的注记时停留，然后拉回到全景（1.06×）。坐标轴重新缩放以容纳全部数据。 |
| 变形 | 固定机位。 |
| 尺度 | 拉镜加摇镜（→ 0.72×），接入更早的记录。 |
| 回响 | 推向那个空格；它扩展成片尾卡（画中画）。 |

关键时刻主体占画面高度 ≥ 1/3：第一个点加注记、百年图表、条纹带。

为什么对这份数据选择这条路线：第一个事实用极致特写，因为一位女性的出生就是人的尺度；坐标轴在单位第一次被说出时长出来；跟拍让过去留在身后、未来在前方；升级、意外和冲刺都来自数据本身；变形用固定机位，因为变形本身就是运动；结尾推向空着的下一格，因为下一个数值还无人知晓。每一项都是从 STYLE.md §6 中做出的一个选择，而不是这种风格的默认做法。

运动数值：90 BPM（之所以选它，是因为在 24 fps 下一个 1/32 音符正好是 2 帧）；7 个点落在四分音符上 → 24 个在八分音符上 → 40 个在十六分音符上 → 27 个在三十二分音符上（每 2 帧一个点）。重新缩放：在 1/32 音符上分四步，每步缓动 0.09 拍；第二次重新缩放处于清晰阶段，是平滑的。退缩：定格半拍，然后用 0.5 秒首尾翻转到红色笔头。变形：在 0.85 拍内扫过；每个标记先落到色带中心（前 45 %），再拉伸成一整条条纹（ease-out）并失去外圈；线段在其左端点开始变形时淡出；注记以细小的铅笔记号形式回到色带上方。

## 配乐结构

- 环境声：房间底噪 → 傍晚的蟋蟀 → 大海（"1933" 前 J-cut，之后 L-cut）→ 随着炎热越来越响越来越密的蝉鸣（攀升前 J-cut）→ 静默之后开阔的风声 → 房间底噪。
- 数据发声（`music/score.py`）：`midi = 62 + (v + 0.4) × 17`；低于中心的值吸附到 D 大调五声音阶。只在最后约 15 个点上加失谐（5 → 45 音分）。静默前的那个音最不和谐（最大失谐加一个小二度影子音）；静默后的最后一个点是最干净、最高的音。
- 底层音乐：铺底 Dmaj9 → G/D → D–Bm–G–A → Bb/D–Dm → 半音簇；踩镲在 9.5 kHz 做低通。静默之后：一个 D 空五度（没有三音，没有回答），变形期间 101 个点全部重放形成的滑奏，尺度镜头下 D 上的 Gmaj7#11，以及片尾卡下**再次响起第一个点的音**。
- 配乐走向：稀疏、温柔的早期点 → 平稳的中段 → 音符变密时节拍细分加速 → 冲刺 → 静默 → 最后一个点独奏 → 整体 → 变形 → 再次响起第一个音。
- 静默：最后一个点之前 1.0 秒真正的数字静默（所有声部）；空格之前 0.67 秒近乎静默。静默之后的第一个声音：最后一次落笔及其音，然后是空格的第一笔。
- 混音：人声下方音乐 −11 dB、蝉鸣 −6 dB；旁白在 300–4000 Hz 频段的信噪比为 8.6–16 dB；−14 LUFS，颗粒 0。
- 人声：Kokoro `af_alloy`，语速 0.92，5 句，绝不压在冲刺、静默或变形上。Whisper 会把数字写成阿拉伯数字：`asr` 设为 "For 50 years…" 和 "…turned 100…"。
- 婴儿的笑声被换成了一个八音盒音符。

## 色板与道具

- 纸 `#F6F3EC`；点阵网格 24 px `#E4DDCF`。墨 `#2B2723`：坐标轴 1.4–1.6 px，序列线 2.4 px，网格线 `#DDD6C9` 1 px，零线 `#BDB4A5` 1.3 px。刻度数字 IBM Plex Mono 17–20 px `#6E665C`。
- 点 r = 6 px，带 1.5 px 墨色外圈；落点弹跳 0.25 秒（×1.55）。
- 色阶，u = (v − centre) / half：`#2166AC` → `#4393C3` → `#92C5DE` → `#D1E5F0` → `#F2EEE8`（中心）→ `#FDDBC7` → `#F4A582` → `#D6604D` → `#B2182B` → `#7A0F1E`（超过 +1）。中心 = 1971–2000 年均值 0.22 °C，半跨度 0.85 °C。
- 手写体 Caveat 世界尺寸 30 px，蓝铅笔 `#2F5D8A` / 红铅笔 `#A8283A`，每个字形 ±1.7° 旋转和 ±2.5 % 基线偏移，抠掉 16 % 的像素制造颗粒感。涂鸦：三卷的波浪、一颗心。
- 铅笔木质锥头 `#E3C79C`，以 35–58° 进入。
- 绘图框在世界空间中为 1500 × 520；第一条注记位于其标记上方，后期注记位于其点的左上方；底部 150 px 留给说明文字。标题 Newsreader 66 px。
- 说明文字：Newsreader 42 px，x = 180，基线 y ≈ 985，引题 `1926–1958`，3 帧上升并淡入，离开时向上翻走；停留规则在 `tools/subs.py` 中断言校验。
- 引擎展示使用 `#D97757` 强调色的闪光。

## 片尾卡

在虚线"下一格"中：标题、`DATA STORYTELLING`、条纹的缩略图加一个空的虚线格、`Lemo-Opuscar · LemoLab × Claude Opus 5.5`、数据/字体/人声/音乐署名（包括 "2026 value preliminary, retrieved 2026-09-26"），以及一句手写的 "Her story is fiction. Every number is real."。LemoLab 落款只属于本库示范片；用户的影片不带 LemoLab 署名，也不要复制这张卡片。

## 制作笔记

```
styles/dataviz/demo/
  data/        GLB.Ts+dSST.csv (as downloaded) + jja.json      tools/extract_data.py  column → json + story facts
  timeline.js  90 BPM grid, year → beat map, every key beat, chart geometry (single source of truth)
  engine.js    the style: paper, camera, pencil strokes, handwriting, dots, stripes, morph, pencil, caption, shapes
  film.js      the story: annotations, camera path, pencil activities, chart layers, end card, events for the mix
  music/score.py   sonification + modular bed (reads events.json)      mix.py   ambience + foley + narration + ducking
  tools/       words.py subs.py cuecheck.py final_asr.py
```
1. 下载数据集并编写提取脚本。打印出旁白将要陈述的每一条事实。
2. 在画任何东西之前先写 `timeline.js`（网格加年份 → 节拍映射）。
3. 先构建 `engine.js`，再构建 `film.js`，并用真实引擎渲染关卡帧（`node core/render/still.mjs … --range`）。
4. `sh demo/build.sh` 在约 2 分钟内从零重建全部内容：提取 → TTS → whisper → 词时间 → 事件 → 配乐 → 提示点检查（107 个提示点，最大 0.03 ms）→ 混音 → 字幕 → 渲染（1200 帧，2 个 worker 约 30 秒）→ 封装（−14 LUFS，颗粒 0）→ 风格帧和海报。
5. 审查：从最终 mp4 生成两次 1 秒间隔的联系表（偏移 0.25 秒），对冲破画框、那一剪和变形做 0.1 秒间隔的胶片条，对最终混音逐句跑 whisper，并做采样级精确的静默检查。

与本片相关的坑：GISTEMP 在季节列之前还有 J-D 和 D-N 两列，所以按表头名称（`JJA`）选列。在 0.17 秒之后才重新缩放的画框冲破看不出来。右对齐的注记：铅笔跳跃占文字阶段的 16 %。`pencilStroke`、`dashedCell` 和 `dataDot` 会自己设置 `globalAlpha`。在跟拍镜头中，世界空间里的标题被画面边缘切掉了。在三十二分音符的密度下，铅笔笔身横压在刚画的点上。

## 引擎参考

`demo/engine.js`（ES module，Canvas 2D，1920×1080；导入 `/core/lib.js`）。世界单位是缩放为 1 时的图表像素。在任何世界空间绘制之前先调用 `applyCam(g, cam)`。

| 函数 | 作用 | 关键参数 |
|---|---|---|
| `drawPaper(g, cam, {dots})` | 奶油色纸张、纤维噪点和点阵网格，固定在世界空间中 | `dots` 0–1 网格透明度 |
| `applyCam(g, cam)` / `w2s` / `s2w` / `viewRect` | 2D 摄影机变换与坐标转换 | `cam = {x, y, zoom, roll, sx, sy}`（sx/sy = 以 px 计的震动） |
| `valueColor(v, {center, half, alpha})` / `rampRGB(u)` | 发散型条纹色阶 | 参考均值 `center`，对称的 `half` |
| `pencilStroke(g, pts, o)` | **用铅笔画任意折线**：抖动、渐细、石墨颗粒、逐笔书写；返回笔尖位置 | `color, width, progress, seed, wobble, passes, grain` |
| `inkShape(g, path, o)` | **任意闭合形状**画成铅笔注记式标记：平涂 + 排线 + 手绘轮廓 | `fill`（强调色）或 `value`（色阶），`hatch, progress` |
| `plotShape(g, path, o)` | 把任意路径采样为点线数据序列 | `n, r, values, accent, progress` |
| `stripesFill(g, path, values, o)` | 用变暖条纹填充任意闭合形状 | 色阶选项，`accent` + `accentIndex` |
| `dotTrail(g, pts, o)` | 渐细的点状拖尾（光标尾迹 / 彗星） | `color, r0, r1` |
| `handText(g, text, x, y, o)` | 带颗粒感、从左到右显现的手写字；返回 `{tip, w}` | `size, color, progress, align, zoom` |
| `setType(g, text, x, y, o)` | 印刷体文字，逐字母排版 | `size, font, weight, progress, rise, track` |
| `dataDot(g, x, y, r, fill, o)` | 带落点弹跳和涟漪的数据点 | `fresh`（落下后的秒数），`ripple, accent, alpha` |
| `inkLine`, `stripe`, `morphMark(g, u, dot, box, fill)` | 序列线、单条条纹、0..1 之间的点→条纹变形 | |
| `leader`, `ringPath`, `wavePath`, `heartPath`, `bracketPath`, `sparklePath`, `quadPath` | 注记几何图形 | |
| `dashedCell(g, x0, y0, x1, y1, o)` | 逐笔画出的虚线"下一个值"空格 | `progress, color, dash, gap` |
| `drawPencil(g, o)` | 红蓝铅笔（屏幕空间） | `tip [sx,sy], s, lift 0–1.2, flip 0–1 (blue→red), blur, focus, ang` |
| `caption(g, words, t, o)` | 带逐词计时的图注式字幕 | `t0, t1, kicker, x, y, size` |

最小示例：用这种风格画一个暖橙色 `#D97757` 的四角闪光，带光标拖尾（完整版：`?engine=1` → `demo/stills/engine_demo.jpg`）。

```js
import * as E from './engine.js';
const g = canvas.getContext('2d'), cam = { x: 0, y: 0, zoom: 1, roll: 0 };
E.drawPaper(g, cam); E.applyCam(g, cam);
E.dotTrail(g, Array.from({ length: 9 }, (_, i) => [-300 + i * 26, 170 - i * 14]), { color: '#D97757', r0: 9, r1: 2 });
E.inkShape(g, E.sparklePath(0, 0, 150), { fill: '#D97757' });            // accent bypasses the ramp
E.leader(g, [110, -200], [40, -110], { color: E.P.blue });
E.handText(g, 'the spark, in pencil', 120, -210, { size: 34, color: E.P.blue });
const tip = E.w2s(cam, 150, 0);
E.drawPencil(g, { tip, s: .8, lift: .2, flip: 0 });                        // flip: 1 = red end
```
