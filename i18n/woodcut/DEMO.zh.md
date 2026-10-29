# 木刻版画 — 我们的示范片

这只是众多可能中的一个例子。不要照搬它的故事、结构、镜头、道具或时长。

示范片：*The Bell Founder*（铸钟人）（58.5 s）· `woodcut.mp4` · 源文件见 [`demo/`](demo/)


示范片的创作任务：一支 40–60 秒、木刻版画风格的影片。

## 故事与结构

一座钟楼空着的村庄；一位铸钟匠为它铸第一口钟，失败了，献出了自己的一件东西，终于成功。原生能力在这个故事里是这样用的：

| 原生能力 | 故事用法 |
|---|---|
| **光是刻出来的** | 关于火、黎明、发现、点亮一盏灯的故事：光出现的那一刻，可以真的*就是*一簇放射状的刻痕。 |
| **雕刻 = 时间** | 画面一刀一刀地长出来，就是屏幕上的耐心劳作。它适合手艺、劳动、坚持和第一次。 |
| **镜像的版块 → 正向的印刷品** | 用于揭晓或心意转变：观众先读到一个反写的字，纸被揭起，字就读正了。 |
| **雪 = 戳刀刻痕** | 白点是木头上的伤口。它们可以停在半空，也可以被"重新上墨填回去"，直到天空干净。这能造出任何其他媒介都没有的结尾。 |
| **一块色版** | 把它留给最重要的那一样东西（熔化的金属、一颗心、一团火焰）。让它在高潮时铺开，之后收缩成唯一的一处高光。 |
| **无字小说式的编排** | 最多四五句台词。由版画来讲故事；失败后的空白可以完全无声。 |

**本片的故事形态：**黑暗中的第一刀（地平线）→ 世界被刻出来 → 揭起第一张印刷品（镜像 → 正向）→ 双手的长特写 → 一组小小献礼的快速蒙太奇 → 第一次尝试**在特写中失败** → 一张无声的版画 → 个人的牺牲 → 第二次尝试，色版淹没画面 → 最长的静默 → 回报的声音 → 颜色退回成一处高光 → 白色痕迹被重新上墨填回 → 最后一刀又是地平线。

我们如何改编这个题材：找到应该*发光*的那一样东西（色版：熔化的铜），*用手做出来*的那一样东西（长特写：铸钟匠的手），以及结尾应该*消失*的那一样东西（戳刀纹理：雪）。这只是对这个故事的一种解读；别的题材会找到别的答案，或者根本没有答案。

## 镜头

"刻刀就是摄像机"：焦点始终是刀尖，后来则是最亮的那道刻痕。

| 节拍 | 机位 |
|---|---|
| 开场钩子（0–3 s） | 黑色版块的大特写；跟随刻刀移动，刀刻出一条白线（地平线）。 |
| 世界 | 随着山、屋顶和空塔被刻出，从 3.5× 拉镜到 1×：一条线变成一个世界。 |
| 第一张印刷品 | 上墨 / 铺纸 / 用马连拓印 / 揭纸时固定机位；然后向下俯仰并推镜到空钟楼。 |
| 喘息 | 铸钟匠双手 4 s 近乎静止的微距（缓慢推镜 1.0 → 1.13）。 |
| 蒙太奇 | 每一拍一个硬切，越来越快（1 / 1 / 1 / .5 / .5 / .25 / .25 s），每次落下都带一下震动。 |
| 第一抹颜色 | 铜变成橙色时推镜到坩埚上，让第一抹颜色落在特写里。 |
| 失败 | 急速变焦（0.2 s）到钟壁并停留 1.3 s，看着裂缝向上爬。 |
| 静默 | 画中画：作坊的门，门外的村民，铸钟匠的背影，锤子慢慢放下。除了雪，什么都不动。 |
| 高潮 | 先只拍金属流（z 2.4），放射状刻痕从铸模中迸发，然后升镜拉出，让两张被照亮的脸都入画。 |
| 招牌镜头 | 钟声响起时，从钟壁到整个山谷 8× → 1× 的连续拉镜：声音传多远，镜头就走多远。 |

为什么这个故事走这条路线：用刀画出的地平线既是第一刀也是最后一刀，让影片闭合成一个圆；钟声和拉镜必须走过同样的距离。每一项都是从 STYLE.md §6 中做出的一个选择，而不是这种风格默认的开场或结尾。

示范片的动作时长：锤子后仰 4 帧 → 敲击 2 帧 → 落定 + 3 帧镜头震动；用整个身体推风箱；抛掷动作是握紧 → 松手 → 手停在半空。印刷震动：[5,−3] 然后 [−2,1] px。

## 配乐结构

- **先定网格**：60 BPM，锻造段通过 3:2 的节拍转调（60 的三连八分音符 = 90 的八分音符）切换到 90 BPM。`timeline.json` 是唯一的事实来源。`tools/cuecheck.py` 检查配乐提示点与画面事件以及两段静默是否对齐（示范片：25 个提示点，最大偏移 0 ms）。
- **配乐**：只用低音弦乐（低音提琴、大提琴、跳弓、拨奏；中提琴只在钟响之后出现）+ 木与皮（裂缝鼓、木鱼、框鼓）+ 大鼓 / 定音鼓 + 一面大锣 + 一个**合成的铁砧声**（numpy 模态合成：3–5 个非谐泛音 + 锤击瞬态）。**钟响之前任何地方都没有钟的音色**：这个村庄"没有声音"，所以第一声钟响就是高潮。D 小调，在钟声衰减中转为 D 大调。
- **本片的拟音**，全部合成：刀入木、木屑、滚筒黏墨声、纸的空气声、马连摩擦声、湿纸揭起声；按大小区分的黄铜声（锅 = 低沉、宽厚；钥匙和戒指 = 高、纯）；陶土刮擦和摔碎；风箱皮革 + 气流；熔液冒泡、浇铸轰鸣、注入铸模的嘶声；钟用模态模型（hum 0.5、prime 1、tierce 1.2、quint 1.5、nominal 2、2.5、3、4，各有自己的衰减和拍频）+ 两次山谷回声。
- **两段真正的静默**：29.7–32.3 s（只有 −40 dB 的远处风声；之后的第一个声音是罗盘盖的*咔嗒*声）和 44.3–47.3 s（**数字静音**，实测 −91 dB；之后的第一个声音是钟声，全片最响的时刻）。
- **J/L 剪切**：火的噼啪声在双手镜头之前进入；室外风声闷闷地延续进作坊；风声领着揭纸进入钟楼；钟声的余音一直延续到片尾卡下。
- **混音**：人声下音乐压低约 8 dB（钟响后 6 dB），关键拟音下压低 4 dB。**拟音也要压低**（−5 dB；在与金属敲击共用节拍的台词下 −9 dB）。旁白：Kokoro `am_onyx`，语速 0.88，4 句。

## 色板与道具

- **色板**：墨 `#111111` · 纸 `#EFE8D8` · 木版本身 `#D8C29C`（只在展示版块的镜头中出现）· 唯一的色版"铜色" `#C8502A`。
- **印刷画框**：1920×1080，印刷图像区域 `36, 36, 1848×912`。底部纸边（132 px）放字幕。固定 3 px 的色版套印偏差。
- **道具与角色**：铸钟匠和他的学徒（部件绑定、姿势、表情），山谷（山、村庄、空塔、雪），作坊、坩埚、浇铸、火花和铸模，钟，风箱，村民献出的黄铜礼物，罗盘，声波圈。示范片中的手、罗盘和滤镜静帧是用高度场雕塑 + `woodcutFilter` 制作的。
- 字幕：IM Fell English 42 px，墨色 `#111`。

## 片尾卡

片名被*镜像*地刻在版块上（IM Fell English SC），只有揭起第一张印刷品后才能读出来。片尾卡：一张新印的版画：片名从黑色板面中刻出，一口小钟保留着全片最后的铜色高光，然后以凸版印刷字依次呈现 *A Woodcut Print*、Lemo-Opuscar、LemoLab × Claude Opus 5.5 和演职员信息。片名下最后一刀呼应全片的第一个声音。"LemoLab × Claude Opus 5.5" 署名只属于本库的示范片；用户的影片不带 LemoLab 署名，也不复制这张片尾卡。

## 制作笔记

```
styles/woodcut/demo/
  engine/        index.js (shape, cutAlong, flecks, rays, plate…), knife.js (strokes), hatch.js (regions, streamline hatching),
                 print.js (WebGL2 print/block compositor), filter.js (image → woodcut)
  stage.js       print frame, camera, caption          world.js   the valley (mountains, village, tower, snow)
  chars.js rig.js views.js   founder & apprentice (parts rig, poses, expressions)   hands.js   height-field sculpts → filter
  interior.js fx.js          workshop, crucible, pour, sparks, mould; bell, bellows, gifts, villagers, sound rings
  trans.js       paper curl / peel        shots.js shots2.js   the 17 shots        film.js main.js   assembly, captions, events
  timeline.json  tempo grid + every cue   music/score.py   original score   mix.py   foley + ambience + voice + ducking + bell
  tools/         cuecheck.py subs.py final_asr.py mux.sh      test.js   ?test=char|hands|pour|village|sheetA|sheetB|filter|spark
```
1. 先写 `timeline.json`（网格 + 提示点键）和提示点表；交给配乐子代理；同时并行绘制画面。
2. 在做任何故事之前，先构建引擎和一张风格样帧。先在一张静帧上把雕刻 + 印刷的质感做对。
3. `sh demo/build.sh` 重建一切：TTS → whisper → 配乐 → 事件 → 提示点检查 → 混音 → srt → 渲染（4 个 worker 渲染 1404 帧约 45 s）→ 合成（−14 LUFS，颗粒 6，CRF 28）→ 对成片跑 whisper → 风格样帧 / 海报 / 引擎示例。
4. 用成片本身生成 1–2 fps 的缩略图总览检查两遍，另外检查每个关键动作的全尺寸帧（揭纸、摔碎、裂缝、放射刻痕、钟声拉镜、片尾卡）。

与本示范片道具相关的坑：

- **白雪落在白雪上是看不见的。**加上黑色雪堤和被风刻出的地面；雪花在天空和深色块面上才读得出来。
- **第一版的钟**因为短排线段加上色调正弦抖动，变成了锯齿状的人字纹；改用长刻痕和一条宽高光带后解决。
- **铸模冒出的蒸汽**画在上层时看起来像火焰；移到主体后面。
- **惰性缓存的笔画**（`X.coatFolds || []`）破坏了多个渲染 worker 之间的确定性。
- **金属礼物的敲击声盖住了旁白**（whisper 把 "it had" 听成了 "is had"）。拟音也必须在人声下压低。把出问题的敲击声声像移离中央。
- **文件大小**：细密排线 + 每次印刷的墨色噪点 + 颗粒 6，让一部 58 s 的影片在 CRF 19 下达到 326 MB。用 CRF 28 加 `-tune grain` 重新编码：93 MB，1:1 裁切下看不出差别。
- 结构张量的 NaN 来自盒式模糊在平坦区域留下的极小负值之和。
- 同时运行大量渲染时 `still.mjs` 可能失败。最多重试 3 次。

## 引擎参考


`demo/engine/index.js` 是自包含的（只导入 `/core/lib.js`）。它把**任何路径或形状**绘制成雕刻浮雕并印刷出来。你始终在两张 canvas 上工作：一张**遮罩**（填黑 = 未刻的版块；画白 = 刻掉的部分），以及一张可选的**色版**（alpha = 色版浓度），然后调用印刷器。

| 函数 | 作用 | 关键选项 |
|---|---|---|
| `canvas(w=1920, h=1080)` | → `[canvas, ctx]` | |
| `shape(polys, o)` | 一个雕刻实体：黑色剪影 + 白色光晕 + 由 `light` 照亮、顺着形体走向的排线。返回 `{ draw(g, t), strokes, halo, reg, tone }`。 | `light`（`light(x,y,z)`）、`sp` 间距、`wmax`、`lo/hi` 色调范围、`dir`（`'contour'` / 角度 / `dirRing(cx,cy,sy)` / `dirRadial(cx,cy)` / 函数）、`halo` px、`white`（白色部分带黑色刻痕）、`tone(reg)→(x,y)=>0..1` 覆盖、`seg`、`gap`、`reveal:{t0,t1,key,speed}` |
| `cutAlong(path, o)` | 把一条路径拆成手工刀刻笔画（轮廓、直线、绳索、裂缝）。 | `w`（数字或 `(u,pt)=>w`）、`kind` `'k'|'v'|'u'`、`closed`、`seg:[a,b]`、`gap:[a,b]`、`reveal:{t0,t1,speed}` |
| `hatch(region, o)` | 对任意 `Region` 做流线排线（等间距，方向场和宽度场）。 | `dir(x,y)`、`tone(x,y)`、`sp`、`wmax`、`seg`、`gap`、`kind`、`reveal` |
| `flecks(pts, o)` | 戳刀刻痕（雪、火花、木屑）。`pts = [[x,y,r],…]` | `angle`、`seed` |
| `rays(cx, cy, o)` | 一簇刻出来的光。 | `n`、`r0`、`r1:[a,b]`、`w`、`jit`、`bend`、`a0/a1`、`reveal:{t0,t1,jit}` |
| `drawStrokes(g, strokes, {t, color})` | 在时间 `t` 把笔画画到遮罩上（带揭示时间的笔画会逐步刻出，连刀尖一起）。`color:'#000'` 重新上墨。 | |
| `plate(c, polys, a)` | 绘制**唯一颜色**的色版。它只在遮罩被刻白的地方显示。 | |
| `woodcutFilter(img, o)` | **图片 / 视频帧 → 木刻。**亮度决定刻痕宽度，结构张量决定刻痕方向；返回带揭示时间的笔画。 | `rect:[x,y,w,h]`、`sp`、`black/white/gamma` 色阶、`res`、`region`、`reveal:{t0,t1,mode:'light'|'radial'|'down'|fn,speed}` |
| `makePrinter(W,H).render(mask, plate, o)` | WebGL2 合成器 → canvas。 | `mode:'print'|'block'`、`seed`（纸张）、`inkSeed`（每次印刷）、`plate:'#hex'`（唯一的颜色）、`ink`、`paper`、`reg:[dx,dy]` 套印偏差、`edge` 毛边、`sheen`、`wetX` |
| `light(x,y,z)`、`Region(polys | drawFn, {res,bbox})`、`mkStroke`、`spline`、`offsetPoly`、`ellipse`、`rect` | 辅助函数 | |

示范片层级、可复用的：`demo/trans.js` 的 `curl(g, front, back, xf, r)` + `peelState(u)`（揭纸）；`demo/hands.js` 的 `Sculpt`（胶囊 / 团块 / 板 / 褶皱 → `shade(light)`），用于特写。

**最简示例**：一个暖橙色 `#D97757` 的四角火花，带光标尾巴，被逐步刻出并保留自己的颜色。它就是 `demo/test.js` 中的 `?test=spark`；结果是 `demo/stills/engine_example.jpg`。

```js
import * as WC from './engine/index.js';
const [mask, m] = WC.canvas(), [plate, c] = WC.canvas(), P = WC.makePrinter();
const star = []; for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2 - Math.PI / 2, r = i % 2 ? 70 : 260; star.push([960 + Math.cos(a) * r, 500 + Math.sin(a) * r]); }
const spark = WC.shape([star], { light: WC.light(.5, -.6, .6), sp: 9, halo: 8,
  reveal: { t0: 0, t1: .8, key: (x, y) => Math.hypot(x - 960, y - 500) / 300 } });        // carved from the centre out
const tail = WC.cutAlong([[1030, 590], [1090, 680], [1110, 770]], { w: 24, kind: 'u', seg: [300, 400], reveal: { t0: .8, t1: 1.1, speed: 900 } });

function frame(g, t) {
  m.fillStyle = '#000'; m.fillRect(0, 0, 1920, 1080);                                       // the uncut block
  c.clearRect(0, 0, 1920, 1080);
  WC.drawStrokes(m, WC.rays(960, 500, { n: 36, r0: 300, r1: [420, 640], w: 10, seed: 2, reveal: { t0: .5, t1: 1.0 } }), { t });
  spark.draw(m, t);
  WC.drawStrokes(m, tail, { t });
  WC.plate(c, [star], t > .8 ? 1 : 0);                                                      // the one colour
  g.drawImage(P.render(mask, plate, { seed: 4, plate: '#D97757' }), 0, 0);
}
```

**对照片或影片帧使用滤镜**（用于重绘实拍素材）：`const F = WC.woodcutFilter(video, { rect: [36, 36, 1848, 912], sp: 5, reveal: { t0, t1, mode: 'light' } }); m.fillStyle = '#000'; m.fillRect(…); WC.drawStrokes(m, F.strokes, { t });` 然后印刷。一帧 1080p 约 1,900 道刻痕、耗时 140 ms。见 `demo/stills/frame_filter.jpg` 和 `?test=filter&img=…`。对于运动镜头，以一拍二（12 fps）的频率用同一个 `seed` 重新运行，这样画面不变的地方刻痕也保持稳定。
