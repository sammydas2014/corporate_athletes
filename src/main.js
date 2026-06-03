import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Activates Bootstrap dropdowns and collapses
import '@/assets/styles/main.scss';

const app = createApp(App);

app.use(router);
app.mount('#app');
