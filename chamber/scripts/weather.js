const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const city = 'YOUR_CITY'; // Replace with your city
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
    const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`);
    const currentWeather = await currentWeatherResponse.json();

    const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`);
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