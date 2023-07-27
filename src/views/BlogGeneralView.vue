<template>

  <h1>Blog</h1>



    <p id="test">There are no posts yet.</p>


</template>

<script>
var content = null;

const response =  fetch('https://vercelapi-0xa00.vercel.app/blog/friede/index.md')
  .then(response => response.text())
// then add it to the DOM with then
  .then(text => content = text)
    .then(console.log(content))










</script>

<style scoped>


</style>