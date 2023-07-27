<template>

  <h1>Blog</h1>



    <p id="test">There are no posts yet.</p>


</template>

<script>


async function getPost() {
  const response = await fetch('https://vercelapi-0xa00.vercel.app/blog/friede/index.md')
    return await response.text()
}

const posttest = getPost()
const test = document.getElementById('test')
test.innerHTML = posttest.then((data) => {
  return data
})


</script>

<style scoped>


</style>