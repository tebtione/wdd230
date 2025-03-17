document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menuToggle');
    const closeToggle = document.getElementById('closeToggle');
    const navMenu = document.querySelector('.navMenu');

    const updateToggleVisibility = () => {
        const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
        if (isSmallScreen) {
            menuToggle.style.display = 'block'; // Show menu toggle on small screens
            closeToggle.style.display = 'none'; // Hide close button initially
        } else {
            menuToggle.style.display = 'none'; // Hide menu toggle on large screens
            closeToggle.style.display = 'none'; // Ensure close button is hidden on large screens
            navMenu.style.display = 'block'; // Keep menu visible on large screens
        }
    };

    menuToggle.addEventListener('click', () => {
        navMenu.style.display = 'block'; // Show the menu
        menuToggle.style.display = 'none'; // Hide the menu toggle
        closeToggle.style.display = 'block'; // Show close button
    });

    closeToggle.addEventListener('click', () => {
        navMenu.style.display = 'none'; // Close menu
        menuToggle.style.display = 'block'; // Show menu toggle
        closeToggle.style.display = 'none'; // Hide close button
    });

    // Close the menu if clicking outside of it
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target) && closeToggle.style.display === 'block') {
            navMenu.style.display = 'none';
            menuToggle.style.display = 'block'; // Show menu toggle
            closeToggle.style.display = 'none'; // Hide close button
        }
    });

    // Initial setup
    updateToggleVisibility();

    // Update visibility on window resize
    window.addEventListener('resize', updateToggleVisibility);

    // Update current year and last modified date
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
});