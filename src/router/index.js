import { createRouter, createWebHistory } from 'vue-router'


import AboutView from "../views/AboutView.vue";
import Error404 from "../views/Error404.vue";

const routes = [
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
        title: 'About'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error404',
    component: Error404,
    meta: {
        title: 'Error 404'
    }
  },
  {
    path: '/',
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
    document.title = `0xa0 - `+`${to.meta.title}`
})

export default router
