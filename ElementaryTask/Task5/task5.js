function luckyTickets(context) {
  const size = 6;
  let ticketNumber = '',
      result = {simple: 0, complicated: 0, winner: ''};
  if(arguments.length !== 0 && checkArgument(context)) {
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
    result = {status: 'failed', reason: 'Missing argument or argument is not correct!'};
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
    i < 3 ? sumLeft += Number(ticketNumber[i], 10) : sumRight += Number(ticketNumber[i], 10);
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
  if(argument.constructor === Object && 
     argument.hasOwnProperty('min') && 
     argument.hasOwnProperty('max')) {
       return argument.min > 0 && argument.min <= 999999 &&
              argument.max > 0 && argument.max <= 999999;
  } else { return false; }
}

console.log(luckyTickets({min: 100000, max: 999999}));

