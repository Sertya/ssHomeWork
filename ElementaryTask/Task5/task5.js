function luckyTickets(context) {
  const size = 6;
  let ticketNumber = '',
      result = {simple: 0, complicated: 0, winner: ''};

  if(arguments.length !== 0) {
    let check = checkArgument(context);

    if(check === 0) {
      let start = context.min,
        end = context.max;

      for(start; start <= end; start++) {
        ticketNumber = toSixLen(start, size);

        if(simpleMethod(ticketNumber, size)) {
          result.simple++;
        }

        if(complicatedMethod(ticketNumber, size)) {
          result.complicated++;
        }
      }

      result.winner = result.simple > result.complicated ?  'simple' : 'complicated';
    } else {
      result = check;
    }
  } else {
    result = {status: 'failed', reason: 'Missing argument!'};
  }

  return result;
}
// добавляет необходимое количество нулей перед номером билета
function toSixLen(start, size) {
  let result = '' + start;

  while(result.length < size) {
    result = '0' + result;
  }

  return result;
}
// считает по простому методу
function simpleMethod(ticketNumber, size) {
  let sumLeft = 0,
      sumRight = 0;

  for (let i = 0; i < size; i++) {
    if(i < 3) {
      sumLeft += Number(ticketNumber[i], 10);
    } else {
      sumRight += Number(ticketNumber[i], 10);
    } 
  }

  return sumLeft === sumRight;
}
// считает по сложному методу
function complicatedMethod(ticketNumber, size) {
  let sumLeft = 0,
      sumRight = 0;

  for (let i = 0; i < size; i++) {

    if(ticketNumber[i] % 2 === 0) {
      sumLeft += Number(ticketNumber[i], 10);
    } else {
      sumRight += Number(ticketNumber[i], 10);
    }
  }

  return sumLeft === sumRight;
}
// функция проверки аргументов
function checkArgument(argument) {
  let result = 0,
      [min, max] = Object.values(argument);

  if(typeof min !== 'number' || min < 0 || min > 999999) {
    result = {
      status: 'failed', 
      reason: 'First argument should be number in range of 0 to 999999!'
    };
  }

  if(typeof max !== 'number' || max < 0 || max > 999999) {
    result = {
      status: 'failed', 
      reason: 'Second argument should be number in range of 0 to 999999!'
    };
  }

  return result;
}

console.log(luckyTickets({min: 333333, max: 444444}));

