function loadingCalendar() {
  let date = new Date(),
      currYear = date.getFullYear(),
      currMonth = date.getMonth();

  getTimer();
  createCalendar(date, currYear, currMonth);
  changeMonth(date, currYear, currMonth);
  changeDay(date, currYear, currMonth);
  
}

function getTimer() {
  let time = new Date();

  document.querySelector('.timer').innerHTML = time.toLocaleTimeString();

  return setTimeout('getTimer()', 500);
}
// строит календарь
function createCalendar(date, currYear, currMonth) {
  console.log(date.toLocaleDateString());
  let optionsFirst = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'},
      optionsSecond = {month: 'long', year: 'numeric'},
      stringDate = date.toLocaleDateString('default', optionsFirst),
      monthYear = date.toLocaleDateString('default', optionsSecond);

  document.querySelector('.current_string_date').innerHTML = stringDate;
  document.querySelector('.current_month_year').innerHTML = monthYear;

  let startMonth = new Date(currYear, currMonth, 1),
      firstDay = startMonth.getDay() == 0 ? 6 : startMonth.getDay() - 1,
      today = new Date(),
      currDate = date.getMonth() === today.getMonth() ? today.getDate() : date.getDate();

  date.setDate(startMonth.getDate() - firstDay);

  const countCells = 42; // number of days in a week;

  for( let i = 0; i < countCells; i++) {
    let div = document.createElement('div');

    if(date.getMonth() !== currMonth) {
      div.className = 'another_month';
    }

    if(date.getDate() === currDate && 
       date.getMonth() === currMonth) {
      div.className = 'current_day';
    }

    div.innerHTML = date.getDate();
    document.querySelector('.calend_table').appendChild(div);

    date.setDate(date.getDate() + 1);
  }
}
// слушает клики меняет месяц
function changeMonth(date, currYear, currMonth) {
  document.querySelector('.calend_navigation_month').addEventListener("click", (event) => {
    if(event.target.classList.contains('prev_month')) {
      date = new Date(currYear, currMonth - 1, 1);
    }

    if(event.target.classList.contains('next_month')) {
      date = new Date(currYear, currMonth + 1, 1);
    }

    currMonth = date.getMonth();
    currYear = date.getFullYear();

    clearCalendar();
    createCalendar(date, currYear, currMonth);

    console.log(' hangeMonth  end' + date.toLocaleDateString());
  });
}
// слушает клики на одинарные стрелки, меняет подсветку дней
function changeDay(date, currYear, currMonth) {
  document.querySelector('.calend_navigation_day').addEventListener("click", (event) => {
    let currActiveElement = document.querySelector('.active'),
        nextActiveElement;

    if(currActiveElement === null) {
      currActiveElement = document.querySelector('.current_day');
    }

    if(event.target.classList.contains('prev_day')) {
      nextActiveElement = currActiveElement.previousElementSibling;
      
      if(!nextActiveElement) {
        date = new Date(currYear, currMonth - 1, 1);
      } 
    }

    if(event.target.classList.contains('next_day')) {
      nextActiveElement = currActiveElement.nextSibling;

      if(!nextActiveElement) {
        date = new Date(currYear, currMonth + 1, 1);
      } 
    } 
    
    if(nextActiveElement) {
      toggleClass(currActiveElement, nextActiveElement);
    } else {
      currMonth = date.getMonth();
      currYear = date.getFullYear();

      clearCalendar();
      createCalendar(date, currYear, currMonth);
    }
  });
  
}
// очищает календарь
function clearCalendar() {
  let element = document.querySelector('.calend_table');

    while (element.lastChild) {
      element.removeChild(element.lastChild);
    }
}
// меняет класс для изменения подсветки по дням
function toggleClass(currActiveElement, nextActiveElement) {
  if(currActiveElement.className !== 'current_day') {
       currActiveElement.classList.remove('active');
  } 

  nextActiveElement.classList.add('active');

}
