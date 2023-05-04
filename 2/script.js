const btn = document.querySelector(".btn");
const svgAdd = document.querySelector(".svgAdd");
const svgChange = document.querySelector(".svgChange");

btn.addEventListener("click", () => {
  svgAdd.classList.toggle("hide");
  svgChange.classList.toggle("show");
});

const getSize = document.querySelector(".getSize");
const sizeInfo = document.querySelector(".sizeInfo");

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

getSize.addEventListener("click", () => {
  sizeInfo.textContent = `Ширина экрана ${screenWidth}px / Высота ${screenHeight}px`;
});
