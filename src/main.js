import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SvgIcon from '@/components/SvgIcon.vue';
import 'element-plus/dist/index.css'


const app = createApp(App)
app.component('SvgIcon', SvgIcon)
app.use(router).use(store).mount('#app')


// createApp(App).use(store).use(router).mount("#app");
