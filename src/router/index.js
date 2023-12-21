import {createRouter, createWebHashHistory} from 'vue-router'
import App from "@/App.vue";
import ContentCard from '@/components/ContentCard.vue'


const routes = [

    {path: '/test', component: ContentCard},
]

const router = createRouter({

    history: createWebHashHistory(),
    routes, 
  })

export default router