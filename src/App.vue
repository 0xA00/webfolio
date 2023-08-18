<template>
  <router-view/>
  <nav>
      <router-link style="text-decoration: none" to="/">Home</router-link> |
      <router-link style="text-decoration: none" to="/about">About</router-link> |
      <router-link style="text-decoration: none" to="/blogs">Blog</router-link>
  </nav>
  <div class="nightlightmode">
      <div class="nightlightmodebutton" @click="nightlightmode">
          <div class="circle"></div>

    </div>
  </div>

</template>

<style>

.nightlightmodebutton{
    position: relative;
    width: 90%;
    height: 90%;
    border-radius: 100%;
    background: #b9b9b9;
    cursor: pointer;
    transition: all 0.5s ease;
}

.circle{
    position: absolute;
    top: 5%;
    left: 5%;
    width: 45%;
    height: 90%;
    border-radius: 50%;
    background: #ffffff;
    transition: all 0.5s ease;
}

.nightlightmode{

    position: fixed;
    bottom: 2%;
    right: 2%;
    background: rgba( 255, 255, 255, 0.1 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 14px );
    -webkit-backdrop-filter: blur( 14px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    width: 100px;
    height: 50px;


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
if (os.includes("Linux") && !os2.includes("Firefox")){
    //delete all the body
    document.body.innerHTML = ""
    //then display this message
    document.body.innerHTML = "<pre style=\"word-wrap: break-word; white-space: pre-wrap; color: #ffffff\">Sorry, but this website is not available on Linux while using another browser than Firefox. Please use Firefox.</pre>"
    //change body color to error color (gray like)
    document.body.style.backgroundColor = "#121212"
}

//function to change the color of the nightlightmode button
function nightlightmode(){
    //get the nightlightmode button
    let nightlightmodebutton = document.getElementsByClassName("nightlightmodebutton")[0]
    //get the circle inside the nightlightmode button
    let circle = document.getElementsByClassName("circle")[0]
    //get the body
    let body = document.body
    //if the body is not in nightlightmode
    if (body.style.backgroundColor !== "white"){
        //change the body color to white
        body.style.backgroundColor = "white"
        //change the nightlightmode button color to black
        nightlightmodebutton.style.backgroundColor = "black"
        //change the circle color to white
        circle.style.backgroundColor = "white"
    }
    //if the body is in nightlightmode
    else{
        //change the body color to black
        body.style.backgroundColor = "#16161d"
        //change the nightlightmode button color to white
        nightlightmodebutton.style.backgroundColor = "white"
        //change the circle color to black
        circle.style.backgroundColor = "black"
    }
}
</script>