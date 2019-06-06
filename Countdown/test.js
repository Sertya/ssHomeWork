describe("countdown", function() {
  it("получает -154800000 миллисекунд, возвращает '-43:00:00'", function() {
    assert.equal(countdown(-154800000), '-43:00:00');
  });
  it("получает 0 миллисекунд, возвращает '+00:00:00'", function() {
    assert.equal(countdown(0), '+00:00:00');
  });
  it("получает 61000 миллисекунд, возвращает '+00:01:01'", function() {
    assert.equal(countdown(61000), '+00:01:01');
  });
  it("получает 360000000 миллисекунд, возвращает '+100:00:00'", function() {
    assert.equal(countdown(360000000), '+100:00:00');
  });
});

