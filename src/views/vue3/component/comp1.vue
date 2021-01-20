<template>
  <div class="comp">
    <div>show: {{ show }}</div>
    <div>visible: {{ visible }}</div>
    <van-button @click="handleVisibleChange">修改visible</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRef } from "vue";
export default defineComponent({
  name: "ref",
  props: {
    show: { type: Boolean, default: false }
  },
  setup(props) {
    const visible = toRef(props, "show");
    console.log("visible: ", visible);
    const handleVisibleChange = () => {
      visible.value = !visible.value;
    };
    return {
      visible,
      handleVisibleChange
    };
  }
});
</script>

<style lang="scss">
.comp {
  border: 1px solid #eeeeee;
  padding: 10px;
}
</style>
