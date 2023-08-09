<template>
  <div id="BlogPosts">

    <div class="BlogPostsSlugs" v-for="(post) in nbOfPosts" :key="post">
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
let nbOfPostsLength = nbOfPosts.length
nbOfPosts = nbOfPosts.posts







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

.BlogPostsSlugs{
    margin-left: 2%;
    margin-top: 2%;
    margin-bottom: 2%;
    width: 80%;
    border: 1px solid #42b983;
    border-radius: 5px;
    padding: 2%;
    background-color: #1e1e1e;
    box-shadow: 0 0 10px #42b983;
}

</style>