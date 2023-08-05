<template>
<div id="POST">
    <h2 id="titlepost">{{route.params.id}}</h2>



</div>
</template>

<script setup>


import {useRoute} from "vue-router";


let title= ""
let datsas;

const route = useRoute()
//fetch the json and index.md at the same time and wait for both to be loaded
const response = await fetch(`https://0xa0.dev/blog/`+route.params.id+`/post.json`)

datsas = await response.json()
console.log(datsas.title)









</script>

<style scoped>

#POST{
    margin-left: 2%;
}

h2{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  color: #42b983;
}

#content{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
color:whitesmoke;
}
</style>