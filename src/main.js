import { createApp } from 'vue'
import App from './App.vue'
// import LogIn from './components/Auth/LogIn.vue'
import './assets/tailwind.css'
import router from './router';

createApp(App).use(router).mount('#app')
