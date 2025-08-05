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

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Modal functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Form submission
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Create mailto link
    const subject = encodeURIComponent(data.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}
    `);
    
    const mailtoLink = `mailto:ogegeedafe123@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show confirmation and reset form
    alert('Opening your email client to send the message!');
    event.target.reset();
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply scroll animations to elements
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .about-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Typing effect for hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const heroSubtext = document.querySelector('.hero p');
        if (heroSubtext) {
            typeWriter(heroSubtext, 'Software & Web Developer | Fullstack Developer | UX Designer', 50);
        }
    }, 1000);
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Apply parallax effect to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${rate * 0.1}px)`;
    }
});

// Dynamic background particles
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.position = 'fixed';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.pointerEvents = 'none';
    particlesContainer.style.zIndex = '1';
    particlesContainer.id = 'particles-container';
    document.body.appendChild(particlesContainer);

    // Adjust particle count based on screen size
    const particleCount = window.innerWidth < 768 ? 25 : 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'rgba(100, 255, 218, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 2 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles on load
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
});

// Recreate particles on window resize
window.addEventListener('resize', function() {
    const existingParticles = document.getElementById('particles-container');
    if (existingParticles) {
        existingParticles.remove();
    }
    createParticles();
});

// Add active navigation highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Touch and gesture improvements for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleGesture();
});

function handleGesture() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndY - touchStartY;
    
    // You can add swipe gestures here if needed
    // For example, swipe up to close modals on mobile
    if (Math.abs(swipeDistance) > swipeThreshold) {
        // Handle swipe gestures
    }
}

// Optimize animations for better performance on mobile
function optimizeForMobile() {
    if (window.innerWidth < 768) {
        // Reduce animation complexity on mobile
        const animatedElements = document.querySelectorAll('.skill-category, .project-card');
        animatedElements.forEach(el => {
            el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        });
    }
}

// Call optimization on load and resize
document.addEventListener('DOMContentLoaded', optimizeForMobile);
window.addEventListener('resize', optimizeForMobile);

// Prevent zoom on double tap for iOS devices
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active');
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Error handling for failed resource loads
window.addEventListener('error', function(e) {
    console.error('Resource failed to load:', e.target);
});

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Close modal with Escape key
    if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal[style*="block"]');
        openModals.forEach(modal => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Navigate with arrow keys when modal is open
    if (e.key === 'Tab') {
        const openModal = document.querySelector('.modal[style*="block"]');
        if (openModal) {
            const focusableElements = openModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    }
});

// Preload critical resources
function preloadCriticalResources() {
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700;800;900&family=Roboto+Slab:wght@300;400;500;600;700&display=swap'
    ];

    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'style';
        document.head.appendChild(link);
    });
}

// Language showcase animation for modal
function animateLanguageItems() {
    const langItems = document.querySelectorAll('.lang-item');
    langItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.style.animation = 'slideUp 0.6s ease-out forwards';
    });
}

// Enhanced modal opening with animations
function openModalWithAnimation(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-content');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Reset animation
    modalContent.style.opacity = '0';
    modalContent.style.transform = 'translateY(-50px) scale(0.8)';
    
    // Animate in
    setTimeout(() => {
        modalContent.style.transition = 'all 0.3s ease';
        modalContent.style.opacity = '1';
        modalContent.style.transform = 'translateY(0) scale(1)';
        
        // Special animation for language project
        if (modalId === 'language-project') {
            setTimeout(animateLanguageItems, 300);
        }
    }, 10);
}

// Update the original openModal function
const originalOpenModal = window.openModal;
window.openModal = function(modalId) {
    openModalWithAnimation(modalId);
};

// Enhanced greeting text animation for language project
function createGreetingAnimation() {
    const greetingTexts = document.querySelectorAll('.greeting-text');
    const greetings = ['Hello', 'Hola', 'こんにちは', '안녕하세요'];
    
    greetingTexts.forEach((text, index) => {
        text.style.opacity = '0';
        text.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            text.style.transition = 'all 0.4s ease';
            text.style.opacity = '1';
            text.style.transform = 'scale(1)';
        }, index * 200);
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    preloadCriticalResources();
    
    // Add a small delay to ensure smooth loading
    setTimeout(() => {
        document.body.style.opacity = '1';
        createGreetingAnimation();
    }, 100);
    
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Custom cursor effect for desktop
function createCustomCursor() {
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: rgba(100, 255, 218, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
            border: 2px solid rgba(100, 255, 218, 0.6);
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });

        // Expand cursor on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-category');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursor.style.background = 'rgba(100, 255, 218, 0.1)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = 'rgba(100, 255, 218, 0.3)';
            });
        });
    }
}

// Initialize custom cursor
document.addEventListener('DOMContentLoaded', createCustomCursor);