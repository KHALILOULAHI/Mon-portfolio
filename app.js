
        // Navigation mobile
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Navigation scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('nav-scrolled');
            } else {
                header.classList.remove('nav-scrolled');
            }
        });

        // Scroll animations
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        fadeElements.forEach(el => observer.observe(el));

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
            this.reset();
        });

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
                    // Close mobile menu if open
                    navLinks.classList.remove('active');
                }
            });
        });

        // Photo hover effect enhancement
        const photoContainer = document.querySelector('.photo-container');
        const profilePhoto = document.querySelector('.profile-photo');
        
        photoContainer.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = photoContainer.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            
            profilePhoto.style.transform = `translateY(-10px) scale(1.02) rotateX(${y * 10}deg) rotateY(${x * 10}deg)`;
        });
        
        photoContainer.addEventListener('mouseleave', () => {
            profilePhoto.style.transform = 'translateY(-10px) scale(1.02)';
        });
    