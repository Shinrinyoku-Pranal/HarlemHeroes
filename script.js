// ==================== Gallery Slideshow Functionality ====================

let currentSlideIndex = 1;
const totalSlides = document.querySelectorAll('.slide').length;

// Initialize gallery
document.addEventListener('DOMContentLoaded', function() {
    showImage(currentSlideIndex);
    
    // Auto-advance gallery every 8 seconds
    setInterval(() => {
        if (isGalleryInView()) {
            nextImage();
        }
    }, 8000);
});

// Navigation functions
function nextImage() {
    showImage(currentSlideIndex += 1);
}

function previousImage() {
    showImage(currentSlideIndex -= 1);
}

function currentImage(n) {
    showImage(currentSlideIndex = n);
}

function showImage(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    // Wrap around
    if (n > slides.length) {
        currentSlideIndex = 1;
    }
    if (n < 1) {
        currentSlideIndex = slides.length;
    }
    
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show current slide
    if (slides[currentSlideIndex - 1]) {
        slides[currentSlideIndex - 1].classList.add('active');
    }
    
    // Highlight current dot
    if (dots[currentSlideIndex - 1]) {
        dots[currentSlideIndex - 1].classList.add('active');
    }
}

// Check if gallery is visible in viewport
function isGalleryInView() {
    const gallery = document.querySelector('.slideshow-container');
    if (!gallery) return false;
    
    const rect = gallery.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// ==================== Smooth Scrolling ====================

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

// ==================== Navbar Active Link Highlighting ====================

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== Keyboard Navigation for Gallery ====================

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        previousImage();
    } else if (e.key === 'ArrowRight') {
        nextImage();
    }
});

// ==================== Audio Player Enhancements ====================

const audioPlayer = document.querySelector('audio');
if (audioPlayer) {
    audioPlayer.addEventListener('play', () => {
        console.log('🎙️ Podcast playing...');
    });
    
    audioPlayer.addEventListener('pause', () => {
        console.log('⏸️ Podcast paused');
    });
    
    audioPlayer.addEventListener('ended', () => {
        console.log('✅ Podcast finished');
    });
}

// ==================== Scroll Animation for Elements ====================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and text sections for fade-in animation
document.querySelectorAll('.theme-card, .info-card, .team-member').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==================== Podcast Theme Switcher (Optional Enhancement) ====================

function initThemeSwitcher() {
    // This can be extended later for dark/light mode
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (prefersDarkScheme.matches) {
        // User prefers dark mode - already set as default
    }
}

initThemeSwitcher();

// ==================== Analytics/Engagement Tracking ====================

// Track gallery interactions
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('gallery-btn')) {
        const direction = e.target.textContent.includes('Next') ? 'next' : 'previous';
        console.log(`📸 User navigated gallery: ${direction}`);
    }
});

// Track section views
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId) {
                console.log(`👁️ Viewed section: ${sectionId}`);
            }
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});
