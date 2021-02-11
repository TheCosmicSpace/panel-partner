<template>
  <el-skeleton v-bind="$attrs">
    <template #template>
      <div
        style="padding: 14px; display: flex; align-items: center; justify-content: space-between;"
      >
        <div style="width: 80%;">
          <el-skeleton-item variant="h3" style="width: 70%;" />
          <el-skeleton-item variant="text" style="width: 90%;" />
        </div>
        <div>
          <el-skeleton-item variant="circle" width="48px" height="48px" />
        </div>
      </div>
    </template>
  </el-skeleton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OrderSkeleton',
  functional: true
});
</script>

<style scoped></style>
