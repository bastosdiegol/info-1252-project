// Event that Hides and Shows the Menu
addEventListener("load", (event) => {
  // Grabs the Button
  const button = document.getElementById("toggleMenuButton");
  // Grabs the Nav
  const menu = document.getElementById("menuList");
  // Adds the Toggle Menu Event
  button.addEventListener("click", (event) => {
    // Toggle the display property of the menu
    // menu.style.display = menu.style.display === "none" ? "flex" : "none";
    // Toggle the Fading
    menu.classList.toggle("fade-in");
    menu.classList.toggle("fade-out");
  });
});
