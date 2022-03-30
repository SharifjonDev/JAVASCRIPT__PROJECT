"use strict";
const btn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-btn");
let inputScreen = document.querySelector(".screen");

btn.addEventListener("click", function () {
  inputScreen.value = parseInt(inputScreen.value) + 1;
});

closeBtn.addEventListener("click", function () {
  inputScreen.value = 0;
});
