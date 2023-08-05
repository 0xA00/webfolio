<template>
<div id="POST">
    <h2 v-html="titler"></h2>




</div>
</template>

<script>


import {useRoute} from "vue-router";


let titler= ""
let datsas;

const response = await fetch(`https://0xa0.dev/blog/`+this.$route.params.id+`/post.json`)
datsas = await response.json()

titler = datsas.title
console.log(titler)

//update the title with export
export default {
  data(){
    return {
      titler: titler
    }
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