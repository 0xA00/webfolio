<template>
    <Head>
        <title> {{$route.params.id}}</title>

        <meta property="og:image" content="{{poke}}">
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:image:src" content="{{poke}}">


    </Head>
</template>


<script setup>
import {onBeforeMount, onMounted, ref} from "vue";

import { Head } from '@vueuse/head'

import { useRoute } from 'vue-router';

const route = useRoute();
let poke = ref("")

onBeforeMount(async () => {
    const pkmn = await fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`)
    const pkmnjson = await pkmn.json()
    //get sprites
    const pkmnimg = pkmnjson.sprites.front_default
    //get name
    const pkmnname = pkmnjson.name
    //create ref to pkmnimg
    poke.value = pkmnimg
})






</script>

<style scoped>

</style>