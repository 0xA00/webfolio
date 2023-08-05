<template>
<div id="POST">
    <h2 id="title">{{title}}</h2>



</div>
</template>

<script setup>


import {useRoute} from "vue-router";


let title= ""
let datsas;

const route = useRoute()
const response = await fetch(`https://0xa0.dev/blog/`+route.params.id+`/post.json`)
datsas = await response.json()

title = datsas.title

export default {
    data() {
        return {
            title: title
        }
    }
}












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