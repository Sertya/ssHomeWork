function countdown(input) {
   let hours, minutes, seconds;

   const milliseconds = Math.abs(input);
   let sign = input >= 0 ? '+' : '-';

   hours = Math.floor(milliseconds / 3.6e+6);
   hours = hours < 10 ? '0' + hours : hours;

   minutes = Math.floor((milliseconds % 3.6e+6) / 6e+4);
   minutes = minutes < 10 ? '0' + minutes : minutes;

   seconds = ((milliseconds % 3.6e+6) % 6e+4) / 1000;
   seconds = seconds < 10 ? '0' + seconds : seconds;

   return `${sign}${hours}:${minutes}:${seconds}`;
}

console.log(countdown(-154800000));

// 0
// 6100
// 360000000