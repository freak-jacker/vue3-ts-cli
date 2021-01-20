<template>
  <div class="box-card">
    <div v-if="title" class="title">{{ title }}</div>
    <div class="content">
      <div class="data"><slot name="default" /></div>
      <div class="tool">
        <slot name="tool" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "boxCard",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.box-card {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  .title {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  .content {
    padding: 10px;
  }
  .data {
  }
  .tool {
    margin-top: 10px;
  }
}
</style>
