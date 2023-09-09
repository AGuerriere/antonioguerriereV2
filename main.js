const toggleButton = document.querySelector(".toggle-button");
const links = document.querySelector(".links");
const navbuttons = document.querySelectorAll('.links a');
let toggled = false;

// clicking on the hamurger menu opens or closes the navbar
toggleButton.addEventListener('click', () => {
  toggled = !toggled; // Toggle the value of 'toggled' (true -> false, false -> true)
  links.style.display = toggled ? "flex" : "none"; // Use the ternary operator to set the display property
  toggleButton.style.top = toggled ? "0.75rem" : "auto";
  toggleButton.style.backgroundColor = toggled ? "var(--rosso)" : "black";
});

// clicking on the links in the navbar, closes the navbar and removes the red style
navbuttons.forEach(element => {
  element.addEventListener('click', () => {
    toggled = !toggled;
    links.style.display = "none";
    toggleButton.style.top = "auto";
    toggleButton.style.backgroundColor = toggled ? "var(--rosso)" : "black";
  })
});


// clicking outside the navbar closes the navbar
const body = document.querySelector('body');
const nav = document.querySelector('nav')
body.addEventListener("click", function () {
  toggled = false;
  links.style.display = "none";
  toggleButton.style.top = "auto";
  toggleButton.style.backgroundColor = toggled ? "var(--rosso)" : "black";
}, false);
nav.addEventListener("click", function (e) {
    e.stopPropagation(); //this is important! If removed, you'll get both alerts
}, false);