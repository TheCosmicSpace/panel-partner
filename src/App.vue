<template>
  <MainLayoutVue />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLayoutVue from './layouts/MainLayout.vue';
export default defineComponent({
  components: {
    MainLayoutVue
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
