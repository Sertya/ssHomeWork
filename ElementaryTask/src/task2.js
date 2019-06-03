export default function compareEnvelopes(first, second) {
    let result = 0;
  
  let firstMax = Math.max(...Object.values(first));
  let firstMin = Math.min(...Object.values(first));
  let secondMax = Math.max(...Object.values(second));
  let secondMin = Math.min(...Object.values(second));
  
  let forFirst = ((2 * firstMax * firstMin * secondMax + (firstMax * firstMax - firstMin * firstMin)
   * Math.sqrt(firstMax * firstMax + firstMin * firstMin - secondMax * secondMax)))
   /(firstMax * firstMax + firstMin * firstMin);

  let forSecond = ((2 * secondMax*secondMin * firstMax + (secondMax*secondMax - secondMin*secondMin)
   * Math.sqrt(secondMax*secondMax + secondMin*secondMin - firstMax*firstMax)))
   /(secondMax*secondMax + secondMin*secondMin);

  if((firstMax <= secondMax && firstMin <= secondMin) || 
  firstMax > secondMax && secondMin >= forFirst) {
    result = 1;
  }
  if((secondMax <= firstMax && secondMin <= firstMin) ||
  secondMax > firstMax && firstMin >= forSecond) {
    result = 2;
  }
  
  return result;
}
