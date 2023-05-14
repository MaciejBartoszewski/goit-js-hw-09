const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startColorSwitching() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButton.disabled = true;
}

function stopColorSwitching() {
  clearInterval(intervalId);
  startButton.disabled = false;
}

startButton.addEventListener('click', startColorSwitching);
stopButton.addEventListener('click', stopColorSwitching);

