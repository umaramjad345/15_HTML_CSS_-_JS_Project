const containerEl = document.querySelector(".container");
for (let index = 0; index < 20; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("colorContainer");
  containerEl.append(colorContainerEl);
}
const colorContainerEls = document.querySelectorAll(".colorContainer");

function randomColor() {
  const chars = "0a12b34c56d7e8f9";
  const colorCodeLen = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLen; index++) {
    const randomNum = Math.floor(Math.random() * colorCodeLen);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}

function generateColors() {
  colorContainerEls.forEach((colorContainerEl) => {
    const newColorCode = randomColor();
    colorContainerEl.style.backgroundColor = "#" + newColorCode;
    colorContainerEl.innerText = "#" + newColorCode;
  });
}
generateColors();
