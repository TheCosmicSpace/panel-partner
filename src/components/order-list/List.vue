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
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useStore } from '@/store';
import { ActionTypes } from '@/store/order/action-types';
import { MutationTypes } from '@/store/order/mutation-types';

import OrderGroup from './Group.vue';
import OrderSkeleton from './Skeleton.vue';

export default defineComponent({
  setup() {
    const store = useStore();
    const loading = ref(false);
    const groupsOrder = computed(() => store.getters.getGroupsOrder);
    const isEmptyOrderList = computed(
      () => store.getters.isEmptyOrdersInProcess
    );

    onMounted(async () => {
      loading.value = true;
      await store.dispatch(ActionTypes.FETCH_ORDERS_IN_PROCESS, undefined);
      loading.value = false;
      store.commit(MutationTypes.GROUPING_ORDERS, undefined);
      console.warn(groupsOrder);
    });

    return { groupsOrder, isEmptyOrderList, loading };
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
