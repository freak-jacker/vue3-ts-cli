<template>
  <section class="lauout-container">
    <!-- <div>{{ chachedView }}</div> -->

    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="chachedView">
          <component :is="Component" class="app-container" />
        </keep-alive>
      </transition>
    </router-view>

    <!-- 底部tabbar 如果是tab页面才显示他 -->
    <footerTabbar v-if="$route.meta.tab" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import footerTabbar from "./footer-tabbar.vue";

export default defineComponent({
  name: "AppMain",
  components: { footerTabbar },
  data() {
    return {
      chachedView: []
    };
  },
  computed: {
    key(): string {
      const route = this.$route;
      return route.path;
    }
    // ...mapGetters(["chachedView"])
  },
  methods: {}
});
</script>

<style lang="scss" scoped>
.app-container {
  margin-bottom: 50px;
}
</style>
