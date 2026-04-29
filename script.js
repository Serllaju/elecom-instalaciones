const whatsappNumber = "34650598141";
const whatsappText = "Hola ELECOM, me gustaría solicitar información para un trabajo en Mallorca.";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

document.querySelectorAll(".js-whatsapp").forEach((link) => {
  link.setAttribute("href", whatsappUrl);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener");
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});
