<template>
<div id="POST">
    <h2 ref="titler"></h2>




</div>
</template>

<script setup>


import {useRoute} from "vue-router";
import {ref} from "vue";





let datsas;

let $route = useRoute();
const response = await fetch(`https://0xa0.dev/blog/`+$route.params.id+"/post.json")
datsas = await response.json()


//get the ref for titler used in the template
const titler = this.$ref["titler"].focus()
//change the title
titler.innerHTML = datsas.title






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