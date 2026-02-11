const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.getElementById ('nav-links');
const icon = document.querySelector ('.btn-mobile i');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show')
    icon.classList.toggle('fa-times')
    icon.classList.toggle('fa-bars')
})

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    if (window.scrollY > 0) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.animar-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'toActive 1.5s ease-in-out 1';
            } else {
                entry.target.style.animation = 'none';
            }
        });
    }, { threshold: 0.01 }); // Ativa quando 10% da seção estiver visível

    sections.forEach(section => observer.observe(section));
});


