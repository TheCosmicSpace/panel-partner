<template>
  <div class="cart-product">
    <div class="cart-product__info">
      <div class="cart-product__title">
        1 × Чизкейк Нью-Йорк
        <span class="cart-product__weight"> 300 г.</span>
      </div>
      <div class="cart-product__price">350 ₽</div>
    </div>
    <div class="cart-product-toppings">
      <div class="cart-product-toppings__title">
        Халапеньо
      </div>
      <div class="cart-product-toppings__price">+15 ₽</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
  name: 'OrderCartItem'
});
</script>

<style lang="scss" scoped>
// cart-product
.cart-product {
  padding: 15px 0;
  border-bottom: 2px solid #f1f1f1;
  &__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title {
    font-weight: normal;
    font-size: 19px;
    line-height: 26px;
  }
  &__price {
    font-weight: bold;
    font-size: 19px;
    line-height: 26px;
  }
  &__weight {
    color: #9c9c9c;
  }
}
.cart-product-toppings {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__title {
    color: #8e8e8e;
    font-size: 16px;
    line-height: 22px;
  }
  &__price {
    font-size: 16px;
    line-height: 22px;
  }
}
</style>
