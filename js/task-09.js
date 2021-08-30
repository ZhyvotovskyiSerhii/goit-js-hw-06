

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyElement = document.querySelector("body");
const colors = {
  btn: document.querySelector(".change-color"),
  color: document.querySelector(".color"),
};
colors.btn.addEventListener("click", changeColor);
function changeColor() {
  const color = getRandomHexColor();
  bodyElement.style.backgroundColor = color;
  colors.color.textContent = color;
}
