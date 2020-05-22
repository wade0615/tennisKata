playerState = ['love', 'fifteen', 'thirty', 'forty']

function score(p1, p2){
    if (isAtAll(p1, p2)){
        return `${playerState[p1]} all`
    }
    else if (isduece(p1, p2)){
        return 'duece'
    }
    else if (isAtPoint(p1, p2)){
        return `${playerState[p1]} ${playerState[p2]}`
    }
    else if (hasWinner(p1, p2)){
        return `${whoWins(p1, p2)} win`
    }
};

function isAtAll(p1, p2){
    return (p1 === p2) && (p1 <= 1)
};

function isduece(p1, p2){
    return (p1 === p2) && (p1 > 1)
};

function isAtPoint(p1, p2){
    return (p1 != p2) && (p1 <= 3) && (p2 <= 3)
};

function hasWinner(p1, p2){
    return (p1 >= 4)||(p2 >= 4) && Math.abs(p1 - p2) > 1
};

function whoWins(p1, p2){
    return p1 > p2 ? 'p1' : 'p2'
}

module.exports = {
    score: score
}