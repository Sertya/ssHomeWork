// Count players who were sent off
function countPlayers(input) {
  const state = {A: 11, B: 11, sentOff: [], checked: []};
  
  if(input.length !== 0) {
    for(let i = 0; i < input.length; i++) {
      let team = input[i].slice(0,1);
      let player = input[i].slice(1, -1);
      let card = input[i].slice(-1);
 
      if(state.A < 7 || state.B < 7) {
          break;
      }
 
      if(!state.sentOff.includes(`${team}${player}`) && 
      (state.checked.includes(`${team}${player}`) || card === 'R')) {
       state.sentOff.push(`${team}${player}`);
       state[team]--;
      } else { state.checked.push(`${team}${player}`); }
    }
  }
  return [state.A, state.B];
}

let test = ['B1Y', 'B1Y', 'B3R', 'B4R', 'A5R', 'A6Y', 'A6Y', 'B1Y', 'B3R', 'A5R', 'A9R', 'A9R'];
let test2 = ['B1R', 'B2R', 'B3R', 'B4R', 'B5R', 'A6Y', 'A6Y', 'B1Y', 'A5R'];
// let inp = ['B11Y', 'B2Y', 'A3Y', 'A9R', 'B11Y', 'B11R', 'A11R'];
// let test3 = ['B5Y', 'A5Y'];
console.log(countPlayers(test));