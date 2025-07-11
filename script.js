document.addEventListener('DOMContentLoaded', function() {
    // Слайдер
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = setInterval(nextSlide, 5000);
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Кнопка выхода
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            alert('Вы вышли из системы');
            // window.location.href = '/logout'; // Раскомментировать для реального использования
        });
    }
    
    // Ленивая загрузка изображений
    if ('loading' in HTMLImageElement.prototype) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    }
});