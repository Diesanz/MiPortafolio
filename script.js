// ====== MENÚ HAMBURGUESA ======
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Cerrar menú al hacer clic en un enlace (móvil)
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});

// ====== ANIMACIÓN DE BARRAS DE SKILLS ======
const skills = document.querySelectorAll('.skill .bar');

const fillBars = () => {
    skills.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = level + '%';
    });
};

// Activar animación cuando el usuario hace scroll y el elemento entra en viewport
const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
};

const handleScroll = () => {
    skills.forEach(bar => {
        if (isInViewport(bar) && !bar.classList.contains('filled')) {
            const level = bar.getAttribute('data-level');
            bar.style.width = level + '%';
            bar.classList.add('filled');
        }
    });
};

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
