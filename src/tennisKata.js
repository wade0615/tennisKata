console.log('Hello TennisKata');

function score (a, b){
    if (a == 0 && b == 0){
        return 'love all';
    } else if (a == 1 && b == 0){
        return 'fifteen love';
    } else if (a == 2 && b == 0){
        return 'thirty love';
    } else if (a == 3 && b == 0){
        return 'forty love';
    } else if (a > 3 && a - b >= 2){
        return 'Player one win';
    }
};

module.exports = { //這個只在 node 環境下喔
    score: score
}