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
                    //replace every \n with <br>
                    data.flavor_text_entries[1].flavor_text = data.flavor_text_entries[1].flavor_text.replace(/(?:\r\n|\r|\n)/g, '<br>')
                    console.log(data.flavor_text_entries[1].flavor_text)
                    return data.flavor_text_entries[1].flavor_text
                }),
        })

        useHead({
            title: computed(() => siteData.title),
            meta: [
                {property: 'og:title', content: siteData.title},
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