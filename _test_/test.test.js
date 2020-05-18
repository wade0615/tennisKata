const testingJS = require('../src/main.js');

test('at all', () => {
    expect(testingJS.score(0, 0)).toBe('love all');
    expect(testingJS.score(1, 1)).toBe('fifteen all');
});

test('deuce', () => {
    expect(testingJS.score(2, 2)).toBe('deuce');
    expect(testingJS.score(3, 3)).toBe('deuce');
});