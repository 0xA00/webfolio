<script setup>

</script>

<template>
  <div id="divCentrale">
    <h1 id="titleh1">Welcome to my portfolio !</h1>


    <p>This website is a portfolio to show what i've made throughout my CS studies

   if you want to know more about me, click on the <router-link to="/about" class="HomeRouter">About</router-link> button. </p>
    
    <p>Not only that, this portfolio will be used to show the projects i've made during my studies, and the blogs i've written about them. </p>
    
    <p> This page is only here to redirects you to other pages of my portfolio , so feel free to click on this <router-link to="/projects" class="HomeRouter">Projects</router-link> button or the <router-link to="/blogs" class="HomeRouter">Blogs</router-link> button to see what i've made ! </p> 



    
  </div>
</template>

<style scoped>

.HomeRouter{
    font-size: 1em;
    text-decoration: none;
    /*make it so the color is slightly gray */
    color: rgba(231, 238, 233, 0.96);
    background-color: rgb(41, 41, 41);
    border: 2px solid white;
    border-radius: 5px;
    padding: 2px 4px;
    font-family: GeistMono,Avenir, Helvetica, Arial, sans-serif;
    transition: 0.5s;
}

.HomeRouter:hover{
    /* enhance the color when the mouse is over the button , make it bigger too*/
    color: white;
    background-color: rgb(41, 41, 41);
    transition: 0.5s;
    font-size: 1.2em;
}

.HomeRouter:active{
    /* make it look like the button is clicked with a smooth transition */
    background-color: white;
    color: black;
    transform: translateY(4px);
    transition: 0.1s;
}

/*when the button is not hover anymore, make it go back to normal */


#bttnsproject{
    display: flex;
    justify-content: space-evenly;
    
}

.btn{
   /*create a black background with a white border */
    background-color: black;
    border: 2px solid white;
    border-radius: 10px;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.5em;
    margin: 4px 2px;
    cursor: pointer;
}

.btn:hover{
    /* make it look like the button is hovered with a smooth transition */
    background-color: rgb(41, 41, 41);
    color: white;
    transition: 0.5s;
}

.btn:active{
    /* make it look like the button is clicked with a smooth transition */
    background-color: rgb(41, 41, 41);
    color: white;
    transform: translateY(4px);
    transition: 0.1s;
}


 #divCentrale{
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 65%;
    margin: auto ;
    padding: 10px;
    text-align: center;
    font-size: 1.5em;
 }
 
#titleh1{
    font-family: Geist,Avenir, Helvetica, Arial, sans-serif;
    font-weight: bolder;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-display: swap;
  /* make the title more impactful */
  font-size: 2em;
  color: rgba(231, 238, 233, 0.96);
}

p{
    color: rgba(231, 238, 233, 0.96);
    font-family: Geist,Avenir, Helvetica, Arial, sans-serif;
}
</style>