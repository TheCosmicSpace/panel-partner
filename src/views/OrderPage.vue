<template>
  <el-container>
    <OrderList />
    <el-empty
      v-if="!activeOrder"
      style="width: 100%"
      description="Выберите заказ на панеле слева"
    ></el-empty>
    <el-main v-else class="main-layout__main">
      <section class="order-page section">
        <div class="section-tags">
          <el-tag
            class="section-tag"
            type="notice"
            color="#FF3358"
            effect="dark"
          >
            Новый
          </el-tag>
          <el-tag class="section-tag" type="info">
            Доставка
          </el-tag>
        </div>
        <hgroup class="order-hgroup">
          <h1 class="section__title">№{{ activeOrder.id }}</h1>
          <p class="section__subtitle">{{ activeOrder.store_data.name }}</p>
        </hgroup>
        <div class="order-info">
          <div class="order-info__items">
            <div class="order-info__item">
              <div class="order-info__item-label">Телефон клиента</div>
              <div class="order-info__item-text">
                <a href="tel:+79183333333">
                  + 7 (918) 333-33-33 <i class="el-icon-phone"></i>
                </a>
              </div>
            </div>
            <div class="order-info__item">
              <div class="order-info__item-label">Телефон курьера</div>
              <div class="order-info__item-text">Идет поиск курьера</div>
            </div>
          </div>
          <div class="order-info__items">
            <div class="order-info__item">
              <div class="order-info__item-label">Сумма заказа</div>
              <div class="order-info__item-text">
                <span class="order-info__sum">
                  {{ activeOrder.total_price }} ₽
                </span>
                <span>
                  <i class="el-icon-postcard"></i>
                  Оплата ApplePay
                </span>
              </div>
            </div>
            <div class="order-info__item">
              <div class="order-info__item-label">Приготовить к</div>
              <div class="order-info__item-text">14:00</div>
            </div>
          </div>
        </div>
        <div class="order-controls">
          <el-button
            @click="handleNextStepOrder"
            class="order-btn"
            type="success"
          >
            {{ btnsText.next }}
          </el-button>
          <el-button @click="handleCancelOrder" class="order-btn" type="info">
            {{ btnsText.cancel }}
          </el-button>
        </div>
        <el-divider></el-divider>
        <!-- OrderCart -->
        <OrderCart :cart-items="activeOrder.items" />
      </section>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';
import {
  urlStateMachine,
  textStateMachine
} from '@/helpers/order-state-machine';

import OrderList from '@/components/order-list/List.vue';
import OrderCart from '@/components/order-cart/OrderCart.vue';
import { ActionTypes } from '@/store/order/action-types';
export default defineComponent({
  setup() {
    const store = useStore();
    const activeOrder = computed(() => store.getters.getActivedOrder);
    const btnsText = computed(() => {
      const state = activeOrder.value?.state;
      return state ? textStateMachine.get(state) : {};
    });
    const handleNextStepOrder = () => {
      const state = activeOrder.value?.state;
      if (!state) return;
      console.log('handleNextStepOrder', urlStateMachine.get(state));
      store.dispatch(ActionTypes.UPDATE_ORDER_STATE, {
        uuid: activeOrder.value?.uuid as string,
        path: urlStateMachine.get(state) as string
      });
    };
    const handleCancelOrder = () => {
      console.log(
        'handleCancelOrder',
        activeOrder.value?.uuid,
        urlStateMachine.get('cancel')
      );
    };

    return {
      activeOrder,
      btnsText,
      handleCancelOrder,
      handleNextStepOrder
    };
  },
  name: 'OrderPage',
  components: { OrderList, OrderCart }
});
</script>

<style lang="scss" scoped>
.section-tag:not(:last-child) {
  margin-right: 10px;
  border-color: #ff3358;
}
.section {
  max-width: 1080px;
  &__title {
    font-weight: bold;
    font-size: 29px;
    line-height: 39px;
  }
  &__subtitle {
    color: #8e8e8e;
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
  }
}
.order-hgroup {
  margin-top: 30px;
}
// Order Info
.order-info {
  margin-top: 30px;
  .order-info__item-label {
    color: #8e8e8e;
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
  }
  .order-info__item-text {
    margin-top: 4px;
    font-weight: normal;
    font-size: 19px;
    line-height: 26px;
    color: #000;
    > a {
      color: inherit;
      text-decoration: none;
    }
  }
  .order-info__items {
    display: flex;
    align-items: flex-start;
    margin-bottom: 35px;
  }
  .order-info__item {
    flex: 1;
  }
  .order-info__sum {
    font-size: 25px;
    padding-right: 5px;
    margin-right: 5px;
    border-right: 2px solid #f1f1f1;
  }
}
.order-controls {
  display: flex;
}
.order-btn:nth-child(1) {
  flex: 2;
  font-size: 18px;
  font-weight: bold;
  height: 58px;
}
.order-btn:nth-child(2) {
  flex: 1.5;
  font-size: 18px;
  font-weight: bold;
  height: 58px;
}

.main-layout__main {
  padding: 40px;
}
</style>
