/* 中英文切换：英文文案词典 + 应用逻辑 */
(function () {
  "use strict";

  var EN = {
    /* meta */
    metaTitle: "Ziyun Hong · AI Product Operations & Product Planning Portfolio",
    metaDesc:
      "Ziyun Hong's portfolio for AI product operations and product planning: user insight, content strategy, and AI-assisted product delivery, with a focus on AI content, AI + games, and anime-inspired user products.",
    langAria: "Switch to Chinese",

    /* nav & header */
    skipLink: "Skip to main content",
    brandAria: "Back to top",
    navAria: "Main navigation",
    navAbout: "About",
    navExperience: "Experience",
    navProjects: "Projects",
    navEducation: "Education",
    navPortfolio: "Portfolio",
    themeAria: "Toggle dark mode",
    navCta: "Resume PDF",
    menuOpen: "Open menu",
    menuClose: "Close menu",

    /* hero */
    heroChip: "Seeking AI Product Operations / Product Planning Internships",
    heroTitle:
      'A product-minded operator<br>who understands <span class="grad-text">users, content & AI</span>',
    heroSub:
      "Currently pursuing an MA in Creative Media at City University of Hong Kong. I bring experience in game content planning, user research, and content operations, using user insight and data reviews to drive product delivery across AI content, AI + games, and anime-inspired user products.",
    heroDownload: "Download Resume",
    heroProjects: "View My Projects",
    photoAlt: "Portrait of Ziyun Hong",
    photoCaption: "Ziyun Hong · MA Creative Media, City University of Hong Kong",

    /* marquee */
    marqueeAria: "Skills",
    mTag1: "AI Product Operations",
    mTag2: "User Research & Personas",
    mTag3: "Product Requirement Breakdown",
    mTag4: "Competitor Analysis",
    mTag5: "AI-Assisted Development",
    mTag6: "Content Strategy & Review",
    mTag7: "AI + Games",
    mTag8: "Anime-Inspired User Products",

    /* about */
    aboutTitle: "About Me",
    aboutSub: "From user insight to content strategy, I use AI tools and data reviews to move products forward.",
    aboutIntro:
      "I am pursuing a master's in Creative Media at City University of Hong Kong, with experience in game content planning, user research, brand products, and content operations. I have developed content strategies from competitor and user feedback, produced a video with 15k+ likes, and contributed to an IP merchandise project from user research through sales validation. I use ChatGPT, Codex, Gemini, and DeepSeek to assist with requirement breakdowns, product documentation, interface design, and front-end validation. I am especially interested in AI content, AI + games, and anime-inspired user products.",
    factMaster: "Master's (in progress)",
    factMasterDd: "City University of Hong Kong · Creative Media",
    factBachelor: "Undergraduate",
    factBachelorDd: "Guangzhou Nanfang College",
    factLang: "Languages",
    factLangDd: "IELTS 6.5 · CET-4",
    factFocus: "Interests",
    factFocusDd: "AI Content · AI + Games",
    factPhone: "Phone",
    factPhoneDd: "13715556571",
    factEmail: "Email",
    factEmailDd: "elina07@126.com",

    /* experience */
    expTitle: "Work Experience",
    expSub: "Hands-on experience from user insight and content strategy to project delivery, with work that can be reviewed through outcomes.",
    e1Company: "Guangzhou Keranbing Culture Communication Co., Ltd.",
    e1Role: "Game Creative Planning Intern",
    e1s1: "Likes on one viral post",
    e1s2: "Posts per week",
    e1s3: "Conversion lift",
    e1p1:
      "<b>Content strategy & review:</b> developed game-content strategies from competitor analysis, platform trends, and user feedback; published 8-10 posts per week and produced a video with 15k+ likes.",
    e1p2:
      "<b>Fast delivery:</b> analysed competitor gameplay, selling points, and user feedback within 48 hours of new game launches, then delivered content plans that lifted average conversion by 15%.",
    e2Company: "Zhongshan Runhe Building Materials Co., Ltd. (Sanhe Group)",
    e2Role: "Marketing Intern",
    e2p1:
      "<b>Information decluttering:</b> redesigned product brochure layouts so information is easier to scan and digest.",
    e2p2:
      "<b>End-to-end follow-up:</b> managed customer orders from inquiry to delivery, aligning needs and progress to support sales conversion.",
    e3Company: "Caihong Community, Xiqu Subdistrict, Zhongshan",
    e3Role: "Social Media Operator",
    e3p1:
      "<b>User analysis:</b> adapted content to residents' reading habits, ran the official WeChat account solo, and produced 12 articles with matching posters, lifting average reads by 30%.",

    /* projects */
    projTitle: "Projects",
    projSub: "From AI-assisted delivery to IP product design, covering insight, definition, implementation, and validation.",
    accordion: "View background, actions & results",
    dtBg: "Background",
    dtAct: "Actions",
    dtRes: "Results",
    paTags:
      '<span class="tag">#AI Coding</span><span class="tag">#Product Thinking</span><span class="tag">#Responsive Design</span><span class="tag">#From 0 to 1</span>',
    paTitle: "Vibe Coding · Personal Resume Website",
    paNote: "⭐ AI product planning & assisted development practice",
    paMeta: "2026.08 · Built from 0 to 1 in 3 days",
    paBg: "Traditional PDF resumes are hard to share, costly to update, and can't showcase a portfolio directly.",
    paAct:
      "Defined three core capabilities: online resume, portfolio access, and PDF download. Used DeepSeek for requirement breakdown and development documentation, MockingBot and Gemini for interface design, then Codex for front-end development, debugging, and mobile optimisation.",
    paRes:
      "The site is live as a single portfolio entry point, completing a loop from problem definition and feature design to launch validation while establishing an AI-assisted delivery workflow.",
    pbTags:
      '<span class="tag">#Full Brand Package</span><span class="tag">#Competitor Analysis</span><span class="tag">#IP Design</span><span class="tag">#Sai2/AI</span>',
    pbTitle: "“Four Seasons” Brand Visual Identity",
    pbMeta: "2025.11 - 2026.04 · Full VI package",
    pbBg: "Built a complete visual identity system (VI) and IP character for a cultural new-consumption brand.",
    pbAct:
      "Designed and ran surveys, combined with competitor matrix teardowns, to pinpoint users' aesthetic preferences and brand tone. Drew the main IP character in Sai2 and made IP merchandise mockups in Adobe Illustrator.",
    pbRes: "Delivered a complete VI manual; the designs were adopted by the client as core brand assets.",
    pcTags:
      '<span class="tag">#IP Planning</span><span class="tag">#User Research</span><span class="tag">#From 0 to 1</span><span class="tag">#Offline Sales</span>',
    pcTitle: "Fan-Project · IP Merchandise Design",
    pcMeta: "2024.02 - 2024.04 · Merchandise line",
    pcBg: "Built a merchandise line from scratch for anime-game players and closed the loop with offline sales.",
    pcAct:
      "Collected user profiles through surveys and community interviews to pick high-potential IPs. Planned and shipped 5 merchandise SKUs from design to production based on user preference, and coordinated booth applications, display, and sales at the comic convention.",
    pcRes: "The project turned a profit, validating a research-driven product selection model.",
    imgAltA: "Personal resume website project",
    imgAltB: "“Four Seasons” brand identity project",
    imgAltC: "IP merchandise project",
    imgAltVideo: "Viral Douyin video work",
    imgAltTw: "WeChat article layout work",

    /* education */
    eduTitle: "Education",
    eduSub: "An academic path where creativity meets technology.",
    edu1h: "City University of Hong Kong",
    edu1p: "MA Creative Media (in progress)",
    edu2h: "Guangzhou Nanfang College",
    edu2p: "Network & New Media · Bachelor's",
    edu3h: "Languages",
    edu3p: "IELTS 6.5 (fluent in all skills) · CET-4",

    /* portfolio */
    pfTitle: "Portfolio",
    pfSub: "Project snapshots across AI-assisted development, user insight, IP products, and content operations.",
    pf1h: "Resume Website",
    pf1p: "Responsive resume · AI-assisted",
    pf2h: "“Four Seasons” Brand VI",
    pf2p: "Full brand package · IP design",
    pf3h: "IP Merchandise",
    pf3p: "Merchandise line · Offline sales",
    pf4h: "Viral Douyin Video",
    pf4p: "15k+ likes on one post · Content strategy & review",
    pf5h: "WeChat Article Layout",
    pf5p: "12 articles · +30% reads",
    pfAria1: "View resume website project",
    pfAria2: "View “Four Seasons” brand VI project",
    pfAria3: "View IP merchandise project",
    pfAria4: "View viral Douyin video",
    pfAria5: "View WeChat article work",

    /* CTA & footer */
    ctaTitle: "Looking for a creative strategist who gets games and makes content?",
    ctaSub: "Email me with this resume attached and let's start the conversation.",
    ctaEmail: "Email Me",
    ctaDownload: "Download Resume",
    footerTagline: "AI Product Operations / Product Planning / User Insight",
    socialAriaInstagram: "Instagram",
    socialAriaDouyin: "Douyin",
    socialAriaXhs: "Xiaohongshu",
    socialAriaBili: "Bilibili",
    socialAriaWechat: "Copy WeChat ID Elina-Kilo",
    socialAriaEmail: "Email",
    socialDouyin: "Douyin",
    socialXhs: "Xiaohongshu",
    socialBili: "Bilibili",
    socialWechat: "WeChat",
    socialEmail: "Email",
    footerNote: "© 2026 Ziyun Hong · Made with Codex",

    /* floating actions */
    fabDownload: "Download Full Resume (PDF)",
    fabDownloadAria: "Download full resume PDF",
    fabCopy: "Copy email elina07@126.com",
    fabCopyAria: "Copy email elina07@126.com",
    copySuccess: "Email copied ",

    /* lightbox */
    lbAria: "Image preview",
    lbClose: "Close image",
    lbPrev: "Previous",
    lbNext: "Next"
  };

  var zhCache = {};

  function currentLang() {
    return document.documentElement.getAttribute("lang") === "en" ? "en" : "zh";
  }

  function saveZh() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (k && zhCache[k] === undefined) zhCache[k] = el.innerHTML;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-alt");
      if (k && zhCache["alt:" + k] === undefined) zhCache["alt:" + k] = el.getAttribute("alt");
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria");
      if (k && zhCache["aria:" + k] === undefined) zhCache["aria:" + k] = el.getAttribute("aria-label");
    });
    var titleEl = document.querySelector("[data-i18n-meta]");
    if (titleEl) {
      if (zhCache["meta:title"] === undefined) zhCache["meta:title"] = document.title;
      var desc = document.querySelector('meta[name="description"]');
      if (desc && zhCache["meta:desc"] === undefined) zhCache["meta:desc"] = desc.getAttribute("content");
    }
  }

  function apply() {
    var en = currentLang() === "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (!k) return;
      el.innerHTML = en ? EN[k] || el.innerHTML : zhCache[k] || el.innerHTML;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-alt");
      if (!k) return;
      el.setAttribute("alt", en ? EN[k] || el.getAttribute("alt") : zhCache["alt:" + k]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria");
      if (!k) return;
      var label = en ? EN[k] || el.getAttribute("aria-label") : zhCache["aria:" + k];
      el.setAttribute("aria-label", label);
      if (el.tagName === "BUTTON" && el.hasAttribute("title")) {
        el.setAttribute("title", label);
      }
    });
    var titleEl = document.querySelector("[data-i18n-meta]");
    var desc = document.querySelector('meta[name="description"]');
    if (titleEl) {
      document.title = en ? EN.metaTitle : zhCache["meta:title"];
      if (desc) desc.setAttribute("content", en ? EN.metaDesc : zhCache["meta:desc"]);
    }
  }

  saveZh();
  apply();

  window.I18N = {
    getLang: currentLang,
    apply: apply
  };
})();
