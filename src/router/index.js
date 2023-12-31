import { createRouter, createWebHistory } from 'vue-router'


import AboutView from "../views/AboutView.vue";
import Error404 from "../views/Error404.vue";
import HomeView from "../views/HomeView.vue";
import BlogView from "../views/BlogGeneralView.vue";
import PrecisePost from "../views/PrecisePost.vue";
import PokemonView from "../views/pkmn.vue";

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
        name: 'home',
        component: HomeView,
        meta: {
            title: 'Home'
        }
    }
    ,
    {
        path: '/blogs',
        name: 'blogs',
        component: BlogView,
        meta: {
            title: 'Blogs'
        }
    }
    ,
    {
        path: '/blog/:id',
        name: 'blog',
        component: PrecisePost,
        meta: {
            title: 'Blog'
        }
    },
    {
        path:'/pkmn/:id',
        name:'pkmn',
        component: PokemonView,
        meta: {
            title: 'Pokemon'
        }
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
