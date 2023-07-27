<template>

  <h1>Blog</h1>



    <p id="test">There are no posts yet.</p>


</template>

<script>

const response = fetch('https://vercelapi-0xa00.vercel.app/blog/friede/index.md')

const data = response
console.log(data)



</script>

<style scoped>


</style>