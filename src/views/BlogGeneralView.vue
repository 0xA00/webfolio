<template>

  <h1>Blog</h1>



    <p id="test">There are no posts yet.</p>


</template>

<script>

const posttest = fetch('https://vercelapi-0xa00.vercel.app/blog/friede/index.md')

var responsetext = posttest.text()

document.getElementById("test").innerHTML = responsetext





</script>

<style scoped>


</style>