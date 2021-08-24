<template>
  <div id="app">
    <sj-empty class="empty" :emptyTitle="title"></sj-empty>
    <sj-no-more class="footer" :content="content"></sj-no-more>
  </div>
</template>

<script>
// import SjNoMore from './components/sj-no-more.vue';
export default {
  name: "App",
  // components: {
  //   SjNoMore
  // },
  data() {
    return {
      title: "暂无数据",
      src: "",
      content: "我是有底线的哦",
    };
  },
};
</script>

<style>
html,
body {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  height: 90vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
}
.footer {
  width: 100%;
  position: absolute;
  display: flex;
  bottom: 0;
  justify-content: center;
}
</style>
