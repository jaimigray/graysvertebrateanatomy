// Mobile menu
(function () {
  var btn = document.querySelector(".menu-toggle"), nav = document.getElementById("site-nav");
  if (btn && nav) btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();

// Email links: the address is assembled here so it never appears in the page source,
// which keeps it away from bots that harvest email addresses.
(function () {
  document.querySelectorAll(".js-email").forEach(function (a) {
    var addr = a.getAttribute("data-u") + "@" + a.getAttribute("data-d");
    a.setAttribute("href", "mailto:" + addr);
    if (!a.hasAttribute("data-keep-text")) a.textContent = addr;
  });
})();
