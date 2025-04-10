// script.js
async function fetchWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Cozumel,mx&appid=87c8cf28468b1eedbc10f2c5c3d4f9f7&units=metric');
    const data = await response.json();
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const highTemp = data.main.temp_max;
    const weatherDescription = data.weather[0].description;
    const weatherIcon = data.weather[0].icon;

    document.getElementById('weather-info').innerHTML = `
                <p>Current Temperature: ${temp}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Weather: ${weatherDescription} <img src="http://openweathermap.org/img/wn/${weatherIcon}.png" alt="${weatherDescription}"></p>
                <p>Tomorrow's forecast at 15:00: ${data.main.temp_max}°C</p>
            `;

    document.getElementById('high-temp').textContent = highTemp;
}
async function fetchRentals() {
    const response = await fetch('data/rentals.json');
    const rentals = await response.json();
    const tbody = document.querySelector('#rental-table tbody');
    rentals.rentals.forEach(rental => {
        const row = document.createElement('tr');
        row.innerHTML = `
                    <td>${rental.type}</td>
                    <td>${rental.maxPersons}</td>
                    <td>$${rental.halfDayPriceReservation}</td>
                    <td>$${rental.fullDayPriceReservation}</td>
                `;
        tbody.appendChild(row);
    });
}

function closeBanner() {
    document.getElementById('message-banner').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    fetchRentals();
});