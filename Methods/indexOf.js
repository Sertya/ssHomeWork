let str = 'New day, new life!';

// реализация метода indexOf
function myIndexOf(givenString, searchValue, fromIndex = 0) {
  let result = -1;
  let index = fromIndex;
  
  if(fromIndex > givenString.length && searchValue === '') {
    result = givenString.length;
  }
  
  if(fromIndex < 0) {index = 0;}
  
  for( index; index < givenString.length; index++) {
    let compareValue = '';
    
    for( let i = 0; i < searchValue.length; i++) {
      compareValue += givenString[index+i];
    }
    if(compareValue === searchValue) {
      result = index;
      break;
    }
  }
  return result;
}

console.log('Встрoеный метод  ' + str.indexOf('new'));
console.log('моя функция   ' + myIndexOf(str, 'new'));

// реализация метода lastIndexOf
function myLastIndexOf(givenString, searchValue, fromIndex = givenString.length) {
  let result = -1;
  let index = fromIndex;
  
  if(fromIndex > givenString.length) {
    index = givenString.length;
  }
  
  if(fromIndex < 0) {index = 0;}
  
  for( index; index >= 0; index--) {
    let compareValue = '';
    
    for( let i = 0; i < searchValue.length; i++) {
      compareValue += givenString[index+i];
    }
    if(compareValue === searchValue) {
        result = index;
        break;
      }
  }
  return result;
}

console.log('Встрoеный метод  ' + str.lastIndexOf('new'));
console.log('моя функция   ' + myLastIndexOf(str, 'new'));

