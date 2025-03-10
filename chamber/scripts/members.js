const data = [
    {
        "name": "Saratoga Springs Chamber of Commerce",
        "address": "1307 N. 2000 W., Saratoga Springs, UT 84045",
        "phone": "801-766-9793",
        "website": "https://www.saratogasprings-ut.gov/35/Business",
        "image": "images/POTMC-Sponsors-Saratoga-Springs-1920w.webp",
        "membershipLevel": "Gold",
        "description": "Supporting local businesses and promoting economic growth."
    },
    {
        "name": "Saratoga Springs City",
        "address": "1307 N. 2000 W., Saratoga Springs, UT 84045",
        "phone": "801-766-9835",
        "website": "http://saratogaspringscity.com",
        "image": "images/City-Saratoga.jpg",
        "membershipLevel": "Platinum",
        "description": "Providing community services and governance."
    },
    {
        "name": "The Homestead Resort",
        "address": "700 N Homestead Dr, Midway, UT 84049",
        "phone": "435-654-1102",
        "website": "http://homesteadresort.com",
        "image": "images/SHSR_Logo.png",
        "membershipLevel": "Gold",
        "description": "A historic resort offering relaxation and recreation."
    },
    {
        "name": "Saratoga Springs Dental",
        "address": "1401 N. 2000 W., Saratoga Springs, UT 84045",
        "phone": "801-766-0920",
        "website": "http://saratogaspringsdental.com",
        "image": "images/dental.jpg",
        "membershipLevel": "Silver",
        "description": "Comprehensive dental care for the whole family."
    },
    {
        "name": "Saratoga Springs Public Library",
        "address": "1307 N. 2000 W., Saratoga Springs, UT 84045",
        "phone": "801-766-6505",
        "website": "http://saratogaspringslibrary.com",
        "image": "images/library.jpg",
        "membershipLevel": "Bronze",
        "description": "A hub for learning and community engagement."
    },
    {
        "name": "Saratoga Springs Fitness",
        "address": "1225 N. 2000 W., Saratoga Springs, UT 84045",
        "phone": "801-766-8000",
        "website": "http://saratogaspringsfitness.com",
        "image": "images/Fitness.jpg",
        "membershipLevel": "Gold",
        "description": "Your local gym for health and wellness."
    },
    {
        "name": "Saratoga Springs Floral",
        "address": "2000 N. 300 W., Saratoga Springs, UT 84045",
        "phone": "801-766-1234",
        "website": "http://saratogaspringsfloral.com",
        "image": "images/flora.jpg",
        "membershipLevel": "Silver",
        "description": "Beautiful floral arrangements for any occasion."
    }
];

const businessesContainer = document.getElementById('businesses');

function renderBusinesses(view) {
    businessesContainer.innerHTML = '';
    data.forEach(business => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
                    <img src="${business.image}" alt="${business.name}">
                    <h2>${business.name}</h2>
                    <p><strong>Membership Level:</strong> ${business.membershipLevel}</p>
                    <p>${business.description}</p>
                    <p><strong>Address:</strong> ${business.address}</p>
                    <p><strong>Phone:</strong> <a href="tel:${business.phone}">${business.phone}</a></p>
                    <p><a href="${business.website}" target="_blank">Visit Website</a></p>
                `;
        if (view === 'list') {
            card.classList.add('list-view');
        }
        businessesContainer.appendChild(card);
    });
}

document.getElementById('gridViewBtn').addEventListener('click', () => {
    renderBusinesses('grid');
});

document.getElementById('listViewBtn').addEventListener('click', () => {
    renderBusinesses('list');
});

// Initial render in grid view
renderBusinesses('grid');