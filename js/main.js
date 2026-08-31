/* 洪梓芸作品集网站 · 交互脚本 */
(function () {
  "use strict";

  var EMAIL = "elina07@126.com";
  var doc = document;
  var root = doc.documentElement;

  function ready(fn) {
    if (doc.readyState === "loading") {
      doc.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  /* ---------- 主题切换 ---------- */
  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("site-theme", theme);
    } catch (e) {
      /* 隐私模式下静默失败 */
    }
    var toggle = doc.getElementById("theme-toggle");
    var icon = toggle ? toggle.querySelector("[data-icon]") : null;
    if (icon) {
      icon.setAttribute("data-icon", theme === "dark" ? "sun" : "moon");
    }
  }

  /* ---------- 移动端菜单 ---------- */
  function closeMenu() {
    var nav = doc.getElementById("site-nav");
    var btn = doc.getElementById("menu-toggle");
    if (!nav || !btn) return;
    nav.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "打开菜单");
    var icon = btn.querySelector("[data-icon]");
    if (icon) icon.setAttribute("data-icon", "list");
  }

  function openMenu() {
    var nav = doc.getElementById("site-nav");
    var btn = doc.getElementById("menu-toggle");
    if (!nav || !btn) return;
    nav.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-label", "关闭菜单");
    var icon = btn.querySelector("[data-icon]");
    if (icon) icon.setAttribute("data-icon", "x");
  }

  /* ---------- 头部滚动状态 ---------- */
  function initHeaderState() {
    var header = doc.querySelector(".site-header");
    var hero = doc.querySelector(".hero");
    if (!header || !hero || !("IntersectionObserver" in window)) return;
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          header.classList.toggle("scrolled", !entry.isIntersecting);
        });
      },
      { rootMargin: "-72px 0px 0px 0px", threshold: 0 }
    );
    observer.observe(hero);
  }

  /* ---------- 滚动显现 ---------- */
  function initReveal() {
    var items = doc.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("is-in");
      });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- 导航高亮（scrollspy） ---------- */
  function initScrollSpy() {
    var navLinks = doc.querySelectorAll(".site-nav a");
    if (!navLinks.length || !("IntersectionObserver" in window)) return;
    var map = {};
    navLinks.forEach(function (link) {
      map[link.getAttribute("href").slice(1)] = link;
    });
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var active = map[entry.target.id];
            navLinks.forEach(function (link) {
              link.classList.toggle("active", link === active);
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    Object.keys(map).forEach(function (id) {
      var section = doc.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  /* ---------- 手风琴 ---------- */
  function initAccordions() {
    var buttons = doc.querySelectorAll(".accordion-btn");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var target = doc.getElementById(btn.getAttribute("aria-controls"));
        if (!target) return;
        var open = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!open));
        target.style.maxHeight = open ? "0px" : target.scrollHeight + "px";
      });
    });
    var onResize = function () {
      buttons.forEach(function (btn) {
        if (btn.getAttribute("aria-expanded") !== "true") return;
        var target = doc.getElementById(btn.getAttribute("aria-controls"));
        if (target) target.style.maxHeight = target.scrollHeight + "px";
      });
    };
    window.addEventListener("resize", onResize);
  }

  /* ---------- 复制邮箱 ---------- */
  function copyEmail() {
    var btn = doc.getElementById("copy-email");
    var label = doc.getElementById("copy-email-label");
    if (!btn) return;

    function fallback() {
      var area = doc.createElement("textarea");
      area.value = EMAIL;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      doc.body.appendChild(area);
      area.select();
      var ok = false;
      try {
        ok = doc.execCommand("copy");
      } catch (e) {
        ok = false;
      }
      doc.body.removeChild(area);
      return ok;
    }

    function success() {
      btn.setAttribute("data-copied", "true");
      var icon = btn.querySelector("[data-icon]");
      if (icon) icon.setAttribute("data-icon", "check");
      if (label) label.textContent = "已复制邮箱 " + EMAIL;
      window.setTimeout(function () {
        btn.setAttribute("data-copied", "false");
        if (icon) icon.setAttribute("data-icon", "envelope-simple");
        if (label) label.textContent = "一键复制邮箱 " + EMAIL;
      }, 2200);
    }

    var copied = false;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(EMAIL)
        .then(function () {
          copied = true;
          success();
        })
        .catch(function () {
          copied = fallback();
          if (copied) success();
        });
    } else {
      copied = fallback();
      if (copied) success();
    }
  }

  /* ---------- 图片大图预览（lightbox） ---------- */
  function initLightbox() {
    var images = Array.prototype.slice.call(
      doc.querySelectorAll(".project-cover img, .pf-cover img, .photo-frame img")
    );
    var lb = doc.getElementById("lightbox");
    if (!images.length || !lb) return;

    var imgEl = lb.querySelector(".lightbox-img");
    var capEl = lb.querySelector(".lightbox-caption");
    var closeBtn = lb.querySelector(".lightbox-close");
    var prevBtn = lb.querySelector(".lightbox-prev");
    var nextBtn = lb.querySelector(".lightbox-next");
    var current = 0;
    var lastFocused = null;

    function show() {
      var item = images[current];
      imgEl.src = item.getAttribute("src");
      imgEl.alt = item.getAttribute("alt") || "";
      capEl.textContent = imgEl.alt;
      lb.classList.add("open");
      lb.setAttribute("aria-hidden", "false");
      doc.body.classList.add("no-scroll");
      closeBtn.focus();
    }

    function close() {
      lb.classList.remove("open");
      lb.setAttribute("aria-hidden", "true");
      doc.body.classList.remove("no-scroll");
      imgEl.removeAttribute("src");
      if (lastFocused && lastFocused.focus) lastFocused.focus();
    }

    function step(dir) {
      current = (current + dir + images.length) % images.length;
      show();
    }

    images.forEach(function (item, i) {
      item.classList.add("zoomable");
      item.setAttribute("tabindex", "-1");
      item.addEventListener("click", function (event) {
        event.preventDefault();
        lastFocused = item;
        current = i;
        show();
      });
    });

    closeBtn.addEventListener("click", close);
    prevBtn.addEventListener("click", function () {
      step(-1);
    });
    nextBtn.addEventListener("click", function () {
      step(1);
    });

    lb.addEventListener("click", function (event) {
      if (event.target === lb) close();
    });

    doc.addEventListener("keydown", function (event) {
      if (!lb.classList.contains("open")) return;
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "Tab") {
        var buttons = lb.querySelectorAll("button");
        if (!buttons.length) return;
        var first = buttons[0];
        var last = buttons[buttons.length - 1];
        if (event.shiftKey && doc.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && doc.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
  }

  ready(function () {
    /* 主题 */
    var themeToggle = doc.getElementById("theme-toggle");
    if (themeToggle) {
      var initial = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      setTheme(initial);
      themeToggle.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        setTheme(next);
      });
    }

    /* 菜单 */
    var menuBtn = doc.getElementById("menu-toggle");
    var nav = doc.getElementById("site-nav");
    if (menuBtn && nav) {
      menuBtn.addEventListener("click", function () {
        var open = nav.classList.contains("open");
        if (open) {
          closeMenu();
        } else {
          openMenu();
        }
      });
      nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMenu);
      });
      doc.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closeMenu();
      });
      window.addEventListener("resize", function () {
        if (window.innerWidth > 900) closeMenu();
      });
    }

    /* 复制邮箱 */
    var copyBtn = doc.getElementById("copy-email");
    if (copyBtn) {
      copyBtn.addEventListener("click", copyEmail);
    }

    initHeaderState();
    initReveal();
    initScrollSpy();
    initAccordions();
    initLightbox();
  });
})();
