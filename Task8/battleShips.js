// main function - determines the score of the game
function battleShipScore(board, attaks) {
  const sunkPoint = 1, damagedPoint = 0.5, notTouchedPoint = -1;
  let validArguments, boatsWound = {};
  let result = { sunk: 0, damaged: 0 , notTouched: 0, points: 0 };

  validArguments = checkArguments(board, attaks);
  if(validArguments) {
    boatsWound = getBoatsObJect(board);
    boatsWound = writeAttacks(attaks, board, boatsWound);

    for(key in boatsWound) {
      key = Number(key);
      let notSunk = board.some(element => {
        return element.includes(Number(key));
      });
      let hit = boatsWound[key];
      if(notSunk && !hit) {
        result.notTouched++;
        result.points += notTouchedPoint;
      } else if(notSunk && hit) {
        result.damaged++; 
        result.points += hit * damagedPoint;
      } else {
        result.sunk++;
        result.points += sunkPoint;
      }
    }
  } else { result = 'Wrong arguments!'}

  return result;
}
// get initial Object of boats 
function getBoatsObJect(board) {
  let boatsNumber = [], boats = {};
  let boatsSet = new Set();

  board.forEach(row => {
    row.forEach(square => {
      if(square) { boatsSet.add(square); }
    });
  });
  boatsNumber = [...boatsSet];
  boatsNumber.forEach( element => {
    boats[element] = 0;
  });
  return boats;
}
// write attaks into board and boatsWound
function writeAttacks(attaks, board, boatsWound)  {
  let boardHeight = board.length;

  attaks.forEach( attak => {
    let [x, y] = attak;
    let target = board[boardHeight -y][x - 1];
    if(target) {
      boatsWound[target]++;
      board[boardHeight -y][x - 1] = 0;
    }
  });
  return boatsWound;
}
// check if arguments is valid
function checkArguments(board, attaks) {
  const attakLength = 2, boardWidth = board[0].length;
  let boardIsArray, boardIsValid, attaksIsArray,
  attaksIsValid;

  boardIsArray = Array.isArray(board);
  if(boardIsArray) {
    boardIsValid = board.every(row => {
      let isInt = row.every(item => Number.isInteger(item));
      return Array.isArray(row) && isInt && row.length === boardWidth;
    });
  }
  attaksIsArray = Array.isArray(attaks);
  if(attaksIsArray) {
    attaksIsValid = attaks.every(attak => {
      let isInt = attak.every(item => Number.isInteger(item));
      return Array.isArray(attak) && isInt  && attak.length === attakLength;
    });
  }
  return boardIsArray && boardIsValid && attaksIsArray &&
  attaksIsValid;
}

console.log(battleShipScore([
  [0,0,0,2,2,0],
  [0,3, ,0,0,0],
  [0,3,0,1,0,0],
  [0,3,0,1,0,0]], [[2, 1], [1, 3], [4, 2]]));