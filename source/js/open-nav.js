  // Открытие/закрытие меню навигации

export let openNav = () => {

  let burgerButton = document.querySelector('.burger-button');
  let mainNav = document.querySelector('.main-nav');
  let noJs = document.querySelector('.main-nav--no-js');

  burgerButton.onclick = function () {
    burgerButton.classList.toggle('burger-button--close')
    mainNav.classList.toggle('main-nav--show')
    mainNav.classList.remove('main-nav--no-js')
  }
}
