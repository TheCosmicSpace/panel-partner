<template>
  <div class="auth-page">
    <div class="auth-page__wrapper">
      <!-- Sign Up Form -->
      <el-form
        v-if="authState === 'signup'"
        @submit.prevent="submitSignUp"
        :model="user"
        status-icon
        class="auth-form"
      >
      </el-form>

      <!-- Verify Code Form -->
      <el-form
        v-if="authState === 'verifycode'"
        @submit.prevent="submitVerifyCode"
        :model="user"
        status-icon
        class="auth-form"
      >
        <div class="logo">
          <span class="logo-eazy">eazy</span>
          <span class="logo-food">food</span>
        </div>
        <p class="auth-form__verify-title">
          Введите код, который был отправлен на номер <br />
          <span class="auth-form__verify-phone">{{ user.phone }}</span>
        </p>
        <!-- Code Input -->
        <el-form-item>
          <el-input
            v-model="user.code"
            type="text"
            autocomplete="off"
            placeholder="Код из СМС"
          ></el-input>
        </el-form-item>

        <el-button
          @click="submitVerifyCode"
          type="success"
          class="auth-form__submit"
        >
          Далее
        </el-button>
        <el-button
          @click="cancelVerifyCode"
          class="auth-form__reset"
          type="text"
        >
          Отменить
        </el-button>
      </el-form>

      <!-- Sign In Form -->
      <el-form
        v-if="authState === 'signin'"
        @submit.prevent="submitSignIn"
        :model="user"
        status-icon
        class="auth-form"
      >
        <div class="logo">
          <span class="logo-eazy">eazy</span>
          <span class="logo-food">food</span>
        </div>
        <!-- Phone Input -->
        {{ user.phone }}
        <el-form-item>
          <el-input
            ref="phoneInput"
            class="phone-input"
            v-model="user.phone"
            type="phone"
            autocomplete="off"
            placeholder="Логин или номер телефона"
          ></el-input>
        </el-form-item>
        <!-- Password Input -->
        <el-form-item>
          <el-input
            v-model="user.password"
            type="password"
            autocomplete="off"
            placeholder="Пароль"
          ></el-input>
        </el-form-item>
        <el-button
          @click="submitSignIn"
          type="success"
          class="auth-form__submit"
        >
          Войти
        </el-button>
        <el-button class="auth-form__reset" type="text">
          Сбросить пароль
        </el-button>
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
import router from '@/router';
import { useStore } from '@/store';
import { ActionTypes } from '@/store/auth/action-types';
import { defineComponent, reactive, onMounted, ref } from 'vue';
import { useInputMask } from '../use/mask';
export default defineComponent({
  setup() {
    const store = useStore();
    console.log(store);
    const phoneInput = ref(null);
    const { createMask } = useInputMask('.phone-input > input', {
      mask: '+{7}(000)000-00-00'
    });
    const user = reactive({
      phone: 'aslan',
      password: '111111',
      code: ''
    });
    const authState = ref('signin');

    const submitSignUp = () => {
      console.log('signUpSubmit');
    };
    const submitSignIn = async () => {
      console.log('signInSubmit');

      // user.phone = user.phone.replace(/[a-zA-Z]/gi, '').slice(0, 16);
      // authState.value = 'verifycode';
      try {
        await store.dispatch(ActionTypes.AUTH_USER, {
          login: user.phone,
          password: user.password
        });
        router.push({ name: 'OrderPage' });
      } catch (e) {
        console.log(e);
      }
      console.log(user.phone);
    };
    const submitVerifyCode = () => {
      console.log('verifyCodeSubmit');
    };
    const cancelVerifyCode = () => {
      console.log('cancelVerifyCode');
      authState.value = 'signin';
      setTimeout(createMask, 0);
    };
    onMounted(() => {
      console.log(phoneInput.value);
      // createMask();
    });

    return {
      user,
      authState,
      submitSignIn,
      submitSignUp,
      submitVerifyCode,
      cancelVerifyCode,
      phoneInput
    };
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
.auth-form {
  width: 100%;
  max-width: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  &__submit {
    width: 100%;
    height: 58px;
    background: #09b44d;
    font-weight: bold;
    font-size: 18px;
    border-radius: 6px;
  }
  &__reset {
    color: #8e8e8e;
    font-size: 19px;
  }
  &__verify-title {
    font-size: 15px;
    margin-bottom: 15px;
  }
  &__verify-phone {
    font-weight: bold;
  }
}
.auth-page-footer {
  margin-top: auto;
  width: 100%;
  text-align: center;
  padding-bottom: 40px;
}
</style>
