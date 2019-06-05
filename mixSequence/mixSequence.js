function mixSequence(pattern, n) {
  let result = [];
  let sequencesCount = {
    'fib': 0,
    'pad': 0,
    'jac': 0,
    'pel': 0,
    'tri': 0,
    'tet': 0
   };

   if (pattern.length === 0 || n === 0) {
     result = [];
   } else {
    while (result.length < n) {
      for( let i = 0; i < pattern.length; i++) {
        switch (pattern[i]) {
          case 'fib':
            result.push(fibonacci(sequencesCount[pattern[i]]));
            sequencesCount[pattern[i]]++;
          break;
          case 'pad':
            result.push(padovan(sequencesCount[pattern[i]]));
            sequencesCount[pattern[i]]++;
          break;
          case 'jac':
           result.push(jacobsthal(sequencesCount[pattern[i]]));
           sequencesCount[pattern[i]]++;
          break;
          case 'pel':
           result.push(pell(sequencesCount[pattern[i]]));
           sequencesCount[pattern[i]]++;
          break;
          case 'tri':
           result.push(tribonacci(sequencesCount[pattern[i]]));
           sequencesCount[pattern[i]]++;
          break;
          case 'tet':
           result.push(tetranacci(sequencesCount[pattern[i]]));
           sequencesCount[pattern[i]]++;
          break;
        }
      }
    }
   result.length = n;
   }
  return result;
}

function fibonacci(n) {
  let index = Math.sqrt(5);
  let left = (1 + index) / 2;
  let right = (1 - index) / 2;
  
  return Math.round((Math.pow(left, n) - Math.pow(right, n)) / index);
}

function padovan(n) {
  let results = [1,0,0];

  function p(n){
    if(n > 2) {
      if (!results[n]){
        results[n] = p(n - 2) + p(n - 3);
      } 
    }
    return results[n];
  } 
  results[n] = p(n); 
  return results[n];
}

function jacobsthal(n) {
  let results = [0,1];
  
  function p(n){
    if(n > 1) {
      if (!results[n]){
        results[n] = p(n - 1) + 2 * p(n - 2);
      } 
    }
      return results[n];
  } 
  results[n] = p(n); 
  return results[n];
}

function pell(n) {
  let results = [0, 1];
  
  function p(n){
    if(n > 1) {
      if (!results[n]){
        results[n] = 2 * p(n - 1) + p(n - 2);
      } 
    }
      return results[n];
  } 
  results[n] = p(n); 
  return results[n];
}

function tribonacci(n) {
  let results = [0, 0, 1];
  
  function p(n){
    if(n > 2) {
      if (!results[n]){
        results[n] = p(n - 1) + p(n - 2) +p(n - 3);
      } 
    }
      return results[n];
  } 
  results[n] = p(n); 
  return results[n];
}

function tetranacci(n) {
  let results = [0, 0, 0, 1];
  
  function p(n){
    if(n > 2) {
      if (!results[n]){
        results[n] = p(n - 1) + p(n - 2) +p(n - 3) + p(n - 4);
      } 
    }
      return results[n];
  } 
  results[n] = p(n); 
  return results[n];
}

//console.log(mixSequence([], 10));
console.log(mixSequence(['fib'], 10));
// console.log(mixSequence( ['fib', 'tet'], 10)); //[0, 0, 1, 0, 1, 0, 2, 1, 3, 1]
// console.log(mixSequence( ['jac', 'jac', 'pel'], 10));// [0, 1, 0, 1, 3, 1, 5, 11, 2, 21]
