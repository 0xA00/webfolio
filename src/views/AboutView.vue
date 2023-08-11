<template>
  <div class="about">
    <img alt="Profile Picture" src="../assets/BNA.png">
    <h1>Hi I'm 0xa0 !🏳️‍⚧<span id="pronouns">She/Her</span>️</h1>

    <p>I'm a 20 years old french student in computer science. I'm currently studying at <a href="https://iut-montpellier-sete.edu.umontpellier.fr/en/iut-de-montpellier-sete-english/" target="_blank">IUT Montpellier-Sète</a> in Montpellier.</p>

    <p>I'm passionate about computer science, especially about low-level programming and security. I'm also interested in web development and I'm currently learning Vue.js and Rust.</p>

    <h2> languages learned :</h2>
    <span class="ICONS"><font-awesome-icon icon="fa-brands fa-java" /></span>
    <span class="ICONS"><font-awesome-icon icon="fa-brands fa-python" /></span>
    <span class="ICONS"><font-awesome-icon icon="fa-brands fa-js" /></span>
    <span class="ICONS"><font-awesome-icon icon="fa-solid fa-c" /></span>
    <span class="ICONS"><font-awesome-icon icon="fa-brands fa-vuejs" /></span>




    <h2>Available social medias :</h2>

    <a class="ICONS" href="https://twitter.com/0xa0_" target="_blank"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
    <a class="ICONS" href="=https://steamcommunity.com/id/0xA00/" target="_blank"><font-awesome-icon icon="fa-brands fa-steam" /></a>
    <a class="ICONS" href="https://github.com/0xA00/" target="_blank"><font-awesome-icon icon="fa-brands fa-github" /></a>
    <a class="ICONS" href="" ><font-awesome-icon icon="fa-brands fa-discord"/></a>






  </div>


</template>

<style>

@font-face {
  font-family:'TASADis-Med';
  src: local("ElliotSans"), url("../font/orbiter/TASAOrbiterDisplay-Medium.otf");
}

@font-face {
  font-family:'TASADis-Bold';
  src: local("ElliotSans"), url("../font/orbiter/TASAOrbiterDisplay-Bold.otf");
}




.about {
  font-family: TASADis-Med, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(231, 238, 233, 0.96);

}

#pronouns {
  font-size: 0.5em;
  color: #c400da;
}

.ICONS {
  font-size: 2em;
  color: #c400da;
  margin-right: 10px;
}

.about ul {
  list-style: none;
}
.about ul li:before {
  content: "-";
  color: #c400da;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}



.about h1 {
  font-family: TASADis-Bold, Avenir, Helvetica, Arial, sans-serif;
  font-size: 3em;
  font-weight: bold;
  color: rgba(231, 238, 233, 0.96);
  margin-top: 20px;
  margin-bottom: 20px;
}

.about img {
  border-radius: 20%;
  width: 250px;
  height: 250px;
}
</style>
<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

