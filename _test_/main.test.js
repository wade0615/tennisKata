const testingJS = require('../src/main.js')

describe('tennisKata', ()=>{
    test('atAll', ()=>{
        expect(testingJS.score(0, 0)).toBe('love all')
        expect(testingJS.score(1, 1)).toBe('fifteen all')
    })
    test('atPoint', ()=>{
        expect(testingJS.score(1, 0)).toBe('fifteen love')
        expect(testingJS.score(2, 0)).toBe('thirty love')
        expect(testingJS.score(2, 1)).toBe('thirty fifteen')
        expect(testingJS.score(3, 0)).toBe('forty love')
        expect(testingJS.score(3, 2)).toBe('forty thirty')
        expect(testingJS.score(3, 1)).toBe('forty fifteen')
        expect(testingJS.score(0, 1)).toBe('love fifteen')
        expect(testingJS.score(0, 2)).toBe('love thirty')
        expect(testingJS.score(1, 2)).toBe('fifteen thirty')
        expect(testingJS.score(0, 3)).toBe('love forty')
        expect(testingJS.score(2, 3)).toBe('thirty forty')
        expect(testingJS.score(1, 3)).toBe('fifteen forty')
    })
    test('deuce', ()=>{
        expect(testingJS.score(2, 2)).toBe('deuce');
        expect(testingJS.score(3, 3)).toBe('deuce');
    })
    test('advantage', ()=>{
        expect(testingJS.score(4, 3)).toBe('p1 advantage');
        expect(testingJS.score(3, 4)).toBe('p2 advantage');
        expect(testingJS.score(5, 4)).toBe('p1 advantage');
        expect(testingJS.score(4, 5)).toBe('p2 advantage');
    })
    test('winner', ()=>{
        expect(testingJS.score(4, 0)).toBe('p1 win')
        expect(testingJS.score(0, 4)).toBe('p2 win')
        expect(testingJS.score(5, 3)).toBe('p1 win')
        expect(testingJS.score(3, 5)).toBe('p2 win')
    })
})