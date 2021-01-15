<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    {{ typeof doubleCounter }}
    <button @click="handleCl">ads</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  setup() {
    return {};
  },
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {},
  computed: {}
});
</script>
