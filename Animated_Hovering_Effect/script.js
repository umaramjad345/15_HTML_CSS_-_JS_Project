const containerEl = document.querySelector(".container");
const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");

leftEl.addEventListener("mouseenter", () => {
  containerEl.classList.add("activeLeft");
});
leftEl.addEventListener("mouseleave", () => {
  containerEl.classList.remove("activeLeft");
});
rightEl.addEventListener("mouseenter", () => {
  containerEl.classList.add("activeRight");
});
rightEl.addEventListener("mouseleave", () => {
  containerEl.classList.remove("activeRight");
});
