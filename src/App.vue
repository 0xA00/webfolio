<template>
  <router-view/>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div class="nightlightmode">
    <button @click="">Toggle Theme</button>
  </div>
</template>

<style>

.nightlightmode{
    //make it sticky on the bottom right of the screen
    position: fixed;
    bottom: 2%;
    right: 2%;
    background: rgba( 255, 255, 255, 0.3 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 16px );
    -webkit-backdrop-filter: blur( 16px );
    border-radius: 10px;
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