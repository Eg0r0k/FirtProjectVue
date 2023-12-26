import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";
import ContentCard from "@/components/ContentCard.vue";
import { useArtsStore } from "@/stores/CartStore";
import Home from "@/components/pages/Home.vue";
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
  { path: "/:pathMatch(.*)*", name: "NotFound", component: () => import("@/components/pages/NotFound.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ el: to.hash, top: 200 }), 200);
      })
    );
  },
});

export default router;
