const testingJS = require('../src/main.js');

test('at all', () => {
    expect(testingJS.score(0, 0)).toBe('love all');
    expect(testingJS.score(1, 1)).toBe('fifteen all');
});

test('deuce', () => {
    expect(testingJS.score(2, 2)).toBe('deuce');
    expect(testingJS.score(3, 3)).toBe('deuce');
});

test('at point', () => {
    expect(testingJS.score(1, 0)).toBe('fifteen love');
    expect(testingJS.score(2, 0)).toBe('thirty love');
    expect(testingJS.score(3, 0)).toBe('forty love');
});

test('winner', () => {
    expect(testingJS.score(4, 2)).toBe('p1 win');
    expect(testingJS.score(3, 5)).toBe('p2 win');
});