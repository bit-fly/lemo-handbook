# 80s Cel Anime — 我们的示范片

这只是众多可能中的一个例子。不要照搬它的故事、情节走向、镜头、道具或时间安排。

示范片：*City Lights, 1987*（城市之光，1987）（59 s）· `cel-anime-80s.mp4` · 源码在 [`demo/`](demo/)


## 故事与结构

雨后，一位绰号 "Nightbird"（夜鸟）的快递员骑着白色摩托车穿越霓虹城市，要在黎明火箭发射前，把飞行员遗忘的一盘磁带送到发射台。一个主角、一个目标、一个截止时间（日出）。

情节走向（59 s）：带截止时间的冷开场 → 主角出发（片名重音）→ 欢快的动势蒙太奇 → 一个障碍（吊桥升起）→ 一个决定性动作（飞跃；最高点*定格*）→ 释放进入新的光线（夜晚变成黎明）→ 片尾卡。磁带里的歌就是配乐本身：当磁带在机舱里播放时，配乐变成了剧中声源。

旧版指南对这个故事的改编思路是这样表述的（保留作为一个例子，而非规则）：把一个题材变成一次递送、一场与截止时间的赛跑或一次发射；早早埋下目标（地平线上的火箭），在第二幕阻挡它，在结尾的光中揭示它。它列出的其他改编：把产品发布拍成快递员载着产品奔向舞台；把爱情故事拍成两束光穿过沉睡的城市；把历史课拍成飞行员飞越一个个被画成背景的时代。

用上的原生能力：手绘城市对比平涂赛璐珞（霓虹城市、湿漉漉的柏油路、黎明的天空）、有限动画（停留的特写、把飞跃画成一张手绘静帧）、透过光（招牌、尾灯、仪表、片名）、速度语法（视差、速度线、冲击帧）、把主题曲当作情节道具（磁带）。

## 镜头

| 节拍 | 摄影机 |
|---|---|
| 冷开场 | 在一张高大的手绘背景板上做**多层升降下降**（天空 → 屋顶 → 霓虹 → 街道），前景层移动更快；雨声中传来无线电调度 |
| 关键物件 | 戴手套的手拿着磁带的紧凑插入镜头，背后柔和的散景，一道高光滑过它的塑料外壳 |
| 决心 | 眼睛的大特写；在台词 "Copy. I'll beat the sun." 上，眼睛用三张 8 fps 的画稿睁开 |
| 片名 | 透过光片名卡，字母以 12 fps 闪烁着亮起，一道光条扫过，星形闪光，落在铜管重音上 |
| 动势 | 4 层视差的侧面跟拍 + 尾灯光迹；背后视角冲进霓虹峡谷（伪 3D）；带霓虹光带的停留胸像；车轮穿过水洼的插入镜头；一个高架公路的广角镜头**埋下目标**（海湾对面的火箭） |
| 障碍 | 第一人称冲向正在升起的吊桥；戴手套的手拧油门和转速表的大特写，剪辑越来越快 |
| 高潮 | 低角度正面配放射速度线 → 一拍定格 + 白闪 → 冲击帧 → 腾空摩托的手绘“harmony”静帧配缓慢横摇 → 冲击帧 → 着地，火花四溅、镜头震动 |
| 释放 | 与夜间骑行相同的侧面跟拍构图，在海边被重新画成黎明，天空豁然开阔 |
| 交接 | 两只手隔着铁丝网传递磁带；一根手指按下机舱磁带机的 PLAY 键 |
| 结尾 | 火箭升空（延迟的俯仰上摇）；温暖的特写回应开场的台词（"Told you I'd beat the sun."），然后是片尾卡 |

骑手的正面视角藏在一块有色挡风玻璃后面，只露出护目镜和头发，让前灯的光晕撑起这个镜头。剪辑点落在小节线上（116 BPM，一小节 = 2.069 s）。

## 配乐结构

原创的 city-pop / synth-funk 风格“动画片头曲”，用 numpy 合成（`demo/music/score.py`）：116 BPM，E♭ 大调，maj7/9 和弦，J-pop 的“王道进行”（IVM7–V7–iii7–vi7）。FM 电钢琴（DX7 风格的 1:1 载波 + 14:1 的钟声瞬态）、slap 贝斯（拇指击弦 + 八度勾弦）、门限混响军鼓、合成铜管短促重音、带合唱效果的十六分音符吉他切音、弦乐铺底、朗朗上口的主旋律钩子、FM 钟声点缀，以及最后一段副歌**升高半音转调**。

按剪辑写作：冷开场下是前奏，一个加花小节留出引擎轰鸣的空间，片名落在铜管重音上，蒙太奇下是主歌，导歌逐渐递进，飞跃前**一拍真正的静默**，副歌落在手绘静帧上，着地时一个重音，最后一个和弦落在片尾卡上。剧中声源的反转：当磁带在机舱里播放时，配乐被带通处理成磁带音色一小节，然后随着火箭升空和转调打开为全频。

拟音：由转速曲线生成的引擎声（谐波锯齿波叠加 + 点火抖动 + 带通的排气脉冲，腾空时做低通）、雨声底噪 + 随机雨滴、湿路面上的轮胎嘶嘶声、风声、吊桥警铃、无线电静噪咔嗒声、撞击轰响、金属刮擦与火花、磁带咔嗒声、按钮 + 马达、火箭点火与轰鸣。

人声：英语配音的感觉，8 句短台词：女主角（Kokoro `af_bella`）和一位无线电调度员（Kokoro `am_michael`，经过 380–2800 Hz 带通 + 饱和 + 静噪）。Whisper 把 "Launch is at dawn" 听错了，于是改成 "The launch is at dawn"。混音：人声按 RMS 平衡到比闪避后的音乐高约 10 dB，音乐在台词下闪避约 9 dB，引擎和环境声闪避 3 dB，副歌比前奏响 4–6 dB，两遍 loudnorm 到 −14 LUFS。

## 调色板与道具

- 夜晚：靛蓝 / 深紫 / 霓虹品红 / 青色 / 温暖的窗户金色。黎明：长春花蓝 / 玫瑰色 / 桃色 / 淡金色。主角的点缀色：一条**珊瑚色围巾**，在两种光线下都清晰可辨。
- 使用的色彩模型乘数：夜晚亮部 ×[.78,.74,1.0]，暗部 ×[.58,.52,.92]；黎明亮部 ×[1.04,.9,.84]；飞跃时使用一套逆光剪影色（深紫色加橙色轮廓光）。皮肤线条 ≈ `#5a2e2e`。
- 道具：白色摩托车、标着 "SIDE A · CITY LIGHTS" 的磁带、耳机与护目镜（近黑色，线条更粗）、捏握姿势的手套、转速表、带红色警示灯的吊桥、海湾对面泛光灯照亮的发射台上的火箭、带透过光电平表的机舱磁带机。招牌：BAR、CAFE、喫茶、ホテル、カラオケ。
- 女主角，按 `head80.js` 中的实现：眼睛位于头部垂直方向的中间，嘴位于鼻底与下巴之间的上三分之一处；虹膜分层为顶部深色带 → 深色上半部 → 主色 → 明亮的下方月牙，一大一小两个高光；眼尾挑起处 2–3 根分开的睫毛；嘴型有闭合 / 抿嘴 / 说话 / “哦” / 喘气 / 微笑 / 张嘴笑，带深红色口腔和一笔淡淡的下唇；侧面有小小的后脑、小巧微翘的鼻子、前倾的脖子。眨眼时闭眼画稿停留 2–3 帧；眉毛表现决心或疲惫；喘气时肩膀抬起；在音乐重音上，眼睛高光里闪出星形光芒。
- 使用的 CRT 数值：色度模糊约 7 px，Cr 偏移约 2 px；扫描线周期 3 px，强度 0.18，间隙 `1 − a·ph·(1 − 0.6·L)`；荫罩 ±0.06；荧光辉光 0.35；四角 `1 − 0.28·(2u²v² + 0.25(u²+v²))`。摩尔纹检查：在 720p 下 3 px 扫描线变成干净的两行交替；900p 下出现淡淡的 5 行图案；低于 480p 则消失。处理方案中曾尝试过只属于胶片的瑕疵（片门抖动、灰尘、划痕、套色错位），后来都去掉了：它们与录像带的设定相矛盾。开机效果以一声“咚”+ 行频啸叫开启影片；跟踪噪声以一段短促的嘶声/颤音标记与磁带相关的节拍。

## 片尾卡

压暗的最后一幕黎明背景、片名、风格名 "80s Cel Anime"、"LemoLab × Claude Opus 5.5"、一句原创性说明和署名。"LemoLab × Claude Opus 5.5" 这一落款只属于本库的示范片；用户的影片不带任何 LemoLab 署名，也不要复制这张卡。

实际使用的片名卡："CITY LIGHTS" 用粗斜体铬金属字，上方是 シティ・ライツ（Dela Gothic One），一个红色的 "1987" 和一行字距拉开的标语。字幕：Barlow Semi Condensed 600，54 px，奶油黄 `#fff0a0`，9 px 深色描边，距底部 96 px；无线电台词用青色 `#8ff4ff`，带一个方框 "● BASE" 标签；每句显示 max(时长 + 0.6 s, 1.9 s)。

## 版权与署名

- 原创配乐、声音设计、动画和所有画稿：均由本文件夹中的代码生成（numpy、Canvas 2D、WebGL）。没有采样，没有图库素材。
- 人声：Kokoro TTS（Apache 2.0），声音 `af_bella`、`am_michael`。
- 字体（SIL Open Font License 1.1，许可文件在 `demo/fonts/`）：Dela Gothic One（artakana）、Kanit（Cadson Demak）、Barlow Semi Condensed（Jeremy Tribby）。
- 灵感来自 1980 年代的日本赛璐珞动画；所有角色、载具、地点和故事均为原创。

## 构建说明

```
styles/cel-anime-80s/demo/
  cel.js     path / cel / ribbon / flutter helpers      pal.js   color models (day → night / dawn / backlit)
  rider.js   side-view bike + rider, limbs, wheels      head80.js  80s heroine head: 3 views × expressions, body/collar/scarf
  hands.js   pinch-grip gloves                          bg.js    painted plates (street, skyline, tall crane plates, reflections)
  fx.js      rain, splashes, speed lines, flares, lamps, light trails
  post.js    WebGL videotape + CRT pass (bloom, grade, chroma bleed, subtitles, scanlines, grille, glow, power-on, tracking noise)
  shots.js + scenes1–4.js   one function per shot     story.js  bar-aligned timeline, lines, credits
  hud.js     VHS-style subtitles     main.js  plates, shot dispatch, sound events
  lines.json voices   mix.py   music/score.py (original score)   tools/ (still, sheet, srt, mux)
```

1. 处理方案 → `story.js`（116 BPM 小节网格、镜头、台词）。
2. `node styles/cel-anime-80s/demo/tools/still.mjs styles/cel-anime-80s/demo --range 0.5:58.5:1 --out /tmp/cs` → `tools/sheet.py` 生成样片拼图 → 查看 → 修正。`?test=model|close|side` 渲染角色设定图 / 头部特写 / 骑手；`?raw=1` 跳过 CRT 处理；`?nosub=1` 隐藏字幕。
3. `.venv/bin/python core/tts/tts.py demo/lines.json demo/voices` → `core/tts/asr_check.py`。
4. `.venv/bin/python demo/music/score.py`（配乐 + 分轨 + 提示点时间）。
5. `node core/render/events.mjs demo` → `.venv/bin/python demo/mix.py`。
6. `node core/render/video.mjs demo --fps 24 --workers 4 --out demo/out/video24.mp4`（1416 帧，在 M 系列 Mac 上约 36 s）。
7. `sh demo/tools/mux.sh demo/out/video24.mp4 demo/mix.wav cel-anime-80s.mp4 24`，`python demo/tools/srt.py`。

编码数据：ffmpeg 颗粒亮度 4 + 色度 1、CRF 22 约为 32 MB/分钟；亮度 5 + 色度 2、CRF 18 为 270 MB；加上 CRT 处理后 CRF 22 超过 35 MB/分钟，CRF 23 配仅亮度噪声 2 约为 31 MB。单遍 loudnorm 落在 −13.5 LUFS；带 `linear=true` 的两遍处理落在 −14.0。过猛的限制器把副歌压到和前奏一样响：归一化到第 99.99 百分位，只让少数峰值触及限制器。

与本示范片道具相关的坑：
- 在彩色画布上做泛光阈值，把白色摩托车和夹克变成了粉色。
- S 曲线在前灯里造成一个黑洞（先做限幅）。
- 6–8 px 的轮廓光偏移让细细的发丝带完全变成粉色。
- 第一版头发看起来像触手；盖在眼睛上的刘海发梢遮住了睫毛线。
- 第一版脸像一张纸面具：3/4 侧身配一张压扁的正脸（两眼一样大，颧骨没有转向，V 字下巴，又细又长的脖子）。
- 夜间的脸因为夜色色调 + 品红轮廓光 + 粉色光带扫过而发粉；刘海发绺之间露出额头色块。
- 在背后视角的峡谷镜头里，摄影机后方的点翻转到了天空中。
- 火箭飞出了画面：用延迟的俯仰跟随它，并让它以更慢的（二次曲线）方式爬升。
