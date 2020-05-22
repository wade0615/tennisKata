const testingJS = require('../src/main.js');

describe('tennisGame', ()=>{
    test('atAll', ()=>{
        expect(testingJS.score(0, 0)).toBe('love all')
        expect(testingJS.score(1, 1)).toBe('fifteen all')
    })
    test('duece', ()=>{
        expect(testingJS.score(2, 2)).toBe('duece')
    })
    test('atPoint', ()=>{
        expect(testingJS.score(0, 1)).toBe('love fifteen')
        expect(testingJS.score(0, 2)).toBe('love thirty')
        expect(testingJS.score(0, 3)).toBe('love forty')
        expect(testingJS.score(3, 0)).toBe('forty love')
        expect(testingJS.score(3, 1)).toBe('forty fifteen')
    })
    test('winner', ()=>{
        expect(testingJS.score(4, 0)).toBe('p1 win')
        expect(testingJS.score(0, 4)).toBe('p2 win')
    })
})