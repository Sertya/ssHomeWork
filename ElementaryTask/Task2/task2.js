function compareEnvelopes(first, second) {
  let result = false;

  if(arguments.length !== 0 ) {
    result = validArguments(first, second);

    if (result === false) {
      let a = Math.max(...Object.values(first)), // большая сторона первого конверта
        b = Math.min(...Object.values(first)), // меньшая сторона первого конверта
        p = Math.max(...Object.values(second)), // большая сторона второго конверта
        q = Math.min(...Object.values(second)), // меньшая сторона второго конверта

        checkFirstEnvelope = q * (a*a+b*b) >= (2*a*b*p + (a*a-b*b)*Math.sqrt(a*a+b*b-p*p)),
        checkSecondEnvelope = b * (p*p+q*q) >= (2*p*q*a + (p*p-q*q)*Math.sqrt(p*p+q*q-a*a));
  
      if(b < q && (a < p || checkFirstEnvelope)) {
        result = 1;
      }

      if(q < b && (p < a || checkSecondEnvelope)) {
        result = 2;
      }

    }
    
  } else {
    result = {
      status: 'failed', 
      reason: 'Two arguments are expected, two numbers in each of them!'
    };
  }

  return result;
}

// функция проверки аргументов
function validArguments(first, second) {
  let result = false,
      values = [...Object.values(first), ...Object.values(second)];

  let isNumber = values.every(item => {
    return !isNaN(parseFloat(item)) && isFinite(item) && item > 0;
  });

  if (isNumber !== true) {
    result = {
      status: 'failed', 
      reason: 'Some of values is not a number or some of values less then(equal) 0!'
    };
  }
  return result;
}

console.log(compareEnvelopes());