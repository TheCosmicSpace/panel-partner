<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useStore } from '@/store';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    console.log(store.getters.isAuthUser);
    if (!store.getters.isAuthUser) router.push({ name: 'AuthPage' });
    return {};
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
