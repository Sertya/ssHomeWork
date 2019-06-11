function compareEnvelopes(first, second) {
  let result = 0;

  if(arguments.length !== 0 && validArguments(first, second)) {
    let a = Math.max(...Object.values(first)),
      b = Math.min(...Object.values(first)),
      p = Math.max(...Object.values(second)),
      q = Math.min(...Object.values(second));
  
    if(b < q && (a < p || q * (a*a+b*b) >= (2*a*b*p + (a*a-b*b)*Math.sqrt(a*a+b*b-p*p)))) {
      result = 1;
    }
    if(q < b && (p < a || b * (p*p+q*q) >= (2*p*q*a + (p*p-q*q)*Math.sqrt(p*p+q*q-a*a)))) {
      result = 2;
    }
  } else {
    result = {status: 'failed', reason: 'Invalid arguments are entered!'}
  }
  return result;
}
// функция проверки аргументов
function validArguments(first, second) {
  let firstObject = first.constructor === Object;
  let secondObject = second.constructor === Object;
  let isNumeric = [...Object.values(first), ...Object.values(second)].every(item => {
    return !isNaN(parseFloat(item)) && isFinite(item) && item > 0;
  });
  return firstObject && secondObject && isNumeric;
}

console.log(compareEnvelopes({a: 20, b:14.7 }, {c: 3.7, d:21 }));