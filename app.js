window.onscroll = () => {
  myFunction();
};

const header = document.querySelector("#header");
const intro = document.querySelector("#intro");
const burger = document.querySelector("#navBurger");
const nav = document.querySelector("#nav");
const navLink = document.querySelectorAll("#navLink");
const screenWidth = document.documentElement.clientWidth;

function myFunction() {
  let hight = intro.clientHeight;
  if (window.pageYOffset > hight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}

function myNav() {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}

if (screenWidth < 991) {
  burger.addEventListener("click", myNav);
  navLink.forEach((elem) => elem.addEventListener("click", myNav));
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("sliderShow");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
