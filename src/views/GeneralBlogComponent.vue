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
nbOfPosts = await response.text()
nbOfPosts = JSON.parse(nbOfPosts)
let nbOfPostsLength = nbOfPosts.length

nbOfPosts = nbOfPosts.posts

console.log(nbOfPosts)






export default {
    components: {SlugBlog},
    data() {
        return {
            nbOfPosts: nbOfPosts,
            nbOfPostsLength: nbOfPostsLength
        }
    }
}

</script>

<style scoped>

#BlogPosts{
    margin-left: 2%;
}

</style>