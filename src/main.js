const playerState = ['love', 'fifteen', 'thirty', 'forty']

function score (p1, p2){
    if(isAtAll(p1, p2)){
        return `${playerState[p1]} all`
    }
    else if(isAtPoint(p1, p2)){
        return `${playerState[p1]} ${playerState[p2]}`
    }
    else if (isDeuce(p1, p2)){
        return 'deuce'
    }
    else if (isAdvantage(p1, p2)){
        return `${whoisAdvanture(p1, p2)} advantage`
    }
    else if (hasWinner(p1, p2)){
        return `${whoWin(p1, p2)} win`
    }
};

function isAtAll(p1, p2){
    return (p1 === p2) && (p1 < 2)
};

function isAtPoint(p1, p2){
    return (p1 != p2) && (p1 <= 3) && (p2 <= 3)
};

function isDeuce(p1, p2){
    return (p1 === p2) && (p1 >= 2)
};

function isAdvantage(p1, p2){
    return (p1 || p2) >= 3 && Math.abs(p1 - p2) === 1
};

function whoisAdvanture(p1, p2){
    return p1 > p2 ? 'p1' : 'p2'
};

function hasWinner(p1, p2){
    return (p1 != p2) && (p1||p2 > 3) && Math.abs(p1 - p2) > 1
};

function whoWin(p1, p2){
    return p1 > p2 ? 'p1' : 'p2'
}

module.exports = {
    score: score
};