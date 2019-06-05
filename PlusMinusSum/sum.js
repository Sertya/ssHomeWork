function getSolution(arrayOfNums, value) {
    const numberOfSigns = arrayOfNums.length - 1;
    let result = false;
    
    if(isValid(arrayOfNums, value)) {
      for (let i = 0; i < Math.pow(2, numberOfSigns); i++) {
        let combinations = [];
        for (let j = 0; j < numberOfSigns; j++) {
            if ((i >> j) & 1) {
                combinations.push('+');
            } else {
                combinations.push('-');
            }
          }
        let sum = arrayOfNums[0]
        for (let i = 0; i < numberOfSigns; i++) {
            if (combinations[i] === '-') {
                sum -= arrayOfNums[i + 1];
            }
            if (combinations[i] === '+') {
                sum += arrayOfNums[i + 1];
            }
        }
        if (sum === value) result = true;
      }
    } else {
      result = 'Wrong Arguments!';
    }
    return result;
}
  
function isValid(arrayOfNums, value) {
  let arrayLen = arrayOfNums.length >= 2 && arrayOfNums.length <= 22;
  let nums = arrayOfNums.every(element => element >= 0 && element <= 20);
  let valueInRange = value >= -10 && value <= 10;
  
  return arrayLen && nums && valueInRange;
}

console.log(getSolution([1, 3, 4, 6, 8], -2));
console.log(getSolution([15, 2, 3], 10));
console.log(getSolution([1, 5, 3, 2, 5], -2));

