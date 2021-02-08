<template>
  <template class="app-header">
    <AppSelectTab />
    <AppNavMenu />
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppNavMenu from './AppNavMenu.vue';
import AppSelectTab from './AppSelectTab.vue';

export default defineComponent({
  setup() {
    return {};
  },
  name: 'AppHeader',
  components: {
    AppNavMenu,
    AppSelectTab
  }
});
</script>

<style lang="scss" scoped>
.app-header {
  box-shadow: 0px 0px 31px rgba(0, 0, 0, 0.13);
  padding: 0;
  display: flex;
  align-items: center;
}
</style>
