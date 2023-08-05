<template>
<div id="POST">
  <h1>{{titlepost}} </h1>
</div>

</template>

<script setup>

import {useRoute} from "vue-router";
const route = useRoute()
let titlepost

let datsas;
//get the entire URL from this page
let url = window.location.href
//fetch the json file
const response = await fetch(url+`/post.json`)
datsas = await response.json()
titlepost = datsas.title



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