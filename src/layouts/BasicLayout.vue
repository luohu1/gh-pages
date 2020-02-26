<template>
  <a-layout id="basic-layout">
    <a-layout-header id="layout-header">
      <div class="logo"/>
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
.mixin-style {
  background: #333;
  font-size: 14px;
  color: #ffffff;
  padding: 15px 0;
  text-align: center;
}
#basic-layout {
  #layout-header {
    .mixin-style();
  }
  #layout-content {
    height: 100%;
  }
  #layout-footer {
    .mixin-style();
    position: absolute;
    bottom: 0px;
    width: 100%;
  }
}
</style>
