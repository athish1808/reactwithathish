const sum = require('./testingsum');

test('adds 1 + 2 + 3 to equal 6', () => {
  expect(sum(1, 2, 3)).toBe(6);
  console.log('add of 1+2+3 is 6')
});

const sum3 = require('./testingdiff');

test('sub 10 - 2 to equal 8', () => {
  expect(sum3(10, 2)).toBe(8);
  console.log('sub of 10-2 is 8')
});

const sum2 = require('./testingmul');

test('adds 3 * 2 to equal 6', () => {
  expect(sum2(3, 2)).toBe(6);
  console.log('mul of 3*2 is 6')
});

