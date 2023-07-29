<template>
<div id="POST">
    <h2 id="title">{{$route.params.id}}</h2>


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
console.log(datsas)




</script>

<style scoped>

</style>