<template>
  <div id="BlogPosts">

    <div v-for="(post) in nbOfPosts" :key="post">
        <SlugBlog :Pathjson="post"></SlugBlog>

  </div>
  </div>

</template>

<script>


import SlugBlog from "@/views/SlugBlog.vue";

//get blogs.json in order to get the number of posts
let nbOfPosts = []
const response = await fetch(`https://0xa0.dev/blog/blogJson/blogs.json`)
nbOfPosts = await response.json()
console.log(nbOfPosts)
nbOfPosts = nbOfPosts.posts






export default {
    components: {SlugBlog},
    data() {
        return {
            nbOfPosts: nbOfPosts
        }
    }
}

</script>

<style scoped>

#BlogPosts{
    margin-left: 2%;
}

</style>