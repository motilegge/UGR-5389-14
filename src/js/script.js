document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('#burger');
    const menu = document.querySelector('#navbarNav');
    
    burger.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});
