describe('numericSequence', function() {

  it('Missing arguments!', function() {
    assert.deepEqual(numericSequence(), {status: 'failed', reason: 'Missing arguments!'});
  });

   it('Two numbers are expected as arguments!', function() {
     assert.deepEqual(numericSequence('a', 15), 
          {status: 'failed', reason: 'Two numbers are expected as arguments!'});
   });

   it('With arguments 7 and 15, expected output 4,5,6,7,8,9,10 ', function() {
    assert.deepEqual(numericSequence(7, 15), '4,5,6,7,8,9,10');
  });

});