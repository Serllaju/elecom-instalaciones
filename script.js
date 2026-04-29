const whatsappNumber = "34650598141";

const messages = {
  contact: "Hola ELECOM, me gustaría solicitar información sobre vuestros servicios en Mallorca.",
  budget: "Hola ELECOM, quiero solicitar un presupuesto sin compromiso."
};

function whatsappUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll(".js-whatsapp").forEach((link) => {
  link.setAttribute("href", whatsappUrl(messages.contact));
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener");
});

document.querySelectorAll(".js-budget").forEach((link) => {
  link.setAttribute("href", whatsappUrl(messages.budget));
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
