// ===== 1. Invite link copy =====
(function () {
  var btn = document.getElementById("copyBtn");
  var feedback = document.getElementById("copyFeedback");
  if (!btn || !feedback) return;
  var url = "https://discord.gg/GKkW4wCAVp";
  function showMsg(msg) {
    feedback.textContent = msg;
    window.setTimeout(function () { feedback.textContent = ""; }, 3200);
  }
  function fallback() {
    var ta = document.createElement("textarea");
    ta.value = url;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      showMsg("招待リンクをコピーしました");
    } catch (e) {
      showMsg("コピーできませんでした。リンクを長押し／右クリックでコピーしてください");
    }
    document.body.removeChild(ta);
  }
  btn.addEventListener("click", function () {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () { showMsg("招待リンクをコピーしました"); }, fallback);
    } else {
      fallback();
    }
  });
})();

// ===== 2. Scroll reveal =====
(function () {
  var targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !targets.length) {
    targets.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(function (el) { io.observe(el); });
})();

// ===== 3. Footer year =====
(function () {
  var el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
})();
