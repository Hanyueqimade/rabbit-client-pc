import { createRouter, createWebHashHistory } from "vue-router";
import homePage from "@/views/home/homePage";
import TopCategoryPage from "@/views/category/TopCategoryPage";
import SubCategoryPage from "@/views/category/SubCategoryPage";

const routes = [
  {
    path: "/",
    name: "homePage",
    component: homePage,
  },
  { path: "/category/:id", component: TopCategoryPage },
  { path: "/category/sub/:id", component: SubCategoryPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
