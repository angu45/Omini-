// 1. Theme Toggle Logic
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    
    // Save theme preference locally
    localStorage.setItem('theme', newTheme);
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
}

// 2. 3D Slider Logic
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function updateSlider() {
    slides.forEach((slide, index) => {
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

// Click to change slide
slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

// Auto rotation every 4 seconds
let autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}, 4000);

// Stop auto rotation on hover/click if needed (optional)
document.getElementById('slider').addEventListener('mouseenter', () => clearInterval(autoSlide));

// Initialize
updateSlider();
