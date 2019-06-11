function chessBoard(width, height, char) {
  let result = '\n';

  if(arguments.length !== 3 ||
      !Number.isInteger(width) || width === 0|| !Number.isInteger(height) || height === 0 ||
      typeof char !== 'string' || char.length !== 1 ) {
        result = {status: 'faild', 
          reason: 'Three arguments are expected: integer, integer, string with length = 1'};
      } else {
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
  return result;
}

console.log(chessBoard(10, 10, '*'));