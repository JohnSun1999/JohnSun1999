<template>
  <view>
    <view class="empty">
      <img class="image" :src="src" />
      <view>{{ emptyTitle }}</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "sj-empty",
  props: {
    emptyTitle: {
      type: String,
      default: "暂无数据",
    },
    src: {
      type: String,
      default: "https://api.cloudsymbol.cn/url/image/1629425336682.png",
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.empty {
  margin-top: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  font-size: 16px;
  color: #333333;
  width: 100vw;
  display: flex;
  flex-flow: column;

}
 .empty .image {
  width: 231px;
  height: 231px;
  z-index: 9999;
  margin-bottom: 10px;
}

</style>
