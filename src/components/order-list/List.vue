<template>
  <div class="order-list">
    <OrderSkeleton :loading="loading" :count="5" animated />
    <el-empty
      v-if="isEmptyOrderList && !loading"
      description="Пока нет заказов"
    />
    <template v-else>
      <template
        v-for="([title, order], index) in Object.entries(groupsOrder)"
        :key="index"
      >
        <OrderGroup
          v-if="order.length"
          :titleGroup="title"
          :orderGroup="order"
          group-title="Новые заказы"
        />
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref } from 'vue';
import { useStore } from '@/store';
import { ActionTypes } from '@/store/order/action-types';
import { Order } from '@/data/api/model';

import OrderGroup from './Group.vue';
import OrderSkeleton from './Skeleton.vue';

export default defineComponent({
  setup() {
    const store = useStore();
    const groupsOrder = reactive({
      ready: [] as Order[],
      delivery: [] as Order[]
    });
    const loading = ref(false);
    const getOrdersInProcess = computed(() => store.getters.getOrdersInProcess);
    function groupingOrders() {
      for (const [key, value] of Object.entries(groupsOrder)) {
        const filtered = getOrdersInProcess.value?.filter(
          el => el.state === key
        ) as Order[];
        console.warn('FILTERED', filtered);
        console.warn(key, value);

        value.push(...filtered);
      }
      console.log(groupsOrder);
    }

    onMounted(async () => {
      loading.value = true;
      await store.dispatch(ActionTypes.FETCH_ORDERS_IN_PROCESS, undefined);
      loading.value = false;
      // groupsOrder.ready = getOrdersInProcess.value?.filter(
      //   el => el.state === 'ready'
      // ) as Order[];
      groupingOrders();
      // groupsOrder.ready = (getOrdersInProcess.value as []) || [];
      console.warn(groupsOrder);
    });
    const isEmptyOrderList = computed(() => {
      console.warn('===', groupsOrder);
      return !Object.values(groupsOrder).reduce(
        (acc, group) => acc + group.length,
        0
      );
    });
    console.warn(isEmptyOrderList.value, groupsOrder);

    const handleSelectOrder = (order: Order) => {
      console.log('handleSelectOrder', order);
    };
    return { groupsOrder, isEmptyOrderList, handleSelectOrder, loading };
  },
  name: 'OrderList',
  components: { OrderGroup, OrderSkeleton }
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
