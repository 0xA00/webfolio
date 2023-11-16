import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {faSteam} from "@fortawesome/free-brands-svg-icons";
import {faDiscord} from "@fortawesome/free-brands-svg-icons";
import {faJava} from "@fortawesome/free-brands-svg-icons";
import {faPython} from "@fortawesome/free-brands-svg-icons";
import {faJs} from "@fortawesome/free-brands-svg-icons";
import {faVuejs} from "@fortawesome/free-brands-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'




const head = createHead()

library.add(faGithub, faSteam, faDiscord, faJava, faPython, faJs, faVuejs, faC, faEnvelope)

createApp(App).use(router).use(head).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

