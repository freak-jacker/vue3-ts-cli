<template>
  <div class="app-container">
    <div class="page-name">生命周期</div>
    <div class="page-content">
      <box-card title="是否展示showTip">
        <div>
          <div v-if="showTip">showTip</div>
        </div>
        <template v-slot:tool>
          <van-button @click="changeShow">changeShow</van-button>
        </template>
      </box-card>

      <box-card title="reactive 包裹的对象">
        <div>
          <div>obj4 : {{ obj4 }}</div>
          <div v-for="i in obj4.c" :key="i">
            {{ i }}
            <div v-if="i === 4">xxx</div>
          </div>
        </div>
        <template v-slot:tool>
          <van-button @click="++obj4.a">修改数据</van-button>
          <van-button @click="changeObj4Value">使用方法修改数据</van-button>
          <van-button @click="changeObj4Array">改变数组长度</van-button>
        </template>
      </box-card>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  onUpdated,
  onUnmounted
} from "vue";
import cloneDeep from "lodash-es/cloneDeep";
import BoxCard from "@/components/BoxCard.vue";
export default defineComponent({
  name: "ref",
  components: {
    [BoxCard.name]: BoxCard
  },
  setup() {
    const showTip = ref(true);
    const changeShow = () => {
      showTip.value = !showTip.value;
    };

    const obj1 = { a: 1, b: "str", c: [1, 2, 3] };
    const obj4 = reactive(cloneDeep(obj1));
    const changeObj4Value = () => (obj4.b += "x");
    const changeObj4Array = () => obj4.c.push(obj4.c.length + 1);
    onMounted(() => {
      console.log("mounted!");
    });
    onUpdated(() => {
      console.log("updated2");
    });
    onUnmounted(() => {
      console.log("unmounted!");
    });
    return {
      showTip,
      changeShow,

      obj4,
      changeObj4Value,
      changeObj4Array
    };
  }
});
</script>

<style lang="scss"></style>
