const imageContainerEl = document.querySelector(".imageContainer");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  imageNum = 10;
  addNewImages();
});

const addNewImages = () => {
  for (let index = 1; index <= imageNum; index++) {
    const newImageEl = document.createElement("img");
    newImageEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageContainerEl.appendChild(newImageEl);
  }
};
