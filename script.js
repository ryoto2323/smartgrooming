document.addEventListener('DOMContentLoaded', () => {
    
    /* ----------------------------------------------------
       Scroll Animations (Fade In)
    ---------------------------------------------------- */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in');
    animatedElements.forEach(el => observer.observe(el));


    /* ----------------------------------------------------
       Accordion Logic
    ---------------------------------------------------- */
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });


    /* ----------------------------------------------------
       Floating CTA Visibility on Scroll
    ---------------------------------------------------- */
    const floatingCta = document.getElementById('floating-cta');
    
    // Only engage logic if element exists (mobile check done via CSS display)
    if (floatingCta) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                floatingCta.classList.add('visible');
            } else {
                floatingCta.classList.remove('visible');
            }
        });
    }

    /* ----------------------------------------------------
       Smooth Scroll for Anchor Links
    ---------------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});