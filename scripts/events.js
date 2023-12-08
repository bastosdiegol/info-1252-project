// Sets the menu initial state as hidden
document.getElementById("menuList").style.display = "none";

// Adds Event that Hides and Shows the Menu
addEventListener("load", (event) => {
  // Grabs the Button
  const button = document.getElementById("toggleMenuButton");
  // Grabs the Nav
  const menu = document.getElementById("menuList");
  // Adds the Toggle Menu Event
  button.addEventListener("click", (event) => {
    // Toggle the display property of the menu
    menu.style.display = menu.style.display === "none" ? "flex" : "none";
    // Toggle the Fading
    menu.classList.toggle("fade-in");
    menu.classList.toggle("fade-out");
  });
  // Gets the window width
  const screenWidth = window.innerWidth;
  console.log(screenWidth);
  // Validates the min-width
  if (screenWidth >= 768) {
    // Sets the Menu as active
    menu.style.display = "flex";
    menu.classList.remove("fade-out");
    menu.classList.add("fade-in");
  }
});

// Sets the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
