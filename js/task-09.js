function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let colorName = document.querySelector(".color");
const body = document.querySelector("body")
const colorBtn = document.querySelector(".change-color");

colorBtn.addEventListener("click", () => {
  let newColor = getRandomHexColor()
  colorName.innerText = newColor;
  body.style.backgroundColor = newColor;
});
