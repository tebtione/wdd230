const apiKey = '87c8cf28468b1eedbc10f2c5c3d4f9f7'; // Replace with your OpenWeatherMap API key
const city = 'Saratoga Springs Utah'; // Replace with your city
const today = new Date();
const day = today.getDay();
const popupBanner = document.getElementById('popupBanner');

if (day >= 1 && day <= 3) {
    popupBanner.style.display = 'block';
}

function closePopupBanner() {
    popupBanner.style.display = 'none';
}

async function fetchWeather() {
    const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API key}`);
    const currentWeather = await currentWeatherResponse.json();

    const forecastResponse = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API key}`);
    const forecastData = await forecastResponse.json();

    // Update current weather
    document.getElementById('temperature').innerText = currentWeather.main.temp;
    document.getElementById('weatherDescription').innerText = currentWeather.weather[0].description;
    document.getElementById('windSpeed').innerText = currentWeather.wind.speed;
    document.getElementById('windChill').innerText = 'TBD'; // Placeholder, add your wind chill calculation if needed

    // Update forecast
    let forecastHtml = '';
    for (let i = 0; i < 3; i++) {
        const dayForecast = forecastData.list[i * 8]; // Get the forecast for each day
        const date = new Date(dayForecast.dt * 1000);
        forecastHtml += `<p>${date.toDateString()}: ${dayForecast.main.temp} °F, ${dayForecast.weather[0].description}</p>`;
    }
    document.getElementById('forecastData').innerHTML = forecastHtml;
}

fetchWeather();