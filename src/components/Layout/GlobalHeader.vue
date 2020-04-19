<template>
  <header>
    <div class="logo">
      <a href="/">
        <img alt="logo" src="@/assets/logo.png" />
        ipyth.com
      </a>
    </div>
    <div class="nav-menu">
      <a-menu class="menu" mode="horizontal" theme="dark">
        <a-menu-item key="docs" class="menu-item">
          <a href="/docs/">Docs</a>
        </a-menu-item>
        <a-menu-item class="menu-item">
          <span>Others</span>
        </a-menu-item>
      </a-menu>
    </div>
  </header>
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
header {
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
    a {
      font-size: 1.3rem;
      font-weight: 500;
      color: inherit;
      line-height: 1;
      img {
        height: 2.2rem;
        min-width: 2.2rem;
        margin-right: 0.8rem;
      }
    }
  }
  .nav-menu {
    width: 600px;
    padding-left: 200px;
    .menu {
      background: inherit;
      .menu-item {
        line-height: inherit;
      }
    }
  }
}
</style>
