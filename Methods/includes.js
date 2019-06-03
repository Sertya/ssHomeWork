let str = 'To be, or not to be, that is the question.';

function includes(givenString, searchValue, fromIndex = 0) {
  let result = false, index = fromIndex;

  if(fromIndex < 0) index = 0;
  for( index; index < givenString.length; index++) {
    let compareValue = '';
    for(let i = 0; i < searchValue.length; i++) {
      compareValue += givenString[index + i];
    }
    if(compareValue === searchValue) {
      result = true;
      break;
    }
  }
  return result;
}

console.log('встроеный метод   ' + str.includes('not', 15));
console.log(includes(str, 'not', 15));
console.log('--------');
console.log('встроеный метод   ' + str.includes('To be'));
console.log(includes(str, 'To be'));
console.log('--------');
console.log('встроеный метод   ' + str.includes('to Be'));
console.log(includes(str, 'to Be'));