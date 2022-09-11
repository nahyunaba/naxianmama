import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/order",
    component: () => import("../views/OrderView.vue"),
  },
  {
    path: "/stock",
    component: () => import("../views/StockView.vue"),
  },

  {
    path: "/cs",
    component: () => import("../views/CsView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
