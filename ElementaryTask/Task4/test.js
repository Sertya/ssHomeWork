describe('longestPalindrom', function() {
  it('Missing or wrong argument!', function() {
    assert.deepEqual(longestPalindrom(), {status: 'failed', 
    reason: 'Expected number more than 10 as an argument!'});
  });

  it('There is no palindrome', function() {
    assert.equal(longestPalindrom(123456789), 0);
  });

  it('Palindrome is found', function() {
    assert.equal(longestPalindrom(1234565432175211), 12345654321);
  });

});
