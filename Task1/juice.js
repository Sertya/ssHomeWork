// Calculates the cost of a glass of juice from a given set of fruits 
let standartFruits = {
   fruits: ['Banana', 'Orange', 'Apple', 'Lemon', 'Pineapple', 'Grapefruit', 'Pear', 'Grapes'],
   price: 5
 };
 let editionalFruits = {
   fruits: ['Avocado', 'Mango', 'Selery', 'Blueberries', 'Papaya', 'Watermelon','Strawberry'],
   price: 7
 };
 
 function makeCost(...order) {
   const extraPrice = 9;
   let cost = 0;
   
   order.reduce((accumulator, currentFruit) => {
     if(standartFruits.fruits.includes(currentFruit)) { 
       cost += standartFruits.price;
     } else if(editionalFruits.fruits.includes(currentFruit)) {
       cost += editionalFruits.price;
     } else {
       cost += extraPrice;
     }
   }, 0);
   return cost / order.length;
 }
 
 console.log(makeCost('Banana', 'Pineapple', 'Mango', 'Milk'));
