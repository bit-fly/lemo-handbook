# 孟菲斯微缩景观 — 我们的演示片

这只是众多可能中的一个例子。不要照搬它的故事、结构、镜头、道具或时间安排。

演示片：*Four Seasons in Pomelo Town*（柚子城的四季，45 s）· `memphis-diorama.mp4` · 源码在 [`demo/`](demo/)

## 故事与结构

一处虚构的河湾（一条河、一座桥、一条有十栋房子的小巷、一个有一棵大树的广场、一个荷塘、几片田地）在一个长镜头里经历春、夏、秋、冬，每季十秒，然后停留在亮起灯火的冬日村庄上出片尾卡。没有主角：地方本身就是主体，季节只通过颜色和细小的动作来讲述。

每次换季都是同一个动作，所以整部片读起来是一个整体：**广场上的大树蹲下半秒，弹回来，一道波从它那里扩散开**。圈内的地面、树冠、屋顶和水面换上下一季的颜色；圆圈经过时，物体随之动作（成排的油菜花沉下去、遮阳伞打开或收起、草垛冒出来、开始下雪）。

| 季节 | 时间 | 变化什么 | 细小动作 |
|---|---|---|---|
| 春 | 0–10 s | 油菜田变黄，稻田灌满天蓝色的水，粉白花开并点缀花点 | 花瓣向东飘，风筝、燕子、鸭子、一条船 |
| 夏 | 10–20 s | 稻子变绿，树冠深绿，三把遮阳伞打开 | 一朵灰紫色的云飘过，带来雨和涟漪，然后八朵荷花一朵朵开放 |
| 秋 | 20–30 s | 稻子金黄，草地黄绿，树冠红、橙、黄 | 草垛一块田一块田地冒出来，落叶，一行人字形大雁飞向西南，燕子离去，荷花凋谢 |
| 冬 | 30–39 s | 雪地，白色屋顶和草垛顶，粉彩树冠带白点，淡紫色田埂 | 下雪，烟囱冒烟，一个雪人出现；从 34 s 起黄昏把画面染成粉紫，每扇窗户和门灯在各自的时刻亮起 |

![Spring](demo/stills/frame_spring.jpg) ![Summer](demo/stills/frame_summer.jpg)
![The tree squatting before autumn](demo/stills/frame_squat.jpg) ![Winter dusk](demo/stills/frame_winter.jpg)

## 镜头

一个长镜头。摄影机以 fov 30° 环绕广场，机位很高并缓慢靠近；18 s 后减速到 0.3× 速度，让荷塘和村庄在秋、冬和片尾卡期间都留在画面里。

| # | 时间 | 镜头 | 摄影机 | 天然招式 / 说明 |
|---|---|---|---|---|
| 1 | 0–1.2 s | 画框生长展开，进入春天 | 开始环绕，距离 92 m，高 70 m | 画框生长 |
| 2 | 1.2–9.3 s | 春天：花瓣、风筝、燕子、鸭子 | 缓慢环绕 | 生动循环 |
| 3 | 8.8–11.9 s | 大树蹲下（8.8–9.3），弹回，夏天的波扩散开 | — | 挤压与回弹 → 波 |
| 4 | 11.2–19.2 s | 雨云自西向东飘过；雨 12.2–17.8 s；荷花 16.6–17.8 s | — | |
| 5 | 18.8–21.9 s | 再次蹲下；秋天的波 | 摄影机减速到 0.3× | 挤压与回弹 → 波 |
| 6 | 21.2–30.6 s | 大雁飞过；草垛 22–27.5 s 冒出；落叶 | 缓慢环绕 | |
| 7 | 28.8–31.9 s | 再次蹲下；冬天的波，雪在它身后开始下 | — | 挤压与回弹 → 波 |
| 8 | 32.6 s | 一个雪人弹跳着出现在广场上 | — | |
| 9 | 33.8–38.3 s | 黄昏；窗户和门灯一盏盏亮起，小巷上一片片暖光 | — | |
| 10 | 39.3–44 s | 片尾卡：底部文字的第 2、3 行换成署名和风格名称，背景是亮灯的黄昏村庄 | 缓慢环绕 | |
| 11 | 44–45 s | 画框收回 | — | 画框生长（收尾） |

底部文字的第 2、3 行在 10.45、20.45 和 30.45 s 更换，即每道波的中途，并在 39.3 s 换成片尾卡内容。

## 配乐与声音结构

一首连续的曲子，F 大调，96 BPM，一小节 = 2.5 s，第 0 小节的强拍在 1.8 s，使三次下蹲落在第 3、7、11 小节的强拍上（9.3、19.3、29.3 s）。和弦每季循环一次 Bbmaj7 – C – Am7 – Dm7（IV–V–iii–vi），并在 36.8 s 解决到 Fmaj7，在片尾卡下持续回响。

- 钢琴分解和弦（左手根音和五音，右手八分音符）从 0.5 s 持续到结束；旋律始终由钢琴演奏。春、秋用乐句 A，夏用更高的乐句 B，冬再回到 A，以上行的 A–C–F 结束。
- 只有伴奏的厚度随季节变化：春天加入比旋律高一个八度的钢片琴和轻沙锤；夏天加入柔和的贝斯线、底鼓和刷鼓（雨中底鼓压低）；秋天保持轻一些，并用马林巴重叠旋律；冬天去掉鼓，用八音盒重叠旋律并保持长贝斯音。
- 每次下蹲的声音都一样：下蹲时（T − 0.42 s）一声柔和的低沉闷响，T 时一声有弹性的上扬“嘣”，一段从 D 开始上行的十音竖琴刮奏，一声轻微的呼啸。
- 拟音，全部在音乐之下：燕子和鸭子；蝉鸣，11.9 s 一声远雷，雨声和滴水，荷花配钢片琴；落叶、草垛冒出的啵声、六声从东向西声像移动的雁鸣；风声，雪人出现时的一声啵，窗户亮起时十二声 F 五声音阶上的钢片琴*叮*；片尾卡处（39.3 s，下一个强拍）一个低音钢琴 F 和八音盒上行的 F–A–C–F。
- 在 `demo/music.py` 中合成（带两根失谐弦和琴槌敲击声的加法合成钢琴、失谐锯齿波铺底、噪声混响）；由 `core/render/mux.sh` 母带处理到 −14 LUFS。

## 色板与道具

- 纸 `#FFFCF6`；墨 `#25214A`；阴影色调 (0.70, 0.58, 0.90)；窗光 `#FFD36E`。
- 季节材质，按 [春, 夏, 秋, 冬]：草地 `#9DE8A6 #6FD889 #D6E68E #FBFCFF`；稻田 `#A6E3FB #A4E35F #F2C14E #FBFCFF`（条纹）；春天油菜田 `#FFD234`；水 `#8ED8F7 #72C9F3 #7BBFE8 #9FD0F4`，带一条更深的河道；冬天田埂变为淡紫 `#DCD0F2`。
- 树冠（五组）：粉色 `#FFB8D9 → #3CBE7E → #FF6F61 → #E6DCFF`，白色 `#FFF1F7 → #2FCB7A → #FFD21F → #D6EAFF`，银杏、青绿和大树；每组在向阳面有一组更浅的叶团，冬天变白（向阳面的积雪）。
- 房子：墙色黄、粉、薄荷绿、淡紫、桃色、白、天蓝；屋顶珊瑚红、钴蓝、青绿、黄、梅紫，冬天全部变白；条纹百叶窗、花箱、遮阳篷、门灯；两层的房子带阳台。
- 五种树冠形状（云朵、圆形、蛋形、三层锥形、柱形），河岸边带香蒲的芦苇，一座有红色栏杆的三拱桥，一条挂条纹帆、有人划桨的船，三只鸭子，小巷里远处的行人，两个放风筝的人。

## 片尾卡

没有单独的片尾卡：画框下影片自己的三行文字承担这一角色。在 39.3 s，背景是亮灯的黄昏村庄，第 1 行保留标题，第 2、3 行（以常规淡变）换成 `Eian × LemoLab × Claude Opus 5.5`——用标题的墨色、字重 600 绘制，以免被忽略（`drawText` 中的 `strong2`）——以及数据行中的 孟菲斯微缩景观 · MEMPHIS DIORAMA；它们一直保持到 44 s 画框收回，并随之淡出。Eian 创作了这种风格及其演示片。"LemoLab × Claude Opus 5.5" 署名只属于本库的演示片；用户的影片不带 LemoLab 署名，也不要复制这张片尾卡。

## 构建说明

```
sh styles/memphis-diorama/demo/build.sh
```

字体（如缺失）→ 用 `core/render/video.mjs` 以 60 fps 渲染画面（在 M 系列 Mac 上约 2.5 分钟，4 个进程）→ `music.py` → `mux.sh`（不加颗粒）→ `readcheck.mjs` → 25 s 处的海报帧（秋天，大雁飞过草垛）以及上面的四张静帧。

| 文件 | 内容 |
|---|---|
| `demo/memphis.js` | 引擎（STYLE.md 第 10 节）：平涂材质及其图案、波的换色、半调阴影、描边通道、颗粒画框、底部文字 |
| `demo/main.js` | 这个地方、它的四季、时间线和页面约定（`render(t)`、`DUR`、`TEXTS(t)`） |
| `demo/people.js` | 远处的人物和行走循环 |
| `demo/music.py` | 配乐和拟音，写入 `demo/out/mix.wav` |
| `demo/tools/fonts.py` | 把 Noto Sans SC、Inter Tight、IBM Plex Mono 子集化到屏幕上出现的字符（需要联网；输入见下文） |

**字体。**`python -I demo/tools/fonts.py <dir>` 读取 `<dir>/main.js`，只从 `const TEXT = [` 开始、到 `const TITLE` 那一行末尾为止的文本中提取中文字符；拉丁字母始终包含全部可打印 ASCII。缺少这两个标记的 `main.js` 会以 `ValueError: substring not found` 中止，而写在其他任何地方的中文字符（标注、招牌纹理）不在子集中，会回退到系统字体。所以在你自己的影片里，要么把所有屏幕文字都放在 `const TEXT = [ … ]` 内，后面跟一行 `const TITLE = '…'`（可以是 `''`），要么修改你副本中 `src = …` 那一行来收集你的字符串。它从 Google Fonts CSS2 API（`fonts.googleapis.com`，`&text=`）下载子集，从 `raw.githubusercontent.com/google/fonts` 下载 OFL 文本，因此需要联网；它会写出 `fonts/*.woff2`、`fonts/fonts.css` 和 `fonts/OFL-*.txt`。`build.sh` 只在缺少 `.woff2` 时运行它；修改任何文字后请重新运行。

**演示片中的底部文字。**演示片向 `dio.render` 传入 `text: [TITLE, …]`，当第 2、3 行更换时，会用一条纸色色带盖住它们（`main.js` 中的 `fillRect(0, 948, 1920, 60)`）并淡变。这条色带只适合这种布局（第 2、3 行变、第 1 行不变）；在你自己的影片里，未用的行请用 `''`，并自己绘制交叉淡变（STYLE.md 第 10 节，“底部文字”）。

**季节材质。**`main.js` 中的 `S([spring, summer, autumn, winter], { patCols: […] })` 会生成一个记住四种颜色的 `flat()` 材质。每一帧，`place(t)` 把 `uCol` 设为当前季节、`uCol2` 设为下一季节，`setSeason(x, z, r)` 给出波的中心和半径：圈内的像素绘制 `uCol2`。对于动作，`at(n, p)` 返回第 *n* 季已经到达位置 *p* 的程度（0 → 1），所以任何东西都可以在圆圈经过时生长、收起或落下。

**一个演示片从未画过的最小示例**（一间条纹海滩小屋，当一道来自海边的波到达时屋顶变白）：

```js
import * as THREE from 'three';
import { Diorama, flat, mesh, box, setSeason, setHalftone } from './memphis.js';
const dio = new Diorama(document.getElementById('gl'), document.getElementById('c').getContext('2d'));
setHalftone(1);
mesh(new THREE.PlaneGeometry(80, 80).rotateX(-Math.PI / 2), flat('#FFE6BD', { pat: 1, patCol: '#FFD39A', patScale: 1.2 }), 0, 0, 0, dio.scene);
mesh(box(3, 2.4, 2.4), flat('#5CC8FF', { pat: 4, patCol: '#FFFFFF', patScale: 0.4 }), 0, 0, 0, dio.scene);
const roof = flat('#FF5A5F', { col2: '#FFFFFF' });
mesh(new THREE.ConeGeometry(2.4, 1.4, 4).rotateY(Math.PI / 4), roof, 0, 3.1, 0, dio.scene);
window.render = (t) => {
  setSeason(-30, 0, 12 * t);                                   // a wave from the sea, 12 m/s
  dio.cam.position.set(18, 14, 18); dio.cam.lookAt(0, 1, 0); dio.fitShadow(new THREE.Vector3(0, 0, 0), 20);
  dio.render(t, Math.round(t * 60), { text: ['海边小屋  Beach Hut', '', ''] });
};
```

**按区域由夜转昼（演示片从未做过）。**演示片的黄昏是全局的（`place(t)` 中的 `setNight(0.62 …)`、`setDusk`、`setLamps`）。若要让黎明从一个地标扩散开，保持 `setNight(0)`，并通过季节波给每个会变化的材质设定夜间和白天两种颜色（STYLE.md 第 3、10 节）。夜间颜色遵循着色器本身的规则（亮度偏向紫色，`memphis.js` 中的 `FLAT_FS`）；`n` 表示入夜的程度（演示片的黄昏停在 0.62；深夜最多到约 0.8，绝不要到 1，否则整体发灰）：

```js
const nightOf = (hex, n = 0.62) => {           // the shader's night colour, in JS
  const c = new THREE.Color(hex), l = 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b;
  const d = (v, a, b, add) => 0.4 * v * a + 0.6 * l * b + add;
  return '#' + c.clone().lerp(new THREE.Color().setRGB(d(c.r, 0.25, 0.24, 0.008), d(c.g, 0.26, 0.22, 0.007), d(c.b, 0.44, 0.46, 0.024)), n).getHexString();
};
const ND = (day, o = {}) => flat(nightOf(day), { ...o, col2: day,             // night now, day once the ring has passed
  patCol: o.patCol && nightOf(o.patCol), patCol2: o.patCol });
const lit = flat('#FFD36E', { emit: true, col2: '#BFE4FF' });                    // a lit window or lamp head: warm, then day glass
const pool = (x, z, r, groundDay) => {                                          // a lamp's pool: warm disc, then the ground's colour
  const m = mesh(new THREE.CircleGeometry(r, 36).rotateX(-Math.PI / 2),
    flat('#' + new THREE.Color(nightOf(groundDay)).lerp(new THREE.Color('#FFD36E'), 0.35).getHexString(), { col2: groundDay, shadow: false }),
    x, 0.015, z, dio.scene);                                                     // 1.5 cm up: no z-fighting with the ground
  m.userData.noOutline = true; m.castShadow = false; return m;
};
// per frame: setNight(0); setSeason(x0, z0, radius(t));   for night falling, swap each pair (flat(day, { col2: nightOf(day) }))
```

任何需要在圆圈到达时动作的东西（卷起的百叶窗、起飞的鸟）都以圆圈为准来计时：即半径扫过它到中心距离的那一刻，就像 `main.js` 中 `at(n, p)` 为季节所做的那样。

**剖切（演示片从未做过；引擎没有剖切工具）。**把靠近镜头的部分单独做成一个组，分两步移开；剖切面使用 `pat: 5`：

```js
const near = new THREE.Group(); dio.scene.add(near);                             // front wall, roof lid, a slab of ground…
mesh(box(12, 6, 0.4), flat('#FF9C6B', { pat: 4, patCol: '#FFB98F', patScale: 0.5 }), 0, 0, 4, near);
const cut = flat('#E07A55', { pat: 5, patCol: '#25214A', patScale: 0.35 });     // section faces: one step darker, hatched
mesh(box(12, 0.02, 0.4), cut, 0, 0, 4.21, near);                                 // e.g. the wall's cut top, seen once the lid is gone
// in render(t): a = ease(…) 0→1 to open, back to 0 to close
//   lid:  y up first, then z back   (lid.position.set(0, 3 * ease(a * 2), -12 * ease(a * 2 - 1)))
//   wall: straight down below the ground (near.position.y = -6.5 * a); near.visible = a < 0.99;
```

与本演示片道具相关的坑：芦苇起初看起来像墨水涂鸦（改用更粗的茎、去掉描边后解决）；匀速环绕在 25 s 后把荷塘转出了画面（18 s 后让摄影机减速解决）；地面上的门灯光池同时照亮了上方的屋顶（把每个光池向外挪 2.3 m 到小巷上解决）。
