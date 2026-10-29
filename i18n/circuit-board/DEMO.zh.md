# 电路板 — 我们的示例片

这只是众多可能中的一个例子。不要照搬它的故事、结构、镜头、道具或时间安排。

示例片：*Seven Milliseconds · 七毫秒*（60 s，中文旁白，双语字幕）· `circuit-board.mp4` · 源文件见 [`demo/`](demo/)

## 故事与结构

四川深山里发出的电，七毫秒就到达 2,000 km 外的江苏。一个中文声音（edge-tts Xiaoxiao，+20%）像朋友聊天一样讲述：家里的电是来回摆动的（交流电）；送那么远会在路上损耗掉；所以换流站把它变成单向的直流电；它在 7 ms 内狂奔 2,080 km；到了另一头再变回来，一级一级降压，送进墙上的插座；手机充电器里，一个小小的整流桥做着和换流站里那个大家伙同样的事，用的是同一个电路原理，功率小了 4 亿倍。每句旁白都有字幕（中文在上、英文在下，位于底部安全区）；电路板本身只印出旁白里的关键词和数字（交流电 / AC、损耗 / LOSS、换流站、直流电、2,080 公里、7 毫秒、降压、充电器、整流桥、同一个电路原理、功率差 4 亿倍）。事实依据：[`demo/FACTS.md`](demo/FACTS.md)。

用到的原生手法：水流变电流（水坝）、脉冲路径讲解（整部片子）、用光的形态讲交流与直流（母线特写、损耗板、布拖）、地图即电路板（输电走廊）、匹配降压（四个剪切）、穿孔而入（插座 → 充电器）、细节引出图（判决）、嵌套电路板（结尾拉镜）。

## 镜头

| # | 时间 | 旁白（开头几个字） | 镜头 | 摄像机 | 备注 |
|---|---|---|---|---|---|
| 1 | 0–4.7 | 四川深山里发出来的电… | 白鹤滩：水流过 16 条压力钢管，发电机按十六分音符依次亮起；标题 七毫秒 / SEVEN MILLISECONDS 在右上 | 第 0 帧对 G1 微距，到 2.0 s 拉镜 ×10，停留 | 水流变电流 |
| 2 | 4.7–10.1 | 平时我们家里用的电… | 右岸母线特写：大段交流虚线缓慢地来回摆动；交流电 / AC 配丝印正弦波 | 推镜，停留 | 摆动放慢到约 0.55 Hz |
| 3 | 10.1–14.4 | 如果直接送去太远的地方… | 一块长而直的电路板：交流虚线继续前进，越来越暗、越来越细、越来越少；损耗 / LOSS | 缓慢向右摇镜 | 独立的电路板 |
| 4 | 14.4–19.1 | 所以，电得先进一趟换流站… | 布拖：交流进入，整流桥在 16.3 导通，两股直流流出；交流电、换流站、直流电 | 缓慢推镜，18.75 处向东甩镜 | |
| 5 | 19.1–23.5 | 然后再顺着这根两千多公里长的电线… | 输电走廊：骑着直流的波头走，逐渐升高直到两端都入画；四川 / 江苏 大字，2,080 公里 | 骑行 → 升高 → 23.0 处急推 | 地图比例下主线宽 ≥ 6.5 px |
| 6 | 23.5–29.6 | 全程只要七毫秒… / 到了终点站… | 虞城：7 毫秒 / 7 ms 标签；27.4 处交流离开（交流电 / AC） | 锁定 | 留出阅读时间的停留 |
| 7 | 29.6–32.4 | …再把电压一级一级降下来… | 四台降压变压器 T1–T4，屏幕上同样大小，各 0.7 s；降压 / STEP DOWN 停在同一位置 | 匹配剪辑 | |
| 8 | 32.4–34.6 | …最终送进你家墙上的插座里。 | 街区一闪而过；插座墙面（开关、两个插座、L/N/PE 接线）；扎进火线孔 | 摇镜，停留，穿入 | |
| 9 | 34.6–42.1 | 而当你插上手机充电器时… | 从充电器的插脚里出来：整个充电器（插头、保险丝、整流桥、电容、变压器、USB-C），充电器 / CHARGER；推镜到整流桥：整流桥，交流 → 直流 | 反向穿出，停留，推镜 | |
| 10 | 42.1–52.9 | 说出来你可能不信… / 只不过… | 细节引出图：布拖的整流桥与 DB1 以同样大小并排；换流站；47.6 处出现"="和 同一个电路原理；49.4 处 功率差 4 亿倍 | 锁定 | "=" 出现前判决画面停留 5.4 s |
| 11 | 52.9–54.5 | 你手机里的每一格电… | 从充电器一路拉到整块电路板，主线发光 | 对数缩放 | |
| 12 | 54.5–60 | — | 整块电路板放在桌上，正午窗光；标题栏：七毫秒 / SEVEN MILLISECONDS，LemoLab × Claude Opus 5.5 | 缓慢推镜，转 2° | 片尾卡 |

## 旁白

中文旁白，edge-tts `zh-CN-XiaoxiaoNeural`，+20%（`demo/voice/lines.json`）；每句从下表的时间开始，字幕（中文在上、英文在下）随之出现和消失。英文版（`sh demo/build.sh en`）用 `en-US-AvaNeural` 以 +10% 朗读英文字幕句（少数句子更快，最高 +25%），起始时刻相同（`demo/voice_en/lines.json`；当朗读的句子比字幕短时，`say` 字段存放实际朗读的内容）。

| # | 开始 | 中文 | 英文 |
|---|---|---|---|
| 1 | 0.40 s | 四川深山里发出来的电，仅仅七毫秒后，就到了两千公里外的江苏。 | Power made deep in the mountains of Sichuan reaches Jiangsu, 2,000 km away, in just 7 milliseconds. |
| 2 | 5.58 s | 平时我们家里用的电，电流是来回摆动着走的，叫做交流电。 | The electricity in our homes swings back and forth as it flows. It's called alternating current, AC. |
| 3 | 10.22 s | 如果直接送去太远的地方，在路上就会白白损耗掉很多。 | Sent that far as it is, a lot of it would simply be lost on the way. |
| 4 | 14.55 s | 所以，电得先进一趟换流站，变成只朝一个方向跑的直流电。 | So first it goes through a converter station and becomes direct current, DC, flowing one way only. |
| 5 | 19.24 s | 然后再顺着这根两千多公里长的电线，一路狂奔到江苏。 | Then it races along this line, more than 2,000 km long, all the way to Jiangsu. |
| 6 | 23.53 s | 全程只要七毫秒，连眨一下眼睛的时间都不到。 | The whole trip takes 7 milliseconds, less than the blink of an eye. |
| 7 | 27.15 s | 到了终点站，它会被重新变回交流电，再把电压一级一级降下来，最终送进你家墙上的插座里。 | At the end it's turned back into AC, stepped down level by level, and sent to the socket in your wall. |
| 8 | 34.20 s | 而当你插上手机充电器时，充电头里其实也藏着一个叫整流桥的小零件，正在把交流电重新变回直流电。 | Plug in your phone charger, and inside it a tiny part called a bridge rectifier turns the AC back into DC. |
| 9 | 42.24 s | 说出来你可能不信，它和换流站里那个几层楼高的大家伙，用的是同一个电路原理。 | Believe it or not, it works on the same circuit principle as the giant, storeys tall, in the converter station. |
| 10 | 48.39 s | 只不过，换流站那边的功率，是这个小充电头的整整四亿倍。 | Only the station's power is a full 400 million times that of this little charger. |
| 11 | 53.05 s | 你手机里的每一格电，都是跨越千山万水，这么跑过来的。 | Every bar of charge on your phone came this far, across mountains and rivers. |

## 配乐结构

人声优先：铺底（音乐和环境底噪）在每句话下闪避 9.5 dB，整体比人声低约 17 dB；音效降低 7 dB。100 BPM，G 调（工频嗡声落在 G1 上）。交流电是一个门控音（旁白讲解它时放慢到 1.1 Hz，在损耗板上逐渐消失）；到布拖（16.3）门控变平滑成稳定的长音，底鼓、滴答声和贝斯进入，一段琶音随骑行镜头攀升，每到一个 500 km 焊盘响一声钟琴；23.0 处一次冲击，7 ms 处一声铃，27.4 处交流再次出现，四声继电器响、每声低一级，插座处有蝉鸣和空调的嗡声，穿孔时一声吸入和一声"啵"；充电器里是微弱的高频啸叫，一个高音门控音在整流桥处（39.4）变平滑；判决段一个低音（换流站）垫在高音之下，"="出现时一个干净的 G 大三和弦。拉镜时的 whoosh 和铺底，最后一击在 54.8，嗡声一直持续到结束。综合响度 −16.0 LUFS，−4.5 dBTP。

## 配色与道具

阻焊绿 #05190F / #1C6A44 / #4AA977，金 #D9B25B，裸铜水坝条 #C9784A，丝印 #F2EEE1，电流琥珀色 (255,190,84)，水银色 (170,214,226)。道具：有 16 条压力钢管和发电机的水坝（每条引线上一个升压线圈）、连接器 J2；整流桥封装（菱形封装，内含四个二极管符号，每个顶点一个焊盘：左边交流输入，右边经过孔返回，上 +，下 −）、换流变压器、交流滤波器组、平波电抗器、阀厅院落；输电走廊的地理（八向布线的长江及五条支流、四个湖泊、东海岸、作为测试点的真实城市、另外三条未点亮的 ±800 kV 线路）；损耗板（一条长母线、一把标尺、测试点）；城市模块（街道是沟槽，建筑是焊盘阵列）；街道模块（一栋 18 层的楼作为点亮的焊盘阵列、杆上变压器、带开关和第二个插座的插座墙、L/N/PE 接线、正午的太阳和时钟）；充电器（插头金属片、L/N 焊盘、F1、RV1、CX1、DB1、C1、跨在隔离槽上的 T1、CY1、U1、U2、C2、USB-C）。

## 片尾卡

电路板自己的标题栏，位于输电走廊板的右上角，在 54.8 绘出：七毫秒（≈ 75 px）/ SEVEN MILLISECONDS；56.0 出现一行 LemoLab × Claude Opus 5.5（≈ 25 px 大写）；角落是 REV A / SHEET 1 OF 1。57.0 之后没有旁白；在窗光下停留到 60.0。"LemoLab × Claude Opus 5.5"这个署名只属于本库的示例片；用户的影片不带 LemoLab 署名，也不复制这张卡片。

## 构建说明

- 一条命令：`sh styles/circuit-board/demo/build.sh`（中文旁白 → `circuit-board.mp4`）或 `sh styles/circuit-board/demo/build.sh en`（英文旁白 → `circuit-board-en.mp4`）。它会裁剪字幕字体、生成并检查每句旁白、导出事件、作曲并混音、渲染、做母带、写出 `circuit-board.srt`、运行阅读时间检查，并渲染不带字幕栏的海报和图库静帧。
- `src/` 中哪些文件可复用、哪些是这部片子的内容，以及世界模块和场景接口：见 [`STYLE.md`](STYLE.md) §10。
- `demo/` 中的文件：`index.html`；`src/main.js`（时间线：摄像机、场景、字幕、声音事件），`src/world.js`（输电走廊板，1 单位 ≈ 1 km），`src/city.js`（10 m），`src/house.js`（10 cm），`src/charger.js`（mm），`src/loss.js`（损耗板），`src/levels.js`（嵌套），`src/render.js`，`src/post.js`，`src/parts.js`，`src/geo.js`，`src/font.js`，`src/hanzi.js`，`src/palette.js`；`voice/` 和 `voice_en/`（`lines.json`、`dur.json`），`data/subs_en.json`（英文字幕）；`audio.py` → `mix.wav` / `mix_en.wav`；`tools/subset.py`（字幕字体），`tools/srt.py`（字幕文件），`tools/sheet.sh`（0.5 s 间隔的接触印样，输出到 `out/`）。
- 阅读时间：`window.TEXTS(t)` 报告电路板上印出的每个词，`readcheck.mjs` 对所有词都通过。字幕栏跟随旁白（约每秒 5.6 个字），所以只有加 `--q subs=1` 时才报告它。`?nosub=1` 渲染不带字幕的版本。
- 页面始终以 1920×1080 绘制，由 CSS 缩放，所以其他尺寸的静帧也保持相同取景。1080p 每帧 30–75 ms，拉镜段约 180–270 ms（多层嵌套电路板加运动模糊子帧）。
- 示例片特有的坑：送端换流站在资料中既被称为布拖换流站，也被称为白鹤滩换流站（旁白和画面只说换流站）；水坝群画得比地图比例大约 50 倍，所以河流的第一段是示意性的；交流母线和直流双线穿过河流（走线可以穿过裸露的沟槽）；四个降压剪切在屏幕上使用同一个符号尺寸（300 px），所以每台变压器的世界尺寸由该剪切的缩放决定，降压 标签在四个镜头中都放在屏幕同一位置，这样读起来像是同一个；画面文字要放在字幕带上方。
