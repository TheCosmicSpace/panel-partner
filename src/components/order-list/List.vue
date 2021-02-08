<template>
  <div class="order-list">
    <OrderGroup group-title="Новые заказы" />
    <OrderGroup group-title="Готовятся" />
    <OrderGroup group-title="Переданы курьерам" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OrderGroup from './Group.vue';

export default defineComponent({
  setup() {
    return {};
  },
  name: 'OrderList',
  components: { OrderGroup }
});
</script>

<style lang="scss" scoped>
.order-list {
  overflow-y: auto;
  min-width: 320px;
  overflow: auto;
  border: 2px solid #f1f1f1;
  height: 100vh;
  &::-webkit-scrollbar {
    width: 8px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: silver; /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(105, 105, 105); /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 2px solid silver; /* creates padding around scroll thumb */
  }
}
</style>
