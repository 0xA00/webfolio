import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {faSteam} from "@fortawesome/free-brands-svg-icons";
import {faDiscord} from "@fortawesome/free-brands-svg-icons";
import {faJava} from "@fortawesome/free-brands-svg-icons";
import {faPython} from "@fortawesome/free-brands-svg-icons";
import {faJs} from "@fortawesome/free-brands-svg-icons";
import {faUnity} from "@fortawesome/free-brands-svg-icons";
import {faVuejs} from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter, faGithub, faSteam, faDiscord, faJava, faPython, faJs, faUnity, faVuejs)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

