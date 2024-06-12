
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const main = document.querySelector(".main");

const dayDescription = document.querySelector(".day_paragraph");
const hourDescription = document.querySelector(".hour_paragraph");
const minuteDescription = document.querySelector(".minute_paragraph");
const secondDescription = document.querySelector(".second_paragraph");



function changeCountdown(endDate){
  
let countdownInterval = setInterval(countdown, 1000);
  
  function countdown() {
  
    let now = new Date().getTime();
  
    let difference = endDate - now;
  
    let amountDays = Math.floor(difference / 86400000);
    days.textContent = amountDays < 10 ? "0" + amountDays : amountDays;
  
    let amountHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / 3600000);
    hours.textContent = amountHours < 10 ? "0" + amountHours : amountHours;
  
    let amountMinutes = Math.floor((difference % (1000 * 60 * 60)) / 60000);
    minutes.textContent =
      amountMinutes < 10 ? "0" + amountMinutes : amountMinutes;
  
    let amountSeconds = Math.floor((difference % (1000 * 60)) / 1000);
    seconds.textContent =
      amountSeconds < 10 ? "0" + amountSeconds : amountSeconds;
  
    dayDescription.textContent = amountDays === 1 ? "Tag" : "Tage";
    hourDescription.textContent = amountHours === 1 ? "Stunde" : "Stunden";
    minuteDescription.textContent = amountMinutes === 1 ? "Minute" : "Minuten";
    secondDescription.textContent = amountSeconds === 1 ? "Sekunde" : "Sekunden";

    if (difference < 0) {
      clearInterval(countdownInterval);
      main.innerHTML = `<h2 class = heading_already_holiday>Es sind gerade Sommerferien<br>in Bayern</h2>`;
    }
  }
}
