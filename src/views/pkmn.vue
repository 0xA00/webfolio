<template>

</template>


<script>
import {computed, defineComponent,reactive} from "vue";

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
                }),
            description: fetch(`https://pokeapi.co/api/v2/pokemon-species/${route.params.id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data.flavor_text_entries[0].flavor_text)
                    return data.flavor_text_entries[0].flavor_text
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
                {property:"twitter:image:src", content:siteData.pkmn},
                //make it so that the title is the name of the pokemon
                {property:"twitter:title", content:siteData.title},
                //change the description to the pokemon's description
                {property:"twitter:description", content:siteData.description},
                {property:"twitter:site", content:"@0xa0_"},
                {property:"twitter:creator", content:"@0xa0_"},
                {property:"og:title", content:siteData.title},
                //change image size to 1200x630
                {property:"og:image:width", content:"1200"},
                {property:"og:image:height", content:"630"},
                {property:"og:description", content:siteData.description},
                {property:"og:url", content:window.location.href},

            ]
        })
    }
})






</script>

<style scoped>

</style>