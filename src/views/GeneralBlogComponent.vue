<template>
    <suspense>
        <template #fallback>
             <h1>Waiting for posts ...</h1>
        </template>

        <div id="BlogPosts">
            <div class="BlogPostsSlugs" v-for="(post) in nbOfPosts" :key="post">
                <router-link style="text-decoration: none" :to="{path:'/blog/'+post}">
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



.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 10px;
  }

  .loader-inner {
    vertical-align: top;
    display: inline-block;
    width: 100%;
    background-color: #005eda;
    animation: loader-inner 2s infinite ease-in;
  }

  .loader-inner div {
    display: inline-block;
    width: 100%;
    background-color: #005eda;
    animation: loader-inner 2s infinite ease-in;
  }

  .loader-inner div:nth-child(1) {
    animation-delay: -0.4s;
  }

  .loader-inner div:nth-child(2) {
    animation-delay: -0.4s;
  }

  .loader-inner div:nth-child(3) {
    animation-delay: -0.4s;
  }

  .loader-inner div:nth-child(4) {
    animation-delay: -0.4s;
  }

  .loader-inner div:nth-child(5) {
    animation-delay: -0.4s;
  }

  .loader-inner div:nth-child(6) {
    animation-delay: -0.4s;
  }

  .loader-inner div:nth-child(7) {
    animation-delay: -0.4s;
  }

  .loader-inner div:nth-child(8) {
    animation-delay: -0.4s;
  }

  .loader-inner div:nth-child(9) {
    animation-delay: -0.4s;
  }

  .loader-inner div:nth-child(10) {
    animation-delay: -0.4s;
  }

  @keyframes loader-inner {
    0% {
      height: 0%;
    }
    100% {
      height: 100%;
    }
  }

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