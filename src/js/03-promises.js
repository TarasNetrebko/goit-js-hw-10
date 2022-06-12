import Notiflix from "notiflix";

const submitBtn = document.querySelector("button");
const delay = document.querySelector(".delay");
const amount = document.querySelector(".amount");
const step = document.querySelector(".step");
submitBtn.addEventListener("click", promisesHandler);
  
function promisesHandler(e) {
  e.preventDefault();
  let resultDelay = Number(delay.value);
  for (let i = 1; i <= amount.value; i += 1) {
      createPromise(i, resultDelay);
      resultDelay += Number(step.value);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      // Fulfill    
      Promise.resolve({ position, delay }).then((value) => {
        Notiflix.Notify.success(`Fulfilled promise ${value.position} in ${value.delay}ms`);
        // console.log(value);
      })
          
    } else {
      // Reject
      Promise.reject({ position, delay }).catch((error) => {
        Notiflix.Notify.failure(`Rejected promise ${error.position} in ${error.delay}ms`);
        // console.log(error);
      });
}
  }, delay)
  
}



// Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`)
// Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`)