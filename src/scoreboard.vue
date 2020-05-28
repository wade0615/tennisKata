<template>
    <div>
    <div class="title">{{ msg }}</div>
    <button v-on:click="cons()">點我觸發</button>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            msg: "Let's start the game.",
            playerScore: ['love', 'fifteen', 'thirty', 'forty']
        }
    },
    methods: {
        cons(){
            console.log('msg', this.msg);
        },
        score(playerOne, playerTwo, playerScore){
            if (this.atAll(playerOne, playerTwo)){
                return `${playerScore[playerOne]} all`;
            } 
            else if (this.inTheGame(playerOne, playerTwo)){
                return `${playerScore[playerOne]} ${playerScore[playerTwo]}`;
            }
            else if (this.hasWinner(playerOne, playerTwo)){
                return `${this.whoWins(playerOne, playerTwo)} win`;
            }
            else if (this.isDeuce(playerOne, playerTwo)){
                return 'Deuce';
            }
        },
        hasWinner: function(playerOne, playerTwo) {
            return (playerOne >=3 || playerTwo >=3) && Math.abs(playerOne - playerTwo) > 1;
        },
        whoWins: function(playerOne, playerTwo) {
            return playerOne > playerTwo ? 'Player One' : 'Player Two';
        },
        isDeuce: function(playerOne, playerTwo) {
            return (playerOne === playerTwo) && playerOne >=2;
        },
        atAll: function(playerOne, playerTwo) {
            return (playerOne === playerTwo) && playerOne <2;
        },
        inTheGame: function(playerOne, playerTwo) {
            return (playerOne != playerTwo) && (playerOne <= 3 && playerTwo <= 3);
        }
    }
}
</script>

<style>
.title {
    color: red;
}
</style>