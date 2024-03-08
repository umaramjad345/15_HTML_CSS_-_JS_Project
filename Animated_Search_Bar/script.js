const searchEl = document.querySelector(".searchBarContainer");
const magEl = document.querySelector(".magIcon");
magEl.addEventListener("click", () => {
  searchEl.classList.toggle("active");
});
