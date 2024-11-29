const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');
const popupMaterial = document.getElementById('popup-material');

// Функция для открытия попапа
document.querySelectorAll('.works-gallery img').forEach((img) => {
  img.addEventListener('click', (e) => {
    const description = e.target.getAttribute('data-description');

    // Разбиваем описание на строки (название и материал/размер)
    const [title, material] = description.split('\n');

    // Устанавливаем данные в попап
    popupImg.src = e.target.src;
    popupTitle.textContent = title.trim();
    popupMaterial.textContent = material.trim();

    popup.style.display = 'flex';
  });
});

// Закрытие попапа при клике по темной области или по кнопке закрытия
popup.addEventListener('click', (e) => {
  // Если клик был не по содержимому попапа (не по .popup-content)
  if (!e.target.closest('.popup-content')) {
    popup.style.display = 'none';
  }
});

// Закрытие попапа по кнопке
document.querySelector('.close-popup').addEventListener('click', () => {
  popup.style.display = 'none';
});
