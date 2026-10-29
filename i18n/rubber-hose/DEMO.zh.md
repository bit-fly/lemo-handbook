# 1930s 橡皮管卡通 —— 我们的示例片

这只是众多可能中的一个例子。不要照搬它的故事、结构、镜头、道具或时间安排。

示例片：*Coffee Cup Chase*（50 s）· `rubber-hose.mp4` · 源文件在 [`demo/`](demo/)


## 故事与结构

一只刚睡醒的餐馆马克杯尝了尝自己：好苦！它满厨房追一块逃跑的方糖（料理台、瓷器柜、水槽）。眼看方糖就要被吸进下水口，马克杯把橡皮管手臂伸长，绕过漩涡把它捞了出来，然后难过地放它走；方糖却自己跳进了杯子。咖啡变甜了，整个厨房随着乐队跳起舞来。一位 1930 年代的电台体育播音员像解说赛马一样解说这场追逐（“And they're off!”）。

弧线（40–55 s）：第 1 帧就是钩子（跳动的标题字母，乐队一记重音）→ 一个小小的愿望 → 三段逐步升级的追逐桥段，每段一个视觉笑点 → 危险 → 伸长 → 死寂 → 一个安静、善良的转折 → 释放：整个世界跳起舞 → 带一个笑点的光圈收。一个主角，一个目标，一个转折。

旧版指南要求至少用上四种招牌能力中的三种，把最强的放在高潮，并建议把任何题材改编成**在一个热闹地点里的一场追逐或一场表演**（厨房、办公室、玩具店、工厂），配 5–8 个活过来的物件作为配角。那是这部示例片的形态，不是这种风格的规则。

用上的招牌手法：
- **万物随节拍呼吸**：厨房本身就是一个角色；高潮时整个世界同步起舞，连墙壁也在跳（回报镜头）。
- **Mickey-mousing（动作配乐同步）**：一摞盘子成了木琴台阶；小角色踩着上行的木琴八分音符往上爬，大角色踩着大号的四分音符。
- **橡皮管伸长**：转折点；马克杯的手臂在一个不间断的镜头里绕过漩涡、伸进下水口。
- **影片是一件实物**：标题卡像百叶窗帘一样卷上去；一个角色的手套把光圈拉上。

## 镜头

| 节拍 | 镜头 |
|---|---|
| 开场 | 带旋转放射光芒的标题卡；字母每拍像波浪一样跳动；标题卡像百叶窗帘一样卷起，露出布景 |
| 建立镜头 | **舞台全景，锁定不动**，平视。布景看起来像一个舞台框；道具沿料理台一字排开 |
| 反应笑点 | 硬切到脸部特写（前段唯一的大脸镜头） |
| 追逐 | 在奔跑者旁边**横移摇镜**，起止都有缓动；目的地道具在笑点之前入画 |
| 纵向桥段 | 不是远远地拍下整个桥段：每个攀爬者都用**中景**跟拍（角色约占画面高度的 1/4–1/3），让每一个音乐台阶和盘子的弹跳都能看清；在两个攀爬者之间剪切；然后随坠落向下俯仰 |
| 危险 | 略微俯拍，让危险一眼可读；大伸长全程**一个不间断的镜头** |
| 安静的转折 | 中景双人镜头，然后主角的**背影**在背景里小小地走远，而另一个角色在前景（一块前景料理台上）显得很大 |
| 高潮 | 从特写拉镜到**中全景**（不是远全景：脸必须看得清）：主角在中间，身后料理台上是活过来的道具，更近的一块料理台上还有**前景一排更大的舞者**。按小节分 2–3 步（摇摆 → 踢腿 → 集体下蹲再弹起），然后**所有人在最后一拍定格成“当当！”的姿势**，一直停留到光圈收拢 |
| 结尾 | 光圈收在主角们身上；一个角色的手套把它拉上 |

起跳前的犹豫节拍，用停帧来表演：下蹲（停）→ 目光移向另一个角色的背影（停）→ 目光向上看向目标（停）→ 回来 → 向上 + 咧嘴笑 → 小跳 → 起跳。每次瞥视落在一个八分音符上，配一声木鱼，同时镜头缓慢推镜。音乐停下来留出一个“四目相对”的节拍，一切都定格，连背景的呼吸也停了。

## 配乐结构

原创大乐队配乐（`demo/music/score.py`，通过 `core/audio/sampler.py` 使用 VSCO 2 CE / VCSL 采样，班卓琴用 `pluck.py`）。**144 BPM，4/4 → 1 拍 = 10 帧**，1 小节 = 1.667 s，共 28 小节。一个原创的 4 小节切分主题，分别用于标题、追逐，一段慢速单簧管独奏版用于温柔的节拍，以及一段转调的全乐队尾声合奏用于高潮。

停顿（彻底静音，包括混响尾音）用在四目相对的节拍上、笑点前的悬念处，以及伸长之后整整 2 拍的静默；每个笑点都有一个短促强调音；每次伸长 / 滑行 / 坠落都配滑哨；木琴*就是*那些盘子。放映机的咔嗒声是静默中唯一的声音。

本片特有的拟音（全部合成）：瓷器 = 硬朗的非谐波分音（~2.7 / 4.2 / 6.3 kHz）+ 细小的瞬态；厚马克杯 = 更低、更闷的分音；方糖 = 高音木鱼 + 稀疏的嘎吱声；时钟 = 18 Hz 的小锤敲两只铃；烤面包机 = 咔哒声、八分音符的滴答、铃声 + 弹簧“boing”；水 = 滤波噪声 + 上升的气泡音、下水口的吸溜声、气泡底层；橡皮 = 通过带通滤波的锯齿波吱嘎声。

人声：一位老派电台播音员像解说赛马一样解说情节（Kokoro `bm_lewis`，速度 1.0），7 句短台词（“Seven a.m., folks!”……“Good night, folks!”）。处理链：HP 260 Hz / LP 4.6 kHz，tanh 饱和，一个短房间混响，压缩。人声下音乐压低约 8 dB。光学音轨处理：带限 110 Hz–6.2 kHz，0.6 Hz 慢速抖动（wow），7 Hz 快速颤动（flutter）。

## 色板与道具

- 灰阶：纸 `#F1EEE6` · 浅 `#C8C5BC` · 中 `#9A978F` · 中深 `#6B6963` · 深 `#3B3A37` · 墨 `#0E0D0C` · 角色白 `#FCFBF7`。
- 对比度修正（第一张风格帧太平了）：墙 `#8C8981`，瓷砖 `#A29F97`，橱柜 `#66635D`–`#7C7972`；最终合成中 `contrast(1.14)`。
- 墨色轮廓线在屏幕空间为 6 px；280 px 高的角色四肢为 13 px；胶片损伤：片门晃动 ±1.2 px，偶尔跳 3–6 px，暗角从 0 到四角 62 % 黑，每次剪切垂直跳 3 px，0.55 px 模糊；走路上下起伏 10 px（伤心走路：步幅 34，起伏 4），跑步前倾 0.24 rad。
- **马克杯**（主角）：一只矮胖的餐馆马克杯，白瓷，杯口两道细黑圈，盛满黑咖啡（黑色椭圆 + 一道白色月牙高光）；脸长在杯身上，饼状眼睛，小黑鼻子，大嘴巴；把手在背后像一条小尾巴。它的**蒸汽**承载情绪：慵懒的波浪 / 苦涩的锯齿 / 笔直向上的警报 / 蔫掉的下垂 / 爱心。
- **方糖**：一个真正投影出来的 3D 立方体，略带俯视（仰角 ≈ 0.26 rad），脸通过仿射变换映射到正面。
- **厨房配角**（活过来的道具，都有呼吸相位）：锅、时钟、烤面包机、盘子、窗帘。背景图案：带小菱形的条纹墙纸、方形瓷砖、镶板橱柜、黑白棋盘格地板、吊灯。两张缓存背景：厨房；橱柜 + 水槽。
- 刻意不从参考作品中学的：不用任何现有角色（猫、女孩、小丑），不照搬标题卡或主题，不用那个年代的种族漫画形象；与 *Cuphead* 的设计不同，马克杯的整个身体就是杯子（没有人类躯干，没有吸管，没有短裤）。

## 标题与字幕

- 字幕：“播音员字幕卡”：底板 `rgba(12,11,10,.92)`，白色双线边框，圆点加圆环的角饰，以及一个小小的 1930 年代铝带麦克风图标；IM Fell English SC 36 px，纸白色；默认底部在 y ≈ 986，动作偏低时放到顶部。每张卡停留 ≥ 语音 + 0.6 s。
- 标题：Shrikhand，白色字面，14 % 墨色轮廓，向右下的墨色投影，字母在旋转放射光芒上随节拍以行进波跳动；副标题用 Limelight 大写字母。

## 片尾卡

同样的放射光芒，一块波浪边的牌子写着 “The End”、风格名、`LemoLab × Claude Opus 5.5`，底部是小号署名行；它从黑场以光圈开启。“LemoLab × Claude Opus 5.5”署名只属于本库的示例片；用户的影片不带 LemoLab 署名，也不复制这张卡。

## 构建说明

```
styles/rubber-hose/demo/
  toon.js    constant-width ink + line boil + affine stack      film.js   4:3 gate, weave, flicker, scratches, vignette
  chars.js   mug & cube rigs, pie eyes, gloves, shoes, steam     cast.js   living kitchen props (all take a breath phase)
  bg.js      cached watercolor backgrounds (kitchen, cupboard+sink)
  story.js   144 BPM bar grid, VO times, subtitle cards, shots, key moments, music cues  (single source of truth)
  scenes.js  every shot: camera, props, acting            events.js  foley event list → events.json
  ui.js      title lettering, announcer title card        sheet.js   model sheets (?mode=sheet / ?mode=kitchen)
  music/score.py  original big-band score (VSCO 2 CE / VCSL samples via core/audio/sampler.py, banjo via pluck.py)
  mix.py     foley synthesis + radio-voice chain + ducking + optical-track aging
  build.sh   one-command rebuild (≈9 min, mostly TTS/whisper/sample loading; frames render in ~50 s)
```

1. 先写小节网格（`story.js`），再写提示点映射；照着它作曲（一个分叉出来的子智能体可以根据 `story.js` + 提示点列表并行编写 `music/score.py`）。
2. 角色设定图：`node demo/tools/still.mjs demo 0 --q 'mode=sheet&w=2880&h=1620' --w 2880 --h 1620`。
3. `core/tts/tts.py lines.json voices` → `core/tts/asr_check.py`。
4. 审看：`core/render/still.mjs demo --range a:b:1` + `core/render/sheet.py`（完整过两遍），并在关键表演节拍上以 1/12 s 间隔导出帧条。
5. `node core/render/events.mjs demo` → `python music/score.py` → `python mix.py`。
6. `node core/render/video.mjs demo --fps 24 --workers 3` → `sh core/render/mux.sh out/video24.mp4 mix.wav rubber-hose.mp4 24 3` → `python demo/tools/final_asr.py rubber-hose.mp4`。

或者直接运行 `sh styles/rubber-hose/demo/build.sh`。

与这部示例片相关的坑：
- **Kokoro 在省略号之后把 “bitter” 读成了 “better”**（`is... bitter!`）。“And boy, is this coffee bitter!” 就能通过。每句台词都要用 whisper 检查；最终的 mp4 也要检查（whisper 会写成 “7am” / “they're”：比较前先做归一化）。
- 纯正面视角下方糖看起来像一个高盒子：仰角约 0.26，做表情时再稍微转成 3/4 侧面。
- 远景拍盘子木琴和舞蹈高潮会把两个笑点都毁掉：用中景 / 中全景拍。
- 画在杯身后面的踢腿被把手挡住了：要向外踢，越过剪影。
- 在某个镜头位置上，一口锅从马克杯头上“长”了出来：检查每个镜头的最后一帧。
- 跳跃弧线太高，跳出了画面；在镜头当前的缩放下让弧线保持在片门之内。
- 长度不同的 `sfx` 式片段 → numpy 广播错误。把片段放进固定长度的缓冲区（`mix.py` 中的 `seq()`）。
- zsh：`echo =====` 会失败（`=word` 展开），macOS 上也没有 `timeout`。
- JS：`-x ** 6` 是语法错误；写成 `-(x ** 6)`。
