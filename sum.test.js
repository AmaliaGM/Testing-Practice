const sum = require('./sum.js');
const substract = require('./substract.js');
const multiply = require('./multiply.js');
const division = require('./division.js');
const string = require('./countString.js');
const reverse = require('./reverseString.js');
const reverseString = require('./reverseString.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('substracts 2 - 1 to equal 1', () => {
  expect(substract(2, 1)).toBe(1);
}); 

test('multiply 1 * 2 to equal 2', () => {
expect(multiply(1, 2)).toBe(2);
});

 test('division 2 / 1 to equal 2', () => {
expect(division(2, 1)).toBe(2);
});  

test('string "add" to equal 3', () => {
  expect(string('add')).toBe(3);
});

test('reverseString "this" to equal "siht"', () => {
  expect(reverseString('this')).toMatch('siht');
});
