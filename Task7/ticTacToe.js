function checkTicTacToe(input) {
  const sizeBoard = 3, wonX = 15, multipleX = 5, wonO = 6;
  let result = 0;
  let horizontal = 0, vertical1 = 0, vertical2 = 0, vertical3 = 0;
  let isPlaing = input.some(row => {
    return row.includes(0);
  });
  
  if(input.length === sizeBoard && 
    input.every(element => element.length === sizeBoard)) {
      input.some(row => {
        let [first, second, third] = row;

        if(!row.includes(0)) {
          horizontal = first + second + third;
        }
        
        if(first > 1) { vertical1 += first; } else if(first === 1) {
          vertical1 += (first * multipleX);
        }

        if(second > 1) { vertical2 += second;} else if(second === 1) {
          vertical1 += (second * multipleX);
        }

        if(third > 1) { vertical3 += third; } else if(third === 1) {
          vertical1 += (third * multipleX);
        }

        let checkValue = [horizontal, vertical1, vertical2, vertical3];
        
        if(checkValue.includes(wonX)) {
          result = 1;
        } else if(checkValue.includes(wonO)) {
          result = 2;
        }
        return result > 0;
    });
        
    if(isPlaing && result < 1) { result = -1; }
  }

 return result;
}
  
console.log(checkTicTacToe([[1, 2, 1], [2, 1, 1], [2, 1, 2]]));
