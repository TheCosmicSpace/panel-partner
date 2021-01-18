<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    {{ typeof doubleCounter }}
    {{ doubleCounter }}
    <button @click="handleCl">ads</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  setup() {
    const store = useStore();
    console.log(store);

    const doubleCounter = computed(() => store.state.count);
    return { doubleCounter };
  },
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {},
  computed: {}
});
</script>
