<template>
  <div class="app-container">
    <div class="page-name">组件的使用</div>
    <div class="page-content">
      <box-card>
        <div>这个容器就是一个组件</div>
      </box-card>

      <box-card title="组件间通信">
        <div>
          <div>comp1Show:{{ comp1Show }}</div>
          <comp1 :show="comp1Show" />
        </div>
      </box-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, readonly, reactive } from "vue";
import BoxCard from "@/components/BoxCard.vue";
import comp1 from "./component/comp1.vue";
export default defineComponent({
  name: "ref",
  components: {
    [BoxCard.name]: BoxCard,
    comp1
  },
  setup() {
    const comp1Show = ref(true);
    return {
      comp1Show
    };
  }
});
</script>

<style lang="scss"></style>
