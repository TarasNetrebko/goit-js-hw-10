function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector("body");

let interval = null;

startBtn.addEventListener("click", startIntervalHandler);
stopBtn.addEventListener("click", stopIntervalHandler);

function startIntervalHandler() {
    body.style.backgroundColor = getRandomHexColor();
    interval = setInterval(colorChanger, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function colorChanger() {
    body.style.backgroundColor = getRandomHexColor();    
}
function stopIntervalHandler() {
    clearInterval(interval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}


