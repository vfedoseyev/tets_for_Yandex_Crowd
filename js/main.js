document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.tournament__participant');
    const totalSlides = slides.length;
    let slidesPerView = 1;
    let currentSlide = 0;

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = (index >= currentSlide && index < currentSlide + slidesPerView) ? 'flex' : 'none';
        });

        const navNumber = document.querySelector('.tournament__nav-number-slide span:first-child');
        const totalVisibleSlides = totalSlides - (slidesPerView - 1);
        navNumber.textContent = `${currentSlide + 1} / ${totalVisibleSlides}`; // Использование шаблонных строк
        updateNav();
    }

    function updateNav() {
        const prevNav = document.querySelector('.tournament__nav.prev');
        const nextNav = document.querySelector('.tournament__nav.next');

        prevNav.classList.toggle('disabled', currentSlide === 0);
        nextNav.classList.toggle('disabled', currentSlide + slidesPerView >= totalSlides);
    }

    function goToPrevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            showSlides();
        }
    }

    function goToNextSlide() {
        if (currentSlide + slidesPerView < totalSlides) {
            currentSlide++;
            showSlides();
        }
    }

    const prevNav = document.querySelector('.tournament__nav.prev');
    const nextNav = document.querySelector('.tournament__nav.next');

    prevNav.addEventListener('click', goToPrevSlide);
    nextNav.addEventListener('click', goToNextSlide);

    window.addEventListener('resize', () => {
        updateSlidesPerView();
        showSlides();
    });

    function updateSlidesPerView() {
        if (totalSlides === 1 || totalSlides === 2) {
            slidesPerView = 1;
        } else if (window.innerWidth >= 1024) {
            slidesPerView = 3;
        } else if (window.innerWidth >= 768) {
            slidesPerView = 2;
        } else {
            slidesPerView = 1;
        }
    }

    updateSlidesPerView();
    showSlides();
    setInterval(goToNextSlide, 4000);
});
