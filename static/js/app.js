document.addEventListener("DOMContentLoaded", () => {
  const vitrine = document.querySelector(".vitrine");
  const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (vitrine && !reduzir) {
    let atual = 0;
    setInterval(() => {
      const slides = vitrine.querySelectorAll(".slide");
      if (slides.length < 2) return;
      atual = (atual + 1) % slides.length;
      vitrine.scrollTo({ left: slides[atual].offsetLeft, behavior: "smooth" });
    }, 5000);
  }
  document.querySelectorAll("form[data-confirma]").forEach((form) => {
    form.addEventListener("submit", (evento) => {
      if (!window.confirm(form.dataset.confirma)) evento.preventDefault();
    });
  });
});
