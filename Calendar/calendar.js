document.addEventListener("DOMContentLoaded", init);

const today = new Date(),
      date = new Date();

// запускается при загрузке страницы
function init() {
  setInterval('getTimer()', 500);
  createCalendar();
  changeMonth();
  changeDay();
}
// идущие часы
function getTimer() {
  let time = new Date();

  document.querySelector('.timer').innerHTML = time.toLocaleTimeString();
}

// строит календарь
function createCalendar() {
  let optionsFirst = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric'
      },
      optionsSecond = {month: 'long', year: 'numeric'},
      todayDay = today.toLocaleDateString('ru', optionsFirst),
      todayMonthYear = today.toLocaleDateString('ru', optionsSecond),
      monthYear = date.toLocaleDateString('ru', optionsSecond);

  document.querySelector('.current_string_date').innerText = todayDay;
  document.querySelector('.current_month_year').innerText = monthYear;

  date.setDate(1);

  let currMonth = date.getMonth(),
      firstDay = date.getDay() == 0 ? 6 : date.getDay() - 1,
      lastDay = new Date (date.getFullYear(), date.getMonth() + 1, 0);

  date.setDate(date.getDate() - firstDay);

  const countCells = 42; // number of days in a week;

  for( let i = 0; i < countCells; i++) {
    let div = document.createElement('div');

    if(date.getMonth() !== currMonth) {
      div.classList.add('another_month');

      div.innerText = date.getDate();
      document.querySelector('.calend_table').appendChild(div);

      date.setDate(date.getDate() + 1);

      continue;
    }

    if(date.getDate() == 1) {
      div.classList.add('first_day');
    }

    if(date.getDate() == lastDay.getDate()) {
      div.classList.add('last_day');
    }

    if(monthYear === todayMonthYear) {
      if(date.getDate() === today.getDate()) {
        div.classList.add('current_day');
      }
    } else {
      if(date.getDate() === 1) {
        div.classList.add('active');
      }
    }

    div.innerText = date.getDate();
    document.querySelector('.calend_table').appendChild(div);

    date.setDate(date.getDate() + 1);
  }

  date.setDate(0);
}

// слушает событие чтобы изменить месяц
function changeMonth() {
  let targetToListen = document.querySelector('.calend_navigation_month');

  targetToListen.addEventListener('click', changeMonthToEnother);
}

// строит календарь на следующий(предыдущий) месяц
function changeMonthToEnother(event) {
  date.setDate(1);

  if(event.target.classList.contains('next_month')) {
    date.setMonth(date.getMonth() + 1);
  } else {
    date.setMonth(date.getMonth() - 1);
  }

  clearCalendar();
  createCalendar(date);
}

// слушает клики чтобы  перемещаться по дням
function changeDay() {
  let targetToListen = document.querySelector('.calend_navigation_day');

  targetToListen.addEventListener('click', changeDayToNext);
  
}

// подсвечивает следующий/предыдущий день
function changeDayToNext(event) {
  let currActiveElement = document.querySelector('.active'),
      nextActiveElement,
      direction;

  if(currActiveElement === null) {
    currActiveElement = document.querySelector('.current_day');
  }

  if(event.target.classList.contains('next_day')) {
    nextActiveElement = currActiveElement.nextElementSibling;
    direction = 'next';
  } else {
    nextActiveElement = currActiveElement.previousElementSibling;
    direction = 'prev';
  }

  let isFirst = currActiveElement.classList.contains('first_day'),
      isLast = currActiveElement.classList.contains('last_day');

  if (!isFirst && !isLast ||
      isFirst && direction != 'prev' ||
      isLast && direction != 'next') {
        currActiveElement.classList.remove('active');
        nextActiveElement.classList.add('active');
  } else {
    date.setDate(1);

    if(isFirst && direction == 'prev') {
      date.setMonth(date.getMonth() - 1);
    }
    if(isLast && direction == 'next') {
      date.setMonth(date.getMonth() + 1);
    }

    clearCalendar();
    createCalendar(date);
    
    if (direction == 'prev') {
      let active = document.querySelector('.active');

      if(document.querySelector('.active')) {
        active.classList.remove('active');
      }
      
      document.querySelector('.last_day').classList.add('active');
    }

    if (direction == 'next' && document.querySelector('.current_day') != null) {
      document.querySelector('.first_day').classList.add('active');
    }
  } 

}

// очищает календарь
function clearCalendar() {
  let element = document.querySelector('.calend_table');

    while (element.lastChild) {
      element.removeChild(element.lastChild);
    }
}
