<template>
    <suspense>
        <template #fallback>
             <h1>Waiting for posts ...</h1>
        </template>

        <div id="BlogPosts"  v-for="(post) in nbOfPosts" :key="post">
        
            <div class="BlogPostsSlugs">
                 <router-link style="text-decoration: none" :to="{ path: '/blog/' + post }">
                    <SlugBlog :Pathjson="post"></SlugBlog>
                 </router-link>
            </div>
        </div>
    </suspense>
</template>

<script>



import SlugBlog from "@/views/SlugBlog.vue";


    let nbOfPosts = []


    const response = await fetch(`https://0xa0.dev/blog/blogJson/blogs.json`)


    nbOfPosts = await response.json()
    nbOfPosts = nbOfPosts.posts

export default {
    components: {SlugBlog},
    data() {
        return {
            nbOfPosts: nbOfPosts
        }
    },
}
</script>

<style scoped>

#BlogPosts  a {
  display: inline-block;
  padding:40px;
}

.BlogPostsSlugs:hover{
    background: rgba( 164, 164, 164, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 17px );
    -webkit-backdrop-filter: blur( 17px );
    border-radius: 10px;
    transition: 0.3s;
    transform: scale(1.1);

}


#BlogPosts{
    margin-left: 2%;
}

.BlogPostsSlugs{
    margin-top: 2%;
    margin-bottom: 2%;
    flex-wrap: wrap;
    width: fit-content;
   
    background: rgba( 164, 164, 164, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 17px );
    -webkit-backdrop-filter: blur( 17px );
    border-radius: 10px;
    transition: 0.3s;

  @media (max-width: 780px) {
    width: 90%;
}


}

</style>