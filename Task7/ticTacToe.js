// главная функция - возвращает статус игры
function checkTicTacToe(input) {
  const sizeBoard = 3;
  let result = 0, checkArgument, checkZero;
  let wonX = Math.pow(1, sizeBoard), wonO = Math.pow(2,sizeBoard);

  checkArgument = validArgument(input);

  if(checkArgument) {
    checkZero = input.some(element => element.includes(0));
    result = checkDiagonal(input, wonX, wonO);
    if(!result) result = checkWin(input, wonX, wonO);
    if(!result && checkZero) result = -1;
  } else { result = 'Wrong argument!'; }
 return result;
}
// функция проверяет наличие и корректность аргументов
function validArgument(input) {
  let isArray, isValidArray, validSize, sizeRow = input.length;

  isArray = Array.isArray(input);
  isValidArray = input.every(element => {
    let isInt = element.every(item => Number.isInteger(item));
    return Array.isArray(element) && isInt;
  });
  validSize = input.every(element => element.length === sizeRow);
  
  return (isArray && isValidArray && validSize);
}
// ищет победную комбинацию по диагонали
function checkDiagonal(input, wonX, wonO) {
  let diagonalFirst = 1, diagonalSecond = 1, result = 0;
  let index = input.length - 1;
  for(let i = 0; i <= index; i++) {
    diagonalFirst *= input[i][i];
    diagonalSecond *= input[i][index - i];
  }
  if(diagonalFirst === wonX || diagonalSecond === wonX) {
    result = 1;
  }
  if(diagonalFirst === wonO || diagonalSecond === wonO) {
    result = 2;
  }
  return result;
}
// ищет победную комбинацию по горизонтали и вертикали
function checkWin(input, wonX, wonO) {
  let result = 0;
  input.some((row, rowIndex, input) => {
    let horizontal = 1, vertical = 1, numOfIteration = row.length;
    for( let i = 0; i < numOfIteration; i++) {
      horizontal *= input[rowIndex][i];
      vertical *= input[i][rowIndex];
    }
    if(horizontal === wonX || vertical === wonX) {
      result = 1;
    }
    if(horizontal === wonO || vertical === wonO) {
      result = 2;
    }
    return result > 0;
   });    
   return result;
}

console.log(checkTicTacToe([[1,1,2], [2,2,1], [1,1,1]]));
