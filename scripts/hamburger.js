const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.innerHTML = menu.classList.contains('active') ? '✖' : '≡';
});