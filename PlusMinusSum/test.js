describe("getSolution", function() {
  it("Получает массив [1, 3, 4, 6, 8] и сумму -2, возвращает true", function() {
    assert.equal(getSolution([1, 3, 4, 6, 8], -2), true);
  });
  it("Получает массив [15, 2, 3] и сумму 10, возвращает true", function() {
    assert.equal(getSolution([15, 2, 3], 10), true);
  });
  it("Получает массив [1, 5, 3, 2, 5] и сумму -2, возвращает false", function() {
    assert.equal(getSolution([1, 5, 3, 2, 5], -2), false);
  });
  it("Получает массив [1, 5, 3, 2, 5] и сумму 0, возвращает true", function() {
    assert.equal(getSolution([1, 5, 3, 2, 5], 0), true);
  });
  it("Получает массив неправильной длинны возвращает ошибку", function() {
    assert.equal(getSolution([1], 0), 'Wrong Arguments!');
  });
  it("Получает массив c элементами больше установленного предела возвращает ошибку", function() {
    assert.equal(getSolution([1, 25, 30], 0), 'Wrong Arguments!');
  });
  it("Получает второй аргумент меньше установленного предела возвращает ошибку", function() {
    assert.equal(getSolution([1, 3, 10], -20), 'Wrong Arguments!');
  });
});

//assert.equal(getSolution([15, 2, 3], 10), true);
