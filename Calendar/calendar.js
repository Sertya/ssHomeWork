const date = new Date();

// запускается при загрузке страницы
function loadingCalendar() {
  getTimer();
  createCalendar();
  changeMonth();
  changeDay();
}
// идущие часы
function getTimer() {
  let time = new Date();

  document.querySelector('.timer').innerHTML = time.toLocaleTimeString();

  return setTimeout('getTimer()', 500);
}

// строит календарь
function createCalendar() {
  let currYear = date.getFullYear(),
      currMonth = date.getMonth(),
      optionsFirst = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric'
      },
      optionsSecond = {month: 'long', year: 'numeric'},
      stringDate = date.toLocaleDateString('ru', optionsFirst),
      monthYear = date.toLocaleDateString('ru', optionsSecond);

  document.querySelector('.current_string_date').innerText = stringDate;
  document.querySelector('.current_month_year').innerText = monthYear;

  date.setDate(1);

  let firstDay = date.getDay() == 0 ? 6 : date.getDay() - 1,
      today = new Date(),
      currDate = date.getMonth() === today.getMonth() ? today.getDate() : date.getDate();

  date.setDate(date.getDate() - firstDay);

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

    div.innerText = date.getDate();
    document.querySelector('.calend_table').appendChild(div);

    date.setDate(date.getDate() + 1);
  }
  date.setDate(0);
}

// слушает событие чтобы изменить месяц
function changeMonth() {
  let targetToNext = document.querySelector('.next_month'),
      targetToPrev = document.querySelector('.prev_month');

  targetToNext.addEventListener('click', changeMonthToNext);
  targetToPrev.addEventListener('click', changeMonthToPrev);
}

// строит календарь на следующий месяц
function changeMonthToNext() {
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);

  clearCalendar();
  createCalendar(date);
}

// строит календарь на предыдущий месяц
function changeMonthToPrev() {
  date.setDate(1);
  date.setMonth(date.getMonth() - 1);

  clearCalendar();
  createCalendar(date);
}

// слушает клики чтобы  перемещаться по дням
function changeDay() {
  let targetToNext = document.querySelector('.next_day'),
      targetToPrev = document.querySelector('.prev_day');

  targetToNext.addEventListener('click', changeDayToNext);
  targetToPrev.addEventListener('click', changeDayToPrev);
}

// подсвечивает следующий день
function changeDayToNext() {
  let currActiveElement = document.querySelector('.active'),
      nextActiveElement;

  if(currActiveElement !== null) {
    currActiveElement.classList.remove('active');
  } else {
    currActiveElement = document.querySelector('.current_day');
  }

  nextActiveElement = currActiveElement.nextElementSibling;

  if(nextActiveElement) {
    nextActiveElement.classList.add('active');
  } else {
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);

    clearCalendar();
    createCalendar(date);

    document.querySelector('.calend_table').firstChild.classList.add('active');
  }
}

// подсвечивает предыдущий день
function changeDayToPrev() {
  let currActiveElement = document.querySelector('.active'),
      nextActiveElement;

  if(currActiveElement !== null) {
    currActiveElement.classList.remove('active');
  } else {
    currActiveElement = document.querySelector('.current_day');
  }

  nextActiveElement = currActiveElement.previousElementSibling;

  if(nextActiveElement) {
    nextActiveElement.classList.add('active');
  } else {
    date.setDate(1);
    date.setMonth(date.getMonth() - 1);

    clearCalendar();
    createCalendar(date);

    document.querySelector('.calend_table').lastChild.classList.add('active');
  }
}
// очищает календарь
function clearCalendar() {
  let element = document.querySelector('.calend_table');

    while (element.lastChild) {
      element.removeChild(element.lastChild);
    }
}
