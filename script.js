    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
    });const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function updateSlider() {
    slides.forEach((slide, index) => {
        // Remove all classes first
        slide.classList.remove('active', 'prev', 'next', 'hidden');

        if (index === currentIndex) {
            slide.classList.add('active');
        } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
            slide.classList.add('prev');
        } else if (index === (currentIndex + 1) % slides.length) {
            slide.classList.add('next');
        } else {
            slide.classList.add('hidden');
        }
    });
}

// Click on any slide to bring it to front
slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

// Auto Rotation (Optional)
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}, 5000);

// Initialize
updateSlider();
