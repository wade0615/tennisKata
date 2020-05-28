// Import 想執行測試的 JS 進來
const tennisKata = require('../src/scoreboard.vue');
const testingJS = tennisKata.methods;
const playerScore = tennisKata.data().playerScore;

describe('tennieKata', ()=> {

test('at all', () => {
    expect(testingJS.score(0, 0, playerScore)).toBe('love all');
    expect(testingJS.score(1, 1, playerScore)).toBe('fifteen all');
});

test('inTheGame', () => {
    expect(testingJS.score(1, 0, playerScore)).toBe('fifteen love');
    expect(testingJS.score(2, 0, playerScore)).toBe('thirty love');
    expect(testingJS.score(2, 1, playerScore)).toBe('thirty fifteen');
    expect(testingJS.score(1, 2, playerScore)).toBe('fifteen thirty');
    expect(testingJS.score(0, 2, playerScore)).toBe('love thirty');
    expect(testingJS.score(0, 1, playerScore)).toBe('love fifteen');
});

test('Has Winner', () => {
    expect(testingJS.score(4, 0, playerScore)).toBe('Player One win');
    expect(testingJS.score(0, 4, playerScore)).toBe('Player Two win');
});

test('Deuce', () => {
    expect(testingJS.score(3, 3, playerScore)).toBe('Deuce');
    expect(testingJS.score(4, 4, playerScore)).toBe('Deuce');
});

})