const bannerElement = document.getElementById('banner');
const closeBannerButton = document.getElementById('closeBanner');


// windchill.js
function calculateWindChill(temperature, windSpeed) {
    // Check the specifications for wind chill calculation
    if (temperature <= 50 && windSpeed > 3.0) {
        // Calculate wind chill using the formula
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2); // Return wind chill value rounded to 2 decimal places
    } else {
        return "N/A"; // Not applicable if conditions are not met
    }
}

// Function to display wind chill
function displayWindChill() {
    // Get temperature and wind speed values from the page
    const temperature = parseFloat(document.getElementById('temperature').innerText);
    const windSpeed = parseFloat(document.getElementById('windSpeed').innerText);

    // Calculate and display the wind chill
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').innerText = windChill;
}

// Call the displayWindChill function when the document is ready
document.addEventListener('DOMContentLoaded', displayWindChill);


// Function to display the popup banner on specified days
function displayPopupBanner() {
    const today = new Date();
    const dayOfWeek = today.getDay(); 
    
    if (dayOfWeek >= 1 && dayOfWeek <= 3) { 
        document.getElementById('overlay').style.display = 'block'; 
        document.getElementById('popupBanner').style.display = 'block'; 
    }
}
// Function to close the popup banner
function closePopupBanner() {
    document.getElementById('overlay').style.display = 'none'; 
    document.getElementById('popupBanner').style.display = 'none'; 
}


displayPopupBanner();