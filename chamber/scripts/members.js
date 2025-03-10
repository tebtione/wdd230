

fetch('companies.json')
    .then(response => response.json())
    .then(companies => {
        const companyList = document.getElementById('companyList');
        companies.forEach(company => {
            const companyCard = document.createElement('div');
            companyCard.className = 'company-card';
            companyCard.innerHTML = `
                <img src="${company.image}" alt="${company.name}">
                <h2>${company.name}</h2>
                <p><strong>Address:</strong> ${company.address}</p>
                <p><strong>Phone:</strong> ${company.phone}</p>
                <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
                <p><strong>Membership Level:</strong> ${company.membershipLevel}</p>
                <p>${company.description}</p>
            `;
            companyList.appendChild(companyCard);
        });
    })
    .catch(error => console.error('Error loading the company data:', error));