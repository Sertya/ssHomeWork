/* Sorting a given string. Each word in the string will contain a single number. 
This number is the position the word should have in the result. */
function sortString(givenString) {
  let resultString = [];
  if(givenString.length === 0) {
    return givenString;
  }
  resultString = givenString.split(' ').sort(function(a, b) {
    return a.replace(/\D/g,"") - b.replace(/\D/g,"");
   }).join(' ');
  return resultString;
}
  
console.log(sortString("is2 Thi1s T4est 3a"));
console.log(sortString(""));