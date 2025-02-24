// Local Storage for Visit Tracking
const welcomeMessage = document.getElementById('visits');
const lastVisit = localStorage.getItem('lastVisit');
const currentDate = Date.now();

if (!lastVisit) {
    welcomeMessage.innerText = "Welcome! Let us know if you have any questions.";
} else {
    const daysSinceVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysSinceVisit < 1) {
        welcomeMessage.innerText = "Back so soon! Awesome!";
    } else {
        welcomeMessage.innerText = `You last visited ${daysSinceVisit} day${daysSinceVisit > 1 ? 's' : ''} ago.`;
    }
}
localStorage.setItem('lastVisit', currentDate);