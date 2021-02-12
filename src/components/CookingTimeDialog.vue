<template>
  <el-dialog
    v-bind="$attrs"
    title="Время готовки в минутах:"
    width="358px"
    center
    lock-scroll
    custom-class="cooking-time-dialog"
  >
    <el-form>
      <el-form-item>
        <el-input-number
          v-model="cookingTime"
          :min="1"
          class="select-time__input"
        ></el-input-number>
      </el-form-item>
      <div class="select-time">
        <div class="select-time__group">
          <el-button @click="cookingTime = 10">10</el-button>
          <el-button @click="cookingTime = 15">15</el-button>
          <el-button @click="cookingTime = 20">20</el-button>
        </div>
        <div class="select-time__group">
          <el-button @click="cookingTime = 30">30</el-button>
          <el-button @click="cookingTime = 40">40</el-button>
          <el-button @click="cookingTime = 60">60</el-button>
        </div>
      </div>
    </el-form>
    <template #footer>
      <span class="select-time-footer">
        <el-button @click="$emit('close')">Отменить</el-button>
        <el-button @click="selectedCookingTime" type="success">
          Готово
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ElMessage } from 'element-plus';

export default defineComponent({
  setup(_, { emit }) {
    const cookingTime = ref(30);
    const selectedCookingTime = () => {
      if (!cookingTime.value) {
        ElMessage.error('Укажите время приготовления');
        return;
      }
      emit('close');
      emit('selectedCookingTime', cookingTime.value);
      console.log(cookingTime.value);
    };
    return { cookingTime, selectedCookingTime };
  },
  name: 'CookingTimeDialog'
});
</script>

<style lang="scss" scoped>
.cooking-time-dialog {
  border-radius: 12px;
  padding: 35px;
}
.select-time {
  &__input {
    width: 100%;
  }
  &__group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:first-child {
      margin-bottom: 26px;
    }
    button {
      width: 75px;
      background: #ffffff;
      border: 1px solid #f1f1f1;
      border-radius: 6px;
      font-size: 15px;
      line-height: 20px;
      color: #000;
    }
  }
}
.select-time-footer {
  button {
    font-size: 18px;
    line-height: 24px;
    border-radius: 6px;
    width: 138px;
    font-weight: bold;
  }
}
</style>
