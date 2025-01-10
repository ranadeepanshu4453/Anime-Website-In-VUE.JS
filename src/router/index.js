import { createRouter, createWebHistory } from "vue-router";
import LogIn from "@/components/Auth/LogIn.vue";
import Home_Page from "@/Home.vue";
import Register from "@/components/Auth/Register.vue";
import Dashboard from "@/components/Dashboard.vue";
// import App from "@/App.vue";

const routes = [
    { path: "/",  redirect: '/home' },
    { path: "/home", name: "home", component: Home_Page },
    { path: "/login", name: "login", component: LogIn },
    { path: "/register", name: "register", component: Register },
    { path: "/dashboard", name: "dashboard", component: Dashboard },
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;