describe('sortingTriangles', function() {
  it('Missing argument, a list of triangles is expected!', function() {
    assert.deepEqual(sortingTriangles(), {status: 'failed', 
    reason: 'Missing argument, a list of triangles is expected!'});
  });

  it('Some of values in argument is not a number!', function() {
    assert.deepEqual(sortingTriangles([
      {vertices: 'ABC', a: 10, b: 's', c: 22.36}, 
      {vertices: 'DEF', d: 3, e: 5, f: 6}, 
      {vertices: 'XYZ', x: 10.5, y: 20.5, z: 30}
    ]), {status: 'failed', 
    reason: 'Some of values in argument is not a number!'});
  });

  it('Some of values in argument is not a triangle!', function() {
    assert.deepEqual(sortingTriangles([
      {vertices: 'ABC', a: 10, b: 2, c: 22.36}, 
      {vertices: 'DEF', d: 3, e: 5, f: 6}, 
      {vertices: 'XYZ', x: 10.5, y: 20.5, z: 30}
    ]), {status: 'failed', 
    reason: 'Some of values in argument is not a triangle!'});
  });

  it('Expected result [\'ABC\', \'XYZ\', \'DEF\']' , function() {
    assert.deepEqual(sortingTriangles([
      {vertices: 'ABC', a: 10, b: 20, c: 22.36}, 
      {vertices: 'DEF', d: 3, e: 5, f: 6}, 
      {vertices: 'XYZ', x: 10.5, y: 20.5, z: 30}
    ]), ['ABC', 'XYZ', 'DEF']);
  });

});
