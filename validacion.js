/* icon navbar */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".menu__nav");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* Scroll de secciones */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /* Navbar active*/
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /* Remove icon navbar */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/* Typed JS */
consttyped = new Typed('.multiple-text', {
    strings: ['Desarrollo Front End.', 'Desarrollo WordPress.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  /* Scroll Reveal */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
  });
  
  ScrollReveal().reveal('.title__div, .banner__text, .heading, .title__container p, .about__container, .title__container h1, .about__img img, .banner', { origin: 'top' });
  ScrollReveal().reveal('.title__profile, .experiencie__box, .contact form, .skills__box, .hobbies__box, .academic__courses, .academic__courses__box', { origin: 'bottom' });

