<template>
  <div class="main-layout">
    <el-container class="main-layout__container">
      <el-header style="padding: 0">
        <AppHeader />
      </el-header>

      <router-view />
      <!-- <el-container>
        <OrderList v-if="true" />
        <el-main class="main-layout__main">
          <OrderPage />
        </el-main>
      </el-container> -->
      <!-- <router-view> -->
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/app-header/AppHeader.vue';

export default defineComponent({
  setup() {
    return {};
  },
  name: 'MainLayout',
  components: { AppHeader }
});
</script>

<style lang="scss" scoped>
.main-layout {
  height: 100vh;
  &__container {
    height: 100vh;
  }
}
</style>
