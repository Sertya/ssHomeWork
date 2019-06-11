function sortingTriangles(arrayOfTriangles) {
  let result = [];
  
  if(arguments.length !==0 && validArgument(arrayOfTriangles)) {
    arrayOfTriangles.forEach(triangle => {
     let [a, b, c] = triangle.vertices.toLowerCase(),
         p = 0;

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
  } else {
    result = {status: 'failed', reason: 'Invalid argument is entered!'}
  }
  return result;
}
// функция проверки аргументов
function validArgument(argument) {
  let isArray = Array.isArray(argument);
  if(isArray) {
    let validObject = argument.every(element => {
      let isObject = element.constructor === Object;
      let [vertices, a, b, c] = Object.values(element);
      let isString = typeof vertices === 'string' && vertices.length === 3;
      let isNumeric = [a,b,c].every(item => {
          return !isNaN(parseFloat(item)) && isFinite(item) && item > 0;
        });;
        let validTriangles = (a + b) > c && (a + c) > b && (b + c) > a;
      return isObject && isString && isNumeric && validTriangles;
    });
    return isArray && validObject;
  }
}

let arrayOfObj = [
  {vertices: 'ABC', a: 10, b: 20, c: 22.36}, 
  {vertices: 'DEF', d: 3, e: 5, f: 6}, 
  {vertices: 'XYZ', x: 10.5, y: 20.5, z: 30}
];

console.log(sortingTriangles(arrayOfObj));