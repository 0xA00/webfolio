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

@font-face {
  font-family:'TASADis-Med';
  src: local("ElliotSans"), url("../font/orbiter/TASAOrbiterDisplay-Medium.otf");
}

@font-face {
  font-family:'TASADis-Bold';
  src: local("ElliotSans"), url("../font/orbiter/TASAOrbiterDisplay-Bold.otf");
}

#POST{
    margin-left: 2%;
}

h1{
    font-family: "TASADis-Bold",Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  color: #c400da;
}

#content{
    font-family:"TASADis-Med", Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
color:whitesmoke;
  margin-left: 2%;
  width: 80%;
}

h3{
    font-family: "TASADis-Med",Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  color: #b2beb5;
  font-size: 1em;

}
</style>