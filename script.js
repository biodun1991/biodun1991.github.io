let loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

//  email send

//   (function () {
//     emailjs.init("5Rrz1HCmtPGDZBWf7");
//   })();

// code that hide the menu list when any of the link is clicked

const listItem = document.querySelectorAll(".list-items");
const buttonItem = document.querySelector(".button-div .navbar-toggler"); // Correct the selector
const menu = document.querySelector(".d-menu"); // Correct the selector

if (buttonItem && menu) {
  for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener("click", function () {
      if (window.innerWidth < 768) {
        buttonItem.click();
      }
    });
  }
}
