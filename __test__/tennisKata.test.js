// Import 想執行測試的 JS 進來
const testingJS = require('../src/tennisKata.js');

test('at all', () => {
    expect(testingJS.score(0, 0)).toBe('love all');
    expect(testingJS.score(1, 1)).toBe('fifteen all');
});

test('inTheGame', () => {
    expect(testingJS.score(1, 0)).toBe('fifteen love');
    expect(testingJS.score(2, 0)).toBe('thirty love');
    expect(testingJS.score(2, 1)).toBe('thirty fifteen');
    expect(testingJS.score(1, 2)).toBe('fifteen thirty');
    expect(testingJS.score(0, 2)).toBe('love thirty');
    expect(testingJS.score(0, 1)).toBe('love fifteen');
});

test('Has Winner', () => {
    expect(testingJS.score(4, 0)).toBe('Player One win');
    expect(testingJS.score(0, 4)).toBe('Player Two win');
});

test('Deuce', () => {
    expect(testingJS.score(3, 3)).toBe('Deuce');
    expect(testingJS.score(4, 4)).toBe('Deuce');
});
