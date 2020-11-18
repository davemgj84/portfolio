const closeNav = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.classList.remove("toggle");
  nav.classList.remove("nav-active");
  navLinks.forEach((link) => {
    link.style.animation = "";
  });
};

export default closeNav;
