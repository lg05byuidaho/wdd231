// FOOTER PART



// DIRECTORY PART
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
            <p><strong>Email:</strong> ${member.email}</p>
            <p><strong>Tagline:</strong> ${member.tagline}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        `;
        memberList.appendChild(memberCard);
    });
}

// ---------------------------------------------------

function updateLastModified() {
    const lastModifiedDate = document.lastModified;
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = 'Last modified: ' + lastModifiedDate;
    }
}

// Call this function on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    fetchMembers();
    updateLastModified();

    document.getElementById('grid-view-btn').addEventListener('click', () => toggleView('grid'));
    document.getElementById('list-view-btn').addEventListener('click', () => toggleView('list'));
});


// document.addEventListener('DOMContentLoaded', () => {
//     fetchWeather();
//     fetchForecast();
// });

// async function fetchWeather() {
//     const apiKey = 'd30aeef1aba8c207363ba2f642f3b4c4';
//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Jeremie,HT&appid=${apiKey}&units=imperial`);
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         displayWeather(data);
//     } catch (error) {
//         console.error('Fetch weather error:', error);
//     }
// }

// function displayWeather(data) {
//     const temperature = Math.round(data.main.temp);
//     const weatherDescription = data.weather.map(w => w.description.charAt(0).toUpperCase() + w.description.slice(1)).join(', ');
//     const humidity = data.main.humidity;
//     const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
//     const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

//     // Utilisation d'une icône plus appropriée (exemple)
//     document.getElementById('weather-image').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
//     document.getElementById('weather-data').innerHTML = `
//         <div style="display: flex; align-items: center;">
//             <img id="weather-image" src="" alt="Weather Icon" style="max-width: 50px; margin-right: 10px;">
//             <div>
//                 <strong>Temperature:</strong> <strong>${temperature}°F</strong><br>
//                 <strong>Description:</strong> ${weatherDescription}<br>
//                 <strong>Humidity:</strong> <strong>${humidity}%</strong><br>
//                 <strong>Sunrise:</strong> ${sunrise}<br>
//                 <strong>Sunset:</strong> ${sunset}
//             </div>
//         </div>
//     `;
// }

// async function fetchForecast() {
//     const apiKey = 'd30aeef1aba8c207363ba2f642f3b4c4';
//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Jeremie,HT&appid=${apiKey}&units=imperial`);
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         displayForecast(data);
//     } catch (error) {
//         console.error('Fetch forecast error:', error);
//     }
// }

// function displayForecast(data) {
//     const forecastData = data.list.filter(item => item.dt_txt.includes("12:00:00")); // Obtenir les prévisions à midi
//     const forecastContainer = document.getElementById('forecast-data');
//     forecastContainer.innerHTML = '';

//     // On récupère les prévisions pour aujourd'hui et les deux jours suivants
//     forecastData.slice(0, 3).forEach((item, index) => {
//         const temp = Math.round(item.main.temp);
//         const day = index === 0 ? "Today" : new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
//         forecastContainer.innerHTML += `<p><strong>${day}:</strong> <strong>${temp}°F</strong></p>`;
//     });
// }


// HOME PART
document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    fetchForecast();
});

async function fetchWeather() {
    const apiKey = 'd30aeef1aba8c207363ba2f642f3b4c4';
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Jeremie,HT&appid=${apiKey}&units=imperial`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Fetch weather error:', error);
    }
}

function displayWeather(data) {
    const temperature = Math.round(data.main.temp);
    const weatherDescription = data.weather.map(w => w.description.charAt(0).toUpperCase() + w.description.slice(1)).join(', ');
    const humidity = data.main.humidity;
    const high = Math.round(data.main.temp_max);
    const low = Math.round(data.main.temp_min);
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

    // Ajouter l'icône météo
    const weatherImage = document.getElementById('weather-image');
    weatherImage.src = 'images/weather-image.png'; // Mettre à jour avec le chemin de l'image
    weatherImage.alt = weatherDescription;

    document.getElementById('weather-data').innerHTML = `
        <strong>${temperature}°F</strong><br>
        ${weatherDescription}<br>
        Humidity: ${humidity}%<br>
        High: ${high}°F<br>
        Low: ${low}°F<br>
        Sunrise: ${sunrise}<br>
        Sunset: ${sunset}
    `;
}



async function fetchForecast() {
    const apiKey = 'd30aeef1aba8c207363ba2f642f3b4c4';
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Jeremie,HT&appid=${apiKey}&units=imperial`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        displayForecast(data);
    } catch (error) {
        console.error('Fetch forecast error:', error);
    }
}

function displayForecast(data) {
    const forecastData = data.list.filter(item => item.dt_txt.includes("12:00:00")); // Obtenir les prévisions à midi
    const forecastContainer = document.getElementById('forecast-data');
    forecastContainer.innerHTML = '';

    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Affiche "Today" pour le jour actuel et les deux jours suivants
    forecastData.slice(0, 3).forEach((item, index) => {
        const temp = Math.round(item.main.temp);
        const day = index === 0 ? "Today" : days[(today.getDay() + index) % 7]; // Pour le jour actuel et les suivants
        forecastContainer.innerHTML += `<p>${day}: <strong>${temp}°F</strong></p>`; // Supprimé le gras du jour
    });
}

// Te Bon **************************************************************************
// document.addEventListener('DOMContentLoaded', () => {
//     fetchMembers();
//     fetchWeather(); // Appel de la fonction pour récupérer la météo
//     fetchForecast(); // Appel de la fonction pour récupérer les prévisions
// });

// async function fetchWeather() {
//     const apiKey = 'd30aeef1aba8c207363ba2f642f3b4c4';
//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Jeremie,HT&appid=${apiKey}&units=imperial`);
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         displayWeather(data);
//     } catch (error) {
//         console.error('Fetch weather error:', error);
//     }
// }

// function displayWeather(data) {
//     const temperature = Math.round(data.main.temp);
//     const weatherDescription = data.weather.map(w => w.description.charAt(0).toUpperCase() + w.description.slice(1)).join(', ');
//     const humidity = data.main.humidity;
//     const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
//     const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

//     document.getElementById('weather-image').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
//     document.getElementById('weather-data').innerHTML = `
//         Temperature: ${temperature}°F<br>
//         Description: ${weatherDescription}<br>
//         Humidity: ${humidity}%<br>
//         Sunrise: ${sunrise}<br>
//         Sunset: ${sunset}
//     `;
// }

// async function fetchForecast() {
//     const apiKey = 'd30aeef1aba8c207363ba2f642f3b4c4';
//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Jeremie,HT&appid=${apiKey}&units=imperial`);
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         displayForecast(data);
//     } catch (error) {
//         console.error('Fetch forecast error:', error);
//     }
// }

// function displayForecast(data) {
//     const forecastData = data.list.filter(item => item.dt_txt.includes("12:00:00")); // Obtenir les prévisions à midi
//     const forecastContainer = document.getElementById('forecast-data');
//     forecastContainer.innerHTML = '';

//     forecastData.forEach(item => {
//         const date = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
//         const temp = Math.round(item.main.temp);
//         forecastContainer.innerHTML += `<p>${date}: ${temp}°F</p>`;
//     });
// }

// ************************************************

// async function fetchMembers() {
//     const response = await fetch('data/members.json');
//     const members = await response.json();
//     const filteredMembers = members.filter(member => member.membership_level >= 2); // Gold or Silver
//     const randomMembers = getRandomMembers(filteredMembers, 3); // Obtenir jusqu'à 3 membres
//     displayMembers(randomMembers);
// }

// function displayMembers(members) {
//     const container = document.getElementById('spotlights-container');
//     container.innerHTML = '';
//     members.forEach(member => {
//         const memberCard = `
//             <div class="member-card">
//                 <h3>${member.name}</h3>
//                 <p>${member.description}</p>
//                 <hr>
//                 <p><img src="${member.image}" alt="${member.name}">Email: ${member.email}</p>
//                 <p>Phone: ${member.phone}</p>
//                 <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
//             </div>
//         `;
//         container.innerHTML += memberCard;
//     });
// }

// fetchWeather();
// fetchForecast();
// fetchMembers();
// ----------------------------------------------------------------------------------

// function displayWeather(data) {
//     const temperature = Math.round(data.main.temp);
//     const weatherDescription = data.weather.map(w => w.description.charAt(0).toUpperCase() + w.description.slice(1)).join(', ');
//     const humidity = data.main.humidity;
//     const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
//     const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

//     // Ajouter l'icône météo
//     const weatherImage = document.getElementById('weather-image');
//     weatherImage.src = 'images/weather-image.png'; // Chemin de l'icône
//     weatherImage.alt = weatherDescription;

//     document.getElementById('weather-data').innerHTML = `
//         <div style="display: flex; align-items: center;">
//             <img id="weather-image" src="images/weather-image.png" alt="Weather Icon" style="max-width: 50px; margin-right: 10px;">
//             <div>
//                 Temperature:<strong>${temperature}°F</strong><br>
//                 Description: ${weatherDescription}<br>
//                 Humidity: ${humidity}%<br>
//                 Sunrise: ${sunrise}<br>
//                 Sunset: ${sunset}
//             </div>
//         </div>
//     `;
// }

// function displayWeather(data) {
//     const temperature = Math.round(data.main.temp);
//     const weatherDescription = data.weather.map(w => w.description.charAt(0).toUpperCase() + w.description.slice(1)).join(', ');
//     const humidity = data.main.humidity;
//     const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
//     const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

//     // On s'assure que l'icône est insérée correctement
//     const weatherImage = 'images/weather-image.png'; // Chemin de l'icône

//     document.getElementById('weather-data').innerHTML = `
//         <div style="display: flex; align-items: center;">
//             <img src="${weatherImage}" alt="${weatherDescription}" style="max-width: 50px; margin-right: 10px;">
//             <div>
//                 <strong>Temperature:</strong> <strong>${temperature}°F</strong><br>
//                 <strong>Description:</strong> ${weatherDescription}<br>
//                 <strong>Humidity:</strong> ${humidity}%<br>
//                 <strong>Sunrise:</strong> ${sunrise}<br>
//                 <strong>Sunset:</strong> ${sunset}
//             </div>
//         </div>
//     `;
// }


// -------Member Card-------

document.addEventListener('DOMContentLoaded', () => {
    fetchMembers();
});

async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function displayMembers(members) {
    const spotlightsContainer = document.getElementById('spotlights-container');
    spotlightsContainer.innerHTML = ''; // Vider le conteneur avant d'ajouter

    // Filtrer les membres Gold et Silver
    const qualifiedMembers = members.filter(member => member.membership_level === 2 || member.membership_level === 3);
    
    // Randomiser l'ordre et prendre jusqu'à 3 membres
    const randomMembers = qualifiedMembers.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    randomMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML = `
            <h3>${member.name}</h3>
            <p class="tagline">${member.tagline}</p>
            <hr>
            <div class="card-details">
                <img src="${member.image}" alt="${member.name}" style="width: 25%; margin-right: 10px;">
                <div>
                    <p><strong>Email:</strong> ${member.email}</p>
                    <p><strong>Téléphone:</strong> ${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">Visiter le site</a></p>
                </div>
            </div>
        `;
        spotlightsContainer.appendChild(memberCard);
    });
}




// JOIN PART

// document.addEventListener('DOMContentLoaded', () => {
//     // Show membership cards with animation
//     const cards = document.querySelectorAll('.membership-card');
//     cards.forEach((card, index) => {
//         setTimeout(() => {
//             card.classList.add('show');
//         }, index * 300);
//     });

//     // Handle modal display
//     const buttons = document.querySelectorAll('button[data-modal]');
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             const modalId = button.getAttribute('data-modal');
//             const modal = document.getElementById(modalId);
//             modal.style.display = 'block'; // Show modal (additional styles needed)
//         });
//     });

//     // Set the timestamp
//     document.getElementById('timestamp').value = new Date().toISOString();
// });


// *********************************************************************************************


// script.js
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Pour thankyou.html
    if (document.getElementById('first-name')) {
        document.getElementById('first-name').textContent = urlParams.get('first-name');
        document.getElementById('last-name').textContent = urlParams.get('last-name');
        document.getElementById('email').textContent = urlParams.get('email');
        document.getElementById('mobile').textContent = urlParams.get('mobile');
        document.getElementById('business-name').textContent = urlParams.get('business-name');
        document.getElementById('timestamp').textContent = new Date(urlParams.get('timestamp')).toLocaleString();
    }
    
    // Pour join.html
    const timestampInput = document.getElementById('timestamp');
    if (timestampInput) {
        timestampInput.value = new Date().toISOString();
    }
});




// DISCOVER PART

// document.addEventListener("DOMContentLoaded", () => {
//     const messageElement = document.getElementById("visitor-message");
//     const lastVisit = localStorage.getItem("lastVisit");
//     const currentDate = Date.now();

//     if (!lastVisit) {
//         messageElement.textContent = "Welcome! Let us know if you have any questions.";
//     } else {
//         const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
        
//         if (daysSinceLastVisit < 1) {
//             messageElement.textContent = "Back so soon! Awesome!";
//         } else {
//             messageElement.textContent = `You last visited ${daysSinceLastVisit} day${daysSinceLastVisit > 1 ? 's' : ''} ago.`;
//         }
//     }

//     localStorage.setItem("lastVisit", currentDate);
// });


// script.js
// *********************3*************************
// document.addEventListener("DOMContentLoaded", function() {
//     let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

//     if ("IntersectionObserver" in window) {
//         let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
//             entries.forEach(function(entry) {
//                 if (entry.isIntersecting) {
//                     let lazyImage = entry.target;
//                     lazyImage.src = lazyImage.dataset.src;
//                     lazyImage.classList.remove("lazy");
//                     lazyImageObserver.unobserve(lazyImage);
//                 }
//             });
//         });

//         lazyImages.forEach(function(lazyImage) {
//             lazyImageObserver.observe(lazyImage);
//         });
//     }

//     // LocalStorage for last visit
//     const lastVisit = localStorage.getItem("lastVisit");
//     const currentTime = new Date().getTime();
//     const oneDay = 24 * 60 * 60 * 1000;
//     let message = '';

//     if (lastVisit) {
//         const daysPassed = Math.floor((currentTime - lastVisit) / oneDay);

//         if (daysPassed < 1) {
//             message = "Welcome back! You last visited today.";
//         } else if (daysPassed === 1) {
//             message = "Welcome back! You last visited yesterday.";
//         } else {
//             message = `Welcome back! You last visited ${daysPassed} days ago.`;
//         }
//     } else {
//         message = "Welcome! This is your first visit.";
//     }

//     localStorage.setItem("lastVisit", currentTime);
//     document.getElementById("last-visit-message").textContent = message;
// });





// document.addEventListener("DOMContentLoaded", function() {
//     let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

//     if ("IntersectionObserver" in window) {
//         let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
//             entries.forEach(function(entry) {
//                 if (entry.isIntersecting) {
//                     let lazyImage = entry.target;
//                     lazyImage.src = lazyImage.dataset.src;
//                     lazyImage.classList.remove("lazy");
//                     lazyImageObserver.unobserve(lazyImage);
//                 }
//             });
//         });

//         lazyImages.forEach(function(lazyImage) {
//             lazyImageObserver.observe(lazyImage);
//         });
//     }

//     // LocalStorage for last visit
//     const lastVisit = localStorage.getItem("lastVisit");
//     const currentTime = new Date().getTime();
//     const oneDay = 24 * 60 * 60 * 1000;
//     let message = '';

//     if (lastVisit) {
//         const daysPassed = Math.floor((currentTime - lastVisit) / oneDay);

//         if (daysPassed < 1) {
//             message = "Back so soon! Awesome!";
//         } else if (daysPassed === 1) {
//             message = "You last visited 1 day ago.";
//         } else {
//             message = `You last visited ${daysPassed} days ago.`;
//         }
//     } else {
//         message = "Welcome! Let us know if you have any questions.";
//     }

//     localStorage.setItem("lastVisit", currentTime);
//     document.getElementById("last-visit-message").textContent = message;

//     // Display the current date in the calendar
//     const calendarDiv = document.getElementById("calendar");
//     const currentDate = new Date();
//     calendarDiv.textContent = currentDate.toDateString();
// });




// script.js

// document.addEventListener("DOMContentLoaded", function() {
//     let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

//     if ("IntersectionObserver" in window) {
//         let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
//             entries.forEach(function(entry) {
//                 if (entry.isIntersecting) {
//                     let lazyImage = entry.target;
//                     lazyImage.src = lazyImage.dataset.src;
//                     lazyImage.classList.remove("lazy");
//                     lazyImageObserver.unobserve(lazyImage);
//                 }
//             });
//         });

//         lazyImages.forEach(function(lazyImage) {
//             lazyImageObserver.observe(lazyImage);
//         });
//     }

//     // LocalStorage for last visit
//     const lastVisit = localStorage.getItem("lastVisit");
//     const currentTime = new Date().getTime();
//     const oneDay = 24 * 60 * 60 * 1000;





// document.addEventListener("DOMContentLoaded", () => {
//     const messageElement = document.getElementById("visitor-message");
//     const lastVisit = localStorage.getItem("lastVisit");
//     const currentDate = Date.now();

//     if (!lastVisit) {
//         messageElement.textContent = "Welcome! Let us know if you have any questions.";
//     } else {
//         const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
        
//         if (daysSinceLastVisit < 1) {
//             messageElement.textContent = "Back so soon! Awesome!";
//         } else {
//             messageElement.textContent = `You last visited ${daysSinceLastVisit} day${daysSinceLastVisit > 1 ? 's' : ''} ago.`;
//         }
//     }

//     localStorage.setItem("lastVisit", currentDate);

//     // Generate calendar
//     function generateCalendar(month, year) {
//         const calendarElement = document.getElementById("calendar");
//         calendarElement.innerHTML = ""; // Clear previous content

//         const date = new Date(year, month);
//         const daysInMonth = new Date(year, month + 1, 0).getDate();
//         const firstDayIndex = date.getDay();

//         // Create header for month and year
//         const monthNames = ["January", "February", "March", "April", "May", "June", 
//                             "July", "August", "September", "October", "November", "December"];
//         const header = document.createElement("h3");
//         header.textContent = `${monthNames[month]} ${year}`;
//         calendarElement.appendChild(header);

//         // Create days of the week
//         const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//         const daysHeader = document.createElement("div");
//         daysHeader.className = "days-header";
//         daysOfWeek.forEach(day => {
//             const dayElement = document.createElement("span");
//             dayElement.textContent = day;
//             daysHeader.appendChild(dayElement);
//         });
//         calendarElement.appendChild(daysHeader);

//         // Create empty cells for days before the first day of the month
//         for (let i = 0; i < firstDayIndex; i++) {
//             const emptyCell = document.createElement("span");
//             calendarElement.appendChild(emptyCell);
//         }

//         // Create cells for each day of the month
//         for (let day = 1; day <= daysInMonth; day++) {
//             const dayCell = document.createElement("span");
//             dayCell.textContent = day;
//             if (day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
//                 dayCell.classList.add("today"); // Highlight today's date
//             }
//             calendarElement.appendChild(dayCell);
//         }
//     }

//     // Generate calendar for the current month
//     const today = new Date();
//     generateCalendar(today.getMonth(), today.getFullYear());
// });



// document.addEventListener("DOMContentLoaded", function() {
//     let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

//     if ("IntersectionObserver" in window) {
//         let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
//             entries.forEach(function(entry) {
//                 if (entry.isIntersecting) {
//                     let lazyImage = entry.target;
//                     lazyImage.src = lazyImage.dataset.src;
//                     lazyImage.classList.remove("lazy");
//                     lazyImageObserver.unobserve(lazyImage);
//                 }
//             });
//         });

//         lazyImages.forEach(function(lazyImage) {
//             lazyImageObserver.observe(lazyImage);
//         });
//     }

//     // LocalStorage for last visit
//     const lastVisit = localStorage.getItem("lastVisit");
//     const currentTime = new Date().getTime();
//     const oneDay = 24 * 60 * 60 * 1000;
//     let message = '';

//     if (lastVisit) {
//         const daysPassed = Math.floor((currentTime - lastVisit) / oneDay);

//         if (daysPassed < 1) {
//             message = "Back so soon! Awesome!";
//         } else if (daysPassed === 1) {
//             message = "You last visited 1 day ago.";
//         } else {
//             message = `You last visited ${daysPassed} days ago.`;
//         }
//     } else {
//         message = "Welcome! Let us know if you have any questions.";
//     }

//     localStorage.setItem("lastVisit", currentTime);
//     document.getElementById("last-visit-message").textContent = message;

//     // Display the current date in the calendar header
//     const calendarHeader = document.getElementById("calendar-header");
//     const currentDate = new Date();
//     calendarHeader.textContent = currentDate.toDateString();

//     // Generate the calendar for October
//     const calendarDiv = document.getElementById("calendar");
//     const daysInMonth = 31;
//     const firstDay = new Date(currentDate.getFullYear(), 9, 1).getDay(); // October (month 9 in JS)

//     for (let i = 0; i < firstDay; i++) {
//         const emptyDiv = document.createElement("div");
//         calendarDiv.appendChild(emptyDiv);
//     }

//     for (let day = 1; day <= daysInMonth; day++) {
//         const dayDiv = document.createElement("div");
//         dayDiv.textContent = day;
//         calendarDiv.appendChild(dayDiv);
//     }
// });



document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }

    // LocalStorage for last visit
    const lastVisit = localStorage.getItem("lastVisit");
    const currentTime = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000;
    let message = '';

    if (lastVisit) {
        const daysPassed = Math.floor((currentTime - lastVisit) / oneDay);

        if (daysPassed < 1) {
            message = "Back so soon! Awesome!";
        } else if (daysPassed === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = `You last visited ${daysPassed} days ago.`;
        }
    } else {
        message = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem("lastVisit", currentTime);
    document.getElementById("last-visit-message").textContent = message;

    // Calendar functionality
    const monthYearSpan = document.getElementById("month-year");
    const calendarDiv = document.getElementById("calendar");
    let currentDate = new Date();

    function renderCalendar(date) {
        calendarDiv.innerHTML = '';
        monthYearSpan.textContent = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement("div");
            calendarDiv.appendChild(emptyDiv);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement("div");
            dayDiv.textContent = day;

            if (day === currentDate.getDate() && date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear()) {
                dayDiv.classList.add("current-day");
            }

            calendarDiv.appendChild(dayDiv);
        }
    }

    document.getElementById("prev-month").addEventListener("click", function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    document.getElementById("next-month").addEventListener("click", function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});
