import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HabilitiesVue from "../views/Habilities.vue";
import misProyectos from "../views/misProyectos.vue";
import home from "../views/home.vue"
import contactVue from "../views/contact.vue";
import socialMedia from "../views/socialMedia.vue";

//about me
import about from "../views/about.vue";
import ecoWeb from "../views/ecoWeb.vue"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/about',
        name: 'about',
        component: about
    },
    {
        path: '/habilities',
        name: 'habilities',
        component: HabilitiesVue
    },
    {
        path: '/misProyectos',
        name: 'proyectos',
        component: misProyectos
    },
    {
        path: '/ecoWeb',
        name: 'ecoWeb',
        component: ecoWeb
    },
    {
        path: '/contact',
        name: 'contact',
        component: contactVue
    },
    {
        path: '/socialMedia',
        name: 'socialMedia',
        component: socialMedia
    }

    
];
const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;