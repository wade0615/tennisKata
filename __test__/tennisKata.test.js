// Import 想執行測試的 JS 進來
const testingJS = require('../src/tennisKata.js');

test('測試基本斷言', () => {
    expect(2 + 2).toBe(4);
    expect(testingJS.funcSum(2, 3)).toBe(5);
})