<template>
<div id="POST">
    <h2 :ref="titlepost"></h2>




</div>
</template>

<script>


import {useRoute} from "vue-router";
import {ref} from "vue";

export default {
  async setup() {
    let datsas = ref("")
    let route = useRoute();
    const response = await fetch(`https://0xa0.dev/blog/` + route.params.id + "/post.json")
    datsas = await response.json()
    this.$refs.titlepost.innerHTML = datsas.title
  }
}





</script>


<style scoped>

#POST{
    margin-left: 2%;
}

h2{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  color: #42b983;
}

#content{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
color:whitesmoke;
}
</style>