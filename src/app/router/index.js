import { createRouter, createWebHistory } from "vue-router";

import ContentCard from "@/widgets/ContentCard/ContentCard.vue"
import { useArtsStore } from "../stores/CartStore";
import Home from "@/pages/home/Home.vue"
const routes = [
  { path: "/", component: Home },

  {
    path: "/about/:id",
    component: ContentCard,
    meta: {
      requiresId: true,
    },
    beforeEnter: (to, from, next) => {
      const id = parseInt(to.params.id);
      const artsStore = useArtsStore();
      const artExists = artsStore.arts.some((art) => art.id === id);
      if (!artExists) {
        next({ name: "NotFound" });
      } else {
        next();
      }
    },
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: () => import("@/pages/error/NotFound.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if(to.hash)
    {
      return  new Promise((resolve) => {
        setTimeout(() => resolve({ el: to.hash, top:120 }), 200);
      })
    }
    else if (savedPosition) 
    {
      return savedPosition
    }
    else 
    {
      return {top:0}
    }
  },
});

export default router;
