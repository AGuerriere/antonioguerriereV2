const toggleButton = document.querySelector(".toggle-button")
const links = document.querySelector(".links")
let toggled = false;

toggleButton.addEventListener('click', () => {
  toggled = !toggled; // Toggle the value of 'toggled' (true -> false, false -> true)
  links.style.display = toggled ? "flex" : "none"; // Use the ternary operator to set the display property
  toggleButton.style.top = toggled ? "0.75rem" : "auto";
});