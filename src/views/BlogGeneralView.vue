<template>

  <h1>Blog</h1>



    <p id="test">There are no posts yet.</p>


</template>

<script>


const response =  fetch('https://vercelapi-0xa00.vercel.app/blog/friede/post.json')
  .then(response => response.text())
// then add it to the DOM with then
  .then(text => console.log(text));











</script>

<style scoped>


</style>