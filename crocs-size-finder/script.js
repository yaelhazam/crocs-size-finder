(function () {
  /* ---------- Catalog snapshot, weshoes.co.il, 2026-11-05 ---------- */
  var CHART = [
    ["33-34",20,"M2 W4"],["34-35",21,"M3 W5"],["36-37",22,"M4 W6"],["37-38",23,"M5 W7"],
    ["38-39",24,"M6 W8"],["39-40",25,"M7 W9"],["41-42",26,"M8 W10"],["42-43",27,"M9 W11"],
    ["43-44",28,"M10 W12"],["45-46",29,"M11 W13"],["46-47",30,"M12 W14"],["48-49",31,"M13 W15"],
    ["49-50",32,"M14 W16"],["50-51",33,"M15 W17"],["51-52",34,"M16 W18"],["52-53",35,"M17 W19"]
  ];
  var MODELS = [
    { name:"Crocs Classic", price:229.90, min:"36-37", max:"52-53", fit:"roomy", known:true, uses:["everyday","summer"],
      url:"https://weshoes.co.il/products/crocs-classic-%D7%A0%D7%A2%D7%9C%D7%99-%D7%A7%D7%A8%D7%95%D7%A7%D7%A1-%D7%A7%D7%9C%D7%90%D7%A1%D7%99%D7%99%D7%9D",
      img:"https://weshoes.co.il/cdn/shop/files/10001-001-1_947a4129-42cd-4aff-97d7-1fc2e0443002.JPG?v=1787843746",
      stock:["37-38","39-40","41-42","42-43","43-44","45-46","46-47"] },
    { name:"Classic Lined Clog", price:279.90, min:"36-37", max:"48-49", fit:"roomy", lined:true, known:true, uses:["warm"],
      url:"https://weshoes.co.il/products/crocs-classic-lined-clog-kpkpym-prvvtyym-qrvqs",
      img:"https://weshoes.co.il/cdn/shop/files/203591-060-1_0fa6cec0-a714-43c3-a99a-cbc736a32c1e.JPG?v=1747894530" },
    { name:"Classic Crafted Clog", price:299.90, min:"36-37", max:"48-49", fit:"roomy", uses:["everyday"],
      url:"https://weshoes.co.il/products/crocs-classic-crafted-clog-%D7%9B%D7%A4%D7%9B%D7%A4%D7%99-%D7%A7%D7%9C%D7%95%D7%92-%D7%A7%D7%A8%D7%95%D7%A7%D7%A1-%D7%A7%D7%A8%D7%90%D7%A4%D7%98%D7%93",
      img:"https://weshoes.co.il/cdn/shop/files/211354-206-1.jpg?v=1790691444",
      stock:["36-37","37-38","38-39","39-40","41-42","42-43","43-44","45-46","46-47"] },
    { name:"Classic Crafted Vegan Suede", price:329.90, min:"36-37", max:"48-49", fit:"roomy", uses:["everyday","height"],
      url:"https://weshoes.co.il/products/211930-001",
      img:"https://weshoes.co.il/cdn/shop/files/211930-001-1.jpg?v=1769426130" },
    { name:"Classic Crush Clog", price:349.90, min:"36-37", max:"42-43", fit:"relaxed", uses:["height"],
      url:"https://weshoes.co.il/products/crocs-classic-crush-clog-%D7%9B%D7%A4%D7%9B%D7%A4%D7%99-%D7%A4%D7%9C%D7%98%D7%A4%D7%95%D7%A8%D7%9E%D7%94-%D7%A7%D7%A8%D7%95%D7%A7%D7%A1-%D7%A7%D7%A8%D7%90%D7%A9-%D7%9C%D7%A0%D7%A9%D7%99%D7%9D-1",
      img:"https://weshoes.co.il/cdn/shop/files/207521-6UR-1.jpg?v=1779790528",
      stock:["36-37","37-38","38-39","39-40"] },
    { name:"Classic Bae Clog", price:349.90, min:"33-34", max:"41-42", fit:"relaxed", uses:["height"],
      url:"https://weshoes.co.il/products/crocs-classic-bae-clog-%D7%9B%D7%A4%D7%9B%D7%A4%D7%99-%D7%A4%D7%9C%D7%98%D7%A4%D7%95%D7%A8%D7%9E%D7%94-%D7%A7%D7%A8%D7%95%D7%A7%D7%A1-%D7%9C%D7%A0%D7%A9%D7%99%D7%9D-%D7%91%D7%A6%D7%91%D7%A2-%D7%A9%D7%97%D7%95%D7%A8",
      img:"https://weshoes.co.il/cdn/shop/files/206302-001-1.jpg?v=1752074127",
      stock:["34-35","36-37","37-38","38-39","39-40","41-42"] },
    { name:"Dylan Notched Clog", price:299.90, min:"34-35", max:"42-43", fit:"standard", uses:["height","everyday"],
      url:"https://weshoes.co.il/products/214273-001",
      img:"https://weshoes.co.il/cdn/shop/files/214273-001-1.jpg?v=1788358558",
      stock:["34-35","36-37","37-38","38-39","39-40","42-43"] },
    { name:"Echo II", price:349.90, min:"36-37", max:"48-49", fit:"relaxed", uses:["walk"],
      url:"https://weshoes.co.il/products/212810-2qd",
      img:"https://weshoes.co.il/cdn/shop/files/212810-2QD-1.jpg?v=1789395508",
      stock:["38-39","39-40","41-42","42-43","43-44","48-49"] },
    { name:"InMotion Clog", price:339.90, min:"36-37", max:"48-49", fit:"relaxed", uses:["walk"],
      url:"https://weshoes.co.il/products/209964-410",
      img:"https://weshoes.co.il/cdn/shop/files/209964-410-1.jpg?v=1791281740",
      stock:["36-37","37-38","38-39","39-40","41-42","42-43","43-44","45-46"] },
    { name:"Crocband", price:269.90, min:"36-37", max:"48-49", fit:"relaxed", uses:["everyday","walk","summer"],
      url:"https://weshoes.co.il/products/crocs-crocband-n-ly-qrvqs-qrvqbnd-2",
      img:"https://weshoes.co.il/cdn/shop/files/11016-410-1_d6f1c665-0dc4-4831-9a96-4a54438ba4ad.JPG?v=1791468949",
      stock:["37-38","38-39","39-40","41-42","42-43","43-44","45-46","46-47"] },
    { name:"Crocband Flip", price:199.90, min:"36-37", max:"41-42", fit:"standard", known:true, uses:["summer"],
      url:"https://weshoes.co.il/products/crocs-crocband-flip-%D7%A0%D7%A2%D7%9C%D7%99-%D7%90%D7%A6%D7%91%D7%A2-%D7%A7%D7%A8%D7%95%D7%A7%D7%A1" },
    { name:"Classic Cozzzy Slipper", price:249.90, min:"36-37", max:"46-47", fit:"relaxed", uses:["warm"],
      url:"https://weshoes.co.il/products/209386-001" }
  ];
  /* Demo only: Dizengoff Center and Eilat are confirmed stores, the other cities are examples, and all stock below is simulated. */
  var BRANCHES = [
    { he:"דיזנגוף סנטר, תל אביב", en:"Dizengoff Center, Tel Aviv" },
    { he:"ירושלים", en:"Jerusalem" }, { he:"חיפה", en:"Haifa" },
    { he:"ראשון לציון", en:"Rishon LeZion" }, { he:"באר שבע", en:"Beer Sheva" }, { he:"אילת", en:"Eilat" }
  ];
  var T = {
    he: {
      roomy:"מרווחת", relaxed:"נינוחה", standard:"צמודה", est:"משוער",
      exact:"האורך תואם בדיוק למידה בטבלה.",
      down_roomy:"בין שתי מידות. הדגם מרווח, אז יורדים לקטנה.",
      down_secure:"בין שתי מידות. כף רגל צרה או העדפה לישיבה צמודה, אז יורדים לקטנה.",
      up_lined:"בין שתי מידות. הבטנה תופסת מקום, אז עולים לגדולה.",
      up_wide:"בין שתי מידות. כף רגל רחבה, אז עולים לגדולה.",
      up_room:"בין שתי מידות. ביקשת מקום, אז עולים לגדולה.",
      up_fit:"בין שתי מידות. הדגם פחות מרווח, אז עולים לגדולה.",
      top:"הבחירה הראשונה:", fitw:"התאמה",
      inStock:"בצבע שבעמוד המוצר, במלאי באתר נכון ל-5.11.", outStock:"בצבע שבעמוד המוצר, לא במלאי באתר נכון ל-5.11.",
      brOpen:"בדיקה בסניפים", brClose:"סגירת הסניפים",
      brDemo:"הדגמה בלבד: המלאי כאן מומצא, וחלק מהערים הן דוגמה. בכלי האמיתי זה יתחבר לבדיקת המלאי בסניפים שכבר קיימת ב-WeShoes.",
      brIn:"במלאי", brLast:"זוג אחרון", brOut:"אין במלאי",
      empty:"אין דגם למבוגרים במידה הזו בנתונים של האב-טיפוס. למידות קטנות יותר צריך להוסיף את טבלת הילדים.",
      hidden:function(n){ return n + " דגמים נוספים לא נמכרים במידה הזו, אז הכלי לא מציע אותם."; },
      ok:function(n){ return "JSON תקין · " + n + " ערכים"; },
      bad:"ה-JSON לא תקין. בדקו פסיקים ומרכאות. הציור נשאר מהתשובה האחרונה.",
      copied:"הועתק", copyFail:"לא הצלחתי להעתיק. אפשר לסמן את הטקסט ידנית."
    },
    en: {
      roomy:"roomy", relaxed:"relaxed", standard:"standard", est:"estimated",
      exact:"The length matches this size on the chart exactly.",
      down_roomy:"Between two sizes. This model is roomy, so go down.",
      down_secure:"Between two sizes. Narrow foot or a secure-fit preference, so go down.",
      up_lined:"Between two sizes. The lining takes up space, so go up.",
      up_wide:"Between two sizes. Wide foot, so go up.",
      up_room:"Between two sizes. You asked for room, so go up.",
      up_fit:"Between two sizes. This model is less roomy, so go up.",
      top:"First pick:", fitw:"fit",
      inStock:"In the color on the product page, in stock online as of Nov 5.", outStock:"In the color on the product page, out of stock online as of Nov 5.",
      brOpen:"Check stores", brClose:"Hide stores",
      brDemo:"Demo only: this stock is made up, and some cities are examples. The real tool would connect to the store stock check that already exists on WeShoes.",
      brIn:"In stock", brLast:"Last pair", brOut:"Out of stock",
      empty:"No adult model in this size in the prototype’s data. Smaller sizes need the kids’ chart.",
      hidden:function(n){ return n + " more models don’t come in this size, so the tool doesn’t offer them."; },
      ok:function(n){ return "Valid JSON · " + n + " values"; },
      bad:"Invalid JSON. Check commas and quotes. The painting stays from the last valid answer.",
      copied:"Copied", copyFail:"Couldn’t copy. You can select the text by hand."
    }
  };

  /* ---------- Fit logic ---------- */
  function chartIndexForCm(cm) { return Math.min(CHART.length - 1, Math.max(0, Math.round(cm) - 20)); }
  function idxOf(eu) { for (var i = 0; i < CHART.length; i++) if (CHART[i][0] === eu) return i; return -1; }
  function sizeFor(m, q) {
    var lo = chartIndexForCm(Math.floor(q.cm)), hi = chartIndexForCm(Math.ceil(q.cm));
    if (lo === hi) return { i: lo, rule: "exact" };
    if (m.lined) return { i: hi, rule: "up_lined" };
    if (q.width === "wide") return { i: hi, rule: "up_wide" };
    if (q.pref === "room") return { i: hi, rule: "up_room" };
    if (q.width === "narrow" || q.pref === "snug") return { i: lo, rule: "down_secure" };
    if (m.fit === "roomy") return { i: lo, rule: "down_roomy" };
    return { i: hi, rule: "up_fit" };
  }
  function score(m, q) {
    var s = m.uses.indexOf(q.use) >= 0 ? 4 - m.uses.indexOf(q.use) * .5 : 0;
    if (q.width === "wide") s += { roomy: 2, relaxed: 1, standard: -1 }[m.fit];
    if (q.width === "narrow") s += { roomy: -1, relaxed: 0, standard: 2 }[m.fit];
    if (q.pref === "snug") s += { roomy: -1, relaxed: 0, standard: 1 }[m.fit];
    if (q.pref === "room") s += { roomy: 1, relaxed: .5, standard: -1 }[m.fit];
    if (m.known) s += .25;
    return s;
  }
  function recommend(q) {
    var inRange = [], hidden = 0;
    MODELS.forEach(function (m) {
      var r = sizeFor(m, q);
      if (r.i >= idxOf(m.min) && r.i <= idxOf(m.max)) inRange.push({ m: m, i: r.i, rule: r.rule, s: score(m, q) });
      else hidden++;
    });
    inRange.sort(function (a, b) { return b.s - a.s || a.m.price - b.m.price; });
    return { picks: inRange.slice(0, 3), hidden: hidden };
  }

  /* ---------- Finder UI ---------- */
  var page = document.getElementById("page");
  var resultEl = document.getElementById("result");
  var footEl = document.getElementById("foot");
  var cmEl = document.getElementById("cm");
  var jsonEl = document.getElementById("json");
  var lang = "he", lastSize = "", openBranch = "Crocs Classic";

  function radio(n) { return document.querySelector('input[name="' + n + '"]:checked').value; }
  function query() { return { cm: parseFloat(footEl.value), width: radio("width"), pref: radio("pref"), use: radio("use") }; }

  function renderFinder(animate) {
    var q = query(), t = T[lang], res = recommend(q);
    cmEl.textContent = q.cm.toFixed(1) + " cm";
    footEl.style.setProperty("--pct", ((q.cm - 20) / 15 * 100) + "%");
    if (!res.picks.length) {
      resultEl.innerHTML = '<p class="empty">' + t.empty + "</p>";
      setPayload({ foot_cm: q.cm, width: q.width, picks: [] }, animate);
      return;
    }
    var first = res.picks[0], c = CHART[first.i];
    var pop = animate && c[0] !== lastSize ? " pop" : "";
    lastSize = c[0];
    var names = res.picks.map(function (p) { return p.m.name; });
    if (openBranch !== "" && names.indexOf(openBranch) < 0) openBranch = first.m.name;
    var html = '<div class="head"><div class="big"><span class="size n' + pop + '">' + c[0] + '</span><span class="us n">' + c[2] + " · " + c[1] + " cm</span></div>" + shoe(first.m, "shoe-l") + "</div>";
    html += '<p class="rule"><b style="font-weight:600">' + t.top + "</b> " + first.m.name + ". " + t[first.rule] + "</p>";
    html += '<ul class="picks">';
    res.picks.forEach(function (p) {
      var eu = CHART[p.i][0], fit = t[p.m.fit] + (p.m.known ? "" : " · " + t.est), open = openBranch === p.m.name;
      var title = p.m.url ? '<a href="' + p.m.url + '" target="_blank" rel="noopener">' + p.m.name + "</a>" : p.m.name;
      html += '<li class="pick">' + shoe(p.m, "shoe-s") + '<b>' + title + '</b><span class="sz n">' + eu + "</span>";
      html += '<span class="meta">' + t.fitw + ": " + fit + '</span><span class="price n">₪' + p.m.price.toFixed(2) + "</span>";
      if (p.m.stock) html += '<span class="stock' + (p.m.stock.indexOf(eu) >= 0 ? "" : " out") + '">' + (p.m.stock.indexOf(eu) >= 0 ? t.inStock : t.outStock) + "</span>";
      html += '<button class="br-btn" type="button" aria-expanded="' + open + '" data-br="' + p.m.name + '">' + (open ? t.brClose : t.brOpen) + "</button>";
      if (open) html += branchList(p.m, eu, t);
      html += "</li>";
    });
    html += "</ul>";
    if (res.hidden) html += '<p class="small">' + t.hidden(res.hidden) + "</p>";
    resultEl.innerHTML = html;
    wireImages();
    setPayload({
      foot_cm: q.cm, width: q.width, use: q.use,
      size_eu: c[0], size_us: c[2], model: first.m.name, fit: first.m.fit,
      fit_verified: !!first.m.known, rule: first.rule, price_ils: first.m.price,
      also: res.picks.slice(1).map(function (p) { return p.m.name; })
    }, animate);
  }
  /* The same answer as an API would return it */
  function setPayload(obj) { jsonEl.textContent = JSON.stringify(obj, null, 2); }

  var failedImg = {};
  function shoe(m, cls) {
    var ph = '<span class="ph">' + m.name.replace(/^(Crocs|Classic) /, "") + "</span>";
    if (!m.img || failedImg[m.img]) return '<div class="shoe ' + cls + '">' + ph + "</div>";
    return '<div class="shoe ' + cls + '"><img src="' + m.img + '" alt="' + m.name + '" referrerpolicy="no-referrer">' + ph + "</div>";
  }
  function wireImages() {
    Array.prototype.forEach.call(resultEl.querySelectorAll(".shoe img"), function (img) {
      var fail = function () { failedImg[img.getAttribute("src")] = true; if (img.parentNode) img.parentNode.removeChild(img); };
      if (img.complete && !img.naturalWidth) fail();
      else {
        img.addEventListener("error", fail);
        img.addEventListener("load", function () { img.parentNode.classList.add("loaded"); });
        if (img.complete) img.parentNode.classList.add("loaded");
      }
    });
  }
  function branchList(m, eu, t) {
    var html = '<div class="branches"><p class="demo">' + t.brDemo + '</p><ul>';
    BRANCHES.forEach(function (b) {
      var h = fnv(m.name + eu + b.en) % 10;
      var st = h < 2 ? ["out", t.brOut] : h < 4 ? ["last", t.brLast] : ["in", t.brIn];
      html += '<li><span>' + b[lang] + '</span><span class="st ' + st[0] + '">' + st[1] + "</span></li>";
    });
    return html + "</ul></div>";
  }
  resultEl.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-br]") : null;
    if (!b) return;
    openBranch = openBranch === b.dataset.br ? "" : b.dataset.br;
    renderFinder(false);
  });

  function fnv(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }

  /* ---------- Language ---------- */
  function setLang(next, keepHash) {
    lang = next;
    page.setAttribute("data-lang", next);
    page.setAttribute("lang", next);
    page.setAttribute("dir", next === "he" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", next);
    renderFinder(false);
    if (!keepHash) { try { location.hash = next === "en" ? "en" : ""; } catch (e) {} }
  }
  document.getElementById("lang").addEventListener("click", function () { setLang(lang === "he" ? "en" : "he"); });
  window.addEventListener("hashchange", function () {
    var want = location.hash === "#en" ? "en" : "he";
    if (want !== lang) setLang(want, true);
  });

  /* ---------- Wiring ---------- */
  document.getElementById("form").addEventListener("input", function () { renderFinder(true); });
  setLang(location.hash === "#en" ? "en" : "he", true);
})();
