const playerState = ['love', 'fifteen', 'thirty', 'forty']

function score (p1, p2){
    if(p1 === p2 && p1 < 3){
        return `${playerState[p1]} all`
    }
    else if(p1 != p2 && p1 <= 3 && p2 <= 3){
        return `${playerState[p1]} ${playerState[p2]}`
    }
    else if(inAdv(p1, p2)){
        return `${whoIsHigher(p1, p2)} is adv`
    }
    else if(p1 === p2 && p1 >= 3){
        return `deuce`
    }
    else {
        return `${whoIsHigher(p1, p2)} is winner`
    }
};

function whoIsHigher(p1, p2){
    return p1 > p2 ? 'p1' : 'p2'
};

function inAdv(p1, p2){
    return (p1 || p2 >= 3) && (Math.abs(p1 - p2) === 1)
}

module.exports = {
    score: score
};