<template>
  <div class="header">
    <div class="logo">
      <span>Logo</span>
    </div>
    <div class="container">
      <a-menu class="menu" mode="horizontal" theme="dark">
        <a-menu-item key="docs" class="menu-item">
          <a href="/docs/">Docs</a>
        </a-menu-item>
        <a-menu-item class="menu-item">
          <span>Others</span>
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalHeader',
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.header {
  height: 50px;
  width: 1000px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  font-size: 14px;
  color: #ffffff;
  text-align: center;

  .logo {
    width: 200px;
    float: left;
    line-height: 50px;
  }
  .container {
    width: 600px;
    padding-left: 200px;
    .menu {
      background: #333;
      .menu-item {
        height: 50px;
        line-height: 50px;
      }
    }
  }
}
</style>
