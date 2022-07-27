const Calculate = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('substract 2 - 1 to equal 1', () => {
    expect(ssubstract(2, 1)).toBe(1);
  });

test('multiply 1 * 2 to equal 2', () => {
expect(multiply(1, 2)).toBe(2);
});

test('division 2 / 1 to equal 2', () => {
expect(division(2, 1)).toBe(2);
});