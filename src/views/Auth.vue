<template>
  <div class="auth-page">
    <div class="auth-page__wrapper">
      <el-form
        @submit="submit"
        :model="user"
        status-icon
        class="auth-page-form"
      >
        <div class="logo">
          <span class="logo-eazy">eazy</span>
          <span class="logo-food">food</span>
        </div>

        <el-form-item>
          <el-input
            v-model="user.phone"
            type="phone"
            autocomplete="off"
            placeholder="Номер телефона"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="user.password"
            type="password"
            autocomplete="off"
            placeholder="Пароль"
          ></el-input>
        </el-form-item>
        <el-button @click="submit" width="100%" type="success">Войти</el-button>
        <el-button type="text">Сбросить пароль</el-button>
      </el-form>

      <div class="auth-page-footer">
        <el-divider></el-divider>
        <el-link href="#" target="_blank">
          Стать партнером EazyFood
        </el-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  setup() {
    const user = reactive({
      phone: '',
      password: ''
    });

    function submit() {
      console.log(user.phone, user.password);
    }

    return { user, submit };
  }
});
</script>

<style lang="scss" scoped>
.logo {
  margin-bottom: 50px;
  &-eazy {
    font-weight: 600;
    font-size: 64px;
    line-height: 76px;
    color: #09b44d;
  }
  &-food {
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    color: #09b44d;
  }
}
.auth-page {
  height: 100vh;
  &__wrapper {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: inherit;
    width: 100%;
    max-width: 610px;
    margin: 0 auto;
  }
}
.auth-page-form {
  width: 100%;
  max-width: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: auto;
}
.auth-page-footer {
  margin-top: auto;
  width: 100%;
  text-align: center;
  padding-bottom: 40px;
}
</style>
