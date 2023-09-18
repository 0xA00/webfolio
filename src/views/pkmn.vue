<template>
<suspense>
    <template #fallback>
    </template>
<img :src="front" alt="front" style="width: 500px">
</suspense>
</template>

<script>
import {onBeforeMount, onMounted} from "vue";


export default {
    created() {
        this.initialize()

    }
    ,methods: {
        async initialize() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + this.$route.params.id)
            const data = await response.json()
            //get sprites
            this.sprites = data.sprites

            //get front sprite
            this.front = this.sprites.front_default
            console.log(this.front)
        }
    }
    ,data: function () {
        return {
            front: this.front
        }
    },
    head: function () {
        return {
            title: "Pokemon",
            meta: [
                {property: 'description', content: 'Pokemon'},
                {property: 'twitter:card', content: 'summary_large_image'},
                {property: 'twitter:image:src', content: this.front},
                {property: 'twitter:site', content: '@0xa0_'},
            ]
        };
    }
}
</script>

<style scoped>

</style>