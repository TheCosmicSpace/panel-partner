<template>
  <el-container>
    <el-aside class="options-bar">
      <div class="options-bar__item">Заведения</div>
      <div class="options-bar__item">Заведения</div>
      <div class="options-bar__item">Заведения</div>
    </el-aside>
    <el-main class="working-hours">
      <!-- working-hours-scheme -->
      <div class="working-hours-scheme">
        <h3 class="working-hours__title">Стандартный режим работы</h3>
        <el-table :data="tableData" class="working-hours-scheme-table">
          <el-table-column prop="date" label="Дни недели"></el-table-column>
          <el-table-column prop="name" label="Время работы"></el-table-column>
        </el-table>
        <el-button class="working-hours-scheme__btn">Изменить</el-button>
      </div>
      <!-- working-hours-scheme -->
      <div class="working-hours-scheme">
        <h3 class="working-hours__title">Режим работы в праздничные дни</h3>
        <el-table :data="tableData" class="working-hours-scheme-table">
          <el-table-column prop="date" label="Промежуток"></el-table-column>
          <el-table-column prop="name" label="Время работы"></el-table-column>
          <el-table-column fixed="right" width="80">
            <template #default="scope">
              <el-button type="text" size="small">
                <i class="el-icon-edit"></i>
              </el-button>
              <el-button type="text" size="small">
                <i class="el-icon-delete"></i>
              </el-button>
              <template v-if="false">{{ scope }}</template>
            </template>
          </el-table-column>
        </el-table>
        <el-button class="working-hours-scheme__btn">
          Добавить промежуток
        </el-button>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const tableData = reactive([
      {
        date: 'ПН, ВТ, СР, ЧТ, ПТ',
        name: '8:00 - 19:00'
      },
      {
        date: 'СБ',
        name: '8:00 - 17:00'
      },
      {
        date: 'ВС',
        name: 'Выходной'
      }
    ]);
    return { tableData };
  }
});
</script>

<style lang="scss" scoped>
// Option Bar
.options-bar {
  width: 320px;
  height: 100vh;
  border: 2px solid #f1f1f1;

  &__item {
    padding: 20px 25px;
    font-size: 18px;
    line-height: 24px;
    border-bottom: 2px solid #f1f1f1;
  }
}

// Working Hours
.working-hours {
  height: 100vh;
  padding: 0 35px;
  &__title {
    font-weight: bold;
    font-size: 19px;
    line-height: 26px;
  }
}

.working-hours-scheme {
  margin-top: 35px;
  &__btn {
    margin-top: 15px;
  }
}

.working-hours-scheme-table {
  width: 100%;
  .el-table thead {
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    color: #8e8e8e;
  }
  .el-table {
    font-weight: normal;
    font-size: 19px;
    line-height: 26px;
    color: #000;
  }
}
</style>
