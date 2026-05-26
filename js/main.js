// =========================================
// UI behaviors: mobile menu, scroll reveal, smooth scroll polyfill
// =========================================

(function () {
    document.addEventListener('DOMContentLoaded', () => {
        // ===== Mobile menu toggle =====
        const menuBtn = document.getElementById('mobileMenuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('open');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-bars');
                    icon.classList.toggle('fa-xmark');
                }
            });

            mobileMenu.querySelectorAll('a').forEach((link) => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('open');
                    const icon = menuBtn.querySelector('i');
                    if (icon) {
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-xmark');
                    }
                });
            });
        }

        // ===== Scroll reveal =====
        const reveals = document.querySelectorAll(
            '.feature-card, .howto-step, .profile-pack, .privacy-card, .faq-item, .trust-item, .db-meter, .hearing-text'
        );
        reveals.forEach((el) => el.setAttribute('data-reveal', ''));

        if ('IntersectionObserver' in window) {
            const io = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            io.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
            );
            reveals.forEach((el) => io.observe(el));
        } else {
            reveals.forEach((el) => el.classList.add('visible'));
        }

        // ===== Active nav link highlight on scroll =====
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
        if ('IntersectionObserver' in window && sections.length && navLinks.length) {
            const sectionIO = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const id = entry.target.id;
                            navLinks.forEach((a) => {
                                if (a.getAttribute('href') === `#${id}`) {
                                    a.style.color = 'var(--accent)';
                                } else {
                                    a.style.color = '';
                                }
                            });
                        }
                    });
                },
                { rootMargin: '-40% 0px -55% 0px' }
            );
            sections.forEach((s) => sectionIO.observe(s));
        }
    });
})();
