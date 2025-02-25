var mobileNavContainer = document.querySelector('#mobileNavContainer');
var mobileNavOpen = mobileNavContainer.querySelector('.mobile__nav-open');
var mobileNavWrapper = mobileNavContainer.querySelector('.mobile__nav-wrapper');
var mobileNavClose = mobileNavWrapper.querySelector('.mobile__nav-close');

mobileNavOpen.addEventListener('click', () => {
  mobileNavWrapper.classList.add('visible'); // Добавляем класс для анимации
});

mobileNavClose.addEventListener('click', () => {
  mobileNavWrapper.classList.remove('visible'); // Убираем класс для анимации
});