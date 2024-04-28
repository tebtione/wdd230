// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date
const lastModifiedDate = document.lastModified;

// Update the footer paragraphs
const footerYear = document.querySelector('#footer-year');
const footerModified = document.querySelector('#footer-modified');

footerYear.textContent = currentYear;
footerModified.textContent = lastModifiedDate;