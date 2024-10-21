const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const main = document.querySelector(".main");

const dayDescription = document.querySelector(".day_paragraph");
const hourDescription = document.querySelector(".hour_paragraph");
const minuteDescription = document.querySelector(".minute_paragraph");
const secondDescription = document.querySelector(".second_paragraph");

const select = document.querySelector(".select");

const handleSelect = () => {
  let endDate;

  switch (select.value) {
    case "by": // "by">Bayern
      endDate = new Date("Aug 01, 2025 00:00:00").getTime();
      break;

    case "bw": // bw">Baden-Württemberg
      endDate = new Date("Aug 01, 2025 00:00:00").getTime();

      break;
    case "be": // "be">Berlin
      endDate = new Date("Jul 24, 2025 00:00:00").getTime();

      break;
    case "bb": //"bb">Brandenburg
      endDate = new Date("Jul 25, 2025 00:00:00").getTime();

      break;
    case "hb": //"hb">Bremen
      endDate = new Date("Jul 03, 2025 00:00:00").getTime();

      break;
    case "hh": //"hh">Hamburg
      endDate = new Date("Jul 24, 2025 00:00:00").getTime();

      break;
    case "he": //"he">Hessen
      endDate = new Date("Jul 07, 2025 00:00:00").getTime();

      break;
    case "mv": //"mv">Mecklenburg-Vorpommer
      endDate = new Date("Jul 28, 2025 00:00:00").getTime();

      break;
    case "ni": // "ni">Niedersachsen
      endDate = new Date("Jul 03, 2025 00:00:00").getTime();

      break;
    case "nw": // "nw">Nordrhein-Westfalen
      endDate = new Date("Jul 14, 2025 00:00:00").getTime();

      break;
    case "rp": // "rp">Rheinland-Pfalz
      endDate = new Date("Jul 07, 2025 00:00:00").getTime();

      break;
    case "sl": // "sl">Saarland
      endDate = new Date("Jul 07, 2025 00:00:00").getTime();

      break;
    case "sn": // "sn">Sachsen
      endDate = new Date("Jun 28, 2025 00:00:00").getTime();

      break;
    case "st": // "st">Sachsen-Anhalt
      endDate = new Date("Jun 28, 2025 00:00:00").getTime();

      break;
    case "sh": // "sh">Schleswig-Holstein
      endDate = new Date("Jul 28, 2025 00:00:00").getTime();

      break;
    case "th": // "th">Thüringen
      endDate = new Date("Jun 28, 2025 00:00:00").getTime();

      break;
    default: // "by">Bayern
      endDate = new Date("Aug 01, 2025 00:00:00").getTime();
      break;
  }

  changeCountdown(endDate);

  main.classList.add("main-selected");
};

function createCards(difference) {
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
}

function changeCountdown(endDate) {
  let countdownInterval = setInterval(countdown, 1000);

  function countdown() {
    let newDiv = document.createElement("DIV");
    newDiv.innerHTML = "";

    let now = new Date().getTime();

    let difference = endDate - now;
    createCards(difference);

    if (difference < 0) {
      clearInterval(countdownInterval);
      let mainSection = document.querySelector(".main-section");
      main.classList.remove("main-selected");
      mainSection.append(newDiv);
      newDiv.innerHTML = `<h2 class = "heading_already_holiday">Es sind gerade Sommerferien<br>in diesem Bundesland</h2>`;
    }

    select.addEventListener("change", function clearCountdown() {
      clearInterval(countdownInterval);
      newDiv.innerHTML = "";
    });
  }
}

select.addEventListener("change", handleSelect);
