<template>
  <el-menu
    :default-active="activeIndex"
    @select="handleSelect"
    class="el-menu-demo"
    mode="horizontal"
    text-color="#000"
    active-text-color="#09B44D"
  >
    <el-menu-item index="1">Заказы</el-menu-item>
    <el-menu-item index="2">История</el-menu-item>
    <el-menu-item index="3">Каталог</el-menu-item>
    <el-menu-item index="4">Профиль компании</el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  setup() {
    const router = useRouter();
    const activeIndex = ref('1');

    const RoutesMap = new Map<string, string>([
      ['1', '/'],
      ['2', '/history'],
      ['3', '/catalog'],
      ['4', '/company-profile']
    ]);

    const handleSelect = (key: string, keyPath: string[]): void => {
      const routePath: string | undefined = RoutesMap.get(key);
      if (!routePath) return;
      activeIndex.value = key;
      router.push(routePath);
    };

    return { activeIndex, handleSelect };
  }
});
</script>

<style lang="scss" scoped>
.el-menu-demo {
  font-weight: bold;
  font-size: 16px;
}
</style>
