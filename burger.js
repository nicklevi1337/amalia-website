const burgerMenu = document.getElementById('burger-menu');
const menu = document.getElementById('menu');

// Обработчик клика по бургер-меню
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active'); // Меняем состояние бургер-иконки
  menu.classList.toggle('show');        // Показать/скрыть меню
});