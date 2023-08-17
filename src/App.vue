<template>
  <router-view/>
  <nav>
      <router-link style="text-decoration: none" to="/">Home</router-link> |
      <router-link style="text-decoration: none" to="/about">About</router-link> |
      <router-link style="text-decoration: none" to="/blogs">Blog</router-link>
  </nav>

</template>

<style>

.nightlightmode{

    position: fixed;
    bottom: 2%;
    right: 2%;
    background: rgba( 21, 34, 46, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    border-radius: 10px;

    width: 50px;
    height: 25px;


}

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
    color: #005eda;
}
h1 {
    font-family: TASADis-Bold, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #ffffff;
}
a {
    color: #005eda;
    text-decoration: none;
}
a:hover {
    color: #005eda;
    text-decoration: underline;
}
</style>

<script setup>
//check user's os
let os = navigator.platform
let os2 = navigator.userAgent
//if user is on Chrome AND on Linux, then block access to the website
if (os2.includes("Chrome") && os.includes("Linux")){
    //dom manipulation
    document.getElementById("app").innerHTML = "<h1>Sorry, but this website is not available on Chrome while using Linux OS . Please use Firefox or any other browser.</h1>"
}
</script>