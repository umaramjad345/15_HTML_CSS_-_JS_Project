const nextBtnEl = document.getElementById("next");
const prevBtnEl = document.getElementById("prev");
const stepEls = document.querySelectorAll(".step");
const progBarFrontEl = document.querySelector(".progressBarFront");

let index = 1;
nextBtnEl.addEventListener("click", () => {
  index++;
  if (index > stepEls.length) {
    index = stepEls.length;
  }
  updateStepProgress();
});
prevBtnEl.addEventListener("click", () => {
  index--;
  if (index < 1) {
    index = 1;
  }
  updateStepProgress();
});
function updateStepProgress() {
  stepEls.forEach((stepEl, idx) => {
    if (idx < index) {
      stepEl.classList.add("checked");
      stepEl.innerHTML = `<i class="fa-solid fa-check"></i> <small> ${
        idx === 0
          ? "Start"
          : idx === stepEls.length - 1
          ? "Final"
          : "Step " + idx
      }</small>`;
    } else {
      stepEl.classList.remove("checked");
      stepEl.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }
  });
  const checkedNums = document.querySelectorAll(".checked");
  progBarFrontEl.style.width =
    ((checkedNums.length - 1) / (stepEls.length - 1)) * 100 + "%";

  // Other Way of Animating Front Bar
  // progBarFrontEl.style.width = (index-1) * 25 + "%";

  if (index === 1) {
    prevBtnEl.disabled = true;
  } else if (index === stepEls.length) {
    nextBtnEl.disabled = true;
  } else {
    prevBtnEl.disabled = false;
    nextBtnEl.disabled = false;
  }
}
