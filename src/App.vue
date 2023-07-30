<template>
  <router-view/>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/blogs">Blog</router-link>
  </nav>
</template>

<style>
#app {
  margin-left: 5%;
  margin-top:5%;
}
body{
  background-color: #16161d;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #42b983;

}
a {
    color: #42b983;
    text-decoration: none;
}

a:hover {
    color: #66c2a4;
    text-decoration: underline;
}
</style>

<script setup>
</script>