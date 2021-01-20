<template>
  <div class="app-container">
    <div class="page-name">首页使用普通api</div>
    <div class="page-content">
      <van-swipe :autoplay="3000" class="banner">
        <van-swipe-item v-for="(image, index) in banner" :key="index">
          <van-image class="blockimage" :src="image" lazy-load fit="contain" />
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

const banner: string[] = [];
const tabActive = 0;
const tabList: any[] = [];

export default defineComponent({
  name: "TabbarHome",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [List.name]: List
  },
  data() {
    return {
      banner,
      tabActive,
      tabList
    };
  },
  computed: {
    finishLoadTab(): boolean {
      return this.tabList.length > 0;
    }
  },
  async created() {
    console.log("###created - home");
    this.getBannerList();
    await this.getTabList();
  },
  methods: {
    async getBannerList() {
      const data = [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ];
      this.banner = data;
    },

    async getTabList() {
      const data: any[] = [
        { id: 111, name: "标签111" },
        { id: 222, name: "标签222" },
        { id: 333, name: "标签333" },
        { id: 444, name: "标签444" },
        { id: 555, name: "标签555" },
        { id: 666, name: "标签666" }
      ];

      if (data.length) data.unshift({ id: 0, name: "全部" });
      const result = data.map(item => {
        item.children = [];
        item.status = {
          loading: false,
          finished: false,
          freshing: false
        };
        return item;
      });
      this.tabList = result;
    },

    async getTablistData(index: number) {
      console.log("index: ", index);
      const curTab = this.tabList[index];
      console.log("curTab: ", curTab);

      const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
      curTab.children = curTab.children.concat(data);

      curTab.status.loading = false;
      if (curTab.children.length > 50) {
        curTab.status.finished = true;
      }
    }
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
