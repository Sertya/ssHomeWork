describe("chessBoard", function() {
  it("Вызов без аргументов ожидает соответствующее сообщение", function() {
    assert.deepEqual(chessBoard(), {status: 'faild', 
    reason: 'Three arguments are expected: integer, integer, string with length = 1'});
  });

  it("Первый или второй аргумент не является целым числом, выводит соответствующее сообщение", function() {
    assert.deepEqual(chessBoard(5.5, 10, '#'), {status: 'faild', 
    reason: 'First and second arguments expected to be integer and mor than 0'});
  });

  it("Третий аргумент не является строкой с длиной = 1, выводит соответствующее сообщение", function() {
    assert.deepEqual(chessBoard(10, 10, '#№№'), {status: 'faild', 
    reason: 'Third argument expected to be string with length = 1'});
  });

  it("Печатает шахматную доску 6 на 4 символом @ ", function() {
    assert.equal(chessBoard(6, 4, '@'),
             '\n@ @ @ \n @ @ @\n@ @ @ \n @ @ @\n');
  });
  
});

