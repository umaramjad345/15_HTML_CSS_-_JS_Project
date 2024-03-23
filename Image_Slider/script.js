const imgEls = document.querySelectorAll("img");
const imageContainerEl = document.querySelector(".imageContainer");
const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");

let currentImage = 1;
let timeout;

nextEl.addEventListener("click", () => {
  currentImage++;
  clearTimeout(timeout);
  updateImg();
});
prevEl.addEventListener("click", () => {
  currentImage--;
  clearTimeout(timeout);
  updateImg();
});

const updateImg = () => {
  if (currentImage > imgEls.length) {
    currentImage = 1;
  } else if (currentImage < 1) {
    currentImage = imgEls.length;
  }
  imageContainerEl.style.transform = `translateX(-${
    (currentImage - 1) * 500
  }px)`;
  timeout = setTimeout(() => {
    currentImage++;
    updateImg();
  }, 3000);
};

updateImg();
