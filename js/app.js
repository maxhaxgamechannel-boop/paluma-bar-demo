/* PALUMA BAR – DEMO-Entwurf. Einziges Skript: mobiles Menü.
   Ohne JavaScript bleibt die Navigation einfach sichtbar (Klasse no-js). */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");
  var desktop = window.matchMedia("(min-width: 960px)");

  function setOpen(open) {
    nav.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.querySelector(".burger-lbl").textContent = open ? "Schließen" : "Menü";
    document.body.classList.toggle("lock", open);
  }

  burger.addEventListener("click", function () {
    setOpen(!nav.classList.contains("open"));
  });

  // Nach Klick auf einen Menüpunkt schließen
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a") && !desktop.matches) setOpen(false);
  });

  // Escape schließt das Menü und gibt den Fokus an den Button zurück
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      setOpen(false);
      burger.focus();
    }
  });

  desktop.addEventListener("change", function () { setOpen(false); });
})();
