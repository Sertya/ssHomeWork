describe('createFibonacci', function() {

  it('Missing argument!', function() {
    assert.deepEqual(createFibonacci(), {status: 'failed', reason: 'Missing argument!'});
  });

   it('The value of min and max must be a number!', function() {
     assert.deepEqual(createFibonacci({min: 'o', max: 10946}), 
          {status: 'failed', reason: 'The value of min and max must be a number!'});
   });

   it('Result by len = 2 expected [13, 21, 34, 55, 89]', function() {
    assert.deepEqual(createFibonacci({len: 2}), [13, 21, 34, 55, 89]);
  });

  it('Result by min = 13 and max = 615 expected [13, 21, 34, 55, 89, 144, 233, 377, 610]', 
    function() {
      assert.deepEqual(createFibonacci({min: 13, max: 615}), 
        [13, 21, 34, 55, 89, 144, 233, 377, 610]);
  });

});