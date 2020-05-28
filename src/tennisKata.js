import scoreboard from './scoreboard.vue';

console.log('Hello TennisKata');

// module.exports = { //這個只在 node 環境下喔
//     score: score
// };

Vue.config.productionTip = false //阻止啟動生產訊息

new Vue({
    el: '#app',
    template: 
    `<div>
        <app></app>
    </div>`,
    components: {
        app: scoreboard
    }
})