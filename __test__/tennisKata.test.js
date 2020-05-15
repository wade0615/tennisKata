// Import 想執行測試的 JS 進來
const testingJS = require('../src/tennisKata.js');

test('love all', () => {
    expect(testingJS.score(0, 0)).toBe('love all');
});

test('fifteen love', () => {
    expect(testingJS.score(1, 0)).toBe('fifteen love');
});

test('thirty love', () => {
    expect(testingJS.score(2, 0)).toBe('thirty love');
});

test('forty love', () => {
    expect(testingJS.score(3, 0)).toBe('forty love');
});

test('Player one win', () => {
    expect(testingJS.score(4, 0)).toBe('Player one win');
});