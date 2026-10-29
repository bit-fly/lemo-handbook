# 实时倒计时分屏 — 我们的示范片

这只是众多例子中的一个。不要复用它的故事、情节走向、镜头、道具或时间安排。

示范片：*Counting Itself Down*（自己倒数，59.5 秒）· `countdown.mp4` · 源文件见 [`demo/`](demo/)

阿尔忒弥斯二号（Artemis II）发射的最后一分钟（2026 年 4 月 1 日，39B 发射台），从 T−32.5 到 T+27.0 实时呈现，时间上没有任何剪切。画面上的一切都是 NASA 自己发射当天的素材：直播信号及其音频、发射控制室（Firing Room）、火箭上的摄像机、猎户座（Orion）飞船上的摄像机、一架无人机、两台地面摄像机、一张乘组合照和任务概况表。这是一部非官方影片；NASA 并未制作或认可它。

## 故事与结构

故事是三次控制权交接，全部能在原生音频中听到。T−33 时，地面发射程序器把倒数交给火箭（"GLS, go for ALS" — "Great call-out. The rocket is on its own"）；火箭自己倒数；T+21 时 "Houston, now controlling the flight of Integrity"。时钟顶栏中的一条控制条（地面 GLS → 火箭 ALS → 休斯敦 HOUSTON）承载这些转折。

形态：画格随着接近零点不断增多，在零点合并，然后再次展开去呈现后果。钩子（0–0.5 秒）：第一句口令在发射台的单一全景上翻转控制条，同时片头组合落下。铺垫（2.5–13 秒）：发射控制室作为一个"同一时段"画格在发射台旁打开（刚刚交出控制权的人只能旁观），接着是带名牌的乘组合照，然后在 "the most powerful rocket NASA has ever launched" 一句上出现推力条（SLS 比 Saturn V 高 15 %）。展开（13–22 秒）：计划与实听对照清单和任务概况表；旁白在零点前唯一的一句；在 "sound suppression water is flowing" 一句上对发射台做数字推近；火箭自己的摄像机取代了纸面文件。倒数（22.4–32.5 秒）：时钟居中的 3×3 网格；每念出一个数字，就有一个"待命"槽位打开一台摄像机；RS-25 启动时在发动机摄像机上打出事件标记，并勾选 "heard −6.0"。零点（32.5 秒）：九个画格合并成一个发射台的实时画面，时钟反转。零点之后：两个硬切的全屏画面（无人机、Banana Creek），一次喘息，然后是三个画格：攀升的无人机、火箭上的摄像机，以及一个飞行事件面板，其中的第二倒计时指向助推器分离（T+2:09，预计）；通话中的 "good roll, pitch" 勾选它。"Houston, now controlling…" 填满控制条的最后一段，版式收拢为标题下的一个画格。

为什么契合这种风格：真实的这一分钟本来就有倒计时、三次口头交接和一个零点；剪辑只需要让每一秒都被看见。用到的原生手法：多合一（招牌手法）、时钟反转、控制条、随倒数填满的网格、同步标识（包括一个如实标注的"同一时段"画格）、计划与实听对照清单、第二倒计时、事件标记、口令推近、逐行展示文件。

## 版式

影片时间 `t`，任务时间 `M = t − 32.5`。

| # | t | M | 原声口令 / 事件 | 版式 | 备注 |
|---|---|---|---|---|---|
| 1 | 0.0 | −32.5 | — | 1 格：直播信号，发射台全景 | 片头组合 0.45–6.8 |
| 2 | 0.40 | −32.1 | "GLS, go for ALS." | 控制条 地面 → 火箭 | 0.4 秒处的强动作 |
| 3 | 2.50 | −30.0 | "Great call-out. The rocket is on its own." | 2 格：直播 + 发射控制室 | "同一时段"标识 |
| 4 | 5.26 | −27.2 | "Four brave explorers…" | 3 格：+ 乘组合照 | 名字间隔 0.16 秒逐个弹出 |
| 5 | 7.40 | −25.1 | "…the most powerful rocket…" | 4 格：+ 直播下方的推力条 | 对比停留 4.4 秒 |
| 6 | 13.10 | −19.4 | （空隙）旁白："About ten days: around the Moon, and back." | 3 格：直播 + 对照清单 + 任务概况表 | 两行，注释色带 |
| 7 | 16.47 | −16.0 | "Sound suppression water is flowing." | 推近发射台底部 + 事件标记 | 2880 px 提取 |
| 8 | 19.60 | −12.9 | — | 任务概况表 → 火箭摄像机（划像） | |
| 9 | 22.42 | −10.1 | "Ten," | 3×3 网格：时钟居中，对照清单，转录文本（占 2 格），3 个待命槽位 | |
| 10 | 23.10 / 24.22 / 25.24 | −9 / −8 / −7 | "nine, eight, seven," | 猎户座、无人机、发射控制室依次弹出 | 每次一记通鼓 |
| 11 | 26.46 | −6.0 | "RS-25 engines lit…" | 发动机摄像机上的事件标记；清单勾选 "heard −6.0" | |
| 12 | 32.50 | 0 | "…booster ignition." | **多合一**（0.42 秒）→ OSB II 实时画面，闪白，时钟反转 | 32.25–32.5 音乐静默 |
| 13 | 36.36 | +3.9 | "The crew of Artemis II, now bound for the Moon." | 硬切：无人机全屏 | |
| 14 | 39.50 | +7.0 | "Humanity's next great voyage begins." | 硬切：Banana Creek 全屏 | |
| 15 | 41.7–42.0 | +9.2 | （喘息） | 只剩轰鸣尾音；风声进入（J-cut） | |
| 16 | 42.00 | +9.5 | 旁白："Next on the clock: booster separation, at two minutes nine." | 3 格：无人机 + 火箭摄像机 + 飞行事件 | 第二倒计时 −1:59 |
| 17 | 46.40 / 49.78 | +13.9 / +17.3 | "Good roll, pitch." / "Roger, roll, pitch." | 飞行事件被勾选 | |
| 18 | 51.30 | +18.8 | — | 无人机 → 跟踪望远镜（划像） | |
| 19 | 53.78 | +21.3 | "Houston, now controlling the flight of Integrity…" | 控制条 火箭 → 休斯敦 | |
| 20 | 54.0–59.5 | +21.5 → +27 | 这句话在片尾卡下方结束 | 1 格：火箭摄像机全屏 + 片尾卡 | 5.5 秒 |

各摄像机的同步关系（源素材秒数 `s`）：直播 `s = M + 46.8`；火箭摄像机 `s = M + 34.8`（以其烧录的计时器为准）；猎户座 `s = M + 26.25`（第一台 RS-25 在 T−6.36 点亮）；无人机 `s = M + 10.4`；Banana Creek `s = M + 19.0`；OSB II `s = 3.0 + 2.5·M`（慢动作 ×2.5）；发射控制室未同步。全部记录在 `demo/tools/prep.sh` 中。

## 配乐结构

- 60 BPM，一拍 = 一次滴答 = M 的一个整秒（t 0.5、1.5、…）。D 小调持续音 → 零点转 D 大调。
- 0.40 交接：定音鼓 D、大鼓、长号短促重音 D/A、管钟 D5。从 2.5 起：每拍一记底鼓；合成器持续音（D1/A1，低通滤波随接近零点从 140 → 1,300 Hz）。7.7：推力条增长时圆号琶音 D–F–A。从 M −19 起：反拍踩镲。倒数：每念一个数字一记通鼓 + 定音鼓 A；RS-25：大鼓、大号 D1 和长号 A2 持续。最后 4 秒：军鼓十六分音符；T−3：定音鼓滚奏渐强；**32.25–32.5 静默**（仅音乐静默）。
- 零点：大鼓、底鼓、强音镲、定音鼓、大号 / 长号 / 圆号奏 D 大调，管钟；之后底鼓改为半速；两个全屏画面下圆号移到 B3/G2 和 A3/C♯4。**41.7–42.0 喘息**：只剩轰鸣尾音，随后是合成风声（J-cut 进入火箭摄像机版式）。
- 42.0 →：低音提琴拨弦固定音型 D–D–A–C 踩在拍上，轻踩镲，每勾选一个飞行事件一声钟琴 A5。53.78：管钟 A4/D5、圆号 D4、定音鼓。片尾卡：D 大调铜管，钟琴 D6–A5–F♯5。
- 混音：NASA 直播音频全程置于最上层；零点前音乐比它低约 8–10 dB，零点后低约 6–7 dB（从点火起抬高 3.5 dB），有语音时闪避；旁白只出现在直播的空隙中。滴答声在 1,850 / 1,480 Hz 之间交替（声像 ±15 %），最后十秒更响，零点后是柔和的 1,250 Hz。预母带：归一化到 −14 LUFS，再用联动前瞻限幅器（5 ms，释放 150 ms，上限 −3.3 dBFS），让点火保持冲击力（约 3 dB 压缩量）。−14.0 LUFS，真峰值 −1.9 dBFS。
- 人声：Kokoro `bf_emma`，两句，特意选择听起来与直播中的声音不同的嗓音。

## 色板与道具

- 底色 `#06080A`，面板 `#0B0E11`，强调色 `#FF5B1F`，正在说话 / 已听到 `#FF3B30`，文字 `#F2F5F7` / `#7C878D`。
- 画格：底部的 HUD 时钟 656×184 和转录文本 1,208×184；零点前的大画格 1,240×840，右侧一列宽 624；3×3 网格每个槽位 618×338（转录文本占两格）。
- 清单行：T−33 go for ALS（heard −32.1）、T−30 core stage → ALS、T−12 H2 burn-off igniters、T−10 engine start command、T−6.36 RS-25 startup（heard −6.0）、T−0 booster ignition（heard +0.2）。
- 任务概况表的 "10 DAY TEST FLIGHT" 和 "2 EARTH ORBITS" 两行，在页面上实测定位，让窗口边缘落在空白处；注释色带占画格的 28 %。
- 推力条：SLS 橙色 820 px，Saturn V 灰色 820 / 1.15，一个橙色虚线 "+15%" 标记。

## 标题卡

片头组合（第一个画格左下方，0.45–6.8 秒）：自己倒数 / COUNTING ITSELF DOWN，然后是 阿尔忒弥斯二号 · 2026 年 4 月 1 日 · 39B 发射台 以及英文行。

片尾卡（54.0–59.5 秒，左对齐压在火箭摄像机画面上，时钟和转录文本仍在运行）：自己倒数（Noto Sans SC 700，112 px）/ COUNTING ITSELF DOWN；一条细橙线；实时倒计时分屏 LIVE COUNTDOWN SPLIT-SCREEN；LemoLab × Claude Opus 5.5；素材：NASA · 公有领域 · 非官方作品 / FOOTAGE: NASA · PUBLIC DOMAIN · UNOFFICIAL。"LemoLab × Claude Opus 5.5" 落款只属于本库示范片；用户的影片不带 LemoLab 署名，也不要复制这张卡片。

## 制作笔记

```
demo/
  index.html          the page: LAY layouts, camRegion, clock / transcript / checklist / doc / profile / thrust cells,
                      EV (mix events), TEXTS (readcheck), SUBFIT (one-line subtitles)
  tools/prep.sh       the sync table: every camera to frames/<cam>/<film frame>.jpg with one grade
  tools/grab.py       HTTP range excerpt of a NASA original + SOURCES.jsonl entry
  tools/footage.py    search / fetch / record licences (NASA, Commons, Internet Archive) → SOURCES.md
  tools/subs.mjs      cues → audio/cues.json (+ one line per language, ≥ 1.8 s)
  tools/fetch_fonts.py  Barlow, Barlow Condensed, IBM Plex Mono, Noto Sans SC subset (OFL)
  tools/final_asr.py  Whisper on the finished film
  audio/lines.json    narrator (Kokoro)      audio/mix.py   native audio, ticks, foley, score, ducking, pre-master
  FACTS.md · SOURCES.md · SOURCES.jsonl · CREDITS
  raw/ frames/ out/ fonts/ audio/vo/   downloaded or generated, not committed
```

`sh demo/build.sh`（素材库需先用 `setup.sh deps voice music` 配置）：如有缺失，下载 NASA 片段（约 400 MB）、字体、语音模型以及 vsco2ce / vcsl 采样 → 旁白 + 语音检查 → 帧序列（`prep.sh`）→ 字幕 + 单行检查 → `readcheck` → 事件 → 渲染（1,785 帧，30 fps）→ 混音 → 封装（−14 LUFS，颗粒 1）→ 小尺寸版本 → 海报 / 风格帧（t 28.5）→ 对成片跑 Whisper。

本片特有的选择与坑：直播片段是流复制得到的，所以它的零点（46.8 秒）取决于它起始的关键帧；重新下载后要重新测量。火箭摄像机烧录的计时器给出了精确到帧的零点，但同一文件的音频大约早 1 秒，所以只按画面同步。发射控制室的素材没有时钟：它被标注为"同一时段"，并避开那些其内容可能与时钟矛盾的秒数。"GLS, go for ALS" 被 Whisper 听成了 "go for your left"；它是根据 NASA 的倒计时清单和随后的解说确认的（FACTS.md §T）。第一版剪辑提前四秒就显示了倒数的整句中文（"…RS-25 点火"）；现在倒数拆成两条字幕提示。3×3 网格最初以三个黑色槽位打开；现在它们是"待命"画框，每念一个数字打开一个。任务概况表的注释遮住了页面本身的文字；后来移到纸面下方的一条深色色带中，纸面窗口固定为 600 源像素宽（缩放以适配，上下留出纸白），使每一行文字都完整。一个静止的发射台全景持续了十秒；在 "sound suppression water" 上的推近（来自 2,880 px 的提取，未放大）打破了它。
