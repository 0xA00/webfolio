<template>

  <h1>Blog</h1>



    <p id="test">There are no posts yet.</p>


</template>

<script>

//require node-fetch
import fetch from 'node-fetch';

const response = await fetch('https://vercelapi-0xa00.vercel.app/blog/friede/index.md')
  .then(response => response.text())
  .then(text => console.log(text))
// then add it to the DOM:
document.getElementById("test").innerHTML = response;





</script>

<style scoped>


</style>