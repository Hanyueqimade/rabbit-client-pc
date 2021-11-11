import { createRouter, createWebHashHistory } from "vue-router";
import homePage from "@/views/home/homePage";

const routes = [
  {
    path: "/",
    name: "homePage",
    component: homePage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
