console.log('Hello TennisKata');

const playerScore = ['love', 'fifteen', 'thirty', 'forty']

function score (playerOne, playerTwo){
    if (atAll(playerOne, playerTwo)){
        return `${playerScore[playerOne]} all`;
    } 
    else if (inTheGame(playerOne, playerTwo)){
        return `${playerScore[playerOne]} ${playerScore[playerTwo]}`;
    }
    else if (hasWinner(playerOne, playerTwo)){
        return `${whoWins(playerOne, playerTwo)} win`;
    }
    else if (isDeuce(playerOne, playerTwo)){
        return 'Deuce';
    }
};

function hasWinner(playerOne, playerTwo) {
    return (playerOne >=3 || playerTwo >=3) && Math.abs(playerOne - playerTwo) > 1;
};

function whoWins(playerOne, playerTwo) {
    return playerOne > playerTwo ? 'Player One' : 'Player Two';
};

function isDeuce(playerOne, playerTwo) {
    return (playerOne === playerTwo) && playerOne >=2;
};

function atAll(playerOne, playerTwo) {
    return (playerOne === playerTwo) && playerOne <2;
};

function inTheGame(playerOne, playerTwo) {
    return (playerOne != playerTwo) && (playerOne <= 3 && playerTwo <= 3);
};

module.exports = { //這個只在 node 環境下喔
    score: score
}