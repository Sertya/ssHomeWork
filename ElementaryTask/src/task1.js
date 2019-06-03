export default function chessBoard(width, height, symbol) {
    if(arguments.length === 0) {
        return { status: 'failed', reason: 'Three arguments are expected - width, height and symbol for building the board.'}
    }
    if(typeof width != 'number' || typeof height != 'number' ) {
        return { status: 'failed', reason: 'The first and second arguments must be numbers.'}
    }
    let res = '\n';
    for(let i = 0; i < height; i++) {
      if(i % 2 === 0) {
          for(let i = 0; i < width; i++) {
              (i % 2 === 0) ? res += symbol : res += ' ';
          }
      } else {
          for(let i = 0; i < width; i++) {
              (i % 2 === 0) ? res += ' ' : res += symbol;
          }
      }
      res += '\n';
    }
    return res;
}
