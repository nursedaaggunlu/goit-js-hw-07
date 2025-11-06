function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#input");
const createBtn = document.querySelector("#create-btn");
const destroyBtn = document.querySelector("#destroy-btn");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  boxesContainer.innerHTML = "";

  if (amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    box.style.display = "inline-block";
    box.style.borderRadius = "4px";
    boxes.push(box);
    size += 10;
  }

  boxesContainer.append(...boxes);
  boxesContainer.style.display = "flex";
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
  boxesContainer.style.display = "none";
}

createBtn.addEventListener("click", () => {
  const amount = Number(input.value.trim());
  createBoxes(amount);
  input.value = "";
});

destroyBtn.addEventListener("click", destroyBoxes);
