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
    component: Error404
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
