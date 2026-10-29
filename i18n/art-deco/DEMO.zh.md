# Art Deco — 我们的示范片

这只是众多可能中的一个例子。不要照搬它的故事、情节走向、镜头、道具或时间安排。

示范片：*Midnight at the Starlight Hotel*（星光酒店的午夜）（58.4 s）· `art-deco.mp4` · 源码在 [`demo/`](demo/)


示范片的原始需求：一部 40–60 秒的 Art Deco 风格短片；故事、镜头、配乐、声音和字幕都由导演决定。

## 故事与结构

1930 年的新年夜，行李员 Pip 必须在午夜之前把一封封好的信送到楼顶。在宏大的场所里完成一件小而紧急的差事。一个机械障碍（电梯 OUT OF ORDER，停用中）把慌乱变成了决心。中段不断攀升并伴随节奏变化（楼梯 = 查尔斯顿舞曲）。高潮前有一段真正的寂静（时钟指向 XII，乐队停下，信件翻滚坠落）。高潮是被“数出来”的光：午夜的十二声钟响 = THE STARLIGHT 的十二个字母逐一亮起。

**音乐就是情节：** 信里装着乐队的新歌；在指挥打开它之前，主题只以片段出现，第 13 拍才是第一次完整呈现。结尾的呼应：曾经仰望一块黑暗招牌的主角，如今站在点亮的招牌之中；一个收尾笑料闭合了循环（电梯“叮”一声显示 IN SERVICE，恢复运行——已经太迟）。

这种风格的原生能力在故事中是这样用的：

| 原生能力 | 示范片中的用法 |
|---|---|
| 中轴线 | 每次转场都是一扇门：片名拱门从中间分开，楼梯门被撞开，厨房的摇摆门砰地弹开，电梯门合上进入片尾卡。 |
| 数出来的光 | 灯泡招牌逐字点亮，每声钟响亮一个字母。 |
| 机械对称 | Busby Berkeley 式俯拍：扇子按八分音符逐一打开，组成一轮放射光芒，然后锁定成一个钟面。作为高潮之后的释放。 |
| 表盘与数字 | 楼层指示器、钟面、地面徽章、年份徽标：30 层、11:55、1930 无需旁白即可承载情节。 |
| 年代广播 | 由播音员担任旁白，在不同声学空间中移动（街头喇叭 → 前台收音机 → 楼梯间广播 → 现场话筒），让观众听出主角离声源越来越近。 |

我们用来改编它的配方（针对这部示范片）：找到门槛（门）、截止时间（一座钟）、被数出来的揭晓（一块招牌、楼层数字），以及结局所解锁的东西（一首歌）。

## 镜头

| 节拍 | 摄影机 |
|---|---|
| 开场（3 s 钩子） | 一个金色光点炸开成光芒与阶梯拱；缓慢 6 % 推镜。片名条在管弦乐重音上绽开。 |
| 转场语法 | **对称分开**：离场画面变成两扇在边缘铰接的门扇，从中缝向两侧打开（拱门、楼梯门、厨房门）。旋转门是它的旋转版亲戚（玻璃门翼划过）。影片以电梯门在实拍画面上滑动合拢收尾。 |
| 交代 | 极低角度的 Cassandre 式俯仰，从塔顶的黑暗招牌一路下摇到街上渺小的主角：目标、难度和黑暗的招牌（结局的伏笔）一镜交代。 |
| 障碍 | 中景拍铭牌落下；寂静中他整理帽子时，对他的脸缓慢推镜。 |
| 标志段落 1 | 把楼梯间拍成**建筑剖面**：随他上升，拉远直到整座塔成为剖面图、他成为一个带速度线的红点，再推回到“30”层的地面徽章上，匹配剪辑到厨房里旋转的银托盘。 |
| 寂静 | 插入塔钟分针咔嗒跳到 XII 的特写；信件以慢动作翻滚着掠过尚未点亮的字母。 |
| 高潮 | 十二声钟响：接住（戴手套的手的大特写）→ 指挥（撕开封口，插入乐谱特写，指挥棒举起）→ 低角度斜拍招牌，字母随每声钟响逐一点亮 → 特写，最后一个 T 在主角身后亮起，金光洒过他的脸。 |
| 标志段落 2 | **Busby Berkeley**：高位斜角，8 位舞者按每个八分音符依次打开扇子，然后转为正上方俯拍，8 向镜像并缓慢旋转；扇子锁定成一个钟面，两根金色指针指向 XII。 |
| 尺度揭示 | 从招牌拉远到整座塔、城市和烟花（呼应开场的俯仰）。 |
| 结尾 | 电梯门在实拍画面上滑动合拢；片尾卡铭牌就贴在合上的门上。 |

表演节拍：电梯按钮按了三次（一下、两下、猛按）；抛掷动作有蓄力、出手，以及差点从栏杆翻出去；被托盘撞掉的帽子一小节之后又落回他头上，而他看都没看。开场时，金线随单簧管滑音的速度生长（由慢到快），落在强拍重音上。所有字母点亮后，一串十六分音符的追光跑过整块招牌。

## 配乐结构

- **先写配乐**：`timeline.js` 是唯一的事实来源（116 BPM 狐步舞 → 16 拍加速到 138 BPM 查尔斯顿 → 停顿 → 在 116 网格上的 12 声钟响 → D♭ 调的歌曲）。`tools/cuecheck.py` 根据 `music/score.json` 检查 53 个画面同步点（最大偏差 0.5 ms）。
- **实际使用的配器**：钢琴主奏（Salamander）、单簧管（低音颤音 + 两个八度的滑音作为开幕引子）、弦乐（震音铺底、上行急奏）、加弱音器的小号点评（铭牌出现时的“哇-哇”）、查尔斯顿段由鼓刷换成鼓棒、行走的拨奏贝斯、午夜用的管钟（B♭）、每把扇子配竖琴/钢琴滑奏、终曲合奏用长号 + 萨克斯。
- **埋下主题**：片名 = 钢琴第 1 小节；街头 = 加弱音器的小号试吹两小节就被打断；厨房 = 主角吹口哨吹出前四个音；终曲 = 完整的歌曲。
- **距离自动化**：乐队在 30 楼演奏，因此在街头做 2.5 kHz 低通，在大堂做 1.2 kHz（隔着楼板），随他攀登逐渐打开，到楼顶时全频且干声。
- **播音员处于五种空间**（Kokoro `bm_fable`）：街头喇叭（带通 320–3.8 kHz、轻度过载、拍击回声）→ 前台收音机 → 楼梯间广播（长混响）→ 厨房收音机 → 现场话筒（全频）。喇叭失真太重，使“five minutes to midnight”在完整混音中听不清，因此降低了过载。
- **实际使用的拟音**：黄铜按钮咔嗒、青铜铭牌哐当 + 铁链哗啦、八分音符上的铁楼梯踏板声、大理石地面的鞋跟声、银托盘、木摇摆门 + 弹簧颤音、纸张翻飞、手套拍击、每个字母一声闸刀开关“咔哒” + 灯丝嗡鸣、追光的继电器滴答声、烟花哨声。
- **寂静**：“Out of order?!”之后只有大堂的钟滴答两声（下一个声音：查尔斯顿的军鼓）；塔钟跳到 XII 之后只有风声和翻飞的信（下一个声音：第一声钟响，全片最重要的声音）；第 12 声钟响后屏息一拍（下一个：全奏）。
- **J/L 剪辑**：拱门打开前先响起收音机调台噪声；“Out of order?!”的回声在楼梯间里向上滚动；厨房收音机在楼梯间段落中就已开始；楼顶的风声在厨房门打开前一小节进入；第 12 声钟响的余音延续进全奏。
- 混音：音乐在人声下闪避约 −9 dB（在现场播音员下为 −6 dB），底噪 −6 dB；−14 LUFS，颗粒 3。

## 调色板与道具

- 底色：暖黑 `#0d0b09`，漆黑 `#060504`；夜空 `#0a0e16` → 地平线翡翠绿 `#10231f`。
- 金色：`#6F5220`（阴影）→ `#C9A24B`（基色）→ `#F3D98B`（亮部）→ `#FFF4D2`（高光）。
- 点缀色：酒红 `#8E1B2E`（主角制服，唯一的大面积饱和色），翡翠绿 `#1D6B57`（扇子、门板、夜色），象牙白 `#F2E8D5`（信件、手套、地毯）。
- 场景：大堂用一点透视，配 mode-7 地面；楼顶招牌用从下往上的两点透视，配一台微小的针孔摄影机。
- Pip：7 头身，流线型渐收的身体，多切面的漆面块面；剪影标志：歪戴的药盒帽 + 下巴带、V 字形排列的黄铜纽扣、手里始终拿着那封封好的信。
- 其他道具：OUT OF ORDER 铭牌、塔钟、灯泡招牌 THE STARLIGHT、指挥和乐谱、端银托盘的侍者、8 位持翡翠色扇子的舞者、烟花。
- 参考静帧（由 `build.sh` 重建，与影片使用同一个渲染器）：[`demo/stills/modelsheet_v2.jpg`](demo/stills/modelsheet_v2.jpg)，Pip 的角色设定图（7 头身比例的转面、剪影检查、六种表情、关键姿势、色板、那封信）；[`demo/stills/kit_v2.jpg`](demo/stills/kit_v2.jpg)，组件套件（片名条、数字与时钟、放射光芒、拱形框、图案、灯泡跑马灯、字幕卡），每项都标注了对应的引擎调用；风格帧 [`demo/stills/frame_v2_lobby.jpg`](demo/stills/frame_v2_lobby.jpg)（带 mode-7 地面的一点透视大堂）和 [`demo/stills/frame_v2_roof.jpg`](demo/stills/frame_v2_roof.jpg)（从下方两点透视看灯泡招牌）。

## 片名与片尾卡

- 字幕卡的说话者图标：播音员用金色带状话筒，主角用酒红色药盒帽。
- 片名：MIDNIGHT / AT THE STARLIGHT HOTEL 置于阶梯拱上方的金色片名条中，配一个 1930 菱形年份徽标和 NEW YEAR'S EVE 标签。
- 片尾卡：合上的电梯门上的一块漆面铭牌：片名、ART DECO、LEMO-OPUSCAR、"LemoLab × Claude Opus 5.5"、素材署名。这一落款只属于本库的示范片；用户的影片不带任何 LemoLab 署名，也不要复制这张卡。

## 构建说明

```
styles/art-deco/demo/
  timeline.js      tempo grid + all sync points (single source of truth) → tools/dump_timeline.mjs → timeline.json
  engine/          deco.js (palette, gold, gline, airbrush, motifs, drawShape) · type.js (title bar, digits, badges, dial, clock, subtitle card)
                   bulbs.js (any text → bulb sign, lighting patterns) · cam.js (pinhole camera + card transforms)
  chars.js         Pip (FK rig, 4 views, 8 faces, pose library, run cycles), conductor, waiters, dancers, the letter
  scenes/          lobby.js (one-point + mode-7 floor, doors, plaque) · roof.js (two-point sign) · tower.js · stairs.js
  shots_*.js       one function per shot: shot(g, t)       film.js   shot list, transitions (split / revolve / close), subtitles
  frames.js        model sheet, component kit, style frames, ?scene=frames.shotTest&shot=<name>
  music/score.py   original score → score.wav + stems + score.json      mix.py   voices in 5 spaces + foley + beds + ducking
  tools/           cuecheck.py · subs.py · pitch.py · dump_timeline.mjs
```
1. 先写节奏网格和提示点表；把它们交给一个音乐子代理，同时并行绘制画面。
2. 先搭建引擎和主角设定图，然后每个地点一个场景，再每个镜头一个函数。用 `?scene=frames.shotTest&shot=<name>` 单独审看镜头。
3. `sh demo/build.sh` 会重建全部内容：时间线 → TTS → 音高 → whisper → 配乐 → 提示点检查 → 混音 → srt → 渲染（4 个 worker 渲染 1401 帧约 15 s）→ 混流（−14 LUFS，颗粒 3）→ 静帧。
4. 用 `still.mjs --range 0:58:1` + `sheet.py` 以 1 s 间隔审看，然后对每个关键动作以 0.15–0.2 s 间隔做帧条审看。

与本示范片道具相关的坑：
- 第一版通往片尾卡的转场，让电梯门滑过一片平涂的棕色“室内”，看起来像一帧空白；现在只绘制门扇，直接在实拍画面上合拢。
- 开场（黑底上一个金色光点）触发了 `blackdetect`；于是提亮了背景的放射楔形和辉光。
- 钟响镜头中 Pip 只占画面高度的 ¼，对于情绪高峰来说太小；最后一声钟响改为特写。
- 三位十六进制色值把翡翠色扇子变成了蓝紫色。

## 引擎参考

所有绘制都用 Canvas2D，对 `t` 是确定性的。从 `demo/engine/` 导入。

**deco.js**
| 函数 | 用途 |
|---|---|
| `C` | 调色板（`ink black night gold0 gold1 gold2 goldHi ivory emerald burg plum skin bulb…`） |
| `goldGrad(g, x0,y0,x1,y1, {sheen, hot, tint})` | 带状金属渐变；把 `sheen` 从 −0.2 动画到 1.2 即得一道扫光 |
| `gline(g, pts, {w, part, closed, glow, double, sheen, alpha, color})` | 雕刻感的金色轮廓线；`part` 0→1 把它逐渐画出；`color` = 任意十六进制色，用于“唯一颜色”例外 |
| `airbrush(g, pts|Path2D, {base, dark, light, dir, rim})` | 硬边喷枪填充 |
| `sunburst(g, cx, cy, {rays, r0, r1, mode:'lines'|'wedges', a0, a1, rot, part})` | 放射状背景 |
| `stepArchPts(cx, base, w, h, {steps, crown})` / `archFrame(g, cx, base, w, h, {rings, gap, fill, burst, part})` | 金字形神塔式阶梯拱与拱形框 |
| `fan`, `fishScale`, `chevrons`, `sparkle`, `speedLines`, `glow`, `beam`, `vignette` | 图案库 |
| `drawShape(g, pts, {color, halo, trail, glints, part})` | **以装饰艺术手法绘制任意路径**：喷枪金色（或 `color`）填充 + 金色轮廓线 + 可选的放射光晕、速度线拖尾和闪光点 |
| `starPts(cx, cy, r, k, rot, n)` | 四角星路径 |

**type.js**：`goldText(g, text, x, y, {size, font, track, sheen})` · `titleBar(g, text, cx, cy, {p, out, size, sub, wings})`（带入场/出场动画）· `decoDigits(g, '11:59', x, y, size)` · `yearBadge(g, '1930', cx, cy, r, {p})` · `floorMedallion(g, '30', cx, cy, r, {sub})` · `dial(g, cx, cy, r, value, {labels})`（半圆形楼层指示器，value 0..1）· `clockFace(g, cx, cy, r, {h, m, s, roman})` · `subtitleCard(g, text, {p, out, speaker:'radio'|'boy'})`。

**bulbs.js**：`buildSign(text, {font, size, spacing})`（任意文字 → 字形骨架 → 等距灯泡，带缓存）· `drawSign(g, sign, x, y, scale, {lit, channel, color})` · `litAll(v)` · `litSequence(t, times[], {flash, chaseFrom, chaseSpeed})`（第 i 个字母在 `times[i]` 点亮，然后开始追光）。

**cam.js**：`makeCam({x, y, z, f, yaw, pitch, roll})` → `{P(X,Y,Z), scaleAt(X,Y,Z)}` · `cardTransform(g, cam, TL, TR, BL, w, h)`（把一张平面卡片映射到一个 3D 四边形上）。

**chars.js**（示范片角色）：`drawFigure(g, {x, y, s, view:'side'|'q'|'front'|'back', face, ...pose})` · `POSES`、`FRONT_POSES`、`lerpPose`、`runCycle(phase)`、`runFront(phase)` · `drawDancer`、`drawDancerTop`、`envelope`、`clef`。

**唯一的颜色。** 要让某个元素保持自己的颜色，传入 `color`——它会用于填充、轮廓线和辉光，其他一切仍是金色：

```js
import * as D from './engine/deco.js';
import * as B from './engine/bulbs.js';

// a warm-orange four-point light with a short cursor tail, drawn the Art Deco way
D.sunburst(g, 960, 540, { rays: 72, r1: 1400, mode: 'wedges' });
D.drawShape(g, D.starPts(960, 540, 120, .22), { color: '#D97757', halo: 1, trail: { ang: Math.PI, len: 420, n: 4 } });

// a bulb sign that lights letter by letter, in the same orange
const sign = B.buildSign('LEMO', { size: 260, spacing: 20 });
B.drawSign(g, sign, 560, 700, 1, { lit: B.litSequence(t, [0, .5, 1, 1.5], { chaseFrom: 2.5 }), color: '#D97757' });
```
