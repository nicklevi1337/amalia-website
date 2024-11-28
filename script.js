document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".works-gallery img");
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const popupDescription = document.getElementById("popup-description");
    const closePopupBtn = document.querySelector(".close-popup");
    const prevBtn = document.querySelector(".prev-popup");
    const nextBtn = document.querySelector(".next-popup");
  
    let currentIndex = 0;
  
    // Открытие попапа
    galleryImages.forEach((img, index) => {
      img.addEventListener("click", () => {
        currentIndex = index;
        showPopup(currentIndex);
      });
    });
  
    // Показ попапа
    function showPopup(index) {
      const img = galleryImages[index];
      popup.style.display = "flex";
      popupImg.src = img.src;
      popupDescription.textContent = img.dataset.description;
    }
  
    // Закрытие попапа
    closePopupBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
  
    // Переключение на предыдущую картину
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      showPopup(currentIndex);
    });
  
    // Переключение на следующую картину
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      showPopup(currentIndex);
    });
  
    // Листание стрелками клавиатуры
    document.addEventListener("keydown", (e) => {
      if (popup.style.display === "flex") {
        if (e.key === "ArrowLeft") {
          currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
          showPopup(currentIndex);
        } else if (e.key === "ArrowRight") {
          currentIndex = (currentIndex + 1) % galleryImages.length;
          showPopup(currentIndex);
        } else if (e.key === "Escape") {
          popup.style.display = "none";
        }
      }
    });
  });
  


