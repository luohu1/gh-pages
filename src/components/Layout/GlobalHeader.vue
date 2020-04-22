<template>
  <header>
    <div class="logo">
      <a href="/">
        <img alt="logo" src="@/assets/logo.png" />
        ipyth.com
      </a>
    </div>
    <nav>
      <a-menu class="menu" mode="horizontal" theme="dark">
        <a-menu-item key="docs" class="menu-item">
          <a href="/docs/">Docs</a>
        </a-menu-item>
        <a-menu-item class="menu-item">
          <router-link to="other">Others</router-link>
        </a-menu-item>
      </a-menu>
    </nav>
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
  margin-right: auto;
  margin-left: auto;
  text-align: center;

  .logo {
    width: 200px;
    float: left;
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
  nav {
    width: 600px;
    padding-left: 200px;

    .menu-item {
      height: 64px;
      line-height: 60px;
    }
  }
}
</style>
