// Elementos del DOM
const btnMenu = document.getElementById('btn_menu');
const btnClose = document.getElementById('btn_close');
const asideMenu = document.getElementById('aside_menu');
const navLinks = document.querySelectorAll('#nav_menu a');

// Abrir menú
btnMenu.addEventListener('click', () => {
    asideMenu.classList.remove('close_menu');
    asideMenu.classList.add('open_menu');
});

// Cerrar menú con el botón X
btnClose.addEventListener('click', () => {
    asideMenu.classList.remove('open_menu');
    asideMenu.classList.add('close_menu');
});

// Cerrar menú cuando se hace clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        asideMenu.classList.remove('open_menu');
        asideMenu.classList.add('close_menu');
    });
});

// Cerrar menú si se hace clic fuera de él (en pantallas móviles)
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!asideMenu.contains(e.target) && !btnMenu.contains(e.target)) {
            asideMenu.classList.remove('open_menu');
            asideMenu.classList.add('close_menu');
        }
    }
});