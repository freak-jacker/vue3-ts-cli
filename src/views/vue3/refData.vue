<template>
  <div class="app-container">
    <div class="page-name">refData</div>
    <div class="page-content">
      <box-card title="使用 number 类型的ref">
        <div>numberData : {{ numberData }}</div>
        <template v-slot:tool>
          <van-button @click="++numberData">修改数据</van-button>
        </template>
      </box-card>

      <box-card title="使用 string 类型的ref">
        <div>stringData : {{ stringData }}</div>
        <template v-slot:tool>
          <van-button @click="stringData += 'world'">修改数据</van-button>
        </template>
      </box-card>

      <box-card title="使用 object 类型的ref">
        <div>objData : {{ objData }}</div>
        <template v-slot:tool>
          <van-button @click="objData.key += 'world'">change key</van-button>
          <van-button @click="objData.value += 'world'"
            >change value</van-button
          >
        </template>
      </box-card>

      <box-card title="使用 array 类型的ref">
        <div>arr1Data : {{ arr1Data }}</div>
        <template v-slot:tool>
          <van-button @click="changeArr1Data">changeArr1Data</van-button>
        </template>
      </box-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BoxCard from "@/components/BoxCard.vue";

export default defineComponent({
  name: "refData",
  components: {
    [BoxCard.name]: BoxCard
  },
  setup() {
    const numberData = ref(0);
    const stringData = ref("hello");
    const objData = ref({
      key: "key1",
      value: "this is value"
    });
    const arr1Data = ref<{ id: number; date: number }[]>([]);
    const changeArr1Data = () => {
      arr1Data.value.push({
        id: Math.floor(Math.random() * 100),
        date: new Date().getTime()
      });
    };

    return {
      numberData,
      stringData,
      objData,
      arr1Data,
      changeArr1Data
    };
  }
});
</script>

<style lang="scss"></style>
