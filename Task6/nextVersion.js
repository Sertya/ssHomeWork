function nextVersion(input) {
  const maxValue = 9;
  let result = '';
  let arrayOfString = input.split('.');
  let lenOfArray = arrayOfString.length;
  let checkArguments = arrayOfString.slice(1,lenOfArray).find( item => item > 9);

  if(checkArguments) {
    result = 'Wrong version!';
  } else {
    arrayOfString[lenOfArray - 1]++;
    let newVersionArray = arrayOfString.reverse().map((current, index, array) => {
      if(index !== array.length - 1 && +current > maxValue) {
        current = 0;
        array[index+1]++;
      }
      return current;
    });
  result = newVersionArray.reverse().join('.');
  }
  return result;
}

console.log(nextVersion('10.9.9'));


