<template>
  <div class="template-layout">
    <el-container class="template-layout__container">
      <el-aside class="aside">
        <div class="aside-tab"></div>
        <div class="order-list">
          <div v-for="i in 15" :key="i" class="order-item">
            <div class="order-item__content">
              <div class="order-item__content-rest">Хиба</div>

              <div class="order-item__content-state">Новый заказ</div>

              <div class="order-item__content-price">600 ₽ + 100 ₽</div>
            </div>
            <div class="order-item__circle">5</div>
          </div>
        </div>
      </el-aside>
      <el-container>
        <el-header class="header"><AppNavMenuVue /></el-header>
        <el-main class="template-layout__main">
          <section class="section section-order">
            <h1 class="section__title">Выберите заказ на панеле слева</h1>
          </section>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import AppNavMenuVue from '@/components/AppNavMenu.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
  components: {
    AppNavMenuVue
  }
});
</script>

<style lang="scss" scoped>
.template-layout {
  &__container {
    height: 100vh;
  }
  &__main {
    padding: 50px;
  }
}
.header {
  box-shadow: 0px 0px 31px rgba(0, 0, 0, 0.13);
}
.aside {
  max-width: 35%;
  min-width: 320px;
  overflow: auto;
  resize: horizontal;
  border: 2px solid #f1f1f1;
  height: inherit;
}
.aside-tab {
  box-shadow: 0px 0px 31px rgba(0, 0, 0, 0.13);
  height: 60px;
  position: sticky;
  top: 0;
  background: #fff;
}

.order-list {
  overflow-y: auto;
}
.order-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 2px solid #f1f1f1;
  &__content-rest {
    font-size: 12px;
    line-height: 16px;
  }
  &__content-state {
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
  }
  &__content-price {
    color: #8e8e8e;
    font-size: 14px;
    line-height: 19px;
  }
  &__circle {
    width: 48px;
    height: 48px;
    border: 2px solid #ff3358;
    // transform: matrix(-1, 0, 0, 1, 0, 0);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.section {
  &__title {
    font-weight: bold;
    font-size: 29px;
    line-height: 39px;
  }
  .section-order {
  }
}
</style>
