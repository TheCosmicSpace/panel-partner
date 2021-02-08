<template>
  <div class="order-aside-group">
    <div class="order-aside-group__title">{{ groupTitle }}</div>
    <OrderItem />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OrderItem from './Item.vue';

export default defineComponent({
  props: {
    groupTitle: {
      type: String
    }
  },
  setup() {
    return {};
  },
  name: 'OrderGroup',
  components: { OrderItem }
});
</script>

<style lang="scss" scoped>
.order-aside-group {
  &__title {
    padding: 20px 20px 10px 20px;
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    color: #8e8e8e;
    border-bottom: 2px solid #f1f1f1;
  }
  &:last-child {
    padding-bottom: 60px;
  }
}
</style>
