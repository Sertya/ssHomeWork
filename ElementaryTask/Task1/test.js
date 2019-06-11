describe("chessBoard", function() {
  it("Выводит сообщение о некорректных входных данных", function() {
    assert.deepEqual(chessBoard(5.5, 10, '*'), {status: 'faild', 
    reason: 'Three arguments are expected: integer, integer, string with length = 1'});
  });
  it("Печатает шахматную доску 6 на 4 символом @ ", function() {
    assert.equal(chessBoard(6, 4, '@'),
             '\n@ @ @ \n @ @ @\n@ @ @ \n @ @ @\n');
  });
  
});

