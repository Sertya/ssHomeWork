import chessBoard from './src/task1.js';
import compareEnvelopes from './src/task2.js';
import sortingTriangles from './src/task3.js';


console.log(chessBoard(25, 9, '*'));

console.log(compareEnvelopes({a: 20, b:14.7 }, {c: 3.7, d:21 }));


let arrayOfObj = [
    {vertices: 'ABC', a: 10, b: 20, c: 22.36}, 
    {vertices: 'DEF', d: 3, e: 5, f: 6}, 
    {vertices: 'XYZ', x: 10.5, y: 20.5, z: 30}
];
console.log(sortingTriangles(arrayOfObj));