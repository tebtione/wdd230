// Define a unique key for this specific page visit count
const pageVisitKey = 'pageVisitCount';

// Check if visit count is stored in localStorage
let visitCount = localStorage.getItem(pageVisitKey);

// If not, initialize it to 0
if (!visitCount) {
    visitCount = 0;
}

// Increment the visit count
visitCount++;

// Store the updated count back to localStorage
localStorage.setItem(pageVisitKey, visitCount);

// Display the visit count on the webpage
document.getElementById('visitCount').textContent = visitCount;