<template>

<tpgfpattern></tpgfpattern>
  <router-view/>
  <nav>
      <router-link style="text-decoration: none" to="/">Home</router-link> |
      <router-link style="text-decoration: none" to="/about">About</router-link> |
      <router-link style="text-decoration: none" to="/blogs">Blog</router-link>
  </nav>



</template>

<style>

#app {
    margin-left: 5%;
    margin-top:5%;
}

body{
  background-color: black;
    transition: all 0.5s ease;
}

nav {
  padding: 30px;
  font-family: TASADis-Bold, Avenir, Helvetica, Arial, sans-serif;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #C6AC8F;
}
h1 {
    font-family: TASADis-Bold, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #ffffff;
}
a {
    color: #C6AC8F;
    text-decoration: none;
}
a:hover {
    color: #C6AC8F;
    text-decoration: underline;
}



</style>

<script setup>



import Tpgfpattern from "@/views/tpgfpattern.vue";


</script>
