<template>
  <div class="app-container">
    <div class="page-name">ref</div>
    <div class="page-content">
      <box-card title="普通的对象">
        <div>内容</div>
        <template v-slot:tool>
          <van-button>修改数据</van-button>
        </template>
      </box-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, readonly, reactive } from "vue";
import BoxCard from "@/components/BoxCard.vue";
export default defineComponent({
  name: "ref",
  components: {
    [BoxCard.name]: BoxCard
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss"></style>
