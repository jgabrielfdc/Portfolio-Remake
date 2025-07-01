let toggled = true;
let isAnimating = false;

function menuToggle() {
    if (isAnimating) return;

    const navbar = document.getElementById('navbar__items');
    const button = document.getElementsByClassName('button__container')[0];
    const isOpen = navbar.classList.contains('visible');

    isAnimating = true;

    if (isOpen) {
        navbar.classList.remove('visible');
        navbar.classList.add('hidden');

        navbar.onanimationend = () => {
            navbar.style.width = "0px";

            if (toggled) {
                button.classList.add('button__rounded'); // aplica classe com transição
                toggled = false;
            } else {
                button.classList.remove('button__rounded');
                toggled = true;
            }

            isAnimating = false;
        };
    } else {
        navbar.classList.remove('hidden');
        navbar.classList.add('visible');
        navbar.style.width = "120%";

        button.classList.remove('button__rounded'); // remove ao abrir
        isAnimating = false; // abre sem esperar animação
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById('navbar__items');
    navbar.classList.add('hidden');
});
