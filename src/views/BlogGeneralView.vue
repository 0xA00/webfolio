<template>

  <h1>Blog</h1>
    <suspense>
        <template #fallback>

        </template>
        <GeneralBlogComponent></GeneralBlogComponent>
    </suspense>

</template>

<script>



import {defineComponent} from "vue";
import GeneralBlogComponent from "@/views/GeneralBlogComponent.vue";

export default defineComponent({
    components: {GeneralBlogComponent}
})
</script>

<style scoped>


h1{
    font-size: 3em;
    margin-top: 10px;
}
</style>