<template>
  <div class="order-aside-group">
    <div class="order-aside-group__title">
      {{ stateDictionary[titleGroup] }}
    </div>
    <OrderItem
      v-for="order in orderGroup"
      :key="order.uuid"
      :order-item="order"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Order } from '@/data/api/model';
import OrderItem from './Item.vue';

export default defineComponent({
  props: {
    titleGroup: {
      type: String,
      required: true
    },
    orderGroup: {
      type: Array as PropType<Order[]>,
      required: true,
      default: () => []
    }
  },
  setup() {
    enum stateDictionary {
      cart = 'товар добавлен в корзину',
      payment = 'оплата заказа',
      created = 'заказ создан',
      cooking = 'готовятся',
      ready = 'заказ приготовлен',
      delivery = 'переданы курьерам',
      finished = 'заказ выполнен',
      cancelled = 'заказ отменен'
    }
    return { stateDictionary };
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
    &::first-letter {
      text-transform: capitalize;
    }
  }
  &:last-child {
    padding-bottom: 60px;
  }
}
</style>
