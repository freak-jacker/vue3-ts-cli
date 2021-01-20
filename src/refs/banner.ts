import { ref, Ref, toRefs, onMounted, watch, computed } from "vue";

export default function useBannerList() {
  const banner = ref<string[]>([]);
  const getBannerList = async () => {
    console.log("getBannerList");
    const data = [
      "https://img.yzcdn.cn/vant/apple-1.jpg",
      "https://img.yzcdn.cn/vant/apple-2.jpg"
    ];
    banner.value = data;
  };
  onMounted(getBannerList);
  return {
    banner,
    getBannerList
  };
}
