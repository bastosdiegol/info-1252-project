/**
 * Function that changes the menu visibility in case of width change.
 */
function updateMenuVisibility() {
  // Grabs the Nav
  const menu = document.getElementById("menuList");
  // Gets the window width
  const screenWidth = window.innerWidth;
  // Validates the min-width for Mobile
  if (screenWidth < 768) {
    // Mobile Width Hide the Menu
    menu.style.display = "none";
    menu.classList.remove("fade-in");
    menu.classList.add("fade-out");
  } else {
    // Tablet+ Witdh Sets the Menu as active
    menu.style.display = "flex";
    menu.classList.remove("fade-out");
    menu.classList.add("fade-in");
  }
}

// Initial call for first load
addEventListener("load", (event) => {
  updateMenuVisibility();
});

// Update menu visibility on window resize
addEventListener("resize", (event) => {
  updateMenuVisibility();
});

// Adds Event that Hides and Shows the Menu
addEventListener("load", (event) => {
  // Grabs the Nav
  const menu = document.getElementById("menuList");
  // Grabs the Button
  const button = document.getElementById("toggleMenuButton");
  // Adds the Toggle Menu Event
  button.addEventListener("click", (event) => {
    // Toggle the display property of the menu
    menu.style.display = menu.style.display === "none" ? "flex" : "none";
    // Toggle the Fading
    menu.classList.toggle("fade-in");
    menu.classList.toggle("fade-out");
  });
});

// Sets the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
