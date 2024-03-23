const containerEl = document.getElementById("container");
const btnEl = document.getElementById("btn");
const ratingEls = document.querySelectorAll(".rating");

let selectedFeedback = "";

const removeActive = () => {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
};

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive();
    selectedFeedback =
      event.target.innerText || event.target.parentNode.innerText;

    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedFeedback != "") {
    containerEl.innerHTML = `
      <strong>Thank You !</strong>
      <br>
      <br>
      <strong>Feedback : ${selectedFeedback} </strong>
      <p>We'll use your feedback to improve our customer service.</p>
    `;
  }
});
