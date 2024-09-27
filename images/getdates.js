document.addEventListener('DOMContentLoaded',function() {
 //Get the current year and update the footer
 var currentYear = new Date().getFullYear();
 document.getElementById('currentyear').textContent = currentYear; 

 //Get the last mdified date and update the footer
 var lastModifiedDate = document.lastModified;
 document.getElementById('lastModified').textContent = 'Last modified: ' + lastModifiedDate; 
});




// document.addEventListener('DOMContentLoaded', () => {
//     const currentYear = new Date().getFullYear();
//     document.getElementById('currentyear').textContent = currentYear;

//     const lastModified = document.lastModified;
//     document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
// });
