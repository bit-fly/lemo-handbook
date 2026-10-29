# 科幻全息 HUD — 我们的示范片

这只是众多可能中的一个例子。不要照搬它的故事、结构、镜头、道具或时长。

示范片：*Volt · Spec Scan*（39 s：34 s 的正片场景加 5 s 片尾卡）· `hologram-hud.mp4` · 源文件见 [`demo/`](demo/)


## 故事与结构

一辆虚构城市电助力自行车的参数讲解，对应 STYLE.md §11 的第一个用例：一件硬件产品被扫描成发光的线框，三个部件依次被锁定（电池、电机、刹车），最后线框点亮成实体全息影像，再定格为一张可以直接当海报用的参数表。

镜头结构：扫描入场 → 标题 → 3 ×（锁定 → 运镜 → 局部爆炸图 → 引线 → 数值）→ 重新合拢 → 实体全息转台 → 参数表定版 → 片尾卡。部件 1 占 3 小节，其余各占 2 小节。每个数值在大卡片上停留 ≥ 2.5 s，然后收进左侧栏一直保留到结尾，因此每项参数都会在画面上停留 10–25 s。

**招牌镜头**：部件 1 一气呵成。锁定、推镜、外壳滑开、电芯发光、引线拉出，"80 km" 滚动成琥珀色。

## 镜头

| 节拍 | 机位 | 原因 |
|---|---|---|
| 开场钩子（0–2.6 s） | 3/4 正侧面，俯角 14°，缓慢**环绕**，偏航 57° → 24°，同时**降镜** | 从上方看，扫描平面呈一个上升的椭圆。随后降到接近平视，在左侧给标题留出空间。第 1 帧就已经显示位于车轮高度的扫描平面 |
| 部件 1（慢） | **推镜** 2.85 → 1.6（1.5 s ease-out），然后缓慢漂移 | 第一项参数分到最多的时间 |
| 部件 2 | **甩镜**（跟随目标框）+ 绕轮毂轴**环绕**，偏航 −11° → 46° | 轴向爆炸图只有绕轴环绕时才看得懂 |
| 部件 3（快） | **拉镜**到全景 + **放大镜**（×4.3，自带反向环绕） | 刹车很小：两种尺度同时出现在画面上 |
| 重新合拢 | **拉镜 + 降镜**到俯角 0 | 低机位让物体在点亮前"站起来" |
| 高潮 | **转台 360°** + **升镜** 0 → 13° + 轻微推镜 | 观众唯一能看到每一面的时刻 |
| 定版 | 几乎静止，缓慢**移动镜头** 3.5 → 3.4 | 留给观众阅读 |
| 结尾 | 自上而下**扫描擦除**，然后接片尾卡 | 与开场呼应 |

为什么这件产品走这条路线：开场的环绕加降镜让上升的扫描平面读成椭圆；重新合拢时拉镜并降到平视，让自行车在点亮前站起来；转台是唯一展示每一面的时刻；结尾自上而下扫描擦除，与开场呼应。每一项都是从 STYLE.md §6 中做出的一个选择，而不是这种风格默认的开场或结尾。标题在扫描之后滚动入场，并在最终定版中回到同一位置；三帧故障效果用在了点亮的那一刻。

构图数值：fov 0.6。大卡片位于 x ≥ 1240，侧栏位于 x 110–470，字幕固定在底部居中（基线 y 962），放大镜在 y 580 以上。在放大镜全景镜头中，目标位于画面 x 0.49 → 0.475 处。

动态数值：目标框起始为静止姿态包围盒的 1.9×，透明度 30 %，0.22 s 内吸附到位；标签 `TGT 0N · LOCK`。爆炸图：电池盖*沿下管*滑动，电芯留在原位并变热；电机沿轴向分开（端盖 / 转子 / 定子 / 端盖），转子和定子反向旋转；刹车卡钳的两半在刹车盘两侧分开，活塞分开的距离比卡钳本体*小*，看起来像是伸出来了。打开用 1 拍（部件 1：2 拍），关闭用 0.5 s。滚动数值：0.5 s（部件 1：1 s）。标签入栏：卡片 0.35 s 淡出，标签从 x 140 滑到 110；侧栏间距 `min(112, 410 / (n − 1))` px，可容纳 5 个标签。甩镜：0.5 s cubic in-out，在下一次锁定前 0.45 s 开始；在 1/48 s 内取 5 个子帧。

## 配乐结构

- 配乐弧线：第一项参数时很稀疏，每个部件加一层，高潮前减速，一拍真正的静音，点亮时爆发（最响的时刻），定版时转为半速。
- 120 BPM（1 小节 = 2 s）；`tools/cuecheck.py` 根据 `music/score.json` 检查每个关键事件（全部落在 1/16 网格上，偏移 0 ms）。
- 原创 numpy 合成，D 小调带多利亚色彩；和弦 Dm9 → B♭maj7 → Fmaj9 → G6。四分音符上的 D1 方波脉冲。
- 部件 1 没有鼓，部件 2 加入踩镲，部件 3 加入拍手并把琶音升高八度。重新合拢时减速（16 分音符 → 8 分音符 → 一个下滑的四分音符）。一拍真正的静音。点亮时爆发（808 风格的正弦滑音 + 7 声部宽锯齿波和弦）。定版下方转为半速。片尾卡下琶音逐个音符被抽掉。
- 静音：第一次锁定前的半拍（只剩房间底噪；锁定音效是之后的第一个声音），以及点亮前完整一拍的真正零电平。
- 侦测提示音 D–F–A；琥珀色确认音 = D6 + A6 + E7。J/L 剪切：电机嗡鸣在甩镜落到电机前 0.4 s 开始，液压嘶声在刹车锁定前 0.4 s 开始；底噪和和弦尾音延续过扫描擦除，进入片尾卡。
- 人声：Kokoro `af_heart`，语速 1.0（`af_nicole` 气声太重、太慢：同一句是 7.0 s 对 4.4 s）。人声下音乐压低 −16.5 dB、拟音压低 −15 dB，0.5 s 的最大值滤波保持；只有锁定 / 确认音效的前 0.2 s 不受压制。

## 色板与道具

- 舞台 `hsl(hue+12, 70%, 2.4%)`，带径向提亮 `hsl(hue+6, 65%, 7%)`；48 px 点阵网格（视差 0.2）；暗角 0.5。
- 底座圆环位于 r = 0.7 / 1.05（亮）/ 1.12（虚线）/ 1.45 / 2.1，120 个刻度（每第 10 个为长刻度），24 条径向射线，以 0.12 rad/s 旋转。
- 线框：`lighter` 混合描边 1.3 px，7 个透明度等级；辉光为 ¼ 分辨率模糊 3 px ×0.85 和 ⅛ 分辨率模糊 4 px ×0.7；颜色 `hsla(hue, 100%, 50–80%, a)`；热边 `hsla(hue, 70%, 92%)`，即扫描前沿下方 7 cm。
- 实体：Fresnel `0.3 + 0.7·(1 − facing)^1.6`（facing = 投影面积 / 边长乘积），隔行扫描 2 px 全亮 / 2 px 38 %，每帧滚动 1 px；点亮时线宽 ×1.5，缓动回 ×1.12；点亮及和弦变化时出现 ±7 cm 的光波。光束渐变 10 % → 0，26 条射线，70 颗尘埃粒子。
- 颜色：`hue` 188（青色），`accent` 38（琥珀色）；替换内容使用 204 / 18（蓝 / 橙）。
- 字体：Rajdhani 300 用于大数字和产品名（字距 26 px），500/600 用于标签（字距 2–3 px）；Share Tech Mono 20–22 px。底板 `rgba(1,8,12,.72)`，边框 28 %，10 px 角标（hud.js 中的 `plate()`）。
- HUD：46 px 角括号，距边缘 44 px；标尺每 24 px 一个刻度（每第 5 个为长刻度）。左上角：产品名 // SPEC SCAN。状态：SCANNING 042% → SCAN COMPLETE · 3 SYSTEMS → TARGET 2/3 · MOTOR → HOLO SOLID · 360° → SPEC SHEET · READY。
- 字幕：底板 `rgba(1,8,12,.62)`，两个对角青色括号，四根声纹条，Rajdhani Medium 38 px，1180 px 换行；在人声前 0.1 s 出现，在下一句前 0.12 s 消失。
- 电助力自行车模型：管状车架，带轮胎的车轮（3 个圆环 + 横向肋条）、轮辋、辐条和花鼓；电池在下管中；轮毂电机；带卡钳的碟刹。卡钳需要一个贴合刹车盘边缘的弧形本体、圆形活塞面、沿刹车盘曲线排布的刹车片，以及刹车盘上的散热孔。

## 片尾卡

定版之后：片名、SCI-FI HOLOGRAM HUD、Lemo-Opuscar、LemoLab × Claude Opus 5.5 以及演职员信息，每行依次滚动入场。LemoLab 署名只属于本库的示范片；用户的影片不带 LemoLab 署名，也不复制这张片尾卡。

## 制作笔记

```
styles/hologram-hud/demo/
  content.json          all text, numbers, colours, model path, voice lines   content_alt.json   the swap test (drone)
  engine/holo.js        wireframe engine (projection, scan, explode, Fresnel faces, glow, pad, scan plane, normalise, modelFromPath)
  engine/hud.js         HUD layer (target box, leader, rolling text, spec card, chip, marker, beam, subtitle, chrome, glitch)
  models/mkmodel.mjs    primitive builder (tube, ring, disc, box, saddle, fender, wheel, cells, stator, rotor, caliper…)
  models/gen_volt.mjs   the e-bike    models/gen_kite.mjs   the drone
  film.js               timeline + cameras + states (only calls the engine)    frames.js   engine demo scene (?scene=star)
  music/score.py        original score from timeline.json    mix.py   UI + mechanical foley + ambience + voice + ducking
  tools/                make_lines.mjs export.mjs cuecheck.py final_asr.py
```
1. 先写模型生成器（部件 → 带爆炸向量的组件；`internal`、`hot`、`box:false`、`anchor`、`center`、`tagDir`），再写 `content.json`。
2. `tools/export.mjs` 导出 `events.json` / `timeline.json` / 字幕。在你做动画的同时，把 `timeline.json` 和提示点表交给配乐子代理。
3. 检查静帧（`node core/render/still.mjs <demo> t… [--q content=…]`）和 1 s 间隔的缩略图总览，检查两遍；另外检查每次锁定、甩镜、静音和点亮前后的帧条。
4. `sh demo/build.sh` 重建一切：模型 → TTS → whisper → 导出 → 配乐 → cuecheck → 混音 → srt → 渲染（2 个 worker 渲染 936 帧约 45 s；甩镜帧的开销是 5×）→ 合成（−14 LUFS，颗粒 0）→ 最终 whisper 检查。

本次制作中遇到的坑：
- 用 `setTransform(…, offset)` 滚动隔行扫描纹理后再用 `destination-in`，会把偏移矩形之外的东西全部清掉 → 用 `offset % patternHeight`，否则第一秒之后填充就消失了。
- 刹车油管把目标框撑大了 → `box:false`。
- 长斜引线上的热点标签看起来像是指向了错误的部件 → 在部件本体上画圆环，标签放在旁边，并让部件闪烁。
- 写在下一段里的甩镜播放出来是硬切 → 应在上一段开始，并检查 0.1 s 的帧条。
- 车灯没有支架、车座没有夹座；在替换模型里，无人机的起落架一开始长在机身外面（在机臂根部加上腹部安装座和折叠铰链才解决）。
- 两个平行的框（外壳和电芯都移动了）读不出爆炸图的效果。
- 在人声频段内（300–4 kHz），滚动音、舵机声和确认和弦只比人声低 3 dB。
- 用分开的形状画光束会出现暗色楔形或双倍亮度的接缝 → 用一条路径包含三条子路径，nonzero 环绕规则。
- 扫描擦除一开始只裁剪了线条，半透明的面还残留着。

## content.json 字段

每个文字、数字、颜色以及模型都来自 `demo/content.json`；代码里不保存任何文案。替换它会重新排布时间线、音乐、提示点和侧栏间距，因此这是对引擎很好的**技术检查**。但这不是用户影片的制作方式：用户的影片要有自己的处理方案、顺序、机位路线和时间线（STYLE.md §11）。

| 字段 | 类型 | 允许范围 | 超出范围时 |
|---|---|---|---|
| `product` | string | 1–10 个字符 | 更长的名字仍会滚动，但 176 px 的字会溢出 410 px 的栏：保持简短，或在 `titleBlock` 中调小字号 |
| `model_code`、`category` | string | 合计 ≤ 30 个字符 | 以 22 px 等宽字体显示在同一行 |
| `tagline` | string | ≤ 60 个字符 | 在 420 px 处自动换行并缩小到 20 px |
| `model` | path | 一个模型 JSON（见下文） | 任意尺寸：会被归一化。`callouts[].part` 中引用的部件必须存在 |
| `hue`、`accent` | 0–360 | 任意 | 整部影片换主题色 |
| `voice` | `{id, speed}` | 一个 Kokoro 音色 | 用 whisper 检查 |
| `intro_vo`、`outro_vo`、`callouts[].vo` | string | 开场朗读 ≤ 5 s；部件 1 ≤ 4.8 s；其他部件 ≤ 3.5 s | 字幕会被截到下一句之前；过长的句子会与下一次锁定重叠 |
| `*_vo_asr` / `callouts[].vo_asr` | string | 可选 | whisper 应该听到的内容（数字等） |
| `callouts[]` | array | **2–5** 项：`part`、`label`（≤ 24 个字符）、`value`（≤ 6 个字符）、`unit`（≤ 4）、`detail`（≤ 40，可选）、`vo` | 部件 1 占 3 小节，其余各占 2 小节。超过 5 项侧栏放不下 |
| `footer.weight`、`footer.price` | `{label, value, unit}` | value ≤ 7 个字符 | 自动缩小，最小 40 px |
| `footer.cta` | string | ≤ 34 个字符 | 自动缩小，最小 14 px |
| `film_title`、`credits[]` | strings | | 片尾卡 |

模型中的部件可以设置 `tagDir: -1`，让定版中的热点标签位于圆环左侧。

检查方法，从仓库根目录运行（为另一份内容生成人声、whisper 检查、配乐、提示点检查、混音、字幕、渲染和合成）：
```
CONTENT=content_alt.json NAME=kite sh styles/hologram-hud/demo/build.sh
```
输出位于 `demo/out/kite/`（`kite.mp4`、`kite.srt`、`poster.jpg`）。替换测试（一架蓝 / 橙配色、四个部件的折叠无人机）结果为 43 s、4 个部件、−14.0 LUFS、0 个提示点不匹配；静帧为 `demo/stills/alt_title.jpg`、`alt_signature.jpg`、`alt_lockup.jpg`。不构建、直接预览内容：`node core/render/still.mjs styles/hologram-hud/demo 12 --q content=<file>.json`。

最简内容示例（两个部件）：
```json
{ "product": "ORBIT", "model_code": "S1", "category": "Smart speaker", "tagline": "Room-filling sound.",
  "model": "models/orbit.json", "hue": 170, "accent": 40,
  "voice": { "id": "af_heart", "speed": 1.0 }, "intro_vo": "This is Orbit.",
  "callouts": [
    { "part": "driver", "label": "Woofer", "value": "4", "unit": "in", "vo": "A four inch woofer." },
    { "part": "mics", "label": "Far-field mics", "value": "6", "unit": "", "vo": "Six microphones hear you across the room." } ],
  "footer": { "weight": { "label": "Weight", "value": "1.2", "unit": "kg" }, "price": { "label": "From", "value": "199", "unit": "USD" }, "cta": "Available now" },
  "outro_vo": "Orbit. Available now.", "film_title": "Orbit · Spec Scan", "credits": ["…"] }
```

## 引擎参考

引擎能以这种风格绘制**任何形状**。给它一个线框（顶点、边、可选的四边形面），或者用 `modelFromPath` 从 2D 路径生成。要做你自己的物体，可以用 `models/mkmodel.mjs` 中的基本体写一个生成器（或者把 CAD 导出文件转换成下面的格式）。

**`engine/holo.js`**
| 函数 | 用途 |
|---|---|
| `loadModel(url, {normalize=true, diag=2.3117})` | 加载模型 JSON，准备类型化数组，并按舞台尺寸（包围盒对角线）进行**归一化**，使机位适用于任何产品 |
| `prepModel(json)` / `normalizeModel(m, diag)` | 对内存中的模型做同样处理 |
| `modelFromPath(pts2d, {depth, id, slices, explode})` | 把任意闭合 2D 路径挤出为带侧面的线框体 |
| `makeCamera(cam, W, H)` | 为机位 `{target, yaw, pitch, dist, fov, cx, cy, roll}` 返回 `{project(x,y,z,out)}` |
| `new Holo(W,H).draw(ctx, model, cam, opts)` | 带辉光绘制。opts：`hue`、`spin`（转台）、`scan:{y,band}`（向上生长到 y）、`scanDown:{y}`（向下擦除到 y）、`explode:{partOrPiece:0–1}`、`angle:{piece:rad}`（绕 piece.axis 旋转）、`solid:0–1`、`wave:{y,w}`、`focus`+`dim`、`flash:{part:0–1}`、`keep:{piece:'#hex'}`（**单色例外**）、`lineWidth`、`gain`、`glow`、`only`。返回 `{bbox:{part:[x0,y0,x1,y1]}, anchor:{part:[sx,sy,z]}}` |
| `drawPad(ctx, cam, W, H, {hue, rot, alpha})` / `drawScanPlane(ctx, cam, W, H, y, {hue, r, rot, alpha})` | 投影底座和扫描平面 |

**`engine/hud.js`**：`theme(hue, accent)`、`background`、`vignette`、`chrome`、`plate(ctx,T,x,y,w,h,a)`（深色文字底板）、`targetBox(ctx,T,bbox,k,{flash,tag,lockK})`、`leader(ctx,T,from,elbow,to,prog,{pulse})`、`rollText(str,k,frame)`、`monoText`、`specCard(ctx,T,x,y,{label,value,unit,detail},{reveal,roll,detail,frame,flash})`、`chip`、`marker(ctx,T,p,label,a,pulse,dir)`、`beam(ctx,T,project,a,t,{y1})`、`subtitle`、`glitch`、`fitFont`、`wrap`。

最简示例：一个暖橙色 `#D97757` 的四角星，带一个光标尾巴，先扫描入场再被锁定（`demo/frames.js`，`?scene=star`）：
```js
import { Holo, modelFromPath, normalizeModel } from './engine/holo.js';
import * as U from './engine/hud.js';
const P = []; for (let i = 0; i < 8; i++) { const a = Math.PI/2 + i*Math.PI/4, r = i % 2 ? .16 : .5; P.push([Math.cos(a)*r, Math.sin(a)*r + .6]); }
const star = modelFromPath(P, { depth: .12, id: 'star' });
const tail = modelFromPath([[.62,.1],[.7,.1],[.7,.55],[.62,.55]], { depth: .06, id: 'caret' });
const m = { parts: [...star.parts, ...tail.parts] }; m.byId = Object.fromEntries(m.parts.map(p => [p.id, p])); normalizeModel(m, 1.6);
const T = U.theme(188, 38), cam = { target:[0,.55,0], yaw:.6, pitch:.18, dist:2.6, fov:.6, cx:960, cy:540 };
const info = new Holo(1920,1080).draw(ctx, m, cam, { hue: T.hue, scan: { y: .8 }, keep: { star: '#D97757' } });
U.targetBox(ctx, T, info.bbox.star, 1, { tag: 'TGT 01 · LOCK' });
```

**模型数据格式**（一个 JSON 文件，单位为米，**y 轴向上**，x = 产品的前方，z = 朝向观众的一侧；任何比例都可以，因为加载时会归一化）：
```json
{ "name": "VOLT CE-01",
  "parts": [                                   // part = one thing a callout can target (battery, motor, brakes…)
    { "id": "brakes",                          // referenced by content.json callouts[].part
      "anchor": [0.527, 0.416, 0.09],          // hotspot: where leader lines and the lockup ring land (ON the part's surface)
      "center": [0.524, 0.428, 0.08],          // optional: what the close-up / loupe camera looks at (defaults to anchor)
      "tagDir": -1,                            // optional: lockup number chip left (-1) or right (1) of the ring
      "pieces": [                              // piece = a rigid sub-assembly that moves on its own in the explode
        { "id": "brake-caliperA",
          "v": [x0,y0,z0, x1,y1,z1, …],        // vertices, flat
          "e": [0,1, 1,2, …],                  // edges: index pairs into v (the wireframe lines)
          "q": [0,1,5,4, …],                   // optional quads: 4 indices each (the translucent solid-hologram faces + Fresnel)
          "explode": [0, 0, 0.10],             // offset at explode = 1, along the assembly axis
          "axis": { "c": [x,y,z], "d": [0,0,1] }, // optional spin axis (rotors, fans)
          "internal": true,                    // optional: hidden until the part opens (cells, stator)
          "hot": true,                         // optional: glows near-white while open (the thing that makes the number true)
          "box": false }                       // optional: excluded from the target-box bounds (long hoses, cables)
      ] } ] }
```
规则：每个组件都必须与相邻组件在物理上接触。管子由圆环加纵向线组成。总量保持在约 5k 顶点 / 6k 条边，以便快速渲染。给承载关键数字的部件一个 `hot` 内部组件，以及一个*沿自身轴线*滑动的外壳。
