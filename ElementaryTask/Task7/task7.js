function createFibonacci(context) {
  let result = [0, 1];

  if(arguments.length !== 0) {

    if(checkArgument(context)) {

      if('len' in context) {
        result = getFibonacciByLen(context.len, result);
      } 
  
      if('min' in context && 'max' in context) {
        result = getFibonacciByRange(context.min, context.max, result);
      }
    } else {
      result = {status: 'failed', reason: 'The value of min and max must be a number!'};
    }
  } else {
    result = {status: 'failed', reason: 'Missing argument!'};
  }

  return result;
}

function getFibonacciByLen(len, result) {
  for( let i = 2; ; i++) {
    result[i] =  result[i - 1] + result[i - 2];

    if(String(result[i]).length > len) {
      break;
    }
  }

  return result.filter(element => String(element).length === len); 
}

function getFibonacciByRange(min, max, result) {
  for( let i = 2; ; i++) {
    result[i] =  result[i - 1] + result[i - 2];

    if(result[i] > max) {
      result.pop();
      break;
    }
  }
  // определим в эту переменную индекс с которого слайсить результат
  let index;

  if(result.includes(min)) {
    index = result.indexOf(min);
  } else {
    index = result.findIndex(element => element > min);
  }

  return result.slice(index);
}

// функция проверки аргументов
function checkArgument(argument) {
  let res = Object.values(argument);

  return res.every(item => typeof item === 'number');
}

console.log(createFibonacci({len: 2}));
console.log(createFibonacci({min: 13, max: 10946}));
