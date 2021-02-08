<template>
  <div class="order-item">
    <div class="order-item__content">
      <div class="order-item__content-rest">
        Бейрут (ул. Владикавказская, 11)
      </div>

      <div class="order-item__content-state">Новый заказ</div>

      <div class="order-item__content-price">600 ₽ + 100 ₽</div>
    </div>
    <el-progress
      class="my-own-progress"
      :percentage="70"
      :width="50"
      type="circle"
      :format="format"
      :stroke-width="4"
      color="#09B44D"
    ></el-progress>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: ['name', 'title', 'sum'],
  setup() {
    function format(percentage: number) {
      return `${percentage}`;
    }
    return { format };
  },
  name: 'OrderItem'
});
</script>

<style lang="scss">
.my-own-progress {
  .el-progress__text {
    font-size: 16px !important;
  }
}
</style>
<style lang="scss" scoped>
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
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
