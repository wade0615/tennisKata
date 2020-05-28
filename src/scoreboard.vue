<template>
    <div class="title">{{ msg }}</div>
</template>

<script>
module.exports = {
    data () {
        return {
            msg: "Let's start the game."
        }
    }
}
</script>

<style>
.title {
    color: red;
}
</style>