const toggleSwitch = document.getElementById('darkModeToggle');
toggleSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleSwitch.classList.toggle('active');
});