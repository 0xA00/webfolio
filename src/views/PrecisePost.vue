<template>
<div id="POST">
  <h1>{{titlepost}} </h1>
  <div id="content" v-html="content"></div>
  <h3 id="datepost"> {{datepost}} </h3>
</div>

</template>

<script setup>
import {onMounted, ref} from "vue";
import showdown from "showdown";

let titlepost =ref("")
let content = ref("")
let datepost = ref("")

onMounted(async () => {
  const response = await fetch(window.location.href+`/post.json`)
  const datsas = await response.json()
  const contentresponse = await fetch(window.location.href+`/index.md`)
  const converter = new showdown.Converter();
  let md = await contentresponse.text()
  console.log(md)
  content.value = converter.makeHtml(md)


  titlepost.value = datsas.title
  datepost.value= datsas.date
})





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
  margin-left: 2%;
  width: 80%;
}

h3{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  color: #b2beb5;
  font-size: 1em;

}
</style>