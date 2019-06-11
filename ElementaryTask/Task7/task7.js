function fibonacci(context) {
  let result = [0, 1],
      index;

  if(arguments.length !== 0 && checkArgument(context)) {
    if('len' in context) {
      result = byLenght(context.len, result);
    } 
    if('min' in context && 'max' in context) {
      result = byRange(context.min, context.max, result, index)
    }
  } else {
    result = {status: 'failed', reason: 'Missing argument or argument is not correct!'};
  }
  return result;
}

function byLenght(len, result) {
  for( let i = 2; ; i++) {
    result[i] =  result[i - 1] + result[i - 2];
    if(String(result[i]).length > len) {
      break;
    }
  }
  return result.filter(element => String(element).length === len);;  
}

function byRange(min, max, result, index) {
  for( let i = 2; ; i++) {
    result[i] =  result[i - 1] + result[i - 2];
    if(result[i] > max) {
      result.pop();
      break;
    }
  }
  if(result.includes(min)) {
    index = result.indexOf(min);
  } else {
    index = result.findIndex(element => element > min);
  }
  return result.slice(index);
}
// функция проверки аргументов
function checkArgument(argument) {
  let result = false;
  if(argument.constructor === Object && 
    (argument.hasOwnProperty('min') &&  argument.hasOwnProperty('max') ||
     argument.hasOwnProperty('len'))) {
       result = Object.values(argument).every(item => {
         return !isNaN(parseFloat(item)) && isFinite(item) && item > 0;
      });
    } 
  return result;
}

console.log(fibonacci({len: 2}));
console.log(fibonacci({min: 13, max: 10946}));
