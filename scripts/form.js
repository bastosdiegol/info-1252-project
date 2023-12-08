// Adds Event To The form
addEventListener("load", (event) => {
  let selectSubject = document.getElementById("subject");
  selectSubject.addEventListener("change", (event) => {
    if (selectSubject.value == "quotation") {
      document.getElementById("file").style.display = "block";
      document.getElementById("file-label").style.display = "block";
      document.getElementById("deadline").style.display = "block";
      document.getElementById("deadline-label").style.display = "block";
    } else {
      document.getElementById("file").style.display = "none";
      document.getElementById("file-label").style.display = "none";
      document.getElementById("deadline").style.display = "none";
      document.getElementById("deadline-label").style.display = "none";
    }
  });
});
