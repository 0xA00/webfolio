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



    let nbOfPosts = []


    const response = await fetch(`https://0xa0.dev/blog/blogs.json`)


    nbOfPosts = await response.json()
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

.BlogPostsSlugs{
    margin-top: 2%;
    margin-bottom: 2%;

    width: 40%;
    padding: 2%;
    background: rgba( 164, 164, 164, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 17px );
    -webkit-backdrop-filter: blur( 17px );
    border-radius: 10px;

  @media (max-width: 780px) {
    width: 90%;
}

}

</style>