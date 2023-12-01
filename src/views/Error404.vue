<script setup>


import KanyeQuote from "@/views/KanyeQuote.vue";


</script>

<template>
  <div id="notfound">
    <h1>404</h1>
    <p>Page not found</p>

    <Suspense>
      <KanyeQuote></KanyeQuote>
    </Suspense>



  </div>
  
      
  
</template>

<style scoped>





@font-face {
  font-family: "GeistMono";
  src: url(../font/Geist.Mono/GeistMono-Regular.otf);
}

h1, p {
    font-family: 'GeistMono',Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  color: #005eda;
  text-align: center;
  font-size: 3em;
  font-display: swap;
}


#notfound{
   background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "GeistMono",Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #ffffff;
    font-size: 1em;
    text-align: center;
    width: 40%;
    margin: auto;
    font-display: swap;
}


</style>