// main function - determines the score of the game
function battleShipScore(board, attaks) {
  const sunkPoint = 1, damagedPoint = 0.5, notTouchedPoint = -1;
  let boatsObj = {};
  let result = { sunk: 0, damaged: 0 , notTouched: 0, points: 0 };

  if(checkArguments(board, attaks)) {
    boatsObj = getBoatsObJect(board);
    boatsObj = writeAttacks(attaks, board, boatsObj);

    for(key in boatsObj) {
      let boat = Number(key);
      if(boatsObj[boat].injured === 0) {
        result.notTouched++;
        result.points += notTouchedPoint;
      } else if(boatsObj[boat].injured === boatsObj[boat].desk) {
        result.sunk++;
        result.points += sunkPoint;
      } else {
        result.damaged++; 
        result.points += boatsObj[boat].injured * damagedPoint;
      }
    }
  } else { result = 'Wrong arguments!'}
  console.log(result);
  return result;
}
///get initial Object of boats 
function getBoatsObJect(board) {
  let boatsObj = {};

  let boatsArray = board.flat();
  boatsArray.forEach(element => {  
    if(element !== 0) {
     if(element in boatsObj) {
       boatsObj[element].desk++;
     } else {
       boatsObj[element] = {desk: 1, injured: 0};
     }
    }
  });
  return boatsObj;
}
// write attaks into board and boarsObj
function writeAttacks(attaks, board, boatsObj)  {
  let boardHeight = board.length;

  attaks.forEach( attack => {
    let [x, y] = attack;
    let target = board[boardHeight -y][x - 1];
    if(target !== 0) {
      boatsObj[target].injured++;
    }
  });
  return boatsObj;
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
  [0,3,0,0,0,0],
  [0,3,0,1,0,0],
  [0,3,0,1,0,0]], [[2, 1], [1, 3], [4, 2]]));