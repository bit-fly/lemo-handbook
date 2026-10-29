# 积木玩具 — 我们的示范片

这只是众多例子中的一个。不要复用它的故事、情节走向、镜头、道具或时间安排。

示范片：*Rocket from Spare Parts*（用零件造火箭）（54 秒）· `brick-toy.mp4` · 源文件见 [`demo/`](demo/) · 素材署名见 [`demo/CREDITS`](demo/CREDITS)

## 故事与结构

一位积木宇航员造了一枚火箭；火箭倒塌了；他用掉落的零件重新把它搭起来，飞向“月亮”（一摞书）。失败不是终点，只是多出了一堆零件。一个角色，一个目标。

旧版指南要求智能体“把主题变成一样正在被搭建的东西”，并且至少用上四种原生能力中的三种；这部示范片四种全用上了：拼搭建造（以一块积木开场，也以一块积木收尾）、无伤拆散（倒塌的残骸变成了更好火箭的零件）、真实书桌上的玩具（茶壶是一座山，一摞书是月亮，台灯是太阳）、手工定格动画（12 fps，连火焰和烟雾都是积木）。旧版指南还列举了改编示例：产品发布 → 产品被一块块积木组装起来；爱情故事 → 两个角色在两本书之间搭一座桥；历史课 → 一个时代被建起、倒塌、再重建。

情节走向（45–60 秒，按本片所写）：好奇 → 兴奋 → 挫折（倒塌）→ 一个安静的节拍 → 重建 → 高潮 → 温暖的尺度揭示。分幕：开场 0:00–0:06（一块红色积木，第一次扣合），第一幕 0:06–0:18（快速搭建，自豪），第二幕 0:18–0:30（倒塌，寂静，捡起零件），第三幕 0:30–0:50（倒计时、点火、发射、登上月球），之后是片尾卡。

## 镜头

| 节拍 | 镜头 |
|---|---|
| 开场 | 对一块积木的极致微距，缓慢推镜，背景虚化成真实道具 |
| 搭建 | 低角度让小小的角色显得英勇；每一小节剪切一次 |
| 挫折 | 倒塌时手持晃动，随后是一个**低机位、宽广、孤独**的画面，角色显得很小 |
| 情感节拍 | 正面特写，角色的手和积木在焦内 |
| 高潮 | 低角度向上跟拍；随后一个与火箭并行的**跟拍镜头**，前方可见月亮（书） |
| 结尾 | 缓慢拉镜到整张书桌的高位全景：尺度揭示 |

以上每一项都是为这个故事从 STYLE.md §6 中做出的一个选择，而不是这种风格默认的开场或结尾。

实际使用的镜头参数：特写光圈约 500–700，中景约 800，最后的全景约 400。扣合回弹 0.35 stud → 0，用时约 0.17 秒。倒塌重力约 420 studs/s²（真实值应为 1225），恢复系数约 0.3。

## 配乐结构

两首 Kevin MacLeod 的曲子（CC BY 4.0），由 `demo/music/edit.py` 按画面剪辑：搭建段用 "Monkeys Spinning Monkeys"（俏皮，按小节剪切），重建时同一主题安静地回归，高潮用 "Heroic Age" 作为管弦乐的高涨。剪辑让高潮的重音正好落在点火上，最后的和弦正好落在片尾卡上（按小节对齐的跳接，接缝处做色度相似性匹配）。`story.js` 中的时间都与音乐小节对齐。

静默：倒塌时音乐戛然而止，只留下房间底噪和时钟的滴答声；高潮前音乐再次抽离，倒计时下垫着低沉的心跳鼓。

本片专属的拟音：点火的轰响和火箭的咆哮；带 Quindar 提示音的无线电通话。

人声：温暖的英式讲故事腔，Kokoro `bm_george`，语速约 0.9，4–6 句短台词；任务控制中心用 `am_adam`，经过无线电滤波（带通 380–2800 Hz + 轻度饱和）并配 Quindar 提示音。每一句都用 whisper 校验。人声做压缩，人声下方音乐闪避约 40 %，−14 LUFS。

## 色板与道具

- 经典积木色板：红 `#c91a09`、蓝 `#0055bf`、黄 `#f2cd37`、绿 `#237841`、白 `#f2f2ee`、黑 `#1b2a34`，另有橙、浅/深灰、棕褐、天蓝。倒角半径 0.06；底板为哑光绿（加满清漆时它变成了青色）。
- 场景：胡桃木书桌（Poly Haven `american_walnut_veneer`）、`photo_studio_loft_hall` HDRI、茶具（茶壶山、茶杯）、铅笔、书（月亮）、台灯（太阳）。主光 `#fff4e8` 来自左上方；柔光箱在左前方作主光，后方一盏冷色轮廓光，终场布景上方再加一盏。GTAO 半径约 3.5 studs，尺度 2.5。调色：对比度 +0.26，饱和度 ×1.1，略偏冷。
- 宇航员：1×1 柱体作腿，2×2 积木作躯干，圆形积木作手臂，圆形 2×2 头盔配一块弧形面罩板。
- 火箭、火焰（半透明橙/黄色圆形薄板，每帧抖动）、烟雾（白色圆形积木，不断变大并向外翻滚）、月亮（灰色圆形薄板，配陨石坑瓷砖件）。
- 字幕：深色圆角胶囊 `rgba(18,20,26,.62)`，水平居中，距底部 150 px，Fredoka 600 46 px 白色字，左侧一个黄色 2×1 积木小图标。无线电台词换成红色积木图标并加 "MISSION CONTROL" 标签。
- 标题："Rocket from Spare Parts"，Fredoka 700，以 12 fps 的步进弹出，下方是黄色副标题 "A BRICK TOY FILM"。

## 片尾卡

压暗的最终全景、标题（Fredoka 700）、一个积木图标、黄色的 "BRICK TOY · LEMO-OPUSCAR"、"LemoLab × Claude Opus 5.5" 一行以及素材署名。这个落款只属于本库的示范片；用户的影片不带 LemoLab 署名，也不要复制这张卡片（如果改编，请删除 `main.js` 中绘制这一行的代码）。

## 制作笔记

```
styles/brick-toy/demo/
  bricks.js   geometry + plastic materials        rockets.js  props, physics, fx
  actors.js   brick-built character rig            set.js      desk, HDRI, real props, moon
  story.js    timeline aligned to music bars        main.js     acting, cameras, subtitles, events
  lines.json  voice script    mix.py  foley+voice+music    music/edit.py  score edit
```

1. `node core/render/still.mjs styles/brick-toy/demo <t…>`：检查静帧，反复迭代。
2. `.venv/bin/python core/tts/tts.py lines.json voices` → `core/tts/asr_check.py` 进行校验。
3. `node core/render/events.mjs styles/brick-toy/demo` → `python music/edit.py` → `python mix.py`。
4. `node core/render/video.mjs styles/brick-toy/demo --fps 24`（1296 帧，2× SSAA + GTAO，在 M4 Pro 上约 65 秒）。
5. `core/render/mux.sh out/video24.mp4 mix.wav brick-toy.mp4 24`。

与本片道具相关的坑：
- 用球体切片做的头盔面罩消失在圆柱形头盔里面；改用弧形的开口圆柱面板解决。
- 火箭单纯向上加速，最后变成空白墙面上的一个小点；改用瞄准月亮的跟拍镜头解决。
- 台灯摆在后面某个镜头的机位轴线上，总是偷偷溜进背景。
- 也试过让摄影机以 12 fps 步进，看起来不流畅；摄影机改为逐帧运动。
- 一堆堆零件总在画面边缘挡住镜头。
