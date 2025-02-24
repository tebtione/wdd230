const calendarContainer = document.getElementById('calendar-container');

function createCalendar(month, year) {
    calendarContainer.innerHTML = '';

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const header = document.createElement('div');
    header.className = 'calendar-header';
    header.innerHTML = `
        <button onclick="changeMonth(-1)">&#10094;</button>
        <span>${monthNames[month]} ${year}</span>
        <button onclick="changeMonth(1)">&#10095;</button>
    `;
    calendarContainer.appendChild(header);

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const daysContainer = document.createElement('div');
    daysContainer.className = 'calendar-days';

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        daysContainer.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'calendar-day';
        dayCell.innerText = day;
        if (day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
            dayCell.style.backgroundColor = '#ffeb3b'; // Highlight today's date
        }
        daysContainer.appendChild(dayCell);
    }

    calendarContainer.appendChild(daysContainer);

    // Show current date
    const currentDateDisplay = document.createElement('div');
    currentDateDisplay.className = 'current-date';
    currentDateDisplay.innerHTML = `Today: ${new Date().toLocaleDateString()}`;
    calendarContainer.appendChild(currentDateDisplay);
}

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function changeMonth(direction) {
    currentMonth += direction;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear -= 1;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear += 1;
    }
    createCalendar(currentMonth, currentYear);
}

// Initial load
createCalendar(currentMonth, currentYear);