const scoreState = ['love', 'fifteen']

function score (p1, p2){
    if(isAtAll(p1, p2)){
        return `${scoreState[p1]} all`
    }
};

function isAtAll(p1, p2){
    return (p1 === p2) && (p1 <= 1)
}

module.exports = {
    score: score
};