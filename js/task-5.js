function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", () => {
    const rondomColor = getRandomHexColor();
    body.style.backgroundColor = rondomColor;
    colorSpan.textContent = rondomColor;
})