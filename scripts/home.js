const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// Display courses dynamically
const courseContainer = document.getElementById('courseContainer');

// function displayCourses(filter = '') {
//     courseContainer.innerHTML = '';
//     courses
//         .filter(course => !filter || course.subject === filter)
//         .forEach(course => {
//             const courseCard = document.createElement('div');
//             courseCard.className = course.completed ? 'course completed' : 'course';
//             courseCard.innerHTML = `
//                 <h3>${course.title}</h3>
//                 <p>Code: ${course.subject} ${course.number}</p>
//                 <p>Credits: ${course.credits}</p>
//                 <p>${course.description}</p>
//                 <p>Technologies: ${course.technology.join(', ')}</p>
//             `;
//             courseContainer.appendChild(courseCard);
//         });
// }




function displayCourses(filter = '') {
    courseContainer.innerHTML = '';
    courses
        .filter(course => !filter || course.subject === filter)
        .forEach(course => {
            const courseButton = document.createElement('button');
            courseButton.className = 'course-button';
            courseButton.textContent = `${course.subject} ${course.number}`; // Display subject and number
            
            // Set background color based on completion status
            courseButton.style.backgroundColor = course.completed ? '#581d1d' : '#e6eef2';
            courseButton.style.color = course.completed ? 'white' : 'black';
            courseButton.style.fontWeight = 'bold'; // Set font weight to bold
            courseButton.onclick = () => {
                // Optional: Add functionality when the button is clicked
                alert(`${course.subject} ${course.number}: ${course.description}`);
            };
            courseContainer.appendChild(courseButton);
        });
}

// Initial display of all courses
displayCourses();


// function displayCourses(filter = '') {
//     courseContainer.innerHTML = '';
//     courses
//         .filter(course => !filter || course.subject === filter)
//         .forEach(course => {
//             const courseButton = document.createElement('button');
//             courseButton.className = course.completed ? 'course completed' : 'course';
//             // 'course-button';
//             // courseButton.textContent = course.title;
//             courseButton.textContent = `${course.subject} ${course.number}`;
//             courseButton.onclick = () => {
//                 // Optional: Add functionality when the button is clicked
//                 alert(`${course.title}: ${course.description}`);
//             };
//             courseContainer.appendChild(courseButton);
//         });
// }

// // Initial display of all courses
// displayCourses();




// Initial display of all courses
displayCourses();

// Filter courses
document.getElementById('filterCSE').addEventListener('click', () => displayCourses('CSE'));
document.getElementById('filterWDD').addEventListener('click', () => displayCourses('WDD'));
document.getElementById('filterAll').addEventListener('click', () => displayCourses(''));

// Calculate total credits
const totalCredits = courses.reduce((total, course) => total + course.credits, 0);
document.getElementById('totalCredits').textContent = `Total Credits: ${totalCredits}`;



const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});



