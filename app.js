const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-menu li");

navToggle.addEventListener("click", openNavbar);

function openNavbar() {
    navMenu.classList.toggle('open');
    navToggle.classList.toggle('toggle');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
};

links.forEach(n => n.addEventListener("click", closeNavbar));

function closeNavbar() {
    navMenu.classList.remove('open');
    navToggle.classList.remove('toggle');
};