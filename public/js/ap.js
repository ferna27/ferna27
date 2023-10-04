let monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let semana = [
  "domingo",
  "lunes",
  "marte",
  "miercoles",
  "jueve",
  "vierne",
  "sabado",
];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let dia = currentDate.getDay();

let dias = document.getElementById("fechaactual");
let dates = document.getElementById("fila0");
let month = document.getElementById("titulos");
let year = document.getElementById("year");

let boton__busca = document.querySelector(".boton__busca");
let input__busca = document.querySelector('input-busca');
let prevMonthDOM = document.getElementById("posterior");
let nextMonthDOM = document.getElementById("anterior");

dias.textContent = `${semana[dia]} ${currentDay} de ${monthNames[monthNumber]} del ${currentYear}`;
month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

/**
 * estaba hciendo que me lleve al año seguen los valla buscando pero no logro dar con la logica bien 
 * 
boton__busca.addEventListener("click", () => {
  input__busca=`${currentYear}`
  console.log(input__busca);
  console.log('estoy activo ');
});
 * 
 */

prevMonthDOM.addEventListener("click", () => lastMonth());
nextMonthDOM.addEventListener("click", () => nextMonth());

const writeMonth = (month) => {
  for (let i = startDay(); i > 0; i--) {
    dates.innerHTML += ` <div class="calendar__date calendar__item  opacity_opa">
            ${getTotalDays(monthNumber - 1) - (i - 1)}
        </div>`;
  }

  for (let i = 1; i <= getTotalDays(month); i++) {
    if (i === currentDay) {
      dates.innerHTML += ` <div class="calendar__date calendar__item calendar__today cale_cle">${i}</div>`;
    } else {
      dates.innerHTML += ` <div class="calendar__date calendar__item">${i}</div>`;
    }
  }
};

const getTotalDays = (month) => {
  if (month === -1) month = 11;

  if (
    month == 0 ||
    month == 2 ||
    month == 4 ||
    month == 6 ||
    month == 7 ||
    month == 9 ||
    month == 11
  ) {
    return 31;
  } else if (month == 3 || month == 5 || month == 8 || month == 10) {
    return 30;
  } else {
    return isLeap() ? 29 : 28;
  }
};

const isLeap = () => {
  return (
    (currentYear % 100 !== 0 && currentYear % 4 === 0) ||
    currentYear % 400 === 0
  );
};

const startDay = () => {
  let start = new Date(currentYear, monthNumber, 1);
  return start.getDay(); // ojo hay le estoy restando un dia para que me restornes el dia actual pero de esa manera salio mal - 1) === -1) ? 6 : start.getDay() - 1;
};

const lastMonth = () => {
  if (monthNumber !== 0) {
    monthNumber--;
  } else {
    monthNumber = 11;
    currentYear--;
  }

  setNewDate();
};

const nextMonth = () => {
  if (monthNumber !== 11) {
    monthNumber++;
  } else {
    monthNumber = 0;
    currentYear++;
  }

  setNewDate();
};

const setNewDate = () => {
  currentDate.setFullYear(currentYear, monthNumber, currentDay);
  month.textContent = monthNames[monthNumber];
  year.textContent = currentYear.toString();
  dates.textContent = "";
  writeMonth(monthNumber);
};
writeMonth(monthNumber);
