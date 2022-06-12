import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const datetime = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
const renderDays = document.querySelector("[data-days]");
const renderHours = document.querySelector("[data-hours]");
const renderMinutes = document.querySelector("[data-minutes]");
const renderSeconds = document.querySelector("[data-seconds]");
let interval = null;
startBtn.addEventListener("click", startTimerHandler);
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] <= options.defaultDate) {
          startBtn.disabled = true;
          Notiflix.Notify.failure("Please choose a date in the future");
      } else {
          startBtn.disabled = false;
      }

  },
};

const fp = flatpickr(datetime, options);

function startTimerHandler() {
    startBtn.disabled = true;
    Notiflix.Notify.info("Go!");
    timer();
    interval = setInterval(timer, 1000);
}

function timer() {
    // console.log("Tik");
    const timeLeft = fp.selectedDates[0] - new Date();
    const value = convertMs(timeLeft);
    if (timeLeft <= 0) {
        clearInterval(interval);
        Notiflix.Notify.success("Yep! Time's up");
        return;
    }
    addLeadingZero(value);
}    

function convertMs(ms) {
    
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    

  return { days, hours, minutes, seconds };
}

function addLeadingZero(dateObj) {
    renderDays.textContent = dateObj.days;
    renderHours.textContent = dateObj.hours.toString().length === 2 ? dateObj.hours : `${dateObj.hours}`.padStart(2, "0");
    renderMinutes.textContent = dateObj.minutes.toString().length === 2 ? dateObj.minutes : `${dateObj.minutes}`.padStart(2, "0");
    renderSeconds.textContent = dateObj.seconds.toString().length === 2 ? dateObj.seconds : `${dateObj.seconds}`.padStart(2, "0");
}



