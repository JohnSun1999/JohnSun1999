<template>
  <view>
    <view class="line"
      ><span>{{ content }}</span></view
    >
  </view>
</template>

<script>
export default {
  name: "sj-no-more",
  props: {
    content: {
      type: String,
      default: "到底啦，我是有底线的",
    },
  },
};
</script>

<style lang="scss" scoped>
.line {
  display: block;
  width: 90%;
  margin: 20px auto;
  height: 1px;
  text-align: center;
  font-size: 12px;
  color: #aaa;
  background: #ccc;
  span {
    position: relative;
    top: -8px;
    background: #fafafa;
    padding: 0px 10px;
  }
}
</style>