const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("header_shrink", window.scrollY > 100);
});
