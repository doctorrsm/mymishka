// const noJsMap = document.querySelector('.contacts__map');
//noJsMap.classList.remove('contacts__map--no-js');
const noJsClass = document.querySelector('.navbar__container');
noJsClass.classList.remove('navbar__container--no-js');
const navbarContainer = document.querySelector('.navbar__container');
const mainNav = document.querySelector('.main-nav');
const toogleButton = document.querySelector('.navbar__close-button');
const linkswrapper = document.querySelector('.navbar__links-wrapper');
toogleButton.onclick = function() {
  navbarContainer.classList.toggle('navbar__container--visible');
  //mainNav.classList.toggle('main-nav--visible');
  toogleButton.classList.toggle('navbar__close-button--active');
  //linkswrapper.classList.toggle('navbar__links-wrapper--visible');
};

/* slider*/
let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
  showSlides(slideIndex += 1);
}

function previousSlide() {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("reviews__item");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }


  for (let slide of slides) {
    slide.style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
