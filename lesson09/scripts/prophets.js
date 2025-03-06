const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const getProphetData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    // Call the displayProphets function with the prophets array
    displayProphets(data.prophets);
};

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        card.classList.add('card');

        const fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        const portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        const birthdate = document.createElement("p");
        birthdate.textContent = `Birthdate: ${prophet.birthdate}`;

        const death = document.createElement("p");
        death.textContent = `Death: ${prophet.death ? prophet.death : 'N/A'}`;

        const birthplace = document.createElement("p");
        birthplace.textContent = `Birthplace: ${prophet.birthplace}`;

        // Append all elements to the card
        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(birthdate);
        card.appendChild(death);
        card.appendChild(birthplace);

        cards.appendChild(card);
    });
};

getProphetData();