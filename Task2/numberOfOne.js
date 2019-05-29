function numberOfOne(number) {
  let result = 0;
  
  if(!Number.isInteger(number) || number < 0) {
    result = 'Еxpected integer as an argument!';
  }
  
  if(arguments.length !== 0) {
    number.toString(2).split('').forEach(elementOfString => {
      if(elementOfString === '1') { result++; }
    });
  }
  return result;
}

console.log(numberOfOne(13));
