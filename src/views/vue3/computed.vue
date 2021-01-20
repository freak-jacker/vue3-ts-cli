<template>
  <div class="app-container">
    <div class="page-name">Computed</div>
    <div class="page-content">
      <box-card title="使用computed">
        <div>
          <div>visible:{{ visible }}</div>
          <div>computedData1:{{ computedData1 }}</div>
          <div>computedData2:{{ computedData2 }}</div>
        </div>
        <template v-slot:tool>
          <van-button @click="visible = !visible">change visible</van-button>
          <van-button @click="computedData2 = !computedData2"
            >change computedData2</van-button
          >
        </template>
      </box-card>

      <box-card title="使用computed 例子2">
        <div>
          <div>tagList: {{ tagList }}</div>
          <div>tagListComp: {{ tagListComp }}</div>
        </div>
        <template v-slot:tool>
          <van-field
            v-model="tagListComp"
            type="textarea"
            placeholder="请输入并换行"
          ></van-field>
        </template>
      </box-card>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import BoxCard from "@/components/BoxCard.vue";
import { Field } from "vant";
export default defineComponent({
  name: "ref",
  components: {
    [BoxCard.name]: BoxCard,
    [Field.name]: Field
  },
  setup() {
    /****   block   ****/
    const visible = ref(false);
    const computedData1 = computed(() => {
      if (visible.value) return "show";
      return "hidden";
    });
    const computedData2 = computed({
      get() {
        return !visible.value;
      },
      set(val: boolean) {
        visible.value = !val;
      }
    });

    /****   block   ****/
    const tagList = ref<string[]>([]);
    const tagListComp = computed({
      get() {
        return tagList.value.join("\n");
      },
      set(val: string) {
        tagList.value = val.split("\n");
      }
    });

    return {
      visible,
      computedData1,
      computedData2,

      tagList,
      tagListComp
    };
  }
});
</script>

<style lang="scss"></style>
