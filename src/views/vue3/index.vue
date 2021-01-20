<template>
  <div class="app-container">
    <div class="page-name">Vue3的各种特性的测试，全部使用ts实现</div>
    <div class="page-content">
      <van-cell
        :title="item.meta.title"
        v-for="item in vue3List"
        :key="item.path"
        :to="item.path"
        is-link
      ></van-cell>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import listData, { RouterItem } from "@/router/vue3";

import { Cell } from "vant";
export default defineComponent({
  name: "TestVueApi",
  components: {
    [Cell.name]: Cell
  },
  setup() {
    const vue3List: RouterItem[] = reactive(listData);
    return {
      vue3List
    };
  }
});
</script>

<style lang="scss"></style>
