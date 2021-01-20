<template>
  <div>
    <van-tabbar
      route
      :z-index="91"
      :border="true"
      v-model="active"
      class="tabbar"
      inactive-color="#999999"
    >
      <van-tabbar-item
        class="tabbar"
        v-for="item in navList"
        :name="item.key"
        :to="item.to"
        :key="item.id"
      >
        <span>{{ item.name }}</span>
        <template #icon="props">
          <img
            :src="props.active ? item.iconActive : item.iconDefault"
            alt="icon"
            class="tab_item_img"
          />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Tabbar, TabbarItem } from "vant";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 1,
      navList: [
        {
          id: 1,
          name: "售票中心",
          to: "/home",
          iconDefault: require("@/assets/tabs/home.png"),
          iconActive: require("@/assets/tabs/home-active.png")
        },
        {
          id: 3,
          name: "我的票据",
          to: "/my",
          iconDefault: require("@/assets/tabs/class.png"),
          iconActive: require("@/assets/tabs/class-active.png")
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
.tabbar {
  & ::v-deep(.van-tabbar-item__icon) {
    height: 30px;
    width: 30px;
    margin-bottom: 2px;
    img {
      height: 100%;
      width: 100%;
      display: block;
    }
  }
  & ::v-deep(.van-tabbar-item__text) {
    font-size: 12px;
    color: #666666;
    line-height: 1.4;
  }
  & ::v-deep(.van-tabbar-item--active .van-tabbar-item__text) {
    font-size: 12px;
    font-weight: 500;
    color: #bf9067;
  }
}
</style>
