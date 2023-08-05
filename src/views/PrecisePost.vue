<template>
<div id="POST">




</div>
</template>

<script setup>


import {useRoute} from "vue-router";



let datsas;

const route = useRoute()
const response = await fetch(`https://0xa0.dev/blog/`+route.params.id+`/post.json`)
datsas = await response.json()

//add a title to the page inside of the POST div
const title = document.createElement('h2')
console.log(datsas.title)
title.innerHTML = datsas.title
document.getElementById("POST").appendChild(title)















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