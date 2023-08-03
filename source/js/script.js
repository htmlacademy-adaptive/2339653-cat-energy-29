let burgerButton = document.querySelector('.burger-button');
let mainNav = document.querySelector('.main-nav');


burgerButton.onclick = function() {
  burgerButton.classList.toggle('burger-button--close')
  mainNav.classList.toggle('main-nav--show')
}
console.log(mainNav)
