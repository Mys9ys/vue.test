import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/pages/MainPage";
import VideoTest from "@/components/VideoTest";
import AboutUs from "@/pages/AboutUs";
import PostElem from "@/pages/PostElem";
import PostElemWithStore from "@/pages/PostElemWithStore";
import CompositionPage from "@/pages/CompositionPage";


const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/users',
        component: VideoTest
    },
    {
        path: '/about',
        component: AboutUs
    },
    {
        path: '/users/:id',
        component: PostElem
    },
    {
        path: '/store',
        component: PostElemWithStore
    },

    {
        path: '/composition',
        component: CompositionPage
    },


]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router