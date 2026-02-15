// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(18, 18, 18, 0.98)';
    } else {
        navbar.style.background = 'rgba(18, 18, 18, 0.95)';
    }
});

// Add animation on scroll for feature cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.feature-card, .support-card, .spec-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// 3D Carousel Slider
document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.screenshot-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.screenshots .slider-dots');
    
    if (!sliderTrack || !slides.length) return;
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    const radius = 450; // Distance from center
    const angleStep = (2 * Math.PI) / totalSlides;
    
    // Create dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    const dots = document.querySelectorAll('.dot');
    
    function updateCarousel() {
        slides.forEach((slide, index) => {
            const angle = angleStep * (index - currentIndex);
            const x = Math.sin(angle) * radius;
            const z = Math.cos(angle) * radius - radius;
            const rotateY = -angle * (180 / Math.PI);
            
            // Calculate scale and opacity based on position
            const distanceFromCenter = Math.abs(angle);
            const scale = Math.max(0.6, 1 - distanceFromCenter * 0.3);
            const opacity = Math.max(0.3, 1 - distanceFromCenter * 0.5);
            
            // Apply transforms
            slide.style.transform = `
                translate(-50%, -50%)
                translateX(${x}px)
                translateZ(${z}px)
                rotateY(${rotateY}deg)
                scale(${scale})
            `;
            slide.style.opacity = opacity;
            slide.style.zIndex = Math.round(100 - Math.abs(z));
            
            // Mark active slide
            if (index === currentIndex) {
                slide.classList.add('active');
                slide.style.filter = 'brightness(1.1)';
            } else {
                slide.classList.remove('active');
                slide.style.filter = 'brightness(0.7)';
            }
        });
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Click on slides to navigate
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            if (index !== currentIndex) {
                goToSlide(index);
            }
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    sliderTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    sliderTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) nextSlide();
        if (touchEndX > touchStartX + 50) prevSlide();
    }
    
    // Auto-play
    let autoplayInterval = setInterval(nextSlide, 4500);
    
    const sliderContainer = document.querySelector('.screenshot-slider');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 4500);
    });
    
    // Initialize carousel
    updateCarousel();
    
    // Update on window resize
    window.addEventListener('resize', updateCarousel);
});
