describe('luckyTickets', function() {
  it('Missing argument!', function() {
    assert.deepEqual(luckyTickets(), {status: 'failed', reason: 'Missing argument!'});
  });

  it('First argument should be number in range of 0 to 999999!', function() {
    assert.deepEqual(luckyTickets({min: 'a', max: 100199}), {status: 'failed', 
      reason: 'First argument should be number in range of 0 to 999999!'});
  });

  it('Second argument should be number in range of 0 to 999999!', function() {
    assert.deepEqual(luckyTickets({min: 100100, max: 'a'}), {status: 'failed', 
      reason: 'Second argument should be number in range of 0 to 999999!'});
  });

  it('In range of 333333 to 444444, expected result {simple: 6817, complicated: 2675, winner: "simple"}', 
  function() {
    assert.deepEqual(luckyTickets({min: 333333, max: 444444}), 
    {simple: 6817, complicated: 2675, winner: "simple"});
  });

});