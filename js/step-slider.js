document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.step__item-adaptiv-slide');
    const prevButton = document.querySelector('.step__items-adaptiv-nav .prev');
    const nextButton = document.querySelector('.step__items-adaptiv-nav .next');
    const pagination = document.querySelectorAll('.step__items-adaptiv-nav .pagination span');

    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'flex' : 'none';
        });
    };

    const updatePagination = (index) => {
        pagination.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    };

    const updateButtons = () => {
        prevButton.classList.toggle('disabled', currentSlide === 0);
        nextButton.classList.toggle('disabled', currentSlide === slides.length - 1);
    };

    const goToSlide = (index) => {
        if (index >= 0 && index < slides.length) {
            currentSlide = index;
            showSlide(currentSlide);
            updatePagination(currentSlide);
            updateButtons();
        }
    };

    prevButton.addEventListener('click', () => {
        if (!prevButton.classList.contains('disabled')) {
            goToSlide(currentSlide - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        if (!nextButton.classList.contains('disabled')) {
            goToSlide(currentSlide + 1);
        }
    });

    pagination.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    // Начальная инициализация
    showSlide(currentSlide);
    updatePagination(currentSlide);
    updateButtons();
});
