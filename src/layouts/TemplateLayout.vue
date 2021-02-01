<template>
  <!-- <el-row :gutter="10"> -->
  <!-- <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"
      ><div class="grid-content bg-purple"></div
    ></el-col>
    <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18"
      ><div class="grid-content bg-purple-light"></div
    ></el-col> -->
  <!-- <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
      ><div class="grid-content bg-purple"></div
    ></el-col>
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
      ><div class="grid-content bg-purple-light"></div
    ></el-col> -->
  <!-- </el-row> -->
  <div class="template-layout">
    <el-container class="template-layout__container">
      <el-aside class="aside">
        <div class="aside-tab"></div>
        <div class="order-list">
          <div v-for="i in 15" :key="i" class="order-item">
            <div class="order-item__content">
              <div class="order-item__content-rest">Хиба</div>

              <div class="order-item__content-state">Новый заказ</div>

              <div class="order-item__content-price">600 ₽ + 100 ₽</div>
            </div>
            <el-progress
              :width="100"
              type="circle"
              :format="format"
            ></el-progress>
          </div>
        </div>
      </el-aside>
      <el-container>
        <el-header class="header">
          <AppNavMenuVue />
        </el-header>
        <el-main class="template-layout__main">
          <section class="section section-order">
            <div class="section-tags">
              <el-tag class="section-tag" type="danger" effect="dark">
                Новый
              </el-tag>
              <el-tag class="section-tag" type="info" effect="dark">
                Доставка
              </el-tag>
            </div>
            <hgroup class="order-hgroup">
              <h1 class="section__title">Выберите заказ на панеле слева</h1>
              <p class="section__subtitle">Бейрут (ул. Владикавказская, 11)</p>
            </hgroup>
            <div class="order-info">
              <div class="order-info__items">
                <div class="order-info__item">
                  <div class="order-info__item-label">Телефон клиента</div>
                  <div class="order-info__item-text">
                    + 7 (918) 333-33-33 <i class="el-icon-phone"></i>
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
                    <span class="order-info__sum">715 ₽</span>
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
              <el-button class="order-btn" type="success"
                >Заказ готов</el-button
              >
              <el-button class="order-btn" type="danger"
                >Отклонить заказ</el-button
              >
            </div>
            <el-divider></el-divider>
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
              <div class="order-cart__products cart-products">
                <div class="cart-product">
                  <div class="cart-product__info">
                    <div class="cart-product__title">
                      1 × Чизкейк Нью-Йорк
                      <span class="cart-product__weight"> 300 г.</span>
                    </div>
                    <div class="cart-product__price">350 ₽</div>
                  </div>
                </div>
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
              </div>
            </div>
          </section>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import AppNavMenuVue from '@/components/AppNavMenu.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    function format(percentage: number) {
      return percentage.toString();
    }
    return { format };
  },
  components: {
    AppNavMenuVue
  }
});
</script>

<style lang="scss" scoped>
.template-layout {
  &__container {
    height: 100vh;
  }
  &__main {
    padding: 50px;
  }
}
.header {
  box-shadow: 0px 0px 31px rgba(0, 0, 0, 0.13);
}
.aside {
  max-width: 35%;
  min-width: 320px;
  overflow: auto;
  resize: horizontal;
  border: 2px solid #f1f1f1;
  height: inherit;
}
.aside-tab {
  box-shadow: 0px 0px 31px rgba(0, 0, 0, 0.13);
  height: 60px;
  position: sticky;
  top: 0;
  background: #fff;
}

.order-list {
  overflow-y: auto;
}
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
    // transform: matrix(-1, 0, 0, 1, 0, 0);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.section-tag:not(:last-child) {
  margin-right: 10px;
}

.section {
  max-width: 705px;
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
  .section-order {
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

// ?Order cart

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
// .el-col {
//   border-radius: 4px;
// }
// .bg-purple-dark {
//   background: #99a9bf;
// }
// .bg-purple {
//   background: #d3dce6;
// }
// .bg-purple-light {
//   background: #e5e9f2;
// }
// .grid-content {
//   border-radius: 4px;
//   min-height: 36px;
// }
</style>
