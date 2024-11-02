// tfa.js

document.addEventListener("DOMContentLoaded", function() {
    // Display last modified date
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.innerText = `Last Modified: ${document.lastModified}`;
    }

    // Toggle navigation on mobile
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    
    if (navToggle && nav) {
        navToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Fetch data from JSON file and render the schools
    fetch('schools.json')
        .then(response => response.json())
        .then(data => renderSchools(data))
        .catch(error => console.error('Error fetching the JSON data:', error));

    // Close modal functionality
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            document.getElementById('modal').style.display = 'none';
        });
    }

    // Form submission event listener
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const query = document.getElementById('school-name').value;
            await fetchSchools(query);
        });
    }

    // Lazy loading images
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
});

// Function to render the schools
function renderSchools(schoolsData) {
    const universityList = document.getElementById('university-list');
    universityList.innerHTML = ''; // Clear previous content

    schoolsData.schools.forEach(school => {
        const schoolItem = document.createElement('div');
        schoolItem.classList.add('school-item');
        schoolItem.innerHTML = `
            <h3>${school.name} (${school.abbreviation})</h3>
            <p><strong>Type:</strong> ${school.type}</p>
            <p><strong>Country:</strong> ${school.country}</p>
            <p><strong>Address:</strong> ${school.address}</p>
            <p><strong>Phone:</strong> ${school.phone}</p>
            <p><strong>Email:</strong> ${school.email || 'N/A'}</p>
            <p><strong>Website:</strong> <a href="${school.website}" target="_blank">${school.website || 'N/A'}</a></p>
            <p><strong>Description:</strong> ${school.description ? school.description.mission || school.description : 'N/A'}</p>
        `;
        universityList.appendChild(schoolItem);
    });
}

// Function to fetch school data and display it
async function fetchSchools(query) {
    try {
        const response = await fetch(`https://api.example.com/schools?search=${query}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        displaySchools(data);
    } catch (error) {
        console.error('Error fetching schools:', error);
    }
}

// Function to display schools in the list
function displaySchools(schools) {
    const schoolsList = document.getElementById('schools-list');
    schoolsList.innerHTML = '';
    schools.forEach(school => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<h3>${school.name}</h3><p>${school.description}</p>`;
        listItem.addEventListener('click', () => showModal(school));
        schoolsList.appendChild(listItem);
    });
}

// Function to show modal with school details
function showModal(school) {
    document.getElementById('modal-title').textContent = school.name;
    document.getElementById('modal-description').textContent = school.description;
    document.getElementById('modal').style.display = 'block';
}
