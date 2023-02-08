import { createPinia } from 'pinia';
import 'reset.css';
import { createApp } from 'vue';
import App from './App.vue';
import './style.less';

const app = createApp(App);

app.use(createPinia());
app.mount('#app');
