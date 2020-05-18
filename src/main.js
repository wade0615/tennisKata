playerState = ['love', 'fifteen', 'thirty', 'forty']

function score (p1, p2){
    if (isAtAll(p1, p2)){
        return `${playerState[p1]} all`
    }
    else if (isDeuce(p1, p2)){
        return 'deuce'
    }
};

function isAtAll (p1, p2){
    return (p1 === p2) && (p1 <= 1) ? true : false;
};

function isDeuce(p1, p2){
    return (p1 === p2) && (p1 > 1) ? true : false;
}

module.exports = {
    score: score
}