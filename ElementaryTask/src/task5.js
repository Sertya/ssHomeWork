export default function luckyTickets(context) {
  const size = 6;
  let start = context.min,
      end = context.max,
      ticketNumber = '',
      result = {simple: 0, complicated: 0, winner: ''};
  
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

