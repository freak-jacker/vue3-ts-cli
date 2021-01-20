<template>
  <div class="app-container">
    <div class="page-name">ref</div>
    <div class="page-content">
      <box-card title="普通的对象">
        <div>obj1 : {{ obj1 }}</div>
        <template v-slot:tool>
          <van-button @click="++obj1.a">修改数据</van-button>
        </template>
      </box-card>

      <box-card title="ref 包裹的对象">
        <div>obj2 : {{ obj2 }}</div>
        <template v-slot:tool>
          <van-button @click="++obj2.a">修改数据</van-button>
          <van-button @click="changeObj2Value">使用方法修改数据</van-button>
        </template>
      </box-card>

      <box-card title="readonly 包裹的对象">
        <div>obj3 : {{ obj3 }}</div>
        <template v-slot:tool>
          <van-button @click="++obj3.a">修改数据</van-button>
        </template>
      </box-card>

      <box-card title="reactive 包裹的对象">
        <div>obj4 : {{ obj4 }}</div>
        <template v-slot:tool>
          <van-button @click="++obj4.a">修改数据</van-button>
          <van-button @click="changeObj4Value">使用方法修改数据</van-button>
        </template>
      </box-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, readonly, reactive } from "vue";
import cloneDeep from "lodash-es/cloneDeep";
import BoxCard from "@/components/BoxCard.vue";
export default defineComponent({
  name: "ref",
  components: {
    [BoxCard.name]: BoxCard
  },
  setup() {
    const obj1 = { a: 1, b: "str", c: [1, 2, 3] };
    const obj2 = ref(cloneDeep(obj1));
    console.log("obj2: ", obj2);
    const obj3 = readonly(cloneDeep(obj1));
    const obj4 = reactive(cloneDeep(obj1));
    console.log("obj4: ", obj4);
    const changeObj2Value = () => (obj2.value.b += "x");
    const changeObj4Value = () => (obj4.b += "x");

    return {
      obj1,
      obj2,
      obj3,
      obj4,
      changeObj2Value,
      changeObj4Value
    };
  }
});
</script>

<style lang="scss"></style>
