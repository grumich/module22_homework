const btn = document.querySelector(".btn");
const svgAdd = document.querySelector(".svgAdd");
const svgChange = document.querySelector(".svgChange");

btn.addEventListener("click", () => {
  svgAdd.classList.toggle("hide");
  svgChange.classList.toggle("show");
});