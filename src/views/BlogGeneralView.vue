<template>

  <h1>Blog</h1>



    <p id="test">There are no posts yet.</p>


</template>

<script>


async function getPost() {
  const response = await fetch('https://vercelapi-0xa00.vercel.app/blog/friede/index.md')
  const data = await response.text()
  return data
}

const posttest = await getPost()
const test = document.getElementById('test')
test.innerHTML = posttest.text()


</script>

<style scoped>


</style>