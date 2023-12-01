<template>


  <div class="about">

      <div class="card">
              <img alt="Profile Picture" src="https://0xa0.dev/a/rei-1.webp" rel="preload">
          <div id="pronounsandUsername">
              <h1>Hi ! I'm 0xA0 !</h1>
          </div>

      </div>
      <div id="gridlearnandsab">
          <div class="card" id="grizz">
              <h1>Languages learned / softwares used</h1>
                <div class="gridlearned">
                  <div class="grid-item">
                      <img src="https://skillicons.dev/icons?i=java" />
                      <h2>Java</h2>
                  </div>
                  <div class="grid-item">
                      <img src="https://skillicons.dev/icons?i=python" />
                      <h2>Python</h2>
                  </div>
                  <div class="grid-item">
                      <img src="https://skillicons.dev/icons?i=js" />
                      <h2>JS</h2>
                 </div>
                 <div class="grid-item">
                    <img src="https://skillicons.dev/icons?i=vuejs" />
                    <h2>Vue</h2>
                 </div>
                 <div class="grid-item">
                    <img src="https://skillicons.dev/icons?i=docker" />
                    <h2>Docker</h2>
                 </div>
                 <div class="grid-item">
                    <img src="https://skillicons.dev/icons?i=git" />
                    <h2>Git</h2>
                 </div>
                 <div class="grid-item">
                    <img src="https://skillicons.dev/icons?i=linux" />
                    <h2>Linux</h2>
                </div>
                <div class="grid-item">
                    <img src="https://skillicons.dev/icons?i=html" />
                    <h2>HTML</h2>
                </div>
                <div class="grid-item">
                    <img src="https://skillicons.dev/icons?i=css" />
                    <h2>CSS</h2>
                </div>
                <div class="grid-item">
                    <img src="https://skillicons.dev/icons?i=bash" />
                    <h2>Bash</h2>
                </div>
                <div class="grid-item">
                    <img src="https://skillicons.dev/icons?i=electron" />
                    <h2>Electron</h2>
                </div>  
                <div class="grid-item">
                    <img src="https://skillicons.dev/icons?i=c" />
                    <h2>C</h2>
                </div>  
                <div class="grid-item">
                    <img src="https://skillicons.dev/icons?i=kotlin" />
                    <h2>Kotlin</h2>
                    </div>
                    <div class="grid-item">
                        <img src="https://skillicons.dev/icons?i=vscode" />
                        <h2>VScode</h2>
                        </div>
                 
              </div>
        </div>
          <div class="card" id="SaM">
            <h1>Something about me</h1>
              <p>Hi I'm 0xa0! I'm a {{ years }}  years old french student in computer science. I'm currently studying at
                  <a href="https://iut-montpellier-sete.edu.umontpellier.fr/en/iut-de-montpellier-sete-english/" target="_blank">IUT Montpellier-Sète</a>
                  in Montpellier
              </p>
              <p>
                  I'm passionate about computer science, especially about low-level programming and security. I'm also learning web development, specifically with Vue.js framework.
              </p>
              <p>
                  I really like to create things on Minecraft as mods,plugins or even redstone contraptions.
              </p>
              <p>
                 One of my main project right now is a file managers using Vue.js and Electron. 
              </p>
          </div>
      </div>

      <div class="card" id="mediass">
          <h1>Social medias</h1>
          <div class="gridlearned">
            <a href="https://discord.0xa0.dev/" target="_blank">
              <div class="grid-item" >
                  <img src="https://skillicons.dev/icons?i=discord" />
                 
              </div>
                </a>
                <a href="https://github.com/0xa00" target="_blank">
              <div class="grid-item">
                  <img src="https://skillicons.dev/icons?i=github" />
              </div>
              </a>
              <a href="https://www.linkedin.com/in/florian-pereau-31a8a6194/" target="_blank">
                <div class="grid-item">
                    <img src="https://skillicons.dev/icons?i=linkedin" />
                </div>
                </a>
                <a href="https://twitter.com/0xa0_dev" target="_blank">
                <div class="grid-item">
                    <img src="https://skillicons.dev/icons?i=twitter" />
                </div>
                </a>
              <a href="mailto: sarah@0xa0.dev" target="_blank">
                <div class="grid-item" >
                    <span class="ICONS" ><font-awesome-icon icon="fa-solid fa-envelope" id="mailicon"/></span>
                </div>
              </a>
      </div>
    </div>
  </div>


</template>

<style>
@font-face {
    font-family: "Geist";
    src: url(../font/Geist/Geist-Regular.otf);
}

@font-face {
    font-family: "GeistMono";
    src: url(../font/Geist.Mono/GeistMono-Regular.otf);
}

#mailicon{
    height:125px;
}

.gridlearned > a {
    text-decoration: none;
    color: rgba(231, 238, 233, 0.96);
}



.about {
  font-family: "GeistMono", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(231, 238, 233, 0.96);

  display: flex;
  flex-direction: column;
    align-items: flex-start;
    text-align: center;
    margin: 10px;
    padding: 10px;

    font-display: swap;
}



.ICONS {
  font-size: 2em;
  color: #C6AC8F;
  margin-right: 10px;
}

.about h1 {
  font-family: "GeistMono", Avenir, Helvetica, Arial, sans-serif;
  font-size: 2.5em;
  font-weight: 800;
  color: rgba(231, 238, 233, 0.96);
  margin-top: 20px;
  margin-bottom: 20px;
  font-display: swap;
}

.about img {
  border-radius: 20%;
  width: 125px;
  height: 125px;
  margin: 10px;
}
.gridlearned{
    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr; */
    /* create a grid template columns with 4 columns */
    grid-template-columns: repeat(5, 1fr);
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
    background: rgba(143, 141, 141, 0.35);
    box-shadow: 0 8px 32px 0 rgba( 143, 141, 141, 0.37 );
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
    font-size: 1.5em;
    text-align: center;
    h2{
        margin: 0;
        
    }
}



</style>
<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";



export default {
    components: {},

  head: function() {
    return {
        title: "About",
    
    };
    },
    data() {
        return {
            years: new Date().getFullYear() - new Date(2002,7,11).getFullYear()
        }
    }
};
</script>

