export default function sortingTriangles(input) {
    let arrayOfTriangles = [...input];
    let resultArray = [];
    for( let i = 0; i < arrayOfTriangles.length; i++) {
        let sides = [];
        let p = 0;
        for (const key in arrayOfTriangles[i]) {
            if (typeof arrayOfTriangles[i][key] !== 'number') { continue; }
            sides.push(arrayOfTriangles[i][key]);
            p += (arrayOfTriangles[i][key]) / 2;
        }
        arrayOfTriangles[i].area = Math.sqrt(p * (p - sides[0]) * (p - sides[1]) * (p - sides[2]));
    }
    arrayOfTriangles.sort((a,b) => b.area - a.area);
    for(let i = 0; i < arrayOfTriangles.length; i++) {
        resultArray.push(arrayOfTriangles[i].vertices);
    }
    return resultArray;
  }
      
    