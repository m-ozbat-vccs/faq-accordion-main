"use strict";
// Select all elements with the class 'faq-link'
const faqLinks = document.querySelectorAll(".faq-link");

faqLinks.forEach((link) => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the link from jumping the page

        // Find the icon image related to the clicked link
        // This assumes the icon is a sibling or child of the parent container
        const icon = this.parentElement.querySelector(".faq-icon");
        
        // Define your icon paths
        const plusIcon = "assets/images/icon-plus.svg";
        const minusIcon = "assets/images/icon-minus.svg";

        // Swap the image source based on current state
        if (icon.getAttribute("src") === plusIcon) {
            icon.setAttribute("src", minusIcon);
        } else {
            icon.setAttribute("src", plusIcon);
        }

        // Toggle answer
        const answer = this.parentElement.querySelector(".question-block");
        if (answer) {
            answer.style.display = (answer.style.display === "none") ? "block" : "none";
        }
    });
});

//Reveal hidden paragraph because the top didn't do it...if top 'toggle answer' is removed, it breaks???
var acc = document.getElementsByClassName("question-header");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 

