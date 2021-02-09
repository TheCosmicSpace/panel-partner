<template>
  <div class="app-select-tab">
    <el-select
      v-model="selectedStores"
      multiple
      collapse-tags
      placeholder="Все заведения"
      class="app-select-tab__select"
    >
      <el-option
        v-for="store in stores"
        :key="store.value"
        :label="store.label"
        :value="store.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const stores = reactive([
      {
        value: 'Бейрут, Владикавказская, 11',
        label: 'Бейрут, Владикавказская, 11'
      },
      {
        value: 'Бейрут, Пожарского, 22',
        label: 'Бейрут, Пожарского, 22'
      },
      {
        value: 'Марракеш, Маркуса, 40',
        label: 'Марракеш, Маркуса, 40'
      },
      {
        value: 'Три толстяка, Бородинская, 8',
        label: 'Три толстяка, Бородинская, 8'
      },
      {
        value: 'Хиба, Тисовая улица, 3/4',
        label: 'Хиба, Тисовая улица, 3/4'
      }
    ]);
    const selectedStores = ref([]);
    return { stores, selectedStores };
  },
  name: 'AppSelectTab'
});
</script>

<style lang="scss">
.app-select-tab {
  .el-dropdown {
    width: 100%;
    height: 100%;
  }
  &__select {
    width: 100%;
    height: 100%;
    input.el-input__inner {
      height: 60px;
      border: none;
      font-weight: bold;
      font-size: 19px;
      font-family: 'Uni Neue';
      &::placeholder {
        color: #000000;
      }
    }
  }
  .el-select .el-select__tags .el-tag:first-child {
    background-color: transparent;
  }
  .el-select__tags-text {
    color: #000;
    font-size: 16px;
  }
}

.app-select-tab {
  width: 320px;
  height: 60px;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 2;
  border-right: 2px solid #f1f1f1;
}
</style>
