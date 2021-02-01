<template>
  <MainLayoutVue v-if="false" />
  <TemplateLayoutVue v-if="false" />
  <AuthVue />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLayoutVue from './layouts/MainLayout.vue';
import TemplateLayoutVue from './layouts/TemplateLayout.vue';
import AuthVue from './views/Auth.vue';
export default defineComponent({
  components: {
    MainLayoutVue,
    TemplateLayoutVue,
    AuthVue
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
