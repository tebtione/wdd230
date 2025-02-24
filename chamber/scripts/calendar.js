const calendarContainer = document.getElementById('calendar-container');
let currentDate = new Date();

function createCalendar() {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    calendarContainer.innerHTML = `
        <div class="calendar-header">
            <button onclick="changeMonth(-1)">&#10094;</button>
            <span>${currentDate.toLocaleString('default', { month: 'long' })} ${year}</span>
            <button onclick="changeMonth(1)">&#10095;</button>
        </div>
        <div class="calendar-days">${Array.from({ length: firstDay }, () => '<div></div>').join('')}
            ${Array.from({ length: daysInMonth }, (_, i) => `<div class="calendar-day">${i + 1}</div>`).join('')}
        </div>
    `;
}

function changeMonth(direction) {
    currentDate.setMonth(currentDate.getMonth() + direction);
    createCalendar();
}

createCalendar();