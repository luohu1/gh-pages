<template>
  <a-layout id="basic-layout">
    <a-layout-header id="layout-header">
      <global-header />
    </a-layout-header>
    <a-layout-content id="layout-content">
      <h1>Welcome!</h1>
      <router-view></router-view>
    </a-layout-content>
    <a-layout-footer id="layout-footer">
      <global-footer />
    </a-layout-footer>
  </a-layout>
</template>

<script>
import GlobalHeader from '@/components/Layout/GlobalHeader'
import GlobalFooter from '@/components/Layout/GlobalFooter'
export default {
  name: 'BasicLayout',
  components: {
    GlobalHeader,
    GlobalFooter,
  },
}
</script>

<style scoped lang="less">
#basic-layout {
  #layout-content {
    padding: 15px;
    text-align: center;
    min-height: calc(100vh - 120px);
  }
}
</style>
