<template>
  <div class="app-container">
    <div class="page-name">watch和watchEffect</div>
    <div class="page-content">
      <box-card title="使用watchEffect监控 例子">
        <div>
          <div>num: {{ num }}</div>
          <div>num2: {{ num2 }}</div>
        </div>
        <template v-slot:tool>
          <van-field
            v-model.number="num"
            type="number"
            placeholder="请输入并监控num"
          ></van-field>
          <van-field
            v-model.number="num2"
            type="number"
            placeholder="请输入并监控num2"
          ></van-field>

          <van-button @click="customWatch(!customWatchStatus)"
            >切换监听</van-button
          >
        </template>
      </box-card>

      <box-card title="使用watch监控tagList 例子">
        <div>
          <div>tagList: {{ tagList }}</div>
        </div>
        <template v-slot:tool>
          <van-field
            v-model="tagListComp"
            type="textarea"
            placeholder="请输入并换行"
          ></van-field>
        </template>
      </box-card>

      <box-card title="使用watch监控输入 日志">
        <box-card
          v-for="item in watchLogs"
          :key="item.date"
          :title="'时间：' + item.date"
        >
          <div>{{ item.val }}</div>
        </box-card>
      </box-card>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  watch,
  defineComponent,
  ref,
  reactive,
  watchEffect
} from "vue";
import BoxCard from "@/components/BoxCard.vue";
import { Field } from "vant";
import dayjs from "dayjs";
export default defineComponent({
  name: "ref",
  components: {
    [BoxCard.name]: BoxCard,
    [Field.name]: Field
  },
  setup() {
    /****   block   ****/

    const num = ref(0);
    const num2 = ref(10);

    const stop = watchEffect(() => {
      // 在响应式地跟踪其依赖项时立即运行一个函数，并在更改依赖项时重新运行它。
      console.log("num changed", num.value);
    });
    // stop(); // 停止这个监听

    let customWatchInstanceStop: () => void;
    const customWatchStatus = ref(false);
    const customWatch = (status: boolean) => {
      console.log("status: ", status);
      customWatchStatus.value = status;
      if (status) {
        customWatchInstanceStop = watchEffect(() => {
          console.log("num222 changed", num2.value);
        });
      } else {
        if (customWatchInstanceStop) customWatchInstanceStop();
      }
    };

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

    const watchLogs = reactive<{ date: number; old: string; val: string }[]>(
      []
    );

    watch(tagListComp, (val, old) => {
      const log = {
        date: dayjs().unix(),
        old: old,
        val: val
      };
      watchLogs.unshift(log);
    });

    return {
      num,
      num2,
      customWatchStatus,
      customWatch,

      tagList,
      tagListComp,
      watchLogs
    };
  }
});
</script>

<style lang="scss"></style>
