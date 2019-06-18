function sortingTriangles(arrayOfTriangles) {
  let result;
  
  if(arguments.length !==0 ) {
    result = validArgument(arrayOfTriangles);

    if(result === true) {
      result = [];
      arrayOfTriangles.forEach(triangle => {
        let [a, b, c] = triangle.vertices.toLowerCase(),
            p = 0; // полупериметр
   
        a = triangle[a];
        b = triangle[b];
        c = triangle[c];
        // расчет полупериметра 
        p = (a + b + c) / 2;
        // расчет площади
        triangle.area = Math.sqrt(p * (p - a) * (p - b) * (p - c)); 

      }); 
   
      arrayOfTriangles.sort((a,b) => b.area - a.area);
   
      arrayOfTriangles.forEach(triangle => {
         result.push(triangle.vertices);
      });
    }

  } else {
    result = {status: 'failed', reason: 'Missing argument, a list of triangles is expected!'};
  }

  return result;
}

// функция проверки аргументов
function validArgument(argument) {
  let result = true,
      arrayOfNum = [],
      triangles = [];

  argument.forEach(element => {
    let [, a, b, c] = Object.values(element),
        triangle;

    arrayOfNum.push(a,b,c);
    
    triangle = (a + b) > c && (a + c) > b && (b + c) > a;

    triangles.push(triangle);

  });

  let isNumber = arrayOfNum.every( item => {
    return typeof(item) === 'number';
  });

  let isTriangle = triangles.every( item => {
    return item === true;
  });

  if(!isNumber) {
    result = {
      status: 'failed',
      reason: 'Some of values in argument is not a number!'
    };
  } else if(!isTriangle) {
    result = {
      status: 'failed',
      reason: 'Some of values in argument is not a triangle!'
    };
  }

  return result;
}

let arrayOfObj = [
  {vertices: 'ABC', a: 10, b: 20, c: 22.36}, 
  {vertices: 'DEF', d: 3, e: 5, f: 6}, 
  {vertices: 'XYZ', x: 10.5, y: 20.5, z: 30}
];

console.log(sortingTriangles(arrayOfObj));