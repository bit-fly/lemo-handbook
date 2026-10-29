"use strict";

(() => {
  const data = window.LEMO_DATA;
  const root = document.body.dataset.root || "../";
  const layout = document.body.dataset.layout;
  const $ = (selector) => document.querySelector(selector);
  const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const local = (path) => root + path;
  const markup = (value) => value.replaceAll("@@ROOT@@", root);
  const saved = new URLSearchParams(location.hash.slice(1));
  const state = {
    mode: ["styles", "films"].includes(saved.get("mode")) ? saved.get("mode") : layout === "cinema" ? "films" : "styles",
    category: saved.get("category") || "",
    query: saved.get("q") || "",
    selected: null,
    autoPreview: false,
    tab: "",
    lang: saved.get("lang") === "en" ? "en" : "zh",
    topic: saved.get("topic") || "",
    duration: ["30", "60", "90"].includes(saved.get("duration")) ? saved.get("duration") : "60",
  };
  let lastTrigger = null;
  let toastTimer;
  const timecode = (seconds) => `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${(seconds % 60).toFixed(1).padStart(4, "0")}`;
  const name = (item) => item.kind === "style" ? item.cn : item.zh;
  const subtitle = (item) => item.kind === "style" ? item.en : item.title;
  const featuredSlugs = ["ink-wash", "paper-popup", "swiss-motion"];
  const orderedStyles = [
    ...featuredSlugs.map((slug) => data.styles.find((s) => s.slug === slug)),
    ...data.styles.filter((s) => !featuredSlugs.includes(s.slug)),
  ];
  const current = () => state.mode === "styles" ? orderedStyles : data.films;
  const categoryOf = (item) => item.kind === "style" ? item.cat : item.chapter;
  const selectedDoc = () => state.selected && (state.selected.kind === "style" ? state.selected.styleDoc.raw : state.selected[`prompt_${state.lang}`]);

  function syncLayoutLinks() {
    const params = new URLSearchParams();
    params.set("mode", state.mode);
    if (state.category) params.set("category", state.category);
    if (state.query) params.set("q", state.query);
    params.set("lang", state.lang);
    if (state.selected && !state.autoPreview) {
      params.set("selected", `${state.selected.kind}:${state.selected.id}`);
      params.set("tab", state.tab);
    }
    if (state.topic) params.set("topic", state.topic);
    if (state.duration !== "60") params.set("duration", state.duration);
    document.querySelectorAll("[data-layout-link]").forEach((link) => {
      link.href = `${link.dataset.layoutLink}.html#${params}`;
    });
  }

  function notice(message) {
    const node = $("#notice");
    node.textContent = message;
    node.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { node.hidden = true; }, 4000);
  }

  async function copy(text) {
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(text);
      notice("已复制到剪贴板");
    } catch (error) {
      $("#copyText").value = text;
      $("#copyFallback").showModal();
      $("#copyText").focus();
      $("#copyText").select();
      $("#copyHelp").textContent = `浏览器未允许直接复制（${error.message}）。请按 Ctrl+C，或长按选中文本复制。`;
    }
  }

  function invocation(item) {
    const topic = state.topic.trim() || "【填写你的主题】";
    const duration = state.duration;
    if (item.kind === "film") {
      return `请使用 /lemo-opuscar，为主题「${topic}」制作约 ${duration} 秒的中文影片。\n\n以下为 OPUSCAR 98 官方风格参考（不是可直接安装的独立技能风格）：\n${item.style_zh}\n${item.prompt_zh}\n\n仅借鉴材质、色彩、运动和镜头语法。请根据我的主题重新设计故事、镜头和节奏，不照搬原 demo 的角色、情节与时间表。先写 treatment，再进入制作。`;
    }
    return `请使用 /lemo-opuscar 的「${item.cn}」（${item.slug}）风格，为主题「${topic}」制作约 ${duration} 秒的中文影片。\n\n请先阅读 styles/${item.slug}/STYLE.md，保留其材质、配色、排版、运动、镜头与声音规范。根据我的主题独立设计故事结构和镜头，不替换 demo 文字来交付，也不照搬 demo 的角色、剧情和时间表。\n\n先写包含三种候选结构的 TREATMENT.md，再查阅 demo 学习实现技巧。只有剪辑与纪实类用于检索和整理素材的工具可按官方流程提前查阅。\n\n请交付成片、预览图及可修改源文件；按官方手册完成检查。`;
  }

  function categories() {
    const values = state.mode === "styles"
      ? [...new Set(data.styles.map((s) => s.cat))].map((id) => ({ id, title: id }))
      : data.chapters.map((c) => ({ id: c.id, title: c.zh, years: c.years }));
    $("#filters").innerHTML = `<button type="button" class="filter ${!state.category ? "active" : ""}" data-category="" aria-pressed="${!state.category}">全部 <span>${current().length}</span></button>` +
      values.map((value) => `<button type="button" class="filter ${state.category === value.id ? "active" : ""}" data-category="${esc(value.id)}" aria-pressed="${state.category === value.id}">${esc(value.title)} <span>${current().filter((item) => categoryOf(item) === value.id).length}</span></button>`).join("");
    $("#filterLabel").textContent = state.mode === "styles" ? "按风格分类" : "按影片年代";
  }

  function card(item, index) {
    const film = item.kind === "film";
    const caption = film ? item.style_zh : item.line_cn;
    return `<button type="button" class="style-card ${state.selected === item ? "selected" : ""}" data-open="${esc(item.id)}" aria-label="查看${esc(name(item))}">
      <div class="frame"><img src="${local(item.image)}" alt="${esc(name(item))}的官方示例画面" ${index < 6 ? 'fetchpriority="high"' : 'loading="lazy"'}><span class="frame-meta">${film ? esc(item.year) : `${item.dur} 秒`}</span></div>
      <div class="card-copy"><div class="card-line"><span>${film ? "OPUSCAR 98" : esc(item.cat)}</span><span>${film ? `#${String(item.no).padStart(2, "0")}` : esc(item.slug)}</span></div>
      <h3>${esc(name(item))}</h3><p class="english-title">${esc(subtitle(item))}</p><p class="card-description">${esc(caption)}</p>
      <span class="card-link">${film ? `查看提示词与导演编排（${item.shots.length} 镜头）` : "查看提示词和制作说明"}</span></div>
    </button>`;
  }

  function render() {
    document.body.dataset.mode = state.mode;
    document.querySelectorAll("button[data-mode]").forEach((button) => {
      const active = button.dataset.mode === state.mode;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    categories();
    const results = current().filter((item) => (!state.category || categoryOf(item) === state.category) && (!state.query || item.search.includes(state.query.toLowerCase())));
    $("#results").innerHTML = results.map(card).join("");
    $("#resultCount").textContent = `${results.length} / ${current().length}`;
    $("#resultTitle").textContent = state.mode === "styles" ? "技能风格库" : "OPUSCAR 98 影片风格";
    $("#resultDescription").textContent = state.mode === "styles"
      ? "66 种可用风格。看画面，再阅读提示词与制作规范。"
      : "98 个影片段落，各有独立提示词、镜头拆解与导演编排；不是新增 98 个技能风格。";
    $("#empty").hidden = results.length !== 0;
    syncLayoutLinks();
  }

  function languageControls(translated = false) {
    return `<div class="language-switch" role="group" aria-label="阅读语言"><button type="button" data-lang="zh" class="${state.lang === "zh" ? "active" : ""}" aria-pressed="${state.lang === "zh"}">${translated ? "中文译文" : "中文"}</button><button type="button" data-lang="en" class="${state.lang === "en" ? "active" : ""}" aria-pressed="${state.lang === "en"}">${translated ? "English 原文" : "English"}</button></div>`;
  }

  function ideaList(item) {
    if (!item.ideas?.length) return "";
    return `<section class="ideas" aria-labelledby="ideasTitle"><h3 id="ideasTitle">不知道拍什么？从这些选题开始</h3><p class="muted">整理编写的示例选题，贴合「${esc(isStyleName(item))}」的气质。点一下即填入主题和时长，也可以再改成你自己的内容。</p>
      <ul class="idea-list">${item.ideas.map((idea, i) => `<li><button type="button" class="idea-card ${state.topic === idea.topic ? "selected" : ""}" data-idea="${i}" aria-pressed="${state.topic === idea.topic}"><span class="idea-head"><strong>${esc(idea.title)}</strong><span>约 ${esc(idea.duration)} 秒</span></span><span class="idea-topic">${esc(idea.topic)}</span><span class="idea-why">${esc(idea.why)}</span></button></li>`).join("")}</ul></section>`;
  }
  const isStyleName = (item) => item.kind === "style" ? item.cn : item.style_zh;

  function readerLayoutLinks() {
    return `<nav class="reader-layouts" aria-label="详情内切换阅读方式"><span>切换阅读方式</span>${[["catalog", "图像目录"], ["workbench", "阅读工作台"], ["cinema", "放映阅读室"]].map(([id, title]) => `<a href="${id}.html" data-layout-link="${id}" ${layout === id ? 'aria-current="page"' : ""}>${title}</a>`).join("")}</nav>`;
  }

  function detail(item, tab) {
    const isStyle = item.kind === "style";
    const english = state.lang === "en";
    const prompt = isStyle ? item.styleDoc.raw : item[`prompt_${state.lang}`];
    const tabs = isStyle
      ? [["overview", "概览"], ["prompt", "完整风格提示词"], ["camera", "镜头语法"], ["demo", "Demo 与导演"], ["invoke", "调用模板"]]
      : [["overview", "风格描述"], ["prompt", "风格提示词"], ["shots", "镜头拆解"], ["direction", "导演编排"], ["invoke", "调用模板"]];
    let content = "";
    if (tab === "overview") {
      if (isStyle) {
        content = `<img class="detail-image" src="${local(item.image)}" alt="${esc(item.cn)}原站画面"><div class="source-badge">官方索引 · 中文简介 / 英文规范</div>
          <h3>${esc(item.film)}</h3><p>${esc(item.line_cn)}</p><p class="muted">${esc(item.line)}</p>
          <div class="info-grid"><div><span>影片时长</span><strong>${item.dur} 秒</strong></div><div><span>风格目录</span><strong>${esc(item.slug)}</strong></div><div><span>适用场景（原文）</span><strong>${esc(item.uses.join(" / "))}</strong></div></div>
          <h3>从画面到制作</h3><p>先阅读完整 STYLE.md，理解材质、色彩与镜头语法；DEMO.md 是一个示例的故事和实现，不是每部影片必须沿用的分镜。</p>
          <button type="button" class="primary" data-tab="prompt">阅读完整风格提示词</button>`;
      } else {
        content = `<img class="detail-image" src="${local(item.image)}" alt="${esc(item.zh)}原站画面">${languageControls()}
          <div class="source-badge">官方原文 · OPUSCAR 98 · ${esc(item.render)}</div><h3>${esc(english ? item.style_en : item.style_zh)}</h3><p>${esc(item[`desc_${state.lang}`])}</p>
          <div class="tags">${item[`blend_${state.lang}`].map((tag) => `<span>${esc(tag)}</span>`).join("")}</div>
          <div class="info-grid"><div><span>原合集位置</span><strong>${timecode(item.t0)}</strong></div><div><span>段落时长</span><strong>${item.dur} 秒</strong></div><div><span>镜头总数</span><strong>${item.shots.length}</strong></div></div>
          <p class="muted">此处展示的是原站代码风格演示，不是电影原片截图。片段时长与镜头时长均保留官方数据。</p>`;
      }
    } else if (tab === "prompt") {
      content = `${isStyle ? "" : languageControls()}<div class="content-tools"><span class="source-badge">${isStyle ? "官方 STYLE.md · 英文原文，完整保留" : "官方可复用提示词"}</span><button type="button" class="secondary" data-copy="prompt">复制${isStyle ? "完整提示词" : "提示词"}</button></div>` +
        (isStyle ? `<article class="prose">${markup(item.styleDoc.html)}</article>` : `<div class="prompt-text">${esc(prompt)}</div>`);
    } else if (tab === "camera") {
      const html = english ? item.cameraHtml : item.cameraZhHtml;
      content = `${languageControls(true)}<div class="source-badge${english ? "" : " generated"}">${english ? "官方 STYLE.md 摘录 · 英文原文" : "中文译文 · 整理翻译，以英文原文为准"} · 运动 / 镜头 / 原生手法</div><article class="prose">${markup(html || item.styleDoc.html)}</article>`;
    } else if (tab === "demo") {
      content = `${languageControls(true)}<div class="source-badge${english ? "" : " generated"}">${english ? "官方 DEMO.md · 英文原文" : "DEMO.md 中文译文 · 整理翻译，以英文原文为准"} · 故事、镜头、声音与实现说明</div><div class="callout">仅作为案例学习实现技巧。制作你自己的影片时，不照搬这个案例的剧情与时间表。</div><article class="prose">${markup(english ? item.demoDoc.html : item.demoZh.html)}</article>`;
    } else if (tab === "shots") {
      let elapsed = 0;
      const shots = item.shots.map((shot, i) => {
        const start = elapsed;
        elapsed += shot.sec;
        return `<li><div class="shot-index">${String(i + 1).padStart(2, "0")}<span>${shot.sec} 秒</span></div><div><div class="shot-title"><code>${esc(shot.cam)}</code><span>段内 ${start.toFixed(2)}–${elapsed.toFixed(2)}s</span></div><p>${esc(shot[english ? "en" : "zh"])}</p></div></li>`;
      }).join("");
      content = `${languageControls()}<div class="source-badge">官方实片镜头列表 · ${item.shots.length} 镜头</div><div class="shot-timeline">${item.shots.map((s, i) => `<span style="flex:${s.sec}" title="镜头 ${i + 1}：${s.sec}s">${i + 1}</span>`).join("")}</div><ol class="shots">${shots}</ol>
        <p class="muted">段内起止时间由官方 sec 字段累加得到。总计 ${elapsed.toFixed(3).replace(/0+$/, "").replace(/\.$/, "")} 秒；合集段落时长 ${item.dur} 秒。舍入、转场或停顿可能令两者不同，未擅自改写原数据。</p>`;
    } else if (tab === "direction") {
      content = `${languageControls()}<div class="source-badge">官方导演编排</div><h3>为什么这样拍</h3><p class="direction-note">${esc(item[`direction_${state.lang}`])}</p><h3>参考来源（原文）</h3><ul>${item.refs.map((ref) => `<li>${esc(ref)}</li>`).join("")}</ul><button type="button" class="secondary" data-copy="direction">复制导演编排</button>`;
    } else if (tab === "invoke") {
      content = `<div class="source-badge generated">整理编写 · 调用模板，并非官方提示词</div><p>填写你的主题，再将模板复制给支持此技能的智能体。原 demo 的角色、剧情与时间表不会作为默认要求。</p>
        <div class="template-inputs"><label>影片主题<input id="topic" placeholder="例如：解释电动汽车的热管理" value="${esc(state.topic)}"></label><label>目标时长<select id="duration">${["30", "60", "90"].map((d) => `<option value="${d}" ${state.duration === d ? "selected" : ""}>约 ${d} 秒</option>`).join("")}</select></label></div>
        <textarea id="invokeText" readonly rows="13" aria-label="可复制调用模板"></textarea><button type="button" class="primary" data-copy="invoke">复制调用模板</button>${ideaList(item)}`;
    }
    const sourcePath = isStyle ? `styles/${item.id}/${tab === "demo" ? "DEMO.md" : "STYLE.md"}` : "styleboard/opuscar98_styles.json";
    return `<header class="reader-head"><div><p>${esc(isStyle ? item.cat : `${item.year} · OPUSCAR 98 #${item.no}`)}</p><h2>${esc(name(item))}</h2><span>${esc(subtitle(item))}</span></div><button type="button" class="icon-button close-detail" data-close aria-label="关闭详情">×</button></header>
      ${readerLayoutLinks()}<nav class="detail-tabs" aria-label="详情栏目">${tabs.map(([id, label]) => `<button type="button" data-tab="${id}" class="${tab === id ? "active" : ""}" aria-current="${tab === id ? "page" : "false"}">${label}</button>`).join("")}</nav>
      <div class="reader-content">${content}
        <footer class="source-footer"><span>来源：LemoLab / 文档 MIT，图片 CC BY 4.0 / ${data.revision.slice(0, 8)}</span><a href="${local(`source/${sourcePath}`)}" target="_blank" rel="noopener">本地原文</a>${isStyle ? `<button type="button" class="credits-link" data-credits="${esc(item.slug)}">原样片素材署名</button>` : ""}<a href="${data.repository}/blob/${data.revision}/${sourcePath}" target="_blank" rel="noopener">GitHub 原文（联网）</a></footer>
      </div>`;
  }

  function updateReader() {
    const host = layout === "workbench" ? $("#inlineReader") : $("#detailBody");
    host.innerHTML = detail(state.selected, state.tab);
    host.scrollTop = 0;
    if (state.tab === "invoke") $("#invokeText").value = invocation(state.selected);
    syncLayoutLinks();
  }

  function openItem(item, trigger, autoPreview = false) {
    lastTrigger = trigger || document.activeElement;
    state.selected = item;
    state.autoPreview = autoPreview;
    state.tab = "overview";
    if (layout === "workbench") {
      $("#inlineReader").hidden = false;
      document.body.classList.add("reading");
    }
    updateReader();
    if (layout !== "workbench") $("#detailDialog").showModal();
    else {
      render();
      if (window.innerWidth < 1000) $("#inlineReader .close-detail").focus();
    }
  }

  function closeReader() {
    if (!state.selected) return;
    if (layout !== "workbench") $("#detailDialog").close();
    else {
      $("#inlineReader").hidden = true;
      document.body.classList.remove("reading");
    }
    state.selected = null;
    if (layout === "workbench") render();
    syncLayoutLinks();
    lastTrigger?.focus();
  }

  function openGuide(which) {
    const guide = data.guides[which];
    $("#guideTitle").textContent = guide.title;
    const intro = which === "start" ? `<section class="quickstart"><div class="source-badge generated">整理编写的中文导读；下方保留完整官方原文</div>
      <h3>先选风格，再给出自己的主题</h3><p>在「技能风格库」浏览 66 种可直接引用的风格。打开详情，阅读完整提示词和镜头语法；在「调用模板」填写主题和时长，复制到已安装 /lemo-opuscar 的智能体。这个本地网页只负责查阅与生成调用文字，不会在网页里直接渲染视频。</p>
      <h3>把 98 个影片案例当作参考，而不是新技能</h3><p>切到 OPUSCAR 98，查看每个段落的中英风格描述、提示词、镜头顺序和时长，以及导演为什么这样编排。它们是合集里的 98 种视觉诠释，不等于 98 个可安装的独立技能目录。</p>
      <h3>按官方流程推进制作</h3><ol><li>明确主题、必须出现的信息和自有素材；需要时要求先审分镜。</li><li>先写自己的 TREATMENT.md，比较三种候选结构，再选一种。不要直接套用原 demo 的情节与时间表。</li><li>先检查真实绘制代码产出的风格帧，再制作配音、配乐、动画和混音。剪辑与纪实类可按官方例外提前使用素材整理工具。</li><li>按导演与制作手册检查并交付成片、字幕和可修改源文件。你自己的影片无须加 LemoLab 水印。</li></ol>
      <h3>离线阅读与实际制作是两回事</h3><p>本手册双击 index.html 即可阅读，不需要安装运行环境。真正制作影片时，官方 README 要求 Node 20+、ffmpeg 7+、Python 3.11+（或 uv）；部分配音与素材获取需要联网。原始视频入口、GitHub 文档等外链也需要联网。相关安装方式见下方原文及「项目说明（中文原文）」。</p><p><button type="button" class="secondary" data-guide="readme">项目说明（中文原文）</button></p><h3>完整官方使用流程（英文原文）</h3></section>` : "";
    $("#guideContent").innerHTML = `${intro}<div class="source-badge">官方文档原文 · 未省略章节</div><article class="prose">${markup(guide.html)}</article><p><a href="${local(guide.path)}" target="_blank" rel="noopener">打开本地 Markdown 原文</a></p>`;
    $("#guideDialog").showModal();
  }

  function featureFilm(no = 1) {
    const item = data.films.find((film) => film.no === no);
    $("#featureImage")?.setAttribute("src", local(item.image));
    if (!$("#featureTitle")) return;
    $("#featureTitle").textContent = `${item.zh} / ${item.title}`;
    $("#featureStyle").textContent = item.style_zh;
    $("#featureDescription").textContent = item.desc_zh;
    $("#featureYear").textContent = `${item.year} · ${item.shots.length} 镜头 · ${item.dur}s`;
    $("#featureOpen").dataset.feature = String(no);
    document.querySelectorAll("[data-feature-select]").forEach((button) => button.classList.toggle("selected", Number(button.dataset.featureSelect) === no));
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("button, a");
    if (!button) return;
    if (button.dataset.mode) {
      state.mode = button.dataset.mode;
      state.category = "";
      render();
      return;
    }
    if (button.hasAttribute("data-category")) {
      state.category = button.dataset.category;
      render();
      return;
    }
    if (button.dataset.open) {
      const item = current().find((i) => i.id === button.dataset.open);
      openItem(item, button);
      return;
    }
    if (button.dataset.tab) {
      state.tab = button.dataset.tab;
      state.autoPreview = false;
      updateReader();
      return;
    }
    if (button.dataset.lang) {
      state.lang = button.dataset.lang;
      updateReader();
      return;
    }
    if (button.dataset.idea && state.selected?.ideas) {
      const idea = state.selected.ideas[Number(button.dataset.idea)];
      state.topic = idea.topic;
      state.duration = idea.duration;
      state.autoPreview = false;
      $("#topic").value = state.topic;
      $("#duration").value = state.duration;
      $("#invokeText").value = invocation(state.selected);
      document.querySelectorAll("[data-idea]").forEach((node) => {
        const on = node === button;
        node.classList.toggle("selected", on);
        node.setAttribute("aria-pressed", String(on));
      });
      syncLayoutLinks();
      notice(`已填入示例选题：${idea.title}`);
      return;
    }
    if (button.hasAttribute("data-close")) return closeReader();
    if (button.dataset.credits) {
      const style = data.styles.find((s) => s.slug === button.dataset.credits);
      $("#guideTitle").textContent = `${style.cn}：原样片素材署名`;
      $("#guideContent").innerHTML = `<div class="source-badge">官方 CREDITS 原文，保留第三方素材授权说明</div><pre>${esc(style.credits)}</pre>`;
      $("#guideDialog").showModal();
      return;
    }
    if (button.dataset.guide) return openGuide(button.dataset.guide);
    if (button.dataset.featureSelect) return featureFilm(Number(button.dataset.featureSelect));
    if (button.dataset.feature) return openItem(data.films.find((film) => film.no === Number(button.dataset.feature)), button);
    if (button.dataset.copy) {
      const item = state.selected;
      const kind = button.dataset.copy;
      copy(kind === "invoke" ? invocation(item) : kind === "direction" ? item[`direction_${state.lang}`] : selectedDoc());
    }
    if (button.id === "clearSearch") {
      $("#search").value = "";
      state.query = "";
      state.category = "";
      render();
      $("#search").focus();
    }
  });
  document.addEventListener("input", (event) => {
    if (event.target.id === "search") {
      state.query = event.target.value.trim();
      render();
    }
    if (event.target.id === "topic") {
      state.topic = event.target.value;
      $("#invokeText").value = invocation(state.selected);
      syncLayoutLinks();
    }
  });
  document.addEventListener("change", (event) => {
    if (event.target.id === "duration") {
      state.duration = event.target.value;
      $("#invokeText").value = invocation(state.selected);
      syncLayoutLinks();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && layout === "workbench") closeReader();
    const editing = event.target.matches("input,textarea,select") || event.target.isContentEditable;
    if (event.key === "/" && !editing && !document.querySelector("dialog[open]")) {
      event.preventDefault();
      $("#search").focus();
    }
  });
  $("#detailDialog")?.addEventListener("click", (event) => {
    if (event.target === $("#detailDialog")) closeReader();
  });
  $("#detailDialog")?.addEventListener("close", () => {
    state.selected = null;
    syncLayoutLinks();
    lastTrigger?.focus();
  });
  $("#licenseButton").addEventListener("click", () => {
    $("#guideTitle").textContent = "来源、离线范围与授权";
    $("#guideContent").innerHTML = `<h3>资料快照</h3><p>官方资料由 <a href="${data.repository}" target="_blank" rel="noopener">LemoLab</a> 发布。本地手册为独立整理的阅读界面，不代表官方新产品。</p><p>来源版本：<code>${esc(data.revision)}</code><br>保存时间：${esc(data.retrievedAt)}</p>
      <p>66 个技能风格、66 份 STYLE.md、66 份 DEMO.md、98 个影片段落的双语说明与提示词、全部镜头和导演编排以及 164 张对应画廊图均已保存到本地。未下载视频；外部 GitHub 与在线画廊入口需要联网。</p>      <p>官方风格规范和 demo 文档保留英文原文；98 个段落保留官方中英双语。中文导读和调用模板标注为整理编写。</p>
      <h3>图片与第三方素材</h3><p>样片静帧由 LemoLab 按 <a href="https://creativecommons.org/licenses/by/4.0/deed.zh-hans" target="_blank" rel="noopener">CC BY 4.0</a> 授权，原始图片字节未改动，仅在此界面中缩放展示。第三方素材沿用各自授权，原样片 CREDITS 已保存，可在对应风格详情底部查看。原 README 排除的三段配音未下载、未包含在本包。</p><p><a href="${local("ATTRIBUTION.txt")}" target="_blank" rel="noopener">本地完整署名说明</a></p><h3>代码和文档：MIT License</h3><pre>${esc(data.license)}</pre><a href="${local("source/manifest.json")}" target="_blank" rel="noopener">本地文件校验清单</a>`;
    $("#guideDialog").showModal();
  });
  const validCategories = state.mode === "styles" ? data.styles.map((s) => s.cat) : data.chapters.map((c) => c.id);
  if (!validCategories.includes(state.category)) state.category = "";
  $("#search").value = state.query;
  render();
  const [selectedKind, selectedId] = (saved.get("selected") || "").split(":");
  const restored = (selectedKind === "style" ? data.styles : selectedKind === "film" ? data.films : []).find((item) => item.id === selectedId);
  if (restored) {
    openItem(restored);
    const allowedTabs = restored.kind === "style" ? ["overview", "prompt", "camera", "demo", "invoke"] : ["overview", "prompt", "shots", "direction", "invoke"];
    state.tab = allowedTabs.includes(saved.get("tab")) ? saved.get("tab") : "overview";
    updateReader();
  } else if (layout === "workbench") {
    if (window.innerWidth >= 1000 && state.mode === "styles") openItem(data.styles.find((s) => s.slug === "ink-wash"), null, true);
    else $("#inlineReader").hidden = true;
  }
  if (layout === "cinema") {
    $("#filmstrip").innerHTML = data.films.slice(0, 9).map((film) => `<button type="button" data-feature-select="${film.no}" aria-label="预览${esc(film.zh)}"><img src="${local(film.image)}" alt=""><span>${esc(film.year)} · ${esc(film.zh)}</span></button>`).join("");
    featureFilm();
  }
  $("#snapshotDate").textContent = data.retrievedAt.slice(0, 10);
})();
