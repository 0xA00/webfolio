<template>
<div>
  <h1>{{$route.params.id}}</h1>
</div>

</template>

<script setup>

import {useRoute} from "vue-router";
import SlugBlog from "@/views/SlugBlog.vue";
const route = useRoute()
let titlepost = ""

let datsas;
const response = await fetch(`https://0xa0.dev/blog/`+route.params.id+`/post.json`)
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