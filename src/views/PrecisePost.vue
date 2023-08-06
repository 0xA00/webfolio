<template>
<div id="POST">
  <h1>{{titlepost}} </h1>
</div>

</template>

<script setup>
import {onMounted, ref} from "vue";

let titlepost =ref("")

onMounted(async () => {
    const response = await fetch(`https://0xa0.dev/blog/`+slug.Pathjson+`/post.json`)
    const datsas = await response.json()
    titlepost.value = datsas.title
})





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