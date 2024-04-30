document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    var currentYear = new Date().getFullYear();
  
    // Get the last modified date of the document
    var lastModifiedDate = document.lastModified;
  
    // Update the footer's first paragraph with the current year
    var firstParagraph = document.querySelector("footer p:first-of-type");
    firstParagraph.textContent = "© " + currentYear + " Incomplete Company ";
  
    // Update the footer's second paragraph with the last modified date
    var secondParagraph = document.querySelector("footer p:nth-of-type(2)");
    secondParagraph.textContent = "Last modified:"  + lastModifiedDate;
  });