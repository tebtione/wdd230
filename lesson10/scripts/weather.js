// Select HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Define the API URL
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=87c8cf28468b1eedbc10f2c5c3d4f9f7';

// Asynchronous function to fetch weather data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // For testing
            displayResults(data); // Call display function
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to display results on the webpage
function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`; // Round temperature
    const iconCode = data.weather[0].icon;
    const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc.charAt(0).toUpperCase() + desc.slice(1)}`; // Capitalize first letter
}

// Invoke the fetch function
apiFetch();