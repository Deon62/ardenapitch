(function () {
  var slides = Array.prototype.slice.call(document.querySelectorAll(".deck__slides .slide"));
  var idx = 0;

  function setSlide(next) {
    if (next < 0 || next >= slides.length) return;
    idx = next;
    slides.forEach(function (el, i) {
      var active = i === idx;
      el.classList.toggle("is-active", active);
      el.setAttribute("aria-hidden", active ? "false" : "true");
    });
  }

  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-deck-next]")) setSlide(idx + 1);
    if (e.target.closest("[data-deck-prev]")) setSlide(idx - 1);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" || e.key === "PageDown") setSlide(idx + 1);
    if (e.key === "ArrowLeft" || e.key === "PageUp") setSlide(idx - 1);
  });
})();
