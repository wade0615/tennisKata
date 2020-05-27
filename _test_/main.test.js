const testingJS = require('../main.js');

describe('tennisKata', ()=>{
    test('atAll', ()=>{
        expect(testingJS.score(0, 0)).toBe('love all')
        expect(testingJS.score(1, 1)).toBe('fifteen all')
        expect(testingJS.score(2, 2)).toBe('thirty all')
    })
    test('atPoint', ()=>{
        expect(testingJS.score(1, 0)).toBe('fifteen love')
        expect(testingJS.score(2, 0)).toBe('thirty love')
        expect(testingJS.score(3, 0)).toBe('forty love')
        expect(testingJS.score(3, 2)).toBe('forty thirty')
    })
    test('adv', ()=>{
        expect(testingJS.score(4, 3)).toBe('p1 is adv')
        expect(testingJS.score(3, 4)).toBe('p2 is adv')
    })
    test('winner', ()=>{
        expect(testingJS.score(4, 2)).toBe('p1 is winner')
        expect(testingJS.score(2, 4)).toBe('p2 is winner')
    })
    test('deuce', ()=>{
        expect(testingJS.score(3, 3)).toBe('deuce')
        expect(testingJS.score(4, 4)).toBe('deuce')
    })
})