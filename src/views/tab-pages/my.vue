<template>
  <div class="app-container">
    <div class="page-name">使用组合api {{ tabActive }}</div>
    <div class="page-content">
      <van-swipe :autoplay="3000" class="banner">
        <van-swipe-item v-for="(image, index) in banner" :key="index">
          <van-image class="blockimage" :src="image" fit="contain" />
        </van-swipe-item>
      </van-swipe>

      <div class="">
        <van-tabs v-if="finishLoadTab" v-model:active="tabActive">
          <van-tab
            v-for="(tab, tabIndex) in tabList"
            :key="tab.id"
            :title="tab.name"
          >
            <van-list
              v-model:loading="tab.status.loading"
              :finished="tab.status.finished"
              finished-text="没有更多了"
              @load="getTablistData(tabIndex)"
            >
              <div class="tab-container">
                <div
                  class="tab-items"
                  v-for="(item, index) in tab.children"
                  :key="'item-' + index"
                >
                  {{ tab.name }} -- item- {{ index }}
                </div>
              </div>
            </van-list>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Swipe, SwipeItem, Tab, Tabs, List } from "vant";
import { defineComponent } from "vue";

const sleep = (t = 1000, err?: boolean) => {
  return new Promise((reslove: (value?: unknown) => void, reject) => {
    setTimeout(() => {
      if (err) reject(err);
      else reslove();
    }, t);
  });
};

sleep();

import useBannerList from "@/refs/banner.ts";
import useTabList from "@/refs/tab-list.ts";

export default defineComponent({
  name: "TabbarHome",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [List.name]: List
  },

  setup() {
    const { banner } = useBannerList();
    const {
      tabActive,
      tabList,
      getTabList,
      getTablistData,
      finishLoadTab
    } = useTabList();

    return {
      banner,
      tabActive,
      tabList,
      getTabList,
      getTablistData,
      finishLoadTab
    };
  },
  beforeCreate() {
    console.log("~~~~~beforeCreate~~~~~");
  },
  created() {
    console.log("~~~~~created~~~~~");
  },
  mounted() {
    console.log("~~~~~mounted~~~~~");
  },
  unmounted() {
    console.log("~~~~~unmounted~~~~~");
  }
});
</script>

<style lang="scss" scoped>
.page-name {
  padding: 40px;
  color: #666666;
  font-size: 18px;
}
.page-content {
  // padding: 0 30px;
}

.banner {
  height: 200px;
  background: #ccc;
  .blockimage {
    width: 100%;
    height: 100%;
  }
}

.tab-container {
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .tab-items {
    width: calc(50% - 5px);
    min-height: 60px;
    background: #cccccc;
    margin-bottom: 10px;
    margin-right: 10px;
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
}
</style>
