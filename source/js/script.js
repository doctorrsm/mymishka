const noJsMap = document.querySelector('.contacts__map');
noJsMap.classList.remove('contacts__map--no-js');
const noJsClass = document.querySelector('.navbar');
noJsClass.classList.remove('navbar--no-js');
const mainNav = document.querySelector('.main-nav');
const toogleButton = document.querySelector('.navbar__close-button');
const linkswrapper = document.querySelector('.navbar__links-wrapper');
toogleButton.onclick = function() {
  mainNav.classList.toggle('main-nav--visible');
  toogleButton.classList.toggle('navbar__close-button--active');
  linkswrapper.classList.toggle('navbar__links-wrapper--visible');
};
