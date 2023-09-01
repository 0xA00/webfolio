<template>


  <div class="about">

      <div class="card">
          <img alt="Profile Picture" src="https://0xa0.dev/a/BNA.png">
          <div id="pronounsandUsername">
              <h1>Hi ! I'm AxA0 !</h1>
              <div id="fl">
                  <img alt="transflag" src="../assets/tf.png" style="width: 50px; height: 50px; margin-left: 10px; margin-right: 10px; margin-bottom: -10px">
                  <h2>She/Her</h2>
                  ️</div>

          </div>

      </div>
      <div id="gridlearnandsab">
          <div class="card" id="grizz">
              <h1>Language learned</h1>
                <div class="gridlearned">
                  <div class="grid-item">
                      <span class="ICONS"><font-awesome-icon icon="fa-brands fa-java" /></span>
                      <h2>Java</h2>
                  </div>
                  <div class="grid-item">
                      <span class="ICONS"><font-awesome-icon icon="fa-brands fa-python" /></span>
                      <h2>Python</h2>
                  </div>
                  <div class="grid-item">
                      <span class="ICONS"><font-awesome-icon icon="fa-brands fa-js" /></span>
                      <h2>Javascript</h2>
                 </div>
              </div>
        </div>
          <div class="card" id="SaM">
            <h1>Something about me</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.</p>
          </div>
      </div>

      <div class="card" id="mediass">
          <h1>Social medias</h1>
          <div class="gridlearned">
              <div class="grid-item">
                  <span class="ICONS"><font-awesome-icon icon="fa-brands fa-discord" /></span>
                  <h2>Discord</h2>
              </div>
              <div class="grid-item">
                  <span class="ICONS"><font-awesome-icon icon="fa-brands fa-twitter" /></span>
                  <h2>Twitter</h2>
              </div>
              <div class="grid-item">
                  <span class="ICONS"><font-awesome-icon icon="fa-brands fa-github" /></span>
                  <h2>Github</h2>
              </div>
      </div>
          </div>

<!--
    <img alt="Profile Picture" src="https://0xa0.dev/a/BNA.png">

    <h1>Hi I'm 0xa0 !<img alt="transflag" src="../assets/tf.png" style="width: 50px; height: 50px; margin-left: 10px; margin-right: 10px; margin-bottom: -10px"><span id="pronouns">She/Her</span>️</h1>

    <p>I'm a 20 years old french student in computer science. I'm currently studying at <a href="https://iut-montpellier-sete.edu.umontpellier.fr/en/iut-de-montpellier-sete-english/" target="_blank">IUT Montpellier-Sète</a> in Montpellier.</p>

    <p>I'm passionate about computer science, especially about low-level programming and security. I'm also interested in web development and I'm currently learning Vue.js and Rust.</p>

    <h2> languages learned :</h2>
    <span class="ICONS"><font-awesome-icon icon="fa-brands fa-java" /></span>
    <span class="ICONS"><font-awesome-icon icon="fa-brands fa-python" /></span>
    <span class="ICONS"><font-awesome-icon icon="fa-brands fa-js" /></span>
    <span class="ICONS"><font-awesome-icon icon="fa-solid fa-c" /></span>
    <span class="ICONS"><font-awesome-icon icon="fa-brands fa-vuejs" /></span>

<suspense><KanyeQuote></KanyeQuote></suspense>




    <h2>Available social medias :</h2>

    <a class="ICONS" href="https://twitter.com/0xa0_" target="_blank"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
    <a class="ICONS" href="=https://steamcommunity.com/id/0xA00/" target="_blank"><font-awesome-icon icon="fa-brands fa-steam" /></a>
    <a class="ICONS" href="https://github.com/0xA00/" target="_blank"><font-awesome-icon icon="fa-brands fa-github" /></a>
    <a class="ICONS" href="" ><font-awesome-icon icon="fa-brands fa-discord"/></a>
-->
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

  display: flex;
  flex-direction: column;
    align-items: flex-start;
    text-align: center;
    margin: 10px;
    padding: 10px;

}



.ICONS {
  font-size: 2em;
  color: #005eda;
  margin-right: 10px;
}

.about h1 {
  font-family: TASADis-Bold, Avenir, Helvetica, Arial, sans-serif;
  font-size: 2.5em;
  font-weight: bold;
  color: rgba(231, 238, 233, 0.96);
  margin-top: 20px;
  margin-bottom: 20px;
}

.about img {
  border-radius: 20%;
  width: 125px;
  height: 125px;
    margin: 10px;
}
.gridlearned{
    display: grid;
    grid-template-columns:  1fr 1fr 1fr;
    grid-gap: 10px;
    padding: 10px;
    margin: 10px;
    justify-content: center;
    align-items: center;

    @media (max-width: 992px) {
         grid-template-columns: auto;
    }

}

#grizz{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 10px;
}

#SaM{
    display:flex;
    flex-direction: column;
}

#SaM > p {
    font-size: 1.5em;
    text-align: left;
    margin: 10px;
}

#gridlearnandsab{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    padding: 10px 10px 10px 0;
    margin: 10px 10px 10px 0;
    justify-content: center;
    align-items: center;




    @media (max-width: 992px) {
        grid-template-columns: auto;
    }
}

.card{
    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    display: inline-flex;
    flex-direction: row;
}
.about__main{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

#fl{
    display: flex;
    flex-direction: row;

}

 #mediass {
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     margin: 10px;
     padding: 10px;
 }

.grid-item{

    padding: 10px;
    font-size: 1.5em;
    text-align: center;


}



</style>
<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import KanyeQuote from "@/views/KanyeQuote.vue";


export default {
    components: {KanyeQuote},

  head: function() {
    return {
      title: "About",
      meta: [
          {name:'description', content:'About me'},
          {name:'twitter:card', content:'summary_large_image'},
          {name:'twitter:image:src', content:'https://0xa0.dev/a/BNA.png'},
          {name:'twitter:site', content:'@0xa0_'},
      ]
    };
  }
};
</script>

