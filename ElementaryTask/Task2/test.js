describe("compareEnvelopes", function() {
  it("Вызов без аргументов ожидает соответствующее сообщение", function() {
    assert.deepEqual(compareEnvelopes(), {status: 'failed', 
    reason: 'Two arguments are expected, two numbers in each of them!'});
  });

  it("Первый или второй аргумент не является числом, выводит соответствующее сообщение", function() {
    assert.deepEqual(compareEnvelopes({a: 20, b:'str' }, {c: 3.7, d:21 }), {status: 'failed', 
    reason: 'Some of values is not a number or some of values less then(equal) 0!'});
  });

  it("Первый или второй аргумент меньше или равен 0, выводит соответствующее сообщение", function() {
    assert.deepEqual(compareEnvelopes({a: 20, b:0 }, {c: 3.7, d:21 }), {status: 'failed', 
    reason: 'Some of values is not a number or some of values less then(equal) 0!'});
  });

  it("Выводит 2 когда второй конверт вкладывается в первый", function() {
    assert.equal(compareEnvelopes({a: 20, b:14.7 }, {c: 3.7, d:21 }),2);
  });

  it("Выводит 1 когда первый конверт вкладывается во второй", function() {
    assert.equal(compareEnvelopes({a: 10, b:14 }, {c: 12, d:15 }),1);
  });

  it("Выводит 0 когда когда ни один из конвертов нельзя вложить в другой", function() {
    assert.equal(compareEnvelopes({a: 10, b:14 }, {c: 14, d:10 }),0);
  });
  
});
