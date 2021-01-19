<template>
  <MainLayoutVue v-if="false" />
  <TemplateLayoutVue />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLayoutVue from './layouts/MainLayout.vue';
import TemplateLayoutVue from './layouts/TemplateLayout.vue';
export default defineComponent({
  components: {
    MainLayoutVue,
    TemplateLayoutVue
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
  font-family: 'Uni Neue';
}
</style>
