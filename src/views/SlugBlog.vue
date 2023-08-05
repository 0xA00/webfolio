<template>
  <div>
      <router-link :to="{path:'/blog/'+slug.Pathjson}" v-slot="{ href, route, navigate }">
          <a :href="href" @click="navigate">
              <h2 id="title">{{title}}</h2>
              <h3 id="date">{{date}}</h3>
          </a>
      </router-link>
  </div>

</template>

<script setup>

const slug = defineProps(['Pathjson'])
let title= ""
let date= ""
let datsas;
const response = await fetch(`https://0xa0.dev/blog/`+slug.Pathjson+`/post.json`)
datsas = await response.json()
title = datsas.title
date = datsas.date



</script>

<style scoped>

a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }

h2{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  color: #42b983;
}

h3{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  color: #b2beb5;
  font-size: 1em;
  margin-top: -15px;
}




</style>