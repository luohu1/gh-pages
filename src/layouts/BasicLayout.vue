<template>
  <a-layout id="basic-layout">
    <a-layout-header :style="{padding: 0, height: '50px', background: '#333'}">
      <global-header />
    </a-layout-header>
    <a-layout-content id="layout-content">
      <span>content</span>
      <router-view></router-view>
    </a-layout-content>
    <a-layout-footer :style="{padding: 0}">
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
    min-height: calc(100vh - 100px);
  }
}
</style>
