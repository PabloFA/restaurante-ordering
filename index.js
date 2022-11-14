import { menuArray } from "./data.js";
const food = document.getElementById("food");
const popup = document.getElementById("pop-up");
const closeBtn = document.getElementById("close-btn");

food.addEventListener("click", function () {
  popup.style.display = "inline";
  console.log("dasdads");
});

closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});
/*
document.body.addEventListener("click", function () {
  popup.style.display = "none";
});
*/
