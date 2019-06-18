function numericSequence(len, square) {
  let result = [];

  if(arguments.length !== 0) {

    if(checkArguments(len, square)) {
      let numberFromSquare = Math.ceil(Math.sqrt(square));

      for( let i = 0; i < len; i++) {
        result.push(numberFromSquare + i);
      }

     result = result.join(',');
    } else {
      result = {status: 'failed', reason: 'Two numbers are expected as arguments!'};
    }  
  } else {
    result = {status: 'failed', reason: 'Missing arguments!'};
  }

  return result;
}
// функция проверки аргументов
function checkArguments(len, square) {

  return typeof len === 'number' && len > 0 &&
         typeof square === 'number' && square > 0;

}

console.log(numericSequence(7, 15));
