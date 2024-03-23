const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");

let interval;
let timeLeft = 1800;
function updateTimer() {
  const seconds = Math.floor(timeLeft % 60);
  const minutes = Math.floor(timeLeft / 60);
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  timerEl.innerHTML = formattedTime;
}
function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up");
      timeLeft = 1800;
      updateTimer();
    }
  }, 1000);
  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
  resetButtonEl.disabled = false;
}
function stopTimer() {
  clearInterval(interval);
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
  resetButtonEl.disabled = false;
}
function resetTimer() {
  clearInterval(interval);
  timeLeft = 1800;
  updateTimer();
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
  resetButtonEl.disabled = false;
}
startButtonEl.addEventListener("click", startTimer);
stopButtonEl.addEventListener("click", stopTimer);
resetButtonEl.addEventListener("click", resetTimer);
