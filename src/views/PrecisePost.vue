<template>
<div id="POST">
    <h2>{{titler}}</h2>




</div>
</template>

<script setup>


import {useRoute} from "vue-router";
import {reactive} from "vue";





let datsas;

let $route = useRoute();
const response = await fetch(`https://0xa0.dev/blog/`+$route.params.id+"/post.json")
datsas = await response.json()

//update the title with export
let titler = reactive(datsas.title)
console.log(titler)




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