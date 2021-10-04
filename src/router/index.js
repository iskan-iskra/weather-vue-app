import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue"
import AppCompositionsApi from "../views/AppCompositionsApi";
import AppOptionsApi from "../views/AppOptionsApi";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/OptionsMode",
    name: "Options API app",
    component: AppOptionsApi,
  },
  {
    path: "/CompositionMode",
    name: "Compositions API app",
    component: AppCompositionsApi,
  },
  {
    path: "/About",
    name: "About",
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export { router, routes };
