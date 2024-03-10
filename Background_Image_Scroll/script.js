const bgImageEl = document.querySelector("#bgImage");

window.addEventListener("scroll", () => {
  updateImage();
});

const updateImage = () => {
  bgImageEl.style.opacity = 1 - window.pageYOffset / 900;
  bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
  console.log(pageYOffset, 1 - window.pageYOffset / 900);
};
