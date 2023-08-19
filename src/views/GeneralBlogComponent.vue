<template>
  <div id="BlogPosts">

    <div class="BlogPostsSlugs" v-for="(post) in nbOfPosts" :key="post">
      <router-link style="text-decoration: none" :to="{path:'/blog/'+post}">
        <SlugBlog :Pathjson="post"></SlugBlog>
      </router-link>
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
    margin-top: 2%;
    margin-bottom: 2%;
    //make so the divs match the width of the text
    display: inline-block;
    width: 45%;
    border: 1px solid #005eda;
    padding: 2%;
    background: rgba( 34, 33, 33, 0.5 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    border-radius: 10px;

  @media (max-width: 780px) {
    width: 90%;
}

}

</style>