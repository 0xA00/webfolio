<template>
    <suspense>
        <template #fallback>
        </template>
<div id="POST">
  <h1 v-html="titlepost"></h1>
  <div id="content" v-html="content"></div>
  <h3 id="datepost" v-html="datepost"></h3>
</div>
    </suspense>
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

@font-face {
  font-family: "GeistMono";
  src: url(../font/Geist.Mono/GeistMono-Regular.otf);
}

@font-face {
  font-family: "GeistMonoBold";
  src: url(../font/Geist.Mono/GeistMono-Bold.otf);
}





#POST{
    margin-left: 2%;
    width: 80%;
    margin-top: 2%;
    margin-bottom: 2%;
    
    background: rgba(0, 0, 0, 0.19);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.3px);
    -webkit-backdrop-filter: blur(10.3px);
    border: 1px solid rgba(0, 0, 0, 0.23);
}

h1{
    font-family: GeistMonoBold,Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  color: #005eda;
  font-size: 3em;
  padding-left: 2px;
}

#content{
    font-family:GeistMono, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
color:whitesmoke;
  margin-left: 2%;
  width: 80%;
}

h3{
    font-family: GeistMono,Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  color: #b2beb5;
  font-size: 1em;

}
</style>