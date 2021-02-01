<template>
  <div class="home">
    {{ typeof doubleCounter }}
    {{ doubleCounter }}
    <button @click="handleCl">ads</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex'; // @ is an alias to /src

export default defineComponent({
  setup() {
    const store = useStore();
    console.log(store);

    const doubleCounter = computed(() => store.state.count);
    return { doubleCounter };
  },
  name: 'Home',
  components: {},
  methods: {},
  computed: {}
});
</script>
