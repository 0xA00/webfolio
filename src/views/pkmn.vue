<template>

</template>


<script>
import {computed, defineComponent, onBeforeMount, onBeforeUnmount, onMounted, reactive, ref} from "vue";

import {Head, useHead} from '@vueuse/head'

import { useRoute } from 'vue-router';
export default defineComponent({
    setup() {
        const route = useRoute()
        const siteData = reactive({
            title: route.params.title,
            pkmn: fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data.sprites.front_default)
                    return data.sprites.front_default
                })
        })

        useHead({
            title: computed(() => siteData.title),
            meta: [
                {"http-equiv": "X-UA-Compatible", content: "IE=edge"},
                {property:'og:image', content: siteData.pkmn},
                {property:"theme-color", content:"#42b983"},
                {property:"viewport", content:"width=device-width,initial-scale=1.0"},
                {property:"twitter:card", content:"summary_large_image"},
                {property:"twitter:image", content:siteData.pkmn},

            ]
        })
    }
})






</script>

<style scoped>

</style>