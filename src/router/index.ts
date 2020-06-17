import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ViewHome from "../views/ViewHome.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "ViewHome",
    component: ViewHome
  },
  {
    path: "/ViewCreateUser",
    name: "CreateUser",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/ViewCreateUser.vue")
  },
  {
    path: "/ViewUpdateUser",
    name: "UpdateUser",
    component: () => import("../views/ViewUpdateUser.vue")
  },
  {
    path: "/ViewDeleteUser",
    name: "DeleteUser",
    component: () => import("../views/ViewDeleteUser.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
