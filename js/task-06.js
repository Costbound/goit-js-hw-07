function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

createBtn.addEventListener("click", () => { input.value > 100 ? alert("Max amount of boxes is 100") : createBoxes(Number(input.value)) });
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  if (input.value !== "" && amount > 1) {  
    boxes.innerHTML = "";
    console.log(amount);
    let width = 30;
    let height = 30;
    const boxList = [];
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${width}px`;
      box.style.height = `${height}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxList.push(box);
      width += 10;
      height += 10;
    }
    boxes.append(...boxList);
    input.value = "";
  }
}

function destroyBoxes() {
    boxes.innerHTML = "";
}

