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
            pkmndescEN: fetch(`https://pokeapi.co/api/v2/pokemon-species/${route.params.id}`)
                .then(response => response.json())
                .then(data => {
                    //replace every character that is not a letter or a space or a ponctuation or a letter with accent with space
                    console.log(data.flavor_text_entries[1].flavor_text+ " V1")
                    data.flavor_text_entries[1].flavor_text = data.flavor_text_entries[1].flavor_text.replace(/\n/g, " ")
                    data.flavor_text_entries[1].flavor_text = data.flavor_text_entries[1].flavor_text.replace(/[\W.,?!"'[à-ü][À-Ü] ]/g, " ")
                    //if � or □ replace with space
                    data.flavor_text_entries[1].flavor_text = data.flavor_text_entries[1].flavor_text.replace(/�/g, " ")
                    data.flavor_text_entries[1].flavor_text = data.flavor_text_entries[1].flavor_text.replace(/□/g, " ")

                    console.log(data.flavor_text_entries[1].flavor_text+ " V2")
                    return data.flavor_text_entries[1].flavor_text
                }),
            pkmnname: fetch(`https://pokeapi.co/api/v2/pokemon-species/${route.params.id}`)
                .then(response => response.json())
                .then(data => {
                    data.names[1].name = data.names[1].name.replace(/\n/g, " ")
                    data.names[1].name = data.names[1].name.replace(/[^a-zA-Z0-9.,?!"'à-üÀ-Ü ]/g, " ")
                    console.log(data.names[1].name)
                    return data.names[1].name
                }),
        })

        useHead({
            title: computed(() => route.params.id),
            meta: [
                {property: 'og:title', content: siteData.pkmnname},
                {property: 'og:image', content: siteData.pkmn},
                {property: 'og:description', content: siteData.pkmndescEN},
                {property: 'og:type', content: 'website'},
                {name: 'theme-color', content: '#42b983'},




            ]
        })
    }
})






</script>

<style scoped>

</style>