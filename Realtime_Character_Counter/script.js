const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("totalCounter");
const remainingCounterEl = document.getElementById("remainingCounter");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});
function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;
  remainingCounterEl.innerText =
    textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}
updateCounter();
