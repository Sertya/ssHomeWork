function findChairs(rooms, numberOfChairs) {
  const maximum = 8;
  let result = [];
  let receivedChairs = 0;
  let isArray = Array.isArray(rooms);
  let isValidArray = rooms.every((room) => {
    let [people, chairs] = room;
    return (typeof people === 'string' && Number.isInteger(chairs));
  });
  let validNumberOfChairs = (numberOfChairs > 0 && numberOfChairs <= maximum &&  Number.isInteger(numberOfChairs));
    
  if(!numberOfChairs) { result = 'Game on!'; }

  if(arguments.length && isArray && isValidArray && validNumberOfChairs) {
    rooms.some((room) => {
      let [people, chairs] = room, freeChairs = chairs - people.length;
      
      if(freeChairs >= 0 && freeChairs <= numberOfChairs - receivedChairs) {
        result.push(freeChairs);
        receivedChairs += freeChairs;
      } else if(freeChairs > 0 && freeChairs > numberOfChairs - receivedChairs) {
        result.push(numberOfChairs - receivedChairs);
        receivedChairs += numberOfChairs - receivedChairs;
         } else {
          result.push(0);
         }
      return receivedChairs === numberOfChairs;
    });
    if(receivedChairs < numberOfChairs) { result = 'Not enough!'}
  } else if(numberOfChairs){
    result = 'Expected an array as first argument and integer number as second!';
  }
  return result;
}

console.log(findChairs([['XXX', 3 ], ['XXXXX', 6], ['XXXXXX', 9]], 0));
