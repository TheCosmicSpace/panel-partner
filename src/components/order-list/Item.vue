<template>
  <button @click="handleSelectActiveOrder" class="order-item-wrap">
    <div class="order-item">
      <div class="order-item__content">
        <div class="order-item__content-rest">
          {{ orderItem.store_data.name }}
        </div>

        <div class="order-item__content-state">Новый заказ</div>

        <div class="order-item__content-price">
          {{ orderItem.total_price }} ₽
          <span v-if="!orderItem.without_delivery">
            + {{ orderItem.delivery_price }} ₽
          </span>
        </div>
      </div>
      <el-progress
        class="my-own-progress"
        :percentage="70"
        :width="50"
        type="circle"
        :format="format"
        :stroke-width="3"
        color="#09B44D"
      ></el-progress>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useStore } from '@/store';
import { Order } from '@/data/api/model';
import { MutationTypes } from '@/store/order/mutation-types';

export default defineComponent({
  props: {
    orderItem: {
      type: Object as PropType<Order>,
      required: true,
      default: () => ({})
    }
  },
  setup(props) {
    const store = useStore();
    function format(percentage: number) {
      return `${percentage}`;
    }
    const handleSelectActiveOrder = () => {
      store.commit(MutationTypes.SET_ACTIVE_ORDER, props.orderItem);
      console.log(props.orderItem);
    };
    return { format, handleSelectActiveOrder };
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
.order-item-wrap {
  display: contents;
  text-align: left;
  cursor: pointer;
}
.order-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 2px solid #f1f1f1;
  transition: background-color 0.25s;
  &:hover {
    background-color: #f1f1f1;
  }
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
