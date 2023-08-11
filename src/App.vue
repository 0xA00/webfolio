<template>
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
  background-color: #16161d;
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
  color: #c400da;
}

h1 {
  font-family: TASADis-Bold, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;

}
a {
    color: #c400da;
    text-decoration: none;
}

a:hover {
    color: #c400da;
    text-decoration: underline;
}
</style>

<script setup>
</script>