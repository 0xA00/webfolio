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

//get localStorage of activated and if it doesn't exist, set it to false and create it
let activated = localStorage.getItem("activated") || false
localStorage.setItem("activated", activated)


//function to change the color of the nightlightmode button
function nightlightmode(){
    activated = !activated
    localStorage.setItem("activated", activated)
    //get the nightlightmode button
    let nightlightmodebutton = document.getElementsByClassName("nightlightmodebutton")[0]
    //get the circle inside the nightlightmode button
    let circle = document.getElementsByClassName("circle")[0]
    //get the body
    let body = document.body
    //if the body is not in nightlightmode
    if (activated){
        //change the body color to white
        body.style.backgroundColor = "#eae9e9"
        //change the nightlightmode button color to light green
        nightlightmodebutton.style.backgroundColor = "#40ec57"

        //change the circle color to white
        circle.style.backgroundColor = "white"
        //make the circle go the the right smoothly with a transition translation
        circle.style.transform = "translateX(100%)"
        //make every text color black
        let text = document.getElementsByTagName("p")
        for (let i = 0; i < text.length; i++){
            text[i].style.color = "black"
        }
        //make every h1 color black
        let h1 = document.getElementsByTagName("h1")
        for (let i = 0; i < h1.length; i++){
            h1[i].style.color = "black"
        }
        //make every h2 color black
        let h2 = document.getElementsByTagName("h2")
        for (let i = 0; i < h2.length; i++){
            h2[i].style.color = "black"
        }

    }
    //if the body is in nightlightmode
    else{
        //change the body color to black
        body.style.backgroundColor = "#16161d"
        //change the nightlightmode button color to white
        nightlightmodebutton.style.backgroundColor = "#b9b9b9"
        //change the circle color to black
        circle.style.backgroundColor = "white"
        //make the circle go the the left smoothly with a transition translation
        circle.style.transform = "translateX(4%)"
        //make every text color white
        let text = document.getElementsByTagName("p")
        for (let i = 0; i < text.length; i++){
            text[i].style.color = "#E7EEE9F4"
        }
        //make every h1 color E7EEE9F4
        let h1 = document.getElementsByTagName("h1")
        for (let i = 0; i < h1.length; i++){
            h1[i].style.color = "#E7EEE9F4"
        }
        //make every h2 color E7EEE9F4
        let h2 = document.getElementsByTagName("h2")
        for (let i = 0; i < h2.length; i++){
            h2[i].style.color = "#E7EEE9F4"
        }


    }
}
</script>