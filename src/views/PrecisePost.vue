<template>
<div id="POST">
    <h2 id="title">{{$route.params.id}}</h2>

    <div id="contents">
        {{content}}

    </div>

</div>
</template>

<script setup>


import {useRoute} from "vue-router";

let content= ""
let datsas;
const route = useRoute()
let title = route.params.id
const response = await fetch(`https://0xa0.dev/blog/`+title+`/index.md`)

datsas = await response.text()

await new Promise(resolve => {
    setTimeout(() => {
        content = datsas
        resolve()
    }, 1000)
})


</script>

<style scoped>

</style>