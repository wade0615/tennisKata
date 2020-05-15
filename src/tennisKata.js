console.log('Hello TennisKata');

function sum (a, b){
    return a + b
};

module.exports = { //這個只在 node 環境下喔
    funcSum: sum,
}