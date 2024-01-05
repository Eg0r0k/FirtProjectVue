import "@/app/main.scss";
import { createPinia } from 'pinia'
import { createApp } from "vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "@/app/App.vue";
import router from "@/app/router";

const app = createApp(App) ;
const pinia =  createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(router);
app.use(pinia).mount("#app");
