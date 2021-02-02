<template>
  <MainLayoutVue v-if="false" />
  <TemplateLayoutVue v-if="false" />
  <AuthPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLayoutVue from './layouts/MainLayout.vue';
import TemplateLayoutVue from './layouts/TemplateLayout.vue';
import AuthPage from './views/AuthPage.vue';
export default defineComponent({
  components: {
    MainLayoutVue,
    TemplateLayoutVue,
    AuthPage
  },
  name: 'App'
});
</script>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Uni Neue';
}
</style>
