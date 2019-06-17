function chessBoard(width, height, char) {
  let result = 0;

  if(arguments.length === 3) {
    result = checkArguments(width, height, char);
    if (result === 0) {
      result = '\n';

      for(let i = 0; i < height; i++) {
          if (i % 2 === 0) {
            for(let i = 0; i < width; i++) {
              (i % 2 === 0) ? result += char : result += ' ';
            }
          } else {
              for(let i = 0; i < width; i++) {
                (i % 2 === 0) ? result += ' ' : result += char;
              }
          } 

          result += '\n';
      }
    }
  } else {
    result = {
      status: 'faild', 
      reason: 'Three arguments are expected: integer, integer, string with length = 1'
    };
  }

  return result;
}

function checkArguments(width, height, char) {
  result = 0;

  if (!Number.isInteger(width) || width === 0 ||
      !Number.isInteger(height) || height === 0) {
        result = {
          status: 'faild', 
          reason: 'First and second arguments expected to be integer and mor than 0'
        };
  }

  if (typeof char !== 'string' || char.length !== 1) {
    result = {
      status: 'faild', 
      reason: 'Third argument expected to be string with length = 1'
    };
  } 

  return result;
}

console.log(chessBoard(10, 10, '*'));
