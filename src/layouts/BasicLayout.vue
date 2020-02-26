<template>
  <a-layout id="basic-layout">
    <a-layout-header id="layout-header">
      <span>header</span>
    </a-layout-header>
    <a-layout-content  id="layout-content">
      <span>content</span>
      <router-view></router-view>
    </a-layout-content>
    <a-layout-footer id="layout-footer">
      <span>Copyright ©2020 LH</span>
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: 'BasicLayout',
  components: {}
}
</script>

<style scoped lang="less">
.mixin-style() {
  height: 50px;
  padding: 15px 0;
  background: #333;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
}
#basic-layout {
  #layout-header {
    .mixin-style();
    line-height: normal;
  }
  #layout-content {
    min-height: calc(100vh - 100px);
  }
  #layout-footer {
    .mixin-style();
  }
}
</style>
