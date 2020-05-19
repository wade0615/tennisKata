const testingJS = require('../src/main.js');

test('atAll', ()=> {
    expect(testingJS.score(0, 0)).toBe('love all');
    expect(testingJS.score(1, 1)).toBe('fifteen all');
});

test('deuce', ()=>{
    expect(testingJS.score(2, 2)).toBe('deuce');
    expect(testingJS.score(3, 3)).toBe('deuce');
});

test('atPoint', ()=>{
    expect(testingJS.score(3, 1)).toBe('forty fifteen');
    expect(testingJS.score(0, 2)).toBe('love thirty');
})

test('winner', ()=>{
    expect(testingJS.score(4, 1)).toBe('p1 win');
    expect(testingJS.score(2, 4)).toBe('p2 win');
})