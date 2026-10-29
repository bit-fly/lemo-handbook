# 综艺节奏扁平 —— 我们的示例片

这只是众多可能中的一个例子。不要照搬它的故事、结构、镜头、道具或时间安排。

示例片：*AI进化节拍 · Rhythm of AI 1997 → 2026*（148.8 s，1920×1080，30 fps）· `game-show.mp4` · 源文件在 [`demo/`](demo/) · 引擎：纯 SVG DOM 加一个纯函数 `render(t)`，由 Playwright + Chrome Headless Shell 截图；原创配乐用 numpy 根据画面自身的 `events.json` 合成。


**语言说明。** 示例片中所有屏幕文字都是**中文**（关卡名、年份横幅、标签、成绩单、署名卡）。唯一的语音是简短的**英文喊声**（"Checkmate."、"Hey!"、"Question!"）。片中**没有旁白**。如需制作英文版，见下文“把文字切换成英文”。

## 故事与结构

把 1997 年到 2026 年的 AI 历史，搬上一档**由节奏关卡组成的综艺游戏节目**。影片开场是标题布景：全体角色踩着节拍从天而降，齐声数“One! Two! Three! Four!”。接着是一连串**关卡**。每一关先是**一小节的关卡标题卡**（GAME N + 名称 + 年份，伴着铜管小调飞入），然后是**八小节的游戏**：前半段建立一个节奏型，后半段给出回应或升级，最后一拍（第 7 小节第 3 拍）是**重击 +“Perfect!”**判定。接近结尾的 **remix** 关把近期所有事件堆到同一个布景上，顶部是月份时间线，底部停放着每段已完成内容缩小后的缩略图。结尾从一颗蛋里孵出一个新角色，用打字机效果打出一张**成绩单**（“AI 进化史 · 成绩单”），配一颗 Superb! 星星，最后以**署名卡**收尾。

这是一部关于 AI 历史的非官方同人作品。屏幕上出现的公司和产品（包括 OpenAI、Google、Anthropic、Meta、DeepSeek、xAI、Mistral、IBM、阿里巴巴的 Qwen、月之暗面的 Kimi 和 Midjourney）均未参与制作，也未为其背书。片中关于 2026 年产品的说法没有来源文件；讲真实产品的影片，每一个事实都需要核对并注明出处。

示例片如何用上这些招牌手法：

| 招牌能力 | 示例片用法 |
|---|---|
| **带年份的关卡** | 国际象棋与围棋（1997–2016）、问答节目（2011）、注意力工厂（2017–2020）、AI 艺术工作室（2021–2024）、聊天大合唱（2022–2023）、思考 + 价格战（2024–2025）、智能体流水线（2025），然后是 2026 remix。 |
| **一呼一应** | 人类走棋 / 机器走棋（国际象棋）、提问 / 抢答器（问答）、领唱“Hey!” / 众人“Hey!”（合唱）、任务落下 / 盖章 DONE（智能体）。国际象棋落在四分音符上之后，围棋棋子落在八分音符上。 |
| **判定词** | “Perfect!”、“第 37 手！”、“首超！”、被锤下去的价签、“9.9 ✓”思考气泡。 |
| **把数据做成游戏 UI** | 领奖台上的美元分数、冲向 1,000,000 的用户计数器、参数量、价签（$60 → $2.19）、按拍增长的柱状图。 |
| **Remix / 缩略图** | 一个布景、一条月份丝带，每个条目在舞台中央占 2 小节，然后缩小（×0.27）进底部的一个槽位。终场时所有缩略图在一个巨大的年份下一起弹跳。 |
| **蛋 → 成绩单 → 署名** | 一个“下一关”预告（NEXT 蛋孵出一个“???”小机器人），然后是三行打字机回顾，最后是署名卡。 |

**示例片的结构：** 冷开场展示全体角色 + 数拍（4 小节）→ 7 个关卡，每关 9 小节（标题卡 + 8）→ 1 小节 REMIX 标题卡 → 16 小节 remix（7 个条目 × 2 小节 + 2 小节终场）→ 9 小节结尾（蛋 2 小节，“Hi!” 1 小节，成绩单 3 小节，署名 3 小节，含 0.8 s 淡出）。共 93 小节 = 148.8 s。

我们是这样改编题材的：列出各个阶段，给每个阶段*一个能在拍子上重复的动词*（落子、抢答、打气、喷溅、唱、锤、盖章）、一个年份区间和一种布景颜色，并为每关挑出一个“Perfect!”时刻。这个题材角色众多（大量公司和产品），于是它们变成了戴名牌的豆子选手，每拍落下一个。

## 镜头

整部示例片没有任何镜头移动：自始至终是正面、对称的舞台框。速度 `BPM = 150`，`B = 0.4 s`，`BARL = 1.6 s`。

| 段落 | 小节 | 镜头 / 剪切 | 说明 |
|---|---|---|---|
| 冷开场 + 标题 | 0–3 | 锁定全景，每次数拍都有冲击缩放 | “AI 进化节拍” 200 px，白字加 26 px 墨色描边，字形相隔 0.06 s 依次弹出；副标题 “RHYTHM OF AI · 1997 → 2026” 用 Fredoka；全体角色在标题后方每半拍落下一个，各配一声带音高的 pip |
| 第 1–7 关 | 4–66 | 每个标题卡小节硬切 + 0.08 s 白闪；冲击缩放 0.008（细拍）、0.02（击打）、0.03–0.05（重击） | 标题卡小节，然后 8 小节游戏，第 7 小节第 3 拍重击 +“Perfect!” |
| REMIX 标题卡 + remix | 67–83 | 锁定全景，缩略图缩进底部槽位 | 顶部横贯月份丝带 |
| 结尾 | 84–92 | 在小节线上硬切；唯一的淡出：最后 0.8 s 淡到藏青色 | 蛋 →“Hi!”→ 成绩单（打字机，每 1/8 拍一个字，每 2 个字一声按键声）→ 署名卡 |

## 配乐结构

- **配乐（`music.py` + `synth_lib.py`）**：150 BPM，四和弦循环 F–G–Em–Am（日式流行的“王道进行”，每小节一个和弦，`CH`），两段 8 音旋律 `MA` / `MB`。乐器：tanh 塑形的正弦底鼓、带通噪声军鼓和拍手、镲、slap 贝斯（`slap`，节奏型 funk/drive/pump/soft）、带收束滤波器的失谐锯齿波**铜管短促和弦**、带颤音的方波主奏、拨弦（马林巴）、铃（八音盒）、三角波铺底、方波琶音、牛铃。
- 每个小节在 `PLAN` 里有一个模式（`main`、`count`、`funk`、`quiz`、`electro`、`dream`、`film`、`pop`、`popBig`、`think`、`heavy`、`agent`、`agentFast`、`fill`、`future`、`futureBig`、`egg`、`calm`、`fanfare`、`end`），每关一种风味。关卡标题卡配一段**小调**（镲 + 底鼓 + 上行铜管琶音 + 军鼓滚奏进入关卡）。2026 remix 升高 2 个半音。
- **事件驱动音效**：`node render.mjs events` 把画面中每一个 `ev()` 导出到 `events.json`（示例片共 474 个事件）。`music.py` 把每个事件名映射到一个声音：`tock`/`bleep`（国际象棋）、`stone`（围棋）、`ding`/`boop`/`buzz`（问答）、`land`（扑通 + 弹簧声）、`pip`（带音高的啵声，使用 `f`）、`slam`/`bigslam`、`stamp`、`type`、`crack`/`hatch`、`servo`、`liftoff`、`swish`、`clap`、`drop`、`blip`、`kickhit`、`splat`、`denoise`、`cheer`。未知名称会被静默忽略。
- **喊声**：`v:<name>` 事件播放 `voices/<name>.wav`。这些声音是 macOS `say` 系统语音（Samantha、Fred、Zarvox、Junior、Kathy、Ralph、Superstar），语速 170–220，在不改变时长的情况下升调 ×1.0–1.35（`asetrate` + `atempo`，见 `make_voices.sh`）。Zarvox（机器人）说机器台词（“Checkmate.”、“Move thirty seven.”、“Attention!”）；Samantha/Fred 是主持人。众人的“Hey!”由六个不同声音以 5–6 ms 间隔叠加，声像分布在 −0.6…+0.6（`v:crowd`、`v:heyAll`、`v:heyBig`）；`v:heyVar` 为每位选手挑一个声音。喊声放在拍点*之前* 20–30 ms。
- **混音**：人声 + 音效走各自的总线；音乐根据该总线的 12 Hz 包络最多压低 40 %；最后 0.8 s 淡出；峰值归一化到 1.5，然后 `tanh` 软削波 ×0.9 → `music.wav`（44.1 kHz）。之后 `finish.sh` 做两遍 loudnorm 到 **−14 LUFS / TP −1.2**，并重采样为 48 kHz AAC 256k。

## 色板与道具

**画布与线条：** 1920×1080 SVG。轮廓线 `K.ol = #1B1B1B`，宽度 `OW = 8` px（`SO` 展开：描边、8 px、圆角连接和圆头）；小部件用 5–7 px。硬偏移阴影 +10 px（横幅）或 +14 px（关卡标题卡）。

**色板（`main_v1.js`/`main.js` 中的 `K`）：**
| 角色 | 颜色 |
|---|---|
| 墨 / 纸 | `ol #1B1B1B`、`white #FFFFFF`、`cream #FFF6E5`（卡片、成绩单） |
| 糖果原色 | `yellow #FFD23F`、`orange #FF8C42`、`red #FF5A5F`、`pink #FF8FB1`、`green #5BD68A`、`lime #C6F16D`、`sky #8ED1FC`、`blue #4D7CFE` |
| 深色布景 | `purple #6B4FBB` / `purpleD #46318F`、`teal #3FB8AF` / `tealD #2B8F88`、`navy #26264A`（结尾） |
| 道具 | `wood #C98A52` / `woodD #8E5530`、`gray #C3CAD9`、`chalk #2F5D50`、`skin #FFD1A8` |
| 角色色相 | `gpt #19B388`、`claude #D97757`、`gem1 #4E7CF6` / `gem2 #9B6CF0`、`llama #F4E9D8`、`whale #4D6BFE`、`dblue #2B59C3` |

布景使用 `stripes()`（斜条纹，常常缓慢滚动）、`dots()`（错位波点，18–25 % 白色）或 `raysEl()`（旋转的放射光芒）。地面带位于 y = 860–900，顶部有一条 8 px 墨线。

**字体：** 中文一律用 **Noto Sans SC 900**（`F.sans`）；拉丁展示字用 **Fredoka 700**（`F.round`：GAME N、年份、“Perfect!”、名牌、数字）；**ZCOOL KuaiLe**（`F.cute`）只用于手写道具。大字用 `gtext()`；标题文字用 `chars()`。

**角色（`main_b.js` 中的 `bean()`）：** 圆润的豆子身体（缩放 1 时宽 160 px、高 172 px），两条短胳膊配白色连指手套，两个椭圆脚，带白色高光的椭圆眼睛，粉色腮红，一张小弧线嘴，可切换成张开的红色嘴。身份 = 身体颜色 + 肚皮色块 + **一个**头部标记（天线球、爱心、“?”、月亮、闪电、云朵、嫩芽、画笔、贝雷帽、船长帽、羊驼毛、鲸鱼喷水）+ 脚下一个墨色名牌胶囊。Gemini 是两个半尺寸的豆子（`twins()`）。人类（`human()`）有衬衫、圆脑袋、发帽、可选的眼镜和一滴汗。1990 年代至 2010 年代的机器是更方正的机器人（`robotDB`、`robotAG`、`robotT`、`robotW`）。

**反复出现的 UI：**
- **关卡标题卡**（`card()`）：满屏布景色 + 滚动条纹，一块奶油色面板（1240×460，r 50，10 px 轮廓，14 px 阴影），一个“GAME N”胶囊标签，关卡名自动适配到 720 px，年份用布景色，左侧一个图标在跳。
- **年份横幅**（`banner()`）：左上角贴纸：Fredoka 年份 + 名称 + 一行副标题，以回弹缓动从左侧滑入，向上抬起退出。
- **判定**（`judge()`）：120 px Fredoka 字，粉色/黄色加 18 px 墨色描边，以 −6° 弹出。
- **爆点**（`burst()`）：8 角星 + 扩张的白色圆环 + 8 条墨色速度线，0.3 s。

动作数值：`hopY(t, h)` h 为 8–30 px；`hitSq` 30 rad/s，持续 0.35 s；强拍挤压 `1 - 0.1*exp(-frac(t)*16)`；`dropY` 下落 500–900 px；`heyAt` 0.24 s。

**字幕与标题。** 没有烧录字幕：屏幕上的文字本身就是字卡（横幅副标题 ≤ 20 个汉字，铭牌 ≤ 12 个）。`game-show.srt`（由 `make_srt.py` 根据 `events.json` + `voices/lines*.txt` 生成）只列出英文喊声，每个喊声一条字幕，重复的众人“Hey!”合并为一条。

## 片尾卡

示例片最后一张卡写着 **“LemoLab × Claude Opus 5.5”**（× 是 U+00D7）。它是第 90 小节（144.0 s）弹出的署名卡的第一行：一张奶油色 1440×360 卡片（r 40，8 px 墨色轮廓，倾斜 −1.5°，0.3 s 回弹弹出），居中三行：`LemoLab × Claude Opus 5.5`，Fredoka 700 66 px 墨色（y −80）；`本片由 Claude Opus 5.5 全程代码生成`，Noto Sans SC 900 60 px（y 30）；`下一关：正在训练中……`，50 px，颜色 `K.claude`（y 118）。它停留 4 s，随影片一起淡到藏青色。代码：`main_b.js` 结尾场景中的 `credit` 块。这个署名只属于本库的示例片；用户的影片不带 LemoLab 署名，也不复制这张卡（复用代码时请删掉 `credit` 块）。

## 版权与事实

- **喊声不在 CC BY 4.0 许可范围内。** 它们是 macOS 系统语音（`say`），Apple 依据 macOS 许可协议仅允许个人、非商业使用，因此 `game-show.mp4` 的语音轨和 `demo/voices/*.wav` 不受本库示例片 CC BY 4.0 许可覆盖。我们计划用 Kokoro（`core/tts/`）重新配音。在你自己的影片中，请使用 Kokoro 或你有权使用的声音；`make_voices.sh` 只是快速勾勒时间点的办法。
- **真实品牌：** 选手代表真实的 AI 产品（GPT、Claude、Gemini、DeepSeek、Kimi、Grok、Midjourney……）：名字只出现在名牌上，吉祥物是原创的，颜色只是松散地致意；绝不使用官方标志、文字商标或产品界面。真实人物（卡斯帕罗夫、李世石、KEN / BRAD 领奖台）只以通用卡通替身出现在事实性横幅中。
- **事实过时很快。** 2026 remix（Sonnet 5 成为默认、WAIC 2026、DeepSeek V4-Pro、“GPT-6 Astra”、token 用量数字）是按制作时的时事写的。复用其中任何内容前，请重新核对每个数字和名称。
- 屏幕上 G7 的任务便签原文写着“做一个节奏天国风格的视频”（点名了一个真实的游戏系列）。在新影片中请描述类型，不要点名。

## 把文字切换成英文

所有字符串都是 `main_b.js` 里的字面量（`main_v1.js` 里还有三处）：
1. 关卡标题卡：`card(SECT.gN, 'GAME N', '<name>', '<years>', …)`；名称会自动缩到 720 px。
2. 年份横幅：`banner(g, '<year>', '<name>', '<subtitle>', col)`；宽度自动测量。
3. Remix：`item(i, m0, m1, '<label>', …)`、`plate(p, '<text>')`、月份丝带 `` `${m}月` `` 以及终场标签 `'2026 · 未完待续'`、`'还没唱完 →'`。
4. 道具：问答 `QA` 题对、Watson 牌子、“9.11 和 9.9”黑板、任务便签、用户计数器标签 `'用户'`、成绩单标题 + `lines`、署名文字、标题 `chars()` 字符串。在 `main_v1.js` 中：机器人胸前标签 `'注意力'`（`robotT`）以及 G3 中的句子 token。
5. 拉丁标题优先用 `F.round`（Fredoka），正文保留 `F.sans`；`init()` 会根据页面自身文字预加载字体，所以无需改动字体列表。英文大约比中文宽 1.6 倍：用静帧检查横幅和铭牌。
6. 如果喊声有改动，重新运行 `make_srt.py`；喊声本来就是英文。

## 构建说明

```
styles/game-show/demo/
  main_v1.js     base source: palette K, tempo (at/ev/punch), hop/squash helpers, stripes/dots/rays, burst, judge, banner, 1990s robots, chess board
  main_b.js      main source: bean characters + CAST, human, podium, stage (scene/card), props, ALL scenes (buildAll), render(t), init()
  assemble.py    main_v1.js[0:109] (BPM→150, END_BAR→93) + main_v1 robotDB…stage + main_b.js  →  main.js
  frame_head.html  HTML/SVG frame + base helpers (el, txt, tf, op, E, chars, charsPop, measure, bg …)
  build.py       frame_head.html + main.js  →  index.html
  render.mjs     events | stills | video (Playwright + Chrome Headless Shell, PNG → ffmpeg x264 crf 12 per worker)
  music.py       score + events.json → SFX + shouts → ducked mix → music.wav      synth_lib.py  instruments & SFX
  voices/        40 shout wavs + lines*.txt (name|voice|rate|pitch|text)          make_voices.sh  regenerate them (macOS)
  finish.sh      concat segments + loudnorm −14 LUFS + mux → ../game-show.mp4       make_srt.py  → ../game-show.srt
  fonts/ fonts.css   Noto Sans SC, Fredoka, ZCOOL KuaiLe (woff2 subsets)
  main.js        generated (do not edit by hand)
```

所有命令都在 `styles/game-show/demo/` 下执行（脚本自身也会 `chdir` 到那里）。`PY=../../../.venv/bin/python`。

1. **在节拍网格上做规划。** 在 `main_b.js` 中填写 `SECT`（每个关卡标题卡的第一个小节），通过 `assemble.py` 中的替换设置 `END_BAR`，把标题卡小节加入 `CUTS`，并写一份提示清单：哪些拍子触发哪些 `ev()`。
2. **喊声：** 在 `voices/lines3.txt` 中添加台词，然后运行 `sh make_voices.sh out/voices_new`（macOS `say` + ffmpeg），试听，把满意的复制到 `voices/`，再把名字加入 `music.py` 中的 `VO`。
3. **构建页面：** `$PY assemble.py && $PY build.py`。
4. **查看效果：** `STILLS_DIR=out/check node render.mjs stills 5.5 20.4 45 78.3 116.5 145`（六帧约 1 s）。或在浏览器中打开 `index.html?t=78.3`。
5. **事件：** `node render.mjs events` → `events.json`（示例片：474 个事件，`dur 148.80`）。
6. **配乐 + 混音：** `$PY music.py` → `music.wav`（约 2 s；结果确定，seed 7）。`$PY music.py out/test.wav` 写到别处。
7. **渲染：** `node render.mjs video 2` → `out/seg_0..1.mp4` + `out/list.txt`。示例片用了 6 个 worker（共 120 s）；在共享机器上保持 2 个（约 3–4 分钟）。`SEGS=5 node render.mjs video 6` 只重新渲染 6 个等分段中的一段。
8. **收尾：** `sh finish.sh out/test.mp4`（拼接 → loudnorm → x264 slow crf 16 + AAC 256k 48 kHz）。不带参数时它会写出 `../game-show.mp4` 并**覆盖库中的影片**（请先备份）。`AUDIO_FROM=old.mp4 sh finish.sh …` 跳过重新混音，原样复制旧影片的音轨（用于署名重渲染）。
9. **字幕：** `$PY make_srt.py` → `../game-show.srt`。
10. **审看：** `ffmpeg -i out/test.mp4 -vf fps=1/4,scale=384:-1,tile=6x7 -frames:v 1 out/sheet.jpg`，再加上每次重击前后的静帧。

### 我们踩过的坑

- **`render(t)` 必须是 `t` 的纯函数。** remix 缩略图只在 `t < t1 + 0.01` 时更新，因此它们的最终姿态取决于之前的帧是否被渲染过。6-worker 渲染时 worker 5 从 124.0 s 冷启动，结果在发布的 v3 影片里，底部缩略图（机械臂堆叠、跳舞机器人、柱状图、Gemini 卡片）在 124.0 s 到 131.2 s 显示的是它们的*初始*状态。已在导入时于 `main_b.js` 中修复（每帧都在 `t1 − 0.001` 处重新计算缩略图），影片最后一段（124.0–148.8 s）也用修复后的代码重新渲染了。
- **`main.js` 和 `index.html` 是生成文件。** 请编辑 `main_v1.js`（色板、节拍辅助函数、横幅/判定/爆点、1990 年代机器人）或 `main_b.js`（角色 v2、舞台、所有场景、render/init），然后运行 `assemble.py` → `build.py`。直接在 `main.js` 中所做的修改会被覆盖。
- **`BPM` 和 `END_BAR` 是通过字符串替换打补丁的**，位于 `assemble.py`（`'const BPM = 140,'` → 150，`'const END_BAR = 61;'` → 93）。如果你在 `main_v1.js` 中改了这几行，替换会悄无声息地匹配失败。应改替换目标。
- **每个新喊声都要加在三个地方**：`voices/` 中的 `.wav`、`voices/lines*.txt` 中的一行（以便重新生成），以及 `music.py` 顶部的 `VO` 列表（否则会 `KeyError`）。
- **关卡标题卡小节还必须列入** `CUTS`（`main_b.js` 中的 `init()`：白闪）以及 `music.py` 的 `jingle()` 循环 + `PLAN` 区间。这是三份独立的列表。
- `synth_lib.py` 分配了固定的 `DUR = 150.0` s 缓冲区。更长的影片需要更大的 `DUR`，否则结尾会被截掉。
- 字体：`measure()` 用的是 canvas，所以在网络字体加载完成之前字形宽度是错的。`init()` 会在 `buildAll()` 之前为页面文字加载每个字体族，构建完舞台文字后再加载一次。添加文字时请保留这一点。
- `say` 的发音：写成 "A. I."、"G P T one"、"Nine point eleven"、"Move thirty seven" —— 拼写展开的形式。
- 画面模板（`frame_head.html`，继承自更早的一部影片）仍然声明了 `#paper`/`#fx` canvas 以及墨迹/抖动滤镜；`init()` 会隐藏这些 canvas，本风格也不使用这些滤镜。要么别动，要么一起删掉。
- zsh 不会对 `$TS` 做分词；请把时间戳作为数组传入（`TS=(1 2 3); … $TS`）或直接写出。

## 引擎参考

**约定。** `buildAll()` 为每个布景调用一次 `scene(t0, t1, build)`。`build(g, s)` 在组 `g` 内一次性创建所有 SVG 节点，并返回 `update(t)`，后者只设置属性。`render(t)` 显示满足 `t0 ≤ t < t1` 的场景，调用它们的 `update(t)`，然后应用镜头冲击缩放、剪切白闪和最终淡出。`update(t)` 只能依赖 `t`。

| 模块 | 函数 | 作用 / 关键参数 |
|---|---|---|
| frame_head | `el(tag, attrs, parent)`、`txt(parent, str, attrs)` | 创建 SVG 节点 |
| | `tf(e, x, y, s=1, r=0, sy)` · `op(e, o)` · `show(e, bool)` | 变换 / 不透明度 / 显示 |
| | `seg(t, a, b)` · `lerp` · `clamp` · `E.out/in/io/back/elastic` · `rng(seed)` | 时间 + 缓动，带种子的随机数 |
| | `chars(parent, str, {x, y, size, family, weight, fill, anchor, ls, stroke, sw})` + `charsPop(c, t, t0, stagger, d, from)` | 逐字弹入的标题 |
| | `measure(str, size, family, weight)` · `bg(parent, color)` | 文字宽度，满屏矩形 |
| main_v1 | `at(bar, beat)` · `B` · `BARL` · `frac(t)` | 节拍网格（150 BPM） |
| | `ev(t, name, {f, i})` · `punch(t, amount)` | 注册一个声音事件 / 一次镜头冲击缩放 |
| | `hopY(t, h)` · `hitSq(t, t0, amt)` · `near(t, t0)` | 踩拍跳动，击打挤压 |
| | `gtext(parent, s, x, y, size, {family, weight, fill, stroke, sw, anchor})` | 带描边的字卡文字 |
| | `stripes(p, col, w, angle)` · `dots(p, col, step, r)` · `raysEl(p, n, col)` · `starPath(n, r1, r2)` | 布景图案（在 `update` 中旋转光芒） |
| | `burst(p, x, y, t0, col, size)` · `judge(p, word, x, y, t0, col, dur)` | 返回 `f(t)`；推入 `s.fx` 并每帧调用 |
| | `banner(p, year, name, sub, col)` + `bannerAnim(b, t, t0, t1, x=56, y=44)` | 年份贴纸 |
| | `robotDB/robotAG/robotT(p)` · `quad(u, v)` · `pawn(p, col, king)` | 时代机器人，透视棋盘 |
| main_b | `bean(p, {color, belly, antenna, name, kind, eyeFill, acc, ant, tagCol})` | 一位选手；`kind` 为 bot/llama/whale；`acc` 为 noise/mask/beret/captain/mustache；`ant` 为 q/bolt/moon/heart/cloud/sprout/brush |
| | `pose(c, {hey 0..1, open, sq, lean, face 'x'/'up', blink, armsL, armsR})` · `poseAny(c, o)` | 给任意豆子或双胞胎摆姿势 |
| | `CAST.<key>(p, name?)` · `ALL` | 16 位现成选手（gpt、claude、gemini、llama、deepseek、ernie、qwen、mistral、kimi、grok、bert、dalle、mj、sd、sora、baby） |
| | `human(p, shirt, glasses, hair)` + `humanFace(h, open, sweat)` + `setArm(arm, x1, y1, x2, y2)` | 卡通人类 |
| | `podium(p, col, label)` · `taskIcon(p, kind)` · `smallBot(p, col)` | 道具 |
| | `dropY(t, t0, y, h, d)` · `heyAt(times, t, w)` · `nearestIn(times, t)` | 入场，“Hey!”时间窗 |
| | `scene(t0, t1, build)` · `card(bar0, num, name, years, col, col2, icon)` | 一个布景，一张 1 小节关卡标题卡 |
| music.py | `PLAN[bar] = mode`、`span(a, b, mode)`、`jingle(at(bar))` | 逐小节编排 |
| | 事件循环 `if s == '<name>': addv(sound, t, gain, pan)` | 把画面事件映射到声音 |

**最小的新关卡**（放在 `main_b.js` 的 `buildAll()` 内；在 `SECT` 中加入 `g8: 67` 并顺延后面的段落，把第 67 小节加入 `CUTS`，在 `music.py` 中加入 `jingle(at(67))` + `span(68, 75, 'funk')`，并调大 `END_BAR`）：

```js
{ const b0 = SECT.g8 + 1, T = (bar, bt = 0) => at(b0 + bar, bt);
  card(SECT.g8, 'GAME 8', '开源接力', '2026', K.orange, '#FF9E5E',
       (p) => { const w = el('g', { transform: 'scale(2)' }, p); pawn(w, K.white); });
  scene(T(0), T(8), (g, s) => {
    bg(g, '#FFB870'); stripes(g, '#FFA85A', 50, -20);
    el('rect', { x: 0, y: 880, width: 1920, height: 200, fill: '#E08A4A' }, g);
    const w = el('g', {}, g); const c = CAST.claude(w);
    const calls = [T(0, 0), T(0, 1), T(1, 0), T(1, 1)], answers = [T(0, 2), T(0, 3), T(1, 2), T(1, 3)];
    calls.forEach(t0 => { ev(t0, 'v:hey'); punch(t0, 0.015); });
    answers.forEach(t0 => { ev(t0, 'pop', { f: 900 }); s.fx.push(burst(g, 960, 420, t0, K.yellow, 0.8)); });
    const b1 = banner(g, '2026', '开源接力', '一拍一棒，接住就赢', K.orange);
    s.fx.push(judge(g, 'Perfect!', 960, 300, T(7, 3), K.pink, 0.8));
    ev(T(7, 3), 'slam'); punch(T(7, 3), 0.05);
    return (t) => {
      tf(w, 960, 880 + hopY(t, 20), 1);
      poseAny(c, { hey: heyAt(answers, t) ? 1 : 0, open: heyAt(calls, t), sq: hitSq(t, nearestIn(answers, t) ?? -9) });
      bannerAnim(b1, t, T(0), T(8));
      s.fx.forEach(f => f(t));
    };
  });
}
```

然后依次运行 `assemble.py → build.py → stills → events → music.py → video → finish.sh`。
