/* =====================================================================
   Cercle Philatélique Walferdange — Script commun du site
   (Vous n'avez normalement PAS besoin de modifier ce fichier.)
   ---------------------------------------------------------------------
   Rôle :
   - construit le menu et le pied de page (identiques sur toutes les pages)
   - gère le changement de langue Français / English
   - affiche les événements et les rapports à partir des fichiers content/
   ===================================================================== */
(function () {
  "use strict";

  var I18N = window.CPW_I18N || { fr: {}, en: {} };
  var INFO = window.CPW_INFO || {};

  // ---- Langue courante (mémorisée dans le navigateur) ----
  function currentLang() {
    var saved = localStorage.getItem("cpw_lang");
    var url = new URLSearchParams(location.search).get("lang");
    return (url === "en" || url === "fr") ? url : (saved || "fr");
  }
  function t(key) {
    var l = currentLang();
    return (I18N[l] && I18N[l][key]) || (I18N.fr && I18N.fr[key]) || key;
  }

  // Pages du menu : [clé de traduction, fichier]
  var PAGES = [
    ["nav_home",    "index.html"],
    ["nav_events",  "evenements.html"],
    ["nav_reports", "rapports.html"],
    ["nav_history", "histoire.html"],
    ["nav_contact", "contact.html"]
  ];

  // ---------------------------------------------------------------
  // En-tête / navigation
  // ---------------------------------------------------------------
  function buildHeader() {
    var mount = document.getElementById("site-header");
    if (!mount) return;
    var active = document.body.getAttribute("data-page") || "home";
    var lang = currentLang();

    var links = PAGES.map(function (p) {
      var id = p[0].replace("nav_", "");
      var cls = (id === active) ? ' class="active"' : "";
      return '<li><a href="' + p[1] + '"' + cls + ' data-i18n="' + p[0] + '">' + t(p[0]) + "</a></li>";
    }).join("");

    mount.innerHTML =
      '<div class="construction-banner" data-i18n="site_construction" ' +
        'style="background:#f6c343;color:#3a2f00;text-align:center;' +
        'padding:6px 10px;font-size:clamp(.6rem,2.6vw,.82rem);font-weight:600;' +
        'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' +
        t("site_construction") + "</div>" +
      '<header class="site-header"><nav class="nav">' +
        '<a class="brand" href="index.html">' +
          '<img src="assets/img/logo.jpg" alt="Cercle Philatélique Walferdange">' +
          '<span class="brand-txt"><b>Cercle Philatélique<br>Walferdange</b>' +
          '<span data-i18n="brand_sub">' + t("brand_sub") + "</span></span>" +
        "</a>" +
        '<button class="burger" aria-label="Menu" id="burger">' +
          "<span></span><span></span><span></span></button>" +
        '<ul class="nav-links" id="nav-links">' + links + "</ul>" +
        '<div class="lang">' +
          '<button data-set-lang="fr"' + (lang === "fr" ? ' class="active"' : "") + '>FR</button>' +
          '<button data-set-lang="en"' + (lang === "en" ? ' class="active"' : "") + '>EN</button>' +
        "</div>" +
      "</nav></header>";

    document.getElementById("burger").addEventListener("click", function () {
      document.getElementById("nav-links").classList.toggle("open");
    });
  }

  // ---------------------------------------------------------------
  // Pied de page
  // ---------------------------------------------------------------
  function buildFooter() {
    var mount = document.getElementById("site-footer");
    if (!mount) return;
    var year = new Date().getFullYear();
    var navItems = PAGES.map(function (p) {
      return '<li><a href="' + p[1] + '" data-i18n="' + p[0] + '">' + t(p[0]) + "</a></li>";
    }).join("");

    mount.innerHTML =
      '<footer class="site-footer"><div class="container"><div class="footer-grid">' +
        "<div>" +
          '<img src="assets/img/logo.jpg" alt="CPW"><p style="margin-top:14px" data-i18n="footer_about">' + t("footer_about") + "</p>" +
        "</div>" +
        "<div>" +
          '<h4 data-i18n="footer_nav">' + t("footer_nav") + "</h4>" +
          '<ul style="list-style:none;padding:0;margin:0;line-height:2">' + navItems + "</ul>" +
        "</div>" +
        "<div>" +
          '<h4 data-i18n="footer_contact">' + t("footer_contact") + "</h4>" +
          "<p>" + (INFO.address_fr ? langPick(INFO.address_fr, INFO.address_en) : "") + "<br>" +
          '<a href="mailto:' + cpwEmail() + '">' + cpwEmail() + "</a></p>" +
        "</div>" +
      "</div>" +
      '<div class="footer-bottom">© ' + year + " Cercle Philatélique Walferdange. " +
      '<span data-i18n="footer_rights">' + t("footer_rights") + "</span></div>" +
      "</div></footer>";
  }

  function langPick(fr, en) { return currentLang() === "en" ? (en || fr) : fr; }

  // Reconstitue l'adresse e-mail à partir des deux morceaux (anti-robots).
  function cpwEmail() {
    if (!INFO.email_user || !INFO.email_domain) return INFO.email || "";
    return INFO.email_user + "@" + INFO.email_domain;
  }

  // ---------------------------------------------------------------
  // Application de la langue à toute la page
  // ---------------------------------------------------------------
  function applyLang() {
    var lang = currentLang();
    document.documentElement.setAttribute("lang", lang);

    // Textes fixes marqués data-i18n="clé"
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    // Attributs traduisibles : data-i18n-attr="placeholder:clé"
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        var kv = pair.split(":");
        el.setAttribute(kv[0].trim(), t(kv[1].trim()));
      });
    });
    // Blocs de contenu bilingues : <div data-lang="fr"> / <div data-lang="en">
    document.querySelectorAll("[data-lang]").forEach(function (el) {
      if (el.getAttribute("data-lang") === lang) el.removeAttribute("data-lang-hidden");
      else el.setAttribute("data-lang-hidden", "");
    });
    // Boutons de langue
    document.querySelectorAll("[data-set-lang]").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-set-lang") === lang);
    });
  }

  function setLang(lang) {
    localStorage.setItem("cpw_lang", lang);
    // On reconstruit les parties dynamiques puis on ré-applique la langue.
    buildHeader(); buildFooter();
    renderEvents(); renderReports();
    applyLang();
    bindLangButtons();
  }

  function bindLangButtons() {
    document.querySelectorAll("[data-set-lang]").forEach(function (b) {
      b.onclick = function () { setLang(b.getAttribute("data-set-lang")); };
    });
  }

  // ---------------------------------------------------------------
  // Affichage des ÉVÉNEMENTS
  // ---------------------------------------------------------------
  var DEFAULT_EVENT_IMG = "assets/img/logo-fonde-1970.jpg";

  function eventCard(ev) {
    var lang = currentLang();
    var img = ev.image ? ("images/uploads/" + ev.image) : DEFAULT_EVENT_IMG;
    // Une image portant le même nom qu'un fichier déjà dans assets/img est aussi acceptée
    var IMG_ASSETS = [
      "exposition-flyer-50.png",
      "logo.jpg",
      "logo-fonde-1970.jpg",
      "timbre175.jpg",
      "walferdange-batiment.jpg"
    ];
    if (IMG_ASSETS.indexOf(ev.image) !== -1) {
      img = "assets/img/" + ev.image;
    }
    var tag = ev.upcoming
      ? '<span class="tag" data-i18n="tag_upcoming">' + t("tag_upcoming") + "</span>"
      : '<span class="tag tag--past" data-i18n="tag_past">' + t("tag_past") + "</span>";

    return '<article class="card">' +
      '<div class="card-media"><img src="' + img + '" alt="' + esc(langPick(ev.title_fr, ev.title_en)) + '"></div>' +
      '<div class="card-body">' + tag +
        '<span class="date">' + esc(langPick(ev.date_fr, ev.date_en)) + "</span>" +
        "<h3>" + esc(langPick(ev.title_fr, ev.title_en)) + "</h3>" +
        '<div class="place">' + esc(langPick(ev.place_fr, ev.place_en)) + "</div>" +
        "<p>" + esc(langPick(ev.body_fr, ev.body_en)) + "</p>" +
      "</div></article>";
  }

  function sortedEvents() {
    return (window.CPW_EVENTS || []).slice().sort(function (a, b) {
      return (b.date || "").localeCompare(a.date || "");
    });
  }

  function renderEvents() {
    var all = sortedEvents();

    // Page d'accueil : les événements « highlight »
    var home = document.getElementById("home-events");
    if (home) {
      var feat = all.filter(function (e) { return e.highlight; }).slice(0, 3);
      if (!feat.length) feat = all.slice(0, 3);
      home.innerHTML = feat.map(eventCard).join("");
    }

    // Page Événements : à venir + passés
    var up = document.getElementById("events-upcoming");
    var past = document.getElementById("events-past");
    if (up) {
      var upcoming = all.filter(function (e) { return e.upcoming; })
                        .sort(function (a, b) { return (a.date || "").localeCompare(b.date || ""); });
      up.innerHTML = upcoming.length
        ? upcoming.map(eventCard).join("")
        : '<p class="lead" data-i18n="no_upcoming">' + t("no_upcoming") + "</p>";
    }
    if (past) {
      var pastEv = all.filter(function (e) { return !e.upcoming; });
      past.innerHTML = pastEv.map(eventCard).join("");
    }
  }

  // ---------------------------------------------------------------
  // Affichage des RAPPORTS
  // ---------------------------------------------------------------
  function renderReports() {
    var mount = document.getElementById("reports-list");
    if (!mount) return;
    var list = (window.CPW_REPORTS || []).slice().sort(function (a, b) { return b.year - a.year; });
    if (!list.length) { mount.innerHTML = ""; return; }

    mount.innerHTML = list.map(function (r) {
      var desc = langPick(r.desc_fr, r.desc_en);
      return '<li class="report">' +
        '<div class="yr">' + r.year + "</div>" +
        '<div class="meta"><b>' + esc(langPick(r.title_fr, r.title_en)) + "</b>" +
          (desc ? "<small>" + esc(desc) + "</small>" : "") + "</div>" +
        '<a class="btn btn--or dl" href="' + r.file + '" target="_blank" rel="noopener" data-i18n="download">' +
          t("download") + "</a>" +
      "</li>";
    }).join("");
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // ---------------------------------------------------------------
  // Démarrage
  // ---------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", function () {
    buildHeader();
    buildFooter();
    renderEvents();
    renderReports();
    applyLang();
    bindLangButtons();
  });
})();
