// ===== Navigation Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    }

    lastScroll = currentScroll;
});

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Intersection Observer for Animations =====
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

// Observe all sections and cards
document.querySelectorAll('section, .skill-card, .project-card, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ===== Project Modal System =====
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

// Project data - You can customize this with your actual project details
const projects = {
    project1: {
        title: 'Cyera Endless Webgl',
        description: 'Cyera Endless is a browser-based endless runner game developed for the WebGL platform. The game combines smooth, fast-paced gameplay with modern features that enhance player engagement and competitiveness.',
        features: [
            'Endless Runner Mechanics – Players run continuously, avoiding obstacles and aiming for the highest score.',
            'User Authentication – Secure login and signup system with email integration for personalized progress tracking',
            'Leaderboard System – Global leaderboard where players can compete for top rankings.',
            'Daily Missions – Rotating challenges that encourage players to return daily and earn rewards.',
            'In-Game Shop – A fully functional shop where players can purchase skins and upgrades using in-game currency.'
        ],
        technologies: ['Unity', 'C#', 'Firebase', 'Web', 'User-Authentication'],
        // Thumbnail image for project card (URL or local path like 'images/project1-thumb.jpg')
        thumbnail: 'images/image3.png',
        // Screenshots for modal (can be URLs or local paths like 'images/project1-screenshot1.jpg')
        images: [
            //'https://via.placeholder.com/800x450/6366f1/ffffff?text=Game+Screenshot+1',
            //'https://via.placeholder.com/800x450/6366f1/ffffff?text=Game+Screenshot+2'
            // 'images/Cyera.png'
            // OR use local images: 'images/cyera-screenshot1.jpg', 'images/cyera-screenshot2.jpg'
        ],
        // Video: YouTube URL or local path like 'videos/WebGame.mp4'
        videoUrl: 'videos/WebGame.mp4',
        //  github: '#',
        //  demo: '#'
    },
    project2: {
        title: 'Reel Adventure',
        description: 'An innovative auto-battler game designed for PC platforms. Features unique mechanics and engaging stats system.',
        features: [
            'Intuitive controls',
            'Over endless challenging levels',
            'Beautiful 2D art style',
            'Achievement system',
            'Player Inventory System',
        ],
        technologies: ['Unity', 'C#', '2D Animation', 'PC', 'Stream Leaderboard'],
        thumbnail: 'images/Reel.png',
        // OR use local: thumbnail: 'images/project2-thumb.jpg',
        images: [
            // 'https://via.placeholder.com/800x450/8b5cf6/ffffff?text=Game+Screenshot+1',
            // 'https://via.placeholder.com/800x450/8b5cf6/ffffff?text=Game+Screenshot+2'
            //'images/Reel.png'
        ],
        //videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        videoUrl: 'videos/Reel Adventure.mp4',
        //  github: '#',
        //  demo: '#'
    },
    project3: {
        title: 'Sequence Samba',
        description: 'A fast-paced 2D puzzle game. Supports different types of authentication systems and various game modes with real-time database.',
        features: [
            'Real-time database',
            'Multiple puzzle game modes',
            'Authentications system',
            'Leaderboard integration'
        ],
        technologies: ['Unity', 'C#', 'Firebase'],
        thumbnail: 'images/samba.png',
        images: [
            //'https://via.placeholder.com/800x450/ec4899/ffffff?text=Game+Screenshot+1',
            //'https://via.placeholder.com/800x450/ec4899/ffffff?text=Game+Screenshot+2'
        ],
        videoUrl: 'videos/Samba.mp4'   //'https://www.youtube.com/embed/dQw4w9WgXcQ',
        // github: '#',
        // demo: '#'
    },
    project4: {
        title: 'Save America',
        description: 'An immersive 3D game experience designed for Android user. Features realistic interactions and engaging gameplay.',
        features: [
            'Realistic physics interactions',
            'Immersive 3D audio',
            'Comfortable locomotion system'
        ],
        technologies: ['Unity', 'C#', 'Firebase',],
        //thumbnail: 'images/saveAmerica.jpg',
        images: [
            //'https://via.placeholder.com/800x450/14b8a6/ffffff?text=Game+Screenshot+1',
            //'https://via.placeholder.com/800x450/14b8a6/ffffff?text=Game+Screenshot+2'
            //'images/saveAmerica.jpg'
        ],
        videoUrl: 'videos/Save America.mp4',
        // github: '#',
        //  demo: '#'
    }
};

function openModal(projectId) {
    const project = projects[projectId];
    if (!project) return;

    // Function to check if URL is a YouTube link
    const isYouTubeUrl = (url) => {
        return url && (url.includes('youtube.com') || url.includes('youtu.be'));
    };

    // Generate video HTML based on type
    let videoHTML = '';
    if (project.videoUrl) {
        if (isYouTubeUrl(project.videoUrl)) {
            // YouTube embed
            videoHTML = `
            <div style="position: relative; padding-bottom: 56.25%; height: 0; margin-bottom: 2rem; border-radius: 15px; overflow: hidden;">
                <iframe 
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                    src="${project.videoUrl}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>`;
        } else {
            // Local video file
            videoHTML = `
            <div style="margin-bottom: 2rem; border-radius: 15px; overflow: hidden;">
                <video 
                    style="width: 100%; height: auto; display: block;" 
                    controls 
                    preload="metadata">
                    <source src="${project.videoUrl}" type="video/mp4">
                    <source src="${project.videoUrl}" type="video/webm">
                    <source src="${project.videoUrl}" type="video/ogg">
                    Your browser does not support the video tag.
                </video>
            </div>`;
        }
    }

    modalBody.innerHTML = `
        <h2 style="font-size: 2.5rem; margin-bottom: 1rem; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
            ${project.title}
        </h2>
        <p style="color: var(--text-secondary); margin-bottom: 2rem; font-size: 1.1rem; line-height: 1.8;">
            ${project.description}
        </p>
        
        ${videoHTML}
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            ${project.images.map(img => `
                <img src="${img}" alt="${project.title}" 
                     style="width: 100%; border-radius: 15px; height: 200px; object-fit: cover;">
            `).join('')}
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-primary);">Key Features</h3>
            <ul style="list-style: none; padding: 0;">
                ${project.features.map(feature => `
                    <li style="padding: 0.5rem 0; color: var(--text-secondary); display: flex; align-items: center; gap: 0.5rem;">
                        <i class="fas fa-check-circle" style="color: var(--primary-color);"></i>
                        ${feature}
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-primary);">Technologies Used</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${project.technologies.map(tech => `
                    <span style="padding: 0.5rem 1rem; background: rgba(99, 102, 241, 0.2); color: var(--primary-color); border-radius: 20px;">
                        ${tech}
                    </span>
                `).join('')}
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Use Formspree to send the form data
    const status = document.createElement('div');
    status.className = 'status-message';
    status.style.marginTop = '10px';
    status.style.textAlign = 'center';

    // Check if status message already exists, if so remove it
    const existingStatus = contactForm.querySelector('.status-message');
    if (existingStatus) {
        existingStatus.remove();
    }

    contactForm.appendChild(status);

    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    // IMPORTANT: Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
    // Example: https://formspree.io/f/mqkzvqrl
    const formspreeUrl = "https://formspree.io/f/mvgebbdj";

    const data = new FormData(e.target);

    fetch(formspreeUrl, {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = '<i class="fas fa-check-circle"></i> Thanks for your message! I will get back to you soon.';
            status.style.color = '#10B981'; // Success green
            contactForm.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form";
                }
                status.style.color = '#EF4444'; // Error red
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form";
        status.style.color = '#EF4444'; // Error red
    }).finally(() => {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;

        // Clear status message after 5 seconds
        setTimeout(() => {
            if (status.parentNode) {
                status.remove();
            }
        }, 5000);
    });
});

// ===== Typing Effect for Hero Section =====
const typingText = document.querySelector('.hero-subtitle');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing effect after page load
    setTimeout(typeWriter, 500);
}

// ===== Add Active Class to Navigation on Scroll =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
                navLink.style.color = 'var(--text-primary)';
            }
        }
    });
});

// ===== Parallax Effect for Hero Section =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');

    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }

    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * -0.2}px)`;
    }
});

// ===== Add animation classes when elements are visible =====
const fadeElements = document.querySelectorAll('.skill-card, .project-card');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => {
    fadeObserver.observe(el);
});

// ===== Counter Animation for Stats (if you want to add them) =====
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// ===== Preloader (optional) =====
window.addEventListener('load', () => {
    // Remove preloader if you add one
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

console.log('Portfolio website loaded successfully! 🚀');

