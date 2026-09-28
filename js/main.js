// Mobile nav toggle
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const open = primaryNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

// Generic accordion (used by Leadership sections and Agenda deliverable notes)
document.querySelectorAll(".accordion-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const body = document.getElementById(btn.getAttribute("aria-controls"));
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", expanded ? "false" : "true");
    if (body) body.hidden = expanded;
  });
});

// Agenda page: scroll-spy for the sticky agenda index
const agendaLinks = document.querySelectorAll(".agenda-index a");
const agendaSections = document.querySelectorAll(".agenda-section");
if (agendaLinks.length && agendaSections.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        agendaLinks.forEach((a) => a.classList.remove("active"));
        const match = document.querySelector(`.agenda-index a[href="#${entry.target.id}"]`);
        if (match) match.classList.add("active");
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );
  agendaSections.forEach((s) => observer.observe(s));
}
