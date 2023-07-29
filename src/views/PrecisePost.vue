<template>
<div id="POST">
    <h2 id="title">{{$route.params.id}}</h2>

    <div id="content">
        <div v-html="content"></div>
    </div>

</div>
</template>

<script>

import {ref} from 'vue'

let content= ""
let datsas;
const response = await fetch(`https://0xa0.dev/blog/`+$route.params.id+`/index.md`)

datsas = await response.text()

await new Promise(resolve => {
    setTimeout(() => {
        content = datsas
        resolve()
    }, 1000)
})


</script>

<style scoped>

</style>