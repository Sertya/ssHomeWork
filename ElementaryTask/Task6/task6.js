function numericSequence(len, square) {
  let result = [];

  if(arguments.length !== 0 && checkArguments(len, square)) {
    let numberFromSquare = Math.ceil(Math.sqrt(square));
    for( let i = 0; i < len; i++) {
      result.push(numberFromSquare + i);
    }
    result = result.join(',');
  } else {
    result = {status: 'failed', reason: 'Missing argument or argument is not correct!'};
  }
  return result;
}
// функция проверки аргументов
function checkArguments(len, square) {
  return !isNaN(parseFloat(len)) && isFinite(len) && len > 0 &&
         !isNaN(parseFloat(square)) && isFinite(square) && square > 0;
}

console.log(numericSequence(10.7, 15));
