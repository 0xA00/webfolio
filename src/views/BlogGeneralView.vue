<template>

  <h1>Blog</h1>





</template>

<script>

var datsas;

const response =  fetch(`https://vercelapi-0xa00.vercel.app/json/friede/post.json`)
    .then(response => response.json())
    //then set the variable to the response
    .then(datsa => datsas = datsa)
    .then(datsa => console.log(datsa));

console.log(datsas);

</script>

<style scoped>


</style>