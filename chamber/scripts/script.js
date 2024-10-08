async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
}

function displayMembers(members) {
    const memberList = document.querySelector('.member-list');
    memberList.innerHTML = '';

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" />
            <h3>${member.name}</h3>
            <p>${member.description}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        `;
        memberList.appendChild(memberCard);
    });
}

function toggleView(view) {
    const memberList = document.querySelector('.member-list');
    if (view === 'grid') {
        memberList.classList.add('grid-view');
        memberList.classList.remove('list-view');
    } else {
        memberList.classList.add('list-view');
        memberList.classList.remove('grid-view');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchMembers();

    // Toggle buttons (assuming you have buttons in your HTML)
    document.getElementById('grid-view-btn').addEventListener('click', () => toggleView('grid'));
    document.getElementById('list-view-btn').addEventListener('click', () => toggleView('list'));

    // Display copyright year and last modified date
//     const footerYear = new Date().getFullYear();
//     document.querySelector('footer p:first-child').textContent = `© ${footerYear} Timbuktu Chamber of Commerce. Last modified: ${document.lastModified}`;
// });

// document.addEventListener("DOMContentLoaded", () => {
    const footerYear = new Date().getFullYear();
    const copyrightInfo = document.getElementById('copyright-info');
    const lastModifiedInfo = document.getElementById('last-modified-info');
    
    copyrightInfo.textContent = `© ${footerYear} Jeremie Chamber of Commerce`;
    lastModifiedInfo.textContent = `Last modified: ${document.lastModified}`;
});


// Display copyright year and last modified date
// document.addEventListener("DOMContentLoaded", () => {
//     const footerYear = new Date().getFullYear();
//     const copyrightInfo = document.getElementById('copyright-info');
//     copyrightInfo.textContent = `© ${footerYear} Timbuktu Chamber of Commerce. Last modified: ${document.lastModified}`;
// });


// HOME PAGE
$(document).ready(function () {
    // Fetch current weather data
    const apiKey = 'd30aeef1aba8c207363ba2f642f3b4c4';
    const city = 'Jeremie'; // Changer la ville ici
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    $.get(weatherApiUrl, function (data) {
        const temperature = Math.round(data.main.temp);
        const weatherDescription = data.weather.map(w => w.description.charAt(0).toUpperCase() + w.description.slice(1)).join(", ");
        const high = Math.round(data.main.temp_max);
        const low = Math.round(data.main.temp_min);
        const humidity = data.main.humidity;
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

        $('#degreeF').text(`Current Temperature: ${temperature}°F`);
        $('#weatherDescription').text(`Weather: ${weatherDescription}`);
        $('#high').text(`High: ${high}°F`);
        $('#low').text(`Low: ${low}°F`);
        $('#humidity').text(`Humidity: ${humidity}%`);
        $('#sunrise').text(`Sunrise: ${sunrise}`);
        $('#sunset').text(`Sunset: ${sunset}`);
        $('#weather-details').show();
    });

    // Sample events
    const events = [
        { title: "Networking Event", date: "October 15, 2024" },
        { title: "Annual Gala", date: "November 5, 2024" },
    ];

    events.forEach(event => {
        $('#events-list').append(`<li>${event.title} - ${event.date}</li>`);
    });

    // Sample business spotlights
    const businesses = [
        {
            name: "Business One",
            tagLine: "Your go-to for everything!",
            email: "contact@businessone.com",
            phone: "(123) 456-7890",
            url: "https://businessone.com",
            image: "path/to/image.jpg"
        },
        {
            name: "Business Two",
            tagLine: "Your go-to for everything!",
            email: "contact@businessone.com",
            phone: "(123) 456-7890",
            url: "https://businessone.com",
            image: "path/to/image.jpg"
        },
        {
            name: "Business Three",
            tagLine: "Your go-to for everything!",
            email: "contact@businessone.com",
            phone: "(123) 456-7890",
            url: "https://businessone.com",
            image: "path/to/image.jpg"
        }
        
    ];

    businesses.forEach(business => {
        $('#spotlights-container').append(`
            <div class="spotlight">
                <h4>${business.name}</h4>
                <p>${business.tagLine}</p>
                <div class="card-separator"></div>
                <div style="display: flex; justify-content: space-between;">
                    <img src="${business.image}" alt="${business.name}" style="width: 50%; height: auto;">
                    <div>
                        <p>Email: ${business.email}</p>
                        <p>Phone: ${business.phone}</p>
                        <p>Website: <a href="${business.url}" target="_blank">${business.url}</a></p>
                    </div>
                </div>
            </div>
        `);
    });

    // Fetch weather forecast data if needed and append to #forecast-data
    // Example code here...
});
