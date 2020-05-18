playerState = ['love', 'fifteen', 'thirty', 'forty']

function score (p1, p2){
    if (isAtAll(p1, p2)){
        return `${playerState[p1]} all`
    }
    else if (isDeuce(p1, p2)){
        return 'deuce'
    }
    else if (atPoint(p1, p2)){
        return `${playerState[p1]} ${playerState[p2]}`;
    }
    else if (hasWinner(p1, p2)){
        return `${whoWins(p1, p2)} win`;
    }
};

function isAtAll (p1, p2){
    return (p1 === p2) && (p1 <= 1) ? true : false;
};

function isDeuce(p1, p2){
    return (p1 === p2) && (p1 > 1) ? true : false;
};

function atPoint(p1, p2){
    return (p1 != p2) && (p1 <= 3) && (p2 <= 3) ? true : false;
};

function hasWinner(p1, p2){
    return (p1 || p2 > 3) && (Math.abs(p1 - p2) > 1) ? true : false;
};

function whoWins(p1, p2){
    return (p1 > p2) ? 'p1' : 'p2';
}

module.exports = {
    score: score
}