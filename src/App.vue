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
    top: 4%;
    left: 2%;
    position: relative;
    width: 95%;
    height: 90%;
    border-radius: 20% 20% 20% 20% / 50% 50% 50% 50% ;
    background: #b9b9b9;
    cursor: pointer;
    transition: all 0.5s ease;
}

.circle{
    position: absolute;
    top: 5%;
    left: 4%;
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




[data-theme=dark]{
    background-color: white;
    transition: all 0.5s ease;

   & .circle{
        left: 50%;
        transform: translateX(50%);
    }

    & .nightlightmodebutton{
        background: #4eee8e;
        transition: all 0.5s ease;
    }
}




#app {
    margin-left: 5%;
    margin-top:5%;
}

body{
  background-color: #16161d;
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

function nightlightmode(){
  if(document.body.getAttribute("data-theme") === "dark"){
        document.body.setAttribute("data-theme", "")
    }else{
        document.body.setAttribute("data-theme", "dark")
    }
}


</script>
