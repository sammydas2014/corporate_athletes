import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Activates Bootstrap dropdowns and collapses
import '@/assets/main.css';

const app = createApp(App);

app.use(router);
app.mount('#app');
