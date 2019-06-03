let str = 'Быть или не быть, вот в чём вопрос.';

function myEndsWith(givenString, searchValue, fromIndex = givenString.length) {  
  let result  = false, end = fromIndex -1, start = fromIndex - searchValue.length,
  compareValue = '';

  for(start; start <= end; start++) {
    compareValue += givenString[start];
    //console.log(compareValue);
  }
  if(compareValue === searchValue) result = true;
  return result;
}

console.log(myEndsWith(str, 'вопрос.'));   // true
console.log(myEndsWith(str, 'быть'));      // false
console.log(myEndsWith(str, 'быть', 16));  // true