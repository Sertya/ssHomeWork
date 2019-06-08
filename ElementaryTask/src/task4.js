export default function longestPalindrom(input) {
  let str = input.toString(10),
      length = str.length,
      testValue,
      palindrom = '';
  
  for (let i = length; i >= 2; i--) {
    for(let j = 0; j <= length -i ; j++) {
     testValue = str.slice(j,j + i);
     if(isPalindrom(testValue)) {
      palindrom = testValue;
       break;
     }
    }
    if(palindrom !== '') break;
  }
  return palindrom;
}

function isPalindrom(str) {
  let result = true, 
      left = 0,
      right = str.length-1;

  while(left <= right) {
    if (str[left] !== str[right]) {
      result = false;
      break;
    }
    left++;
    right--;
  }
  return result;
}