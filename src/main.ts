import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { createPinia } from "pinia";

const app = createApp(App as any);

app.use(router);
app.use(createPinia());

app.mount("#app");
