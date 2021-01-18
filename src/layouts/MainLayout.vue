<template>
  <div class="main-layout">
    <el-container class="main-layout__container">
      <el-aside width="320px">Aside</el-aside>
      <el-container>
        <el-header>
          <AppNavMenu />
        </el-header>
        <el-main class="main-layout__main">
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>

  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view /> -->
</template>

<script lang="ts">
import AppNavMenu from '@/components/AppNavMenu.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {};
  },
  components: {
    AppNavMenu
  },
  name: 'MainLayout'
});
</script>

<style lang="scss" scoped>
.el-aside {
  background-color: #d3dce6;
}
.main-layout {
  height: 100vh;
  &__container {
    height: inherit;
  }
  &__main {
    padding: 40px;
  }
  .el-header {
    padding: 0 50px;
    box-shadow: 0px 0px 31px rgba(0, 0, 0, 0.13);
  }
}
</style>
