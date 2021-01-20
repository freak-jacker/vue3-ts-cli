import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/components/Layout/index.vue";

import Vue3ApisRouter from "./vue3";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "TabbarHome",
        component: () => import("@/views/tab-pages/home.vue"),
        meta: {
          tab: true,
          title: "首页",
          keepAlive: true
        }
      },
      {
        path: "/my",
        name: "Tabbarmy",
        component: () => import("@/views/tab-pages/my.vue"),
        meta: {
          tab: true,
          title: "其他",
          keepAlive: true
        }
      },
      ...Vue3ApisRouter
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
