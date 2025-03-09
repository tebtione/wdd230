const baseURL = "https://tebtione.github.io/wdd230/";
const linlsURL = "https://tebtione.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

function displayLinks(weeks) {
    const linksContainer = document.getElementById("linksContainer");
    linksContainer.innerHTML = ""; // Clear any existing content

    weeks.forEach(week => {
        const weekHeading = document.createElement("h3");
        weekHeading.textContent = `Lesson ${week.lesson}`;
        linksContainer.appendChild(weekHeading);

        const linksList = document.createElement("ul");

        week.links.forEach(link => {
            const listItem = document.createElement("li");
            const anchor = document.createElement("a");
            anchor.href = baseURL + link.url;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        linksContainer.appendChild(linksList);
    });
}

getLinks();