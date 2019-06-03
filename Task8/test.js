describe("battleShipScore", function() {

  it("информирует о том что введены некорректные аргументы", function() {
    assert.equal(battleShipScore([
      [0,0,0,2,2],
         [0,3,0,0,0,0],
         [0,3,0,1,0,0],
         [0,3,0,1,0,0]
    ], [[2, 1], [1, 3], [4, 2]]), 'Wrong arguments!');
  });

});

describe("battleShipScore", function() {

  it("Считает результат морского боя", function() {
    assert.equal(battleShipScore([
      [0,0,0,2,2,0],
      [0,3,0,0,0,0],
      [0,3,0,1,0,0],
      [0,3,0,1,0,0]], [[2, 1], [1, 3], [4, 2]]), {sunk: 0, damaged: 2, notTouched: 1, points: 0});
  });

});