function longestPalindrom(input) {
  let testValue,
      palindrom = 0;
  
  if(arguments.length !== 0 && Number.isInteger(input) && input > 10) {
    let str = input.toString(10),
        length = str.length;

    for (let i = length; i >= 2; i--) {
      for(let j = 0; j <= length -i ; j++) {
       testValue = str.slice(j,j + i);

       if(isPalindrom(testValue)) {
        palindrom = testValue;
         break;
         }
      }

      if(palindrom !== 0) break;
    }
  } else {
    palindrom = {status: 'failed', reason: 'Expected number more than 10 as an argument!'};
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

console.log(longestPalindrom(1234565432175211));