import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');

const button = document.querySelector('[data-start]');
button.disabled = 'notActive';

let userSelectedDate = null;
let interval = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    interval = userSelectedDate - options.defaultDate;
    if (userSelectedDate > options.defaultDate) {
      button.disabled = false;
    } else if (userSelectedDate < options.defaultDate) {
      iziToast.show({
        messageColor: 'white',
        position: 'topRight',
        color: 'red',
        message: 'Please choose a date in the future',
      });
    }
  },
};

const calendar = flatpickr(input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

button.addEventListener('click', handlerClick);

let intervalId = null;
function handlerClick() {
  button.disabled = 'notActive';
  input.disabled = 'notActive';
  intervalId = setInterval(() => {
    const date = userSelectedDate - Date.now();
    newTime(convertMs(date));
    if (date < 1000) {
      clearInterval(intervalId);
      input.disabled = false;
    }
  }, 1000);
}

const span = document.querySelectorAll('.value');

function newTime({ days, hours, minutes, seconds }) {
  [...span][0].textContent = days.toString().padStart(2, '0');
  [...span][1].textContent = hours.toString().padStart(2, '0');
  [...span][2].textContent = minutes.toString().padStart(2, '0');
  [...span][3].textContent = seconds.toString().padStart(2, '0');
}
