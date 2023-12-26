import "@/assets/main.scss";
import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
const app = createApp(App);
pinia.use(piniaPluginPersistedstate)
app.use(router);
app.use(pinia).mount("#app");
