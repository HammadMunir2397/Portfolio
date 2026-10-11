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

    navbar.classList.toggle('scrolled', currentScroll > 20);

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
document.querySelectorAll('section:not(.hero), .skill-card, .project-card, .timeline-item, .stat').forEach(el => {
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
        title: 'Sequence Samba',
        meta: { Role: 'Unity Developer', Platform: 'iOS & Android', Timeline: 'Jul 2025 – Jan 2026', Studio: 'Geni-Team Solutions' },
        description: 'A cross-platform 2D puzzle game for iOS and Android with multiple game modes, progressive difficulty and a real-time database backend.',
        features: [
            'Multiple puzzle game modes with progressive difficulty levels',
            'Facebook, Google, Apple and Guest login',
            'Leaderboard to track and display player rankings',
            'Rewarded and interstitial ads for monetization',
            'Player data, progress and cloud synchronization'
        ],
        technologies: ['Unity', 'C#', 'Firebase', 'AdMob', 'Android', 'iOS'],
        // Screenshots for the modal (local paths like 'images/samba-1.png' or URLs)
        images: [],
        // Video: YouTube embed URL or local path like 'videos/Samba.mp4'
        videoUrl: 'videos/Samba.mp4'
    },
    project2: {
        title: 'Cyera Endless',
        meta: { Role: 'Unity Developer', Platform: 'WebGL', Timeline: 'Mar 2025 – Jun 2025', Studio: 'Geni-Team Solutions' },
        description: 'A browser-based endless runner built for WebGL, combining smooth, fast-paced gameplay with features that keep players competing and coming back.',
        features: [
            'Endless runner mechanics: avoid obstacles and chase the highest score',
            'User authentication with email login and signup for personal progress',
            'Global leaderboard where players compete for top rankings',
            'Daily missions that reward players for returning',
            'In-game shop for skins and upgrades using in-game currency',
            'Optimized for smooth performance in web browsers'
        ],
        technologies: ['Unity', 'C#', 'Firebase', 'WebGL', 'Authentication'],
        images: [],
        videoUrl: 'videos/WebGame.mp4'
    },
    project3: {
        title: 'Reel Adventure',
        meta: { Role: 'Unity Developer', Platform: 'PC', Timeline: 'Jan 2023 – Mar 2025', Studio: 'Geni-Team Solutions' },
        description: 'A 2D auto-battler for PC with a stat-driven combat system, built on a scalable, maintainable architecture using SOLID principles and event-driven systems.',
        features: [
            'Auto-battle system where attacks are decided by player stats',
            'Endless, increasingly challenging levels',
            'Player inventory and achievement systems',
            'Event-driven, modular codebase that is easy to extend'
        ],
        technologies: ['Unity', 'C#', '2D Animation', 'PC', 'Steam Leaderboard'],
        images: [],
        videoUrl: 'videos/Reel Adventure.mp4'
    },
    project4: {
        title: 'Save America',
        meta: { Role: 'Unity Developer', Platform: 'Android' },
        description: 'An immersive 3D game for Android with realistic interactions and engaging gameplay.',
        features: [
            'Realistic physics-based interactions',
            'Immersive 3D audio',
            'Smooth, comfortable player movement'
        ],
        technologies: ['Unity', 'C#', '3D', 'Android', 'Firebase'],
        images: [],
        videoUrl: 'videos/Save America.mp4'
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
        <h2 style="font-size: clamp(1.8rem, 5vw, 2.5rem); margin-bottom: 1rem; background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
            ${project.title}
        </h2>
        <p style="color: var(--text-secondary); margin-bottom: 2rem; font-size: 1.1rem; line-height: 1.8;">
            ${project.description}
        </p>
        
        ${project.meta ? `<div class="cs-meta">${Object.entries(project.meta).map(([k, v]) => `<div><span>${k}</span><strong>${v}</strong></div>`).join("")}</div>` : ""}

        ${videoHTML}
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); gap: 1rem; margin-bottom: 2rem;">
            ${project.images.map(img => `
                <img src="${img}" alt="${project.title}" 
                     style="width: 100%; border-radius: 15px; height: 200px; object-fit: cover;">
            `).join('')}
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-primary);">What I Built</h3>
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
                    <span style="padding: 0.5rem 1rem; background: rgba(var(--primary-rgb), 0.15); color: var(--primary-color); border-radius: 20px;">
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
    modalBody.innerHTML = ''; // stops any video that is still playing
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
            }
        }
    });
});

// ===== Add animation classes when elements are visible =====
const fadeElements = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .stat');
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

// ===== Counter Animation for Stats =====
function animateCounter(element, target, suffix = '', duration = 1500) {
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 16);
}

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            animateCounter(el, Number(el.dataset.target), el.dataset.suffix || '');
            statObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(el => statObserver.observe(el));

// ===== Footer Year =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

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


// ===== Cursor spotlight (desktop only) =====
const spotlight = document.querySelector('.spotlight');
const finePointer = window.matchMedia('(pointer: fine)').matches;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (spotlight && finePointer) {
    window.addEventListener('pointermove', (e) => {
        spotlight.style.setProperty('--mx', `${e.clientX}px`);
        spotlight.style.setProperty('--my', `${e.clientY}px`);
    });
}

// ===== 3D tilt on project cards =====
if (finePointer && !reduceMotion) {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('pointermove', (e) => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            card.style.transition = 'transform 0.1s ease, box-shadow 0.3s ease, border-color 0.3s ease';
            card.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg) translateY(-6px)`;
        });
        card.addEventListener('pointerleave', () => {
            card.style.transition = 'transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease';
            card.style.transform = '';
        });
    });
}

// Keyboard access for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
    });
});

// ===== Typing animation for the code snippet =====
const codeEl = document.querySelector('.code-snippet code');
if (codeEl) {
    // Split the highlighted code into [className, text] segments
    const segments = [];
    codeEl.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) segments.push(['', node.textContent]);
        else segments.push([node.className, node.textContent]);
    });
    for (let i = segments.length - 1; i >= 0; i--) if (!segments[i][1]) segments.splice(i, 1);

    const pre = codeEl.parentElement;
    const caret = document.createElement('span');
    caret.className = 'caret';

    const typeCode = () => {
        pre.style.minHeight = `${pre.offsetHeight}px`; // keep the card from jumping
        codeEl.textContent = '';
        codeEl.appendChild(caret);

        let seg = 0, ch = 0, current = null;
        const step = () => {
            if (seg >= segments.length) {
                setTimeout(typeCode, 4000); // pause, then type again
                return;
            }
            const [cls, text] = segments[seg];
            if (ch === 0) {
                current = cls ? document.createElement('span') : document.createTextNode('');
                if (cls) current.className = cls;
                codeEl.insertBefore(current, caret);
            }
            current.textContent += text[ch];
            ch++;
            if (ch >= text.length) { seg++; ch = 0; }
            const delay = text[ch - 1] === '\n' ? 120 : 28 + Math.random() * 40;
            setTimeout(step, delay);
        };
        step();
    };

    if (reduceMotion) {
        codeEl.appendChild(caret);
    } else {
        const codeObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                typeCode();
                codeObserver.disconnect();
            }
        }, { threshold: 0.4 });
        codeObserver.observe(pre);
    }
}

