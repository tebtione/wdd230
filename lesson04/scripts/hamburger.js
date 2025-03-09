document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.navMenu');

    menuToggle.addEventListener('click', () => {
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'block';
        }
    });

    // Update current year and last modified date
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
});