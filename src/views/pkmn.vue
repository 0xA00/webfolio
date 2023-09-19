<template>

</template>


<script>
import {computed, defineComponent,reactive} from "vue";

import {useHead} from '@vueuse/head'

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
                {name: 'twitter:card', content: 'summary_large_image'},
                {name: 'twitter:image', content: siteData.pkmn},
                //name
                {name: 'twitter:title', content: siteData.title},

            ]
        })
    }
})






</script>

<style scoped>

</style>