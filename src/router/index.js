import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
        title: 'About'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) =>{
    document.title = `${to.meta.title}`
})

export default router
