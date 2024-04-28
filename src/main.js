import { createApp, provide } from 'vue';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import router from './routes.js'
import $projects from './Data.js'

const app = createApp(App);
app.use(router);

app.provide('$projects', $projects);
app.mount('#app');
