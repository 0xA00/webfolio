<template>

  <h1>Blog</h1>



   <SlugBlog Pathjson="friede" />


</template>

<script>
import SlugBlog from "@/views/SlugBlog.vue";
import {defineComponent} from "vue";

export default defineComponent({
    components: {SlugBlog}
})


</script>

<style scoped>


</style>