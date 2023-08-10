<template>
  <div>
      <router-link :to="{path:'/blog/'+slug.Pathjson}">

              <h2 id="title">{{title}}</h2>
              <h3 id="date">{{date}}</h3>

      </router-link>
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
  font-family:'ElliotSans';
  src: local("ElliotSans"), url("../font/ElliotSans-Regular.ttf");
}

@font-face {
  font-family:'ElliotSansBold';
  src: local("ElliotSans"), url("../font/ElliotSans-Bold.ttf");
}

#title{
    font-family: ElliotSansBold,Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  font-size: large;
}

#date{
    font-family: ElliotSans,Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  color: #b2beb5;
  font-size: 1em;
  margin-top: -15px;
}


</style>