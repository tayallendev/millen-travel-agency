/*** Navigation Toggle ***/

//button that handles nav toggle
const linksToggle = document.getElementById("navigation-toggle");

//<ul> containing the links
const links = document.getElementById("navigation-links");

//adds this class to the <ul> to trigger css height attribute
linksToggle.onclick = function() {
    links.classList.toggle("show-links");
}

/*** Smooth Scroll ***/

const scrollLinks = document.querySelectorAll("scroll-to");