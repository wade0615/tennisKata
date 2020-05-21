const testingJS = require('../src/main.js');

test('atAll', ()=>{
    expect(testingJS.score(0, 0)).toBe('love all');
    expect(testingJS.score(1, 1)).toBe('fifteen all');
});