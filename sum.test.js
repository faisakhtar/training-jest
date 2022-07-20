const sums = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sums.sum(1, 2)).toBe(3);
});

test('adds 3 + 3 to equal 6', () => {
    expect(sums.sum(3, 3)).toBe(6)
});

test('remove 10 - 5 to equal 5', () => {
    expect(sums.difference(10, 5)).toBe(5)
});

test('remove 7 - 4 to equal 3', () => {
    expect(sums.difference(7, 4)).toBe(3)
});



