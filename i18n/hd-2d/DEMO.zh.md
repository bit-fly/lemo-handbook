# HD-2D — 我们的示范片

这只是众多可能中的一个例子。不要照搬它的故事、情节走向、镜头、道具或时间安排。

示范片：*The Lampbearer*（提灯人）（76.5 s，1920×1080，60 fps）· `hd-2d.mp4`（即**移轴版**）· 源码在 [`demo/`](demo/) · 引擎：three.js r170 场景 + 程序化像素纹理 + 自定义物理景深 / 移轴后期（`demo/post_ts.js`）+ Canvas2D 叠加 UI，用 `core/render/video.mjs` 逐帧渲染。


## 故事与结构

港口小镇的灯塔熄灭了；老守塔人把最后一簇火交给孙女 Wren，她提着灯笼穿过夜晚的森林，登上风暴肆虐的悬崖石阶，重新点亮灯塔，让海上的船只找到回家的路。标语：*Every path begins with a single light.*（每一条路，都始于一盏灯。）

示范片如何用上这种风格的原生能力：

| 原生能力 | 在故事中的用法 |
|---|---|
| **主角随身携带的光** | 灯笼既是主光，也是情节本身：Wren 带着一盏必须送到灯塔的小灯。它的亮度就是情绪的仪表：明亮 → 摇曳 → 几近熄灭 → 重新点燃。 |
| **桌面上的世界** | 每个地点都像一张*地图*：港口小镇、林间小路、悬崖石阶、塔顶。每章一个地点，各有自己的光色基调。开场的布景在结尾回归，展示变化（港口：灯塔由暗到亮，船灯陆续亮起）。 |
| **RPG 语法** | “Chapter I” 章节卡、一位在对话框里交付任务的具名 NPC、穿越两种地貌的旅程、在地标处的高潮、片名卡。 |
| **精灵图阴影** | 第一次点火（火盆引火条 → 灯笼）在画面上、两个角色身旁发生，于是两人的影子一下子跳到木板地上。 |
| **移轴** | 超广的交代镜头，把清晰带对准一个微小的主体（灯塔、一条船）。 |

**我们的故事形状：** 冷开场章节卡 → 广角交代镜头里地标之光**熄灭** → 在对话框中交付任务（光被传递）→ 穿越更暗的地貌（森林）→ 考验（风暴；光几乎熄灭；音乐中断）→ 光存活下来 → 地标重新点亮（高潮落在音乐强拍上）→ 开场布景，已然改变 → 片名与标语。

我们控制在 6 个镜头，每 1–2 个镜头一个布景，7 句旁白 + 1 句对白。这“一盏小灯”是灯笼；在另一部片子里，它可以是第一次提交、一颗种子、一封信、一个信号——也可以根本没有随身携带的光。

## 镜头

| 镜头 | 摄影机 |
|---|---|
| 交代（港口全景，5.5–15） | 非常高、非常远（`[-17,15,38] → [-13,12,31]`，fov 36），缓慢推镜。焦距 44 m，光圈 520；移轴清晰带固定在画面高度 34 % 处（没有角色可追踪）。 |
| 对话（码头，15–25.5） | 中高位 3/4 视角（约 5 m 高，8–10 m 远，fov 30），几乎静止的轻微漂移。每一帧都对焦在主角上，光圈 300。 |
| 旅途（森林，25.5–35.5） | **横向跟拍**，摄影机略微领先于行走者（`monotone` 前瞻），fov 30，高 6.3 m；镜头前的近景蕨类虚化成暗色形状；结尾时她从前景树干后面走过。光圈 380。 |
| 考验（风暴石阶，35.5–49.5） | 以悬崖的巨大交代视角开场，缓入跟随镜头（37–39 s），然后在她跪下时**俯冲到低处贴近**（摄影机约 2.2 m 高，6 m 远），在她继续攀登时拉远。光圈 140–170（越近虚化越少）。 |
| 高潮（灯室，49.5–58） | 中景对准透镜旁的主角；点燃后，上升拉镜到塔的全景（fov 30 → 40，光圈 150 → 320），焦点从主角切换到透镜。 |
| 结局（港口结尾 + 片名，58–76.5） | 与开场对称，但更广更高（`[-22,26,44] → [-27,33,55]`，fov 42），焦距 70，光圈 380，移轴清晰带在 36 %。 |

规则：始终*俯视*这个世界（绝不平视）；每条摄影机路径都是 2–7 个关键帧的 `track()`（单调三次插值，无过冲）；对焦距离每帧根据摄影机到主角的距离重新计算（`post.dof.focus = cam.position.distanceTo(hero + (0,.7,0))`）；在移轴版中，清晰带跟随主角在屏幕上的投影高度（`tiltCenter`，限制在 .2–.8）。

## 配乐结构

- **人声（Kokoro，通过 `core/tts/tts.py`）**：旁白用 `af_heart`，语速 .82–.90（缓慢，故事书口吻）；交付任务者用 `bm_george`，语速 .84，混音时做 7 kHz 低通，让他“处在世界之中”。7 句旁白 + 1 句对白，每句 1–5.4 s。用 `core/tts/asr_check.py` 检查；把自造的名字放进 `asr` 字段（`Graywater`、`Ren`、`whisper would`），否则 whisper 会把它们标出来。
- **音乐**：一首授权曲目，按画面剪辑：Scott Buckley 的 *Precipice*（CC BY 4.0），由 `music/edit.py` 剪成五段（前奏铺底 → **灯塔熄灭时 0.8 s 的停顿** → 贯穿森林与风暴的持续递进 → **在 42.0 火焰几近熄灭时硬停，进入混响尾音**，下面只留前奏铺底 → 作曲者自己的递进 → **把它 D→G♭ 转调的强拍放在 53.500 s = 点燃时刻**，通过最陡的 < 250 Hz 起音自动定位（误差 < 5 ms）→ 跳到最终的 E♭ 落点配片名）。所有剪辑点都在 `music/CUES.md`。挑一首自身起伏与故事相符的曲子；在曲子内部剪，而不是拼接多首曲目。
- **环境声与拟音（`mix.py`，用 `core/audio/sfx.py` 合成）**：每个布景各有底噪，增益曲线交叉淡化（港口海浪 + 缆绳吱呀、火盆噼啪、森林蟋蟀 + 树叶、风暴雨声 + 风声及阵风涌起），以及事件音：12.3 灯熄灭的“噗”声、16.15 划火柴、17.3 对话框的 UI 提示音、来自 `sfx_events.json` 的脚步声（木头 / 泥土 / 石头）、每次闪电后 0.25 s 的雷声、阵风时的呼啸、寂静中的两下心跳、53.5 的点燃轰鸣（42 Hz 下沉 + 空气感 + 高频闪烁），以及船只亮灯时的六声小铃。
- **混音**：每句人声都压缩并做 RMS 匹配；各总线电平设为人声 −17、音乐 −21、环境 −30、拟音 −27 dB RMS；音乐在人声下闪避约 2.2 dB，然后**逐句自动闪避**把音乐 + 环境压到每句人声下方约 10 dB（只降不升；脚本会打印每句实际达到的差值，示范片中为 7–14 dB）；`tanh` 软削波；最终响度由 `core/render/mux.sh` 处理（两遍 loudnorm −14 LUFS，TP −1.2）。

## 调色板与道具

示范片是一部夜景片：冷蓝对暖琥珀色的火光，强烈的泛光，浓重的暗角。

**分辨率与像素。** 场景纹理逐像素绘制在小画布上（`PX` 类，`px.js`），以 `NearestFilter` 上传；世界空间 UV（`worldUV`，`kit.js`）让每个表面都保持 **24 px/m**。角色是 34×50 px 的帧，`SPX = 1/30` m 每像素（约 1.67 m 高）。颜色来自**色阶**（3–6 个色块），按亮度选取并配合 4×4 Bayer 抖动；抖动带 `dz` 必须窄：**角色 .22，纹理 .45**（越宽，到处都是棋盘格噪点）。精灵图会自动获得 1 px 的 **selout** 描边（`PX.outline(.3)`：紧邻精灵的透明像素变成相邻颜色，并向 `#16 0e 1e` 压暗）。

**调色板（夜景）。** 天空 `#050818 → #101d3e → #2c4262`（地平线），雾 `#16223a`（港口）/ `#152a48`（森林）/ `#1c2334`（风暴），月光 `#8fa8e0`，半球光 `#3a4c7a / #0a0a12`。火与窗 `#ff9d4a`、`#ffae55`、`#ff8c3a`，灯笼 `#ffb050`，灯塔 `#fff0c8`。角色冷色补光 `#9fb2e8`。主角斗篷色阶 `#2e0b14 … #c9503f`（深红），围巾金色 `#b08424`；守塔人外套藏青 `#10131f … #5a6c98`，胡须为灰色系。墨色 `#1a1016`。

**材质。** 只用盒体和圆柱：灰泥 + 木梁的房屋（`plaster`）、木瓦屋顶（`shingles`）、带钉点的木板（`woodPlanks`）、Worley 鹅卵石（`cobbles`）、层叠岩石（`rock`）、树皮/树冠/蕨类/草/蘑菇精灵图（`forest_art.js`）。树叶、草、蕨类、蘑菇、远处的船和山脊都是**广告牌**（数量多时用实例化）。窗户是自发光像素窗格（`windowMat`，自发光 2.2）。火是 6 帧像素图集广告牌，10 fps（`fire`）。海面是自定义着色器：量化的像素波纹、浪峰带、朝摄影机拉长的光反射柱、闪烁的高光点。

**每个布景的灯光配置。** 一盏昏暗的投影月光（DirectionalLight 1.1–1.2，2048 阴影贴图）+ 半球补光 + **实景点光源**（窗户 8、路灯 12–14、火盆 16 带阴影、灯笼 2.6–14 带阴影）+ 一盏**冷色正面补光**（`#9fb2e8`/`#8fa6e0`，1.2–1.8，范围 6–8 m），放在主角前方约 2 m。每个光源上都放一个叠加的 `glow` 精灵，让泛光有东西可抓。

**后期链**（`post_ts.js`，`makePost(renderer, scene, camera, 1920, 1080, { ssaa: 2 })`）：以 2× 渲染（内部 3840×2160）并开 MSAA → 物理景深（CoC = `aper × (1/focus − 1/z)` px，96 采样螺旋收集，远处采样不能渗到清晰的前景上）**+ 移轴** → UnrealBloom（强度 .55，半径 .75，阈值 .85）→ 暗角/调色（amt .62，warm .1，contrast .2，sat 1.05）→ ACES filmic，曝光 1.15。移轴版额外加上：`tiltAmt 17`，清晰带半宽 `tiltW .075`，羽化 `tiltF .3`（均为屏幕高度的比例），`maxCoc ≥ 24`，饱和度 ×1.16，对比度 .28。

**字体。** Cinzel 500/700（章节标签、片名），Cormorant Garamond italic 500（字幕、标语），Cormorant 500/600（对白文字、名牌）。金色 `#d8c28e / #e2c989 / #c9a863`，羊皮纸白 `#f3ead6 / #f6f0e2`。

实际实现的运动：

- **精灵图逐格跳，其他一切平滑滑动。** 行走循环用 4 帧，6–10 fps（`['w0','w1','w2','w3'][Math.floor(t*9)%4]`），待机在两帧间以约 1.4 Hz 交替，每隔几秒眨一次眼，姿势瞬间切换（`upE → up → idle`）。摄影机、灯光、粒子、光束和焦点以 60 fps 每帧更新。
- **姿势就是数据**：一帧是一个参数对象（`{ step, arm:'low'|'fwd'|'up'|'hug'|'pour', kneel, lit, bob, hem, scarf, blink, closed, look }`），由 `drawWren` / `drawKeeper` 绘制。新增一个姿势就是新增一条表项（或给 `makeChar` 传 `extra`）。
- **光会呼吸**：每簇火焰都用 `flick(t, seed)`（三个正弦叠加，±20 %）；灯笼的 `lit` 值（0–1）既重绘精灵图里火焰的大小，*也*驱动点光源（`intensity ∝ lit^1.3`）、光晕透明度和缩放。
- **事件就是时间戳**，写在 `story.js` 的 `T` 里（灯塔闪烁 11.5 → 熄灭 12.35，引火条 16.2，阵风 40.6，变暗 41.3，全黑 42.0，复燃 45.6，起身 47.6，倾倒 52.6，点燃 53.5，光束 54.4，船只 59.2）。场景用 `ss(seg(t,a,b))` 混合。
- **标志性节拍：** 灯塔闪两下后熄灭；火盆引火条点亮灯笼，两个精灵的影子一齐跳到木板上；阵风把火焰压成一点余烬（精灵 `lit .27`），世界几乎全黑，然后火焰重新长大；透镜点燃时有一次曝光爆闪（`exp(-(t-53.5)/.22)`），两张光束卡片开始扫动；船灯每 0.7 s 亮起一盏，并向港口漂近。
- **天气是程序化的**：雨 = 被风吹斜的线段（`rain`），闪电 = 脚本化的闪光曲线（`flash(t)`：150 ms 击闪、回落、60 ms 再击、指数衰减），同时提亮半球光、一盏“闪电”灯、天空、云、海面和曝光。

## 片尾卡

- **旁白字幕**：Cormorant Garamond italic 500，50 px，`#f6f0e2`，居中于 y = H − 88，衬在柔和的横向暗带上（渐变，最大 .38 alpha），10 px 投影。人声开始前 .35 s 淡入，人声结束后 0.45–0.8 s 淡出。每段人声一行。
- **对话框**（用于画面中说话的角色，代替字幕）：1180×210 px，底部居中，藏青渐变 `rgba(14,18,34,.86) → rgba(6,8,18,.9)`，2 px 金色边框 `rgba(214,190,130,.9)` + 内侧 1 px 线，金色菱形角饰；名牌（Cormorant 600 34 px）压在左上边缘；正文 Cormorant 500 44 px，**在人声时长的 92 % 内逐字打出**；打完后显示闪烁的金色 ▼ 光标；入场时上滑 14 px。配一声轻柔的提示音。
- **章节卡**（0–5.5 s）：径向藏青背景 `#11172a → #020308`，`CHAPTER  I`（Cinzel 500 34 px，字距 10 px，`#d8c28e`）位于带菱形的金色装饰线上方，然后是章节名，Cormorant italic 78 px，带暖色辉光；一粒像素余烬飘过画面。
- **片名**（67.4–76.4 s）：画面压暗 50 %，`THE LAMPBEARER` 用 Cinzel 700 118 px，字距 14 px，竖向金色渐变 `#fff3cf → #e2c27c → #a8803e` 并带辉光；装饰线；标语用 Cormorant italic 50 px；底部是音乐/人声署名（24 px，75 % alpha）。
- **片尾署名行（仅限本库的示范片）**：我们的示范片以 **"LemoLab × Claude Opus 5.5"** 结尾。它是片名卡的一部分（`ui.js` 的 `title()`，默认开启）：Cinzel 500 30 px，`#d8c28e`，85 % alpha，字距 4 px，居中于 y = 668，在 70.6–71.6 s 淡入，位于标语与音乐署名之间，并不取代音乐署名。`?nocredit=1` 可隐藏它。这一落款只属于本库的示范片；用户的影片不带任何 LemoLab 署名，也不要复制这张卡——改编 `ui.js` 时，请删除这一署名行。
- 从同一份数据导出 `.srt`（`tools/srt.py`：story.js 的 `VO` + `voices/dur.json`，+0.5 s 停留，对白加前缀 `OLD KEEPER:`）。


## 构建说明

```
styles/hd-2d/demo/
  index.html  main.js     page, renderer (ACES, PCF soft shadows), shot → set routing, tilt-shift driver (?tilt=1)
  story.js                DUR, SHOTS, event times T, VO lines (single source of truth)
  px.js                   PX pixel canvas, ramps + Bayer, surface textures, billboard / glow / blob
  kit.js                  worldUV, mat/mesh/box, cached materials, house, crate, barrel, pixel fire, windows, ridges
  fx.js                   sky, stars, pixel sea shader, particles, rain, shaft, beamCard, flick
  chars.js                procedural pixel characters (Wren, Old Keeper), pose tables, atlas, makeChar
  harbor.js forest.js(+forest_art.js) cliff.js   the three sets; each exports build*() → { scene, update }
  ui.js                   Canvas2D overlay: chapter card, dialogue box, subtitles, title, fades, credits
  post_ts.js              makePost: DOF + tilt-shift + bloom + grade (local copy of core/three/post.js)
  lines.json vo_times.json sfx_events.json   TTS lines, voice start times, foley timestamps
  music/edit.py src/      score edit of "Precipice" → music/score.wav, CUES.md, measure.json
  mix.py                  ambience + foley + voices + ducking → mix.wav
  tools/srt.py  tools/render_range.mjs  tools/sheet/index.html   srt export, partial re-render, sprite sheet page
```

所有命令都在仓库根目录执行。`.venv` 是共享的 Python 环境（kokoro-onnx、faster-whisper、librosa）。

```sh
PY=.venv/bin/python; D=styles/hd-2d/demo

# 0. fresh clone: voices/*.wav, music/score.wav and mix.wav are git-ignored (rebuilt below); if music/src/ is empty, fetch the source
curl -L -o $D/music/src/sb_precipice.mp3 https://www.scottbuckley.com.au/library/wp-content/uploads/2021/01/sb_precipice.mp3

# 1. voices (Kokoro) + whisper check → voices/*.wav, dur.json, words.json
$PY core/tts/tts.py $D/lines.json $D/voices
$PY core/tts/asr_check.py $D/lines.json $D/voices      # demo: 1 expected DIFF (n1 "Graywater" → "gray water")

# 2. score edit → music/score.wav (+ CUES.md, measure.json); set OUT_DIR=... to write elsewhere
(cd $D/music && ../../../../.venv/bin/python edit.py)

# 3. mix → demo/mix.wav (optional arg: another output path)
$PY $D/mix.py

# 4. subtitles → styles/hd-2d/hd-2d.srt
$PY $D/tools/srt.py

# 5. review stills of the tilt-shift cut (≈0.1–0.2 s per frame)
node core/render/still.mjs $D 8 16.9 30.5 42.8 53.8 62 71 --q tilt=1 --out $D/out/review

# 6. render the TILT-SHIFT CUT (the version in the library): 4590 frames at 60 fps
#    measured 26–37 fps with 2 workers (≈2.5 min); the shipped file used 6 workers
node core/render/video.mjs $D --fps 60 --workers 2 --q tilt=1 --out $D/out/video_tilt.mp4

# 7. mux: loudnorm −14 LUFS, grain 0 (pixel art: no film grain)
sh core/render/mux.sh $D/out/video_tilt.mp4 $D/mix.wav styles/hd-2d/hd-2d.mp4 60 0
```

`?tilt=1` 就是生成移轴版的开关：它是 `post_ts.js` 里的一个**渲染时后期效果**（而不是对成片再跑一遍）。不加它，得到的是普通景深版。其他页面开关：`ss=1`（不做超采样，预览更快）、`only=harbor|forest|cliff`（只构建一个布景）、`nobloom`、`nodof`、`noglow`、`nocredit=1`（隐藏片尾署名行）。

**局部重渲染**（例如修改片名卡之后；成片的片尾署名就是这样加上去的）：只渲染尾段，并拼接到现有的 `out/video_tilt.mp4` 上（第 0–4019 帧不受片名卡改动影响），然后重新混流。先备份当前成片（`hd-2d_v1.mp4`）。音频不动（同一个 `mix.wav` → 解码后的音频逐位相同）。
```sh
node $D/tools/render_range.mjs 67 76.5 --workers 2 --q tilt=1 --out $D/out/tail.mp4          # 570 frames ≈ 15 s
ffmpeg -y -i $D/out/video_tilt.mp4 -i $D/out/tail.mp4 -filter_complex \
  "[0:v]trim=end_frame=4020,setpts=PTS-STARTPTS[a];[1:v]setpts=PTS-STARTPTS[b];[a][b]concat=n=2:v=1:a=0[v]" \
  -map "[v]" -c:v libx264 -preset medium -crf 14 -pix_fmt yuv420p $D/out/video_tilt_new.mp4   # 25–150 s (CPU-bound, slower when other renders run)
sh core/render/mux.sh $D/out/video_tilt_new.mp4 $D/mix.wav styles/hd-2d/hd-2d.mp4 60 0          # 35–245 s, same caveat
```

修改故事时：先改 `story.js`，再把人声起始时间复制到 `vo_times.json`（mix.py 读的是这个文件，不是 story.js），让 `sfx_events.json` 里的脚步声与各布景的行走帧保持同步，并移动 `music/edit.py` 顶部的提示点常量（`T_CAESURA`、`T_SILENCE`、`T_HIT`、`NARRATION`）。

我们踩过的坑，附示范片的道具和数字：

- **到处都是棋盘格**：色阶的抖动带太宽。精灵图保持 `dz` ≈ .22，纹理 ≈ .45。
- **灯笼把精灵照爆**：放在广告牌平面上的点光源会让它过饱和。把光源放在**距灯笼 0.42–0.45 m、朝向摄影机的位置**（`lp + toCam * .45`），并在森林场景里于着色器中限制精灵光照（通过 `onBeforeCompile` 加入 `outgoingLight = min(outgoingLight, diffuseColor.rgb * 1.35 + emissive)`）。
- **广告牌后方的灯照不亮它**（它只有正面法线）。务必在主角前方约 2 m 加一盏冷色正面补光。
- **面向摄影机的圆柱光束产生了 NaN**；泛光把它们扩散成大块黑色。改用 `beamCard`（与轴对齐的广告牌条带，转向摄影机时淡出），让光晕精灵接管（`face` 系数会放大灯塔的光晕）。
- **海面反射柱除以零**：用 `max(.35, …)` 限制宽度。
- **风暴第一版太暗，看不清**。在剧情需要黑暗的节拍之外加一层“可读性”补光：半球光 +1.0、太阳 +1.3、天空 +.35（`cliff.js` 中的 `ext` 项），即环境中间调大约 ×2–2.5，只在火焰几近熄灭的节拍里降到零。
- **远处船只的光晕被雾/几何体挡住**：给这些光晕精灵设 `depthTest = false` + `renderOrder 5`。
- **没有角色的镜头上的移轴**：追踪器没有可跟的对象；每个镜头用固定的清晰带高度（`TILT_C`）。
- **移轴与遮挡**：移轴模糊被并入与深度景深相同的带符号 CoC（清晰带上方 = 远，下方 = 近），这样收集过程仍遵守“远处不能渗到清晰的近处上”的规则；不要把它作为单独的模糊通道加上去。
- **闪光前后几乎相同的帧会出现差异**：点燃爆闪以 0.22 s 的时间常数衰减，因此 53.8 s 的静帧与相邻的 60 fps 帧有明显差别。这是预期行为，不是 bug。
- **Node 渲染脚本可能在 `done` 后不退出**，因为静态服务器保持着连接（`demo/tools/render_range.mjs` 因此以 `process.exit(0)` 结尾）。一旦打印出 `done`，输出文件就已完整。

## 引擎参考

### 页面约定（`main.js`）
`window.render(t)` 选出镜头（`shotAt(t)`），映射到布景（`SET_OF`），让景深通道指向该布景的场景，重置后期默认值（泛光 .55/.85、曝光 1.15、warm .1、sat 1.05、暗角 .62），调用 `set.update(t, shot, camera, post, renderer)`，若有 `?tilt` 则应用移轴，渲染合成器，然后绘制叠加层（`drawOverlay(t, shot)`）。所有布景共用一台 `PerspectiveCamera(32, 16/9, .3, 2000)`；每个布景每帧设置 fov/position/lookAt。

### 模块与关键函数
| 模块 | 函数 | 作用 / 关键参数 |
|---|---|---|
| `px.js` | `new PX(w,h)` | `.set/.get/.rect/.fill(f)/.ellipse/.poly/.line/.outline(k,tint)/.done()` → 画布 |
| | `ramp(cols, dz=.45)` | `(v,x,y) → rgb`，带 Bayer 抖动；`dz` = 抖动带宽度 |
| | `texOf(canvas, {repeat, mip, linear})` | NearestFilter 纹理 |
| | `woodPlanks / cobbles / rock / plaster / shingles / ground(w,h,o)` | 程序化表面画布（`seed`、`cols`、`pw`、`len`、`cell`、`beams`、`snow`） |
| | `billboard(tex, wM, hM, {ax, ay, em, emCol, emI, shadow, receive})` | 直立受光精灵平面（Lambert + alphaTest .5），带自定义深度/距离材质，因此能投出镂空形状的阴影 |
| | `glow(col, size, i)` · `blob(r, a)` · `radialTex` | 叠加光晕精灵 · 地面接触阴影 |
| `kit.js` | `worldUV(geo, tile)` · `mat(canvas, o)` · `mesh(geo, m)` · `box(w,h,d,m)` | 按法线做平面 UV，使纹素密度恒定（`tile = canvas.width / 24` m） |
| | `mats()` | 缓存的 `plank, plankDark, beam, wall, wall2, wall3, roof, roof2, roof3` |
| | `house({x,z,w,d,h,wall,roof,door,windows,upper,side,chimney,ry})` | 带自发光窗户的木构房屋（`g.userData.windows`） |
| | `crate(s)` · `barrel(r,h)` · `fire(size,{seed,i})` · `windowQuad` · `ridge(wM,hM,col,seed)` | 道具；`fire.userData.update(t, cam, scale)` |
| `fx.js` | `sky({top,mid,hor,moonDir,moonCol})` → `{mesh,u}` | 渐变天穹 + 月晕；`u.k` = 亮度 |
| | `stars(n, seed)` · `sea(size,{ppm,deep,shallow,crest})` → `{mesh,u,setLights([{p,c,i}])}` | 每帧设置 `u.t`、`u.camPos`、雾 uniform、`u.bright`、`u.calm` |
| | `particles(n, fn(i,t,o), {soft, blend})` | 确定性的 CPU 粒子；`fn` 填写 `o.x,y,z,a,s,r,g,b`；调用 `.userData.update(t)` |
| | `rain(n, box, {speed,len,opacity})` · `.userData.update(t, [windX,0])` | 倾斜雨丝 |
| | `beamCard(len, w0, w1, col, {k, fall})` · `.userData.aim(origin, dir, cam)` → 侧向系数 | 永远不露出边缘的光束 |
| | `flick(t, seed)` | 火焰闪烁系数 ≈ 1 ± .2 |
| `chars.js` | `makeChar('wren'|'keeper', extraPoses)` → `{root, mesh, frame(name), face(cam, flip), lanternPos(name, flip)}` | 34×50 px 图集 + 自发光图集（灯笼玻璃）；`root.userData.char` 是移轴追踪器查找的对象 |
| `post_ts.js` | `makePost(renderer, scene, cam, w, h, {ssaa, ao})` → `{composer, dof, bloom, vig}` | `dof.focus`（m）、`dof.aper`（px·m）、`dof.maxCoc`（px）、`dof.tiltAmt/tiltC/tiltW/tiltF`；`vig.uniforms.amt/warm/sat/contrast/fade` |
| `ui.js` | `drawOverlay(t, shot)` · `overlayReady()` | 读取 `story.js` 的 `VO` 和 `voices/dur.json` |
| `/core/lib.js` | `track(keys)` · `monotone` · `seg` · `ss` · `eio` · `eo` · `lerp` · `clamp` | 摄影机路径与缓动 |

### 最小的新布景
```js
// myset.js — a lantern-lit alley; register in main.js: sets.alley = buildAlley(); SET_OF.alley = 'alley'; add { id:'alley', a, b } to story.js SHOTS
import * as THREE from 'three';
import { cobbles, glow } from './px.js';
import { mat, mesh, house } from './kit.js';
import { sky, particles, flick } from './fx.js';
import { makeChar } from './chars.js';
import { track, seg, ss } from '/core/lib.js';

export function buildAlley() {
  const scene = new THREE.Scene(); scene.fog = new THREE.FogExp2('#16223a', .03);
  const SK = sky(); scene.add(SK.mesh);
  const moon = new THREE.DirectionalLight('#8fa8e0', 1.1); moon.position.set(-20, 30, -20); moon.castShadow = true; moon.shadow.mapSize.set(2048, 2048);
  scene.add(moon, new THREE.HemisphereLight('#3a4c7a', '#0a0a12', .9));
  scene.add(mesh(new THREE.BoxGeometry(30, .4, 12).translate(0, -.2, 0), mat(cobbles(96, 96))));
  scene.add(house({ x: -4, z: -5, w: 6, d: 5, h: 4.5, door: 1.2 }), house({ x: 4, z: -5, w: 5, d: 5, h: 5, wall: 'wall3', roof: 'roof2' }));
  const hero = makeChar('wren'); scene.add(hero.root);
  const lamp = new THREE.PointLight('#ffb050', 3, 10, 2); lamp.castShadow = true; lamp.shadow.bias = -.004; scene.add(lamp);
  const halo = glow('#ffc070', 1.1, 1.2); scene.add(halo);
  const fill = new THREE.PointLight('#9fb2e8', 1.5, 7, 2); scene.add(fill);                 // cool front fill: never skip
  const dust = particles(80, (i, t, o) => { o.x = (i * 7.3 % 20) - 10 + t * .1; o.y = (i * 3.1 % 4); o.z = (i * 5.7 % 6) - 3; o.a = .3; o.s = .05; o.r = .7; o.g = .8; o.b = 1; }, { soft: 1 });
  scene.add(dust);
  const camP = track([[0, [-2, 5.5, 10]], [8, [2, 5, 9]]]), camL = track([[0, [-1, .8, 0]], [8, [2, .8, 0]]]);

  function update(t, shot, cam, post) {
    const lt = t - shot.a;
    cam.position.set(...camP(lt)); cam.fov = 30; cam.updateProjectionMatrix(); cam.lookAt(...camL(lt));
    const x = -3 + ss(seg(lt, .5, 7.5)) * 6, walking = lt > .5 && lt < 7.5;
    hero.root.position.set(x, 0, 0); hero.frame(walking ? ['w0', 'w1', 'w2', 'w3'][Math.floor(t * 9) % 4] : 'idle0'); hero.face(cam);
    const lp = hero.lanternPos('w0'), toCam = cam.position.clone().sub(lp).setY(0).normalize();
    lamp.position.copy(lp).addScaledVector(toCam, .45); lamp.intensity = 2.6 * flick(t, 3); halo.position.copy(lp);   // light 0.45 m toward the lens
    fill.position.set(x + .4, 1.6, 2.2);
    dust.userData.update(t);
    post.dof.focus = cam.position.distanceTo(hero.root.position.clone().setY(.7)); post.dof.aper = 350; post.dof.maxCoc = 22;
  }
  return { scene, update };
}
```
然后用 `node core/render/still.mjs styles/hd-2d/demo <t> --q 'tilt=1&only=alley'` 检查它（在 `main.js` 的 `ONLY` 开关里加上 `alley`）。
