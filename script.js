    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
    });

    // 3D Slider Logic
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.className = 'slide'; // Reset
            if (index === currentIndex) slide.classList.add('active');
            else if (index === (currentIndex - 1 + slides.length) % slides.length) slide.classList.add('prev');
            else if (index === (currentIndex + 1) % slides.length) slide.classList.add('next');
            else slide.classList.add('hidden');
        });
    }

    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }, 5000);
