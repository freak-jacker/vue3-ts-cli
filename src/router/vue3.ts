export default [
  {
    path: "/vue3",
    name: "vue3",
    component: () => import("@/views/vue3/index.vue"),
    meta: {
      title: "vue3的api们测试"
    }
  },
  {
    path: "/refData",
    name: "refData",
    component: () => import("@/views/vue3/refData.vue"),
    meta: {
      title: "refData"
    }
  },
  {
    path: "/ref",
    name: "ref",
    component: () => import("@/views/vue3/ref.vue"),
    meta: {
      title: "ref"
    }
  },
  {
    path: "/computed",
    name: "computed",
    component: () => import("@/views/vue3/computed.vue"),
    meta: {
      title: "computed"
    }
  },
  {
    path: "/watch",
    name: "watch",
    component: () => import("@/views/vue3/watch.vue"),
    meta: {
      title: "watch"
    }
  },
  {
    path: "/life",
    name: "life",
    component: () => import("@/views/vue3/life.vue"),
    meta: {
      title: "life"
    }
  },
  {
    path: "/component",
    name: "component",
    component: () => import("@/views/vue3/component.vue"),
    meta: {
      title: "component"
    }
  }
];

export interface RouterItemMeta {
  title?: string;
  keepAlive?: boolean;
  tab?: boolean;
}

export interface RouterItem {
  path: string;
  name: string;
  component: () => Promise<typeof import("*.vue")>;
  meta?: RouterItemMeta;
}
