// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget;
  const delay = elements.elements.delay.value;
  const radioBtn = elements.elements.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radioBtn === 'fulfilled') {
        resolve();
      } else {
        reject();
      }
    }, delay);
  });
  promise
    .then(() => {
      iziToast.show({
        messageColor: 'white',
        position: 'topRight',
        color: 'green',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(() => {
      iziToast.show({
        messageColor: 'white',
        position: 'topRight',
        color: 'red',
        message: `❌ Fulfilled promise in ${delay}ms`,
      });
    });
  elements.reset();
}
