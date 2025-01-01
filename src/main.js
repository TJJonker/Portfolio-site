import { createApp, provide } from 'vue';
import App from './App.vue';
import router from './routes.js'
import { getAccentColor, setAccentColor } from "././js/colorManager.js";

document.addEventListener("DOMContentLoaded", () => {
    setAccentColor(getAccentColor());
});

const app = createApp(App);
app.use(router);

app.mount('#app');
