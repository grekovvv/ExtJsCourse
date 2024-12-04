function showSlide(index) {
    document.querySelectorAll('.slide').forEach((slide, i) => {
        slide.classList.toggle('active', i === index); // Показываем только выбранный слайд
    });
}

// Изначально показываем первый слайд
showSlide(0);