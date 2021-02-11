<template>
  <div class="order-cart">
    <div class="order-cart-wishes">
      <div class="order-cart-wishes__person">
        <i class="el-icon-knife-fork"></i> 4
      </div>
      <div class="order-cart-wishes__comment">
        <i class="el-icon-chat-line-round"></i>
        Не добавляйте соль, пожалуйста
      </div>
    </div>
    <div class="cart-products order-cart__products">
      <OrderCartItem
        v-for="cartItem in cartItems"
        :key="cartItem.id"
        :cart-item="cartItem"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Item } from '@/data/api/model';
import OrderCartItem from './Item.vue';

export default defineComponent({
  props: {
    cartItems: {
      type: Array as PropType<Item[]>,
      required: true,
      default: () => []
    }
  },
  setup() {
    return {};
  },
  name: 'OrderCart',
  components: { OrderCartItem }
});
</script>

<style lang="scss" scoped>
.order-cart-wishes {
  margin: 30px 0;
  display: flex;
  &__person {
    font-size: 20px;
    line-height: 30px;
    background: #f1f1f1;
    border-radius: 6px;
    display: inline-block;
    padding: 8px 15px;
    margin-right: 15px;
  }
  &__comment {
    font-size: 20px;
    line-height: 30px;
    background: #f1f1f1;
    border-radius: 6px;
    padding: 8px 15px;
    flex: 1;
  }
}
</style>
