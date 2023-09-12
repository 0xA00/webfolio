<template>
  <div>
    <h2 id="title" v-html="title"></h2>
    <h3 id="date" v-html="date"></h3>
  </div>

</template>

<script setup>

const slug = defineProps(['Pathjson'])
let title
let date
let datsas;
const response = await fetch(`https://0xa0.dev/blog/`+slug.Pathjson+`/post.json`)
datsas = await response.json()
title = datsas.title
date = datsas.date



</script>

<style scoped>



@font-face {
  font-family:'TASADis-Med';
  src: local("ElliotSans"), url("../font/orbiter/TASAOrbiterDisplay-Medium.otf");
}

@font-face {
  font-family:'TASADis-Bold';
  src: local("ElliotSans"), url("../font/orbiter/TASAOrbiterDisplay-Bold.otf");
}

#title{
    font-family: TASADis-Bold,Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  font-size: 2em;
}

#date{
    font-family: TASADis-Med,Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  font-size: 1em;
  margin-top: -15px;
}


</style>