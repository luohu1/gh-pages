<template>
  <header>
    <a-row type="flex" justify="space-around" align="center">
      <a-col class="logo" :span="4">
        <a href="/">
          <img alt="logo" src="@/assets/logo.png" />
          ipyth.com
        </a>
      </a-col>
      <a-col class="nav" :span="16">
        <a-menu class="menu" mode="horizontal" theme="dark">
          <a-menu-item key="docs" class="menu-item">
            <a href="/docs/">Docs</a>
          </a-menu-item>
          <a-menu-item class="menu-item">
            <router-link to="other">Others</router-link>
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col :span="4"> </a-col>
    </a-row>
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
  width: 1152px;
  margin-right: auto;
  margin-left: auto;
  .logo {
    a {
      font-size: 1.3rem;
      font-weight: 500;
      color: white;
      line-height: 1;
      img {
        height: 2.2rem;
        min-width: 2.2rem;
        margin-right: 0.8rem;
      }
    }
  }
  .nav {
    .menu-item {
      height: 64px;
      line-height: 60px;
    }
  }
}
</style>
