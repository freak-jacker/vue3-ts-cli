import { ref, toRefs, onMounted, watch, computed } from "vue";

interface TabItem {
  id: number;
  name: string;
  status: {
    loading: boolean;
    finished: boolean;
    freshing: boolean;
  };
  children: unknown[];
}

export default function useTabList() {
  const tabActive = ref<number>(0);
  const tabList = ref<TabItem[]>([]);

  const getTabList = async () => {
    const data: any[] = [
      { id: 111, name: "标签111" },
      { id: 222, name: "标签222" },
      { id: 333, name: "标签333" },
      { id: 444, name: "标签444" },
      { id: 555, name: "标签555" },
      { id: 666, name: "标签666" }
    ];

    if (data.length) data.unshift({ id: 0, name: "全部" });
    const result = data.map(item => {
      item.children = [];
      item.status = {
        loading: false,
        finished: false,
        freshing: false
      };
      return item;
    });
    tabList.value = result;
  };

  const getTablistData = async (index: number) => {
    const curTab = tabList.value[index];

    const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    curTab.children = curTab.children.concat(data);

    curTab.status.loading = false;
    if (curTab.children.length > 50) {
      curTab.status.finished = true;
    }
  };

  const finishLoadTab = computed(() => {
    return tabList.value.length > 0;
  });

  onMounted(getTabList);
  watch(tabActive, (val, old) => {
    console.log("val, old: ", val, old);
  });

  return {
    tabActive,
    tabList,
    getTabList,
    getTablistData,
    finishLoadTab
  };
}
