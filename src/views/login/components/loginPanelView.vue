<template>
  <div class="login-panel">
    <el-tabs type="border-card" class="demo-tabs" v-model="currentTab">
      <el-tab-pane name="account-login">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span class="custom-tabs-text">账号登录</span>
          </span>
        </template>
        <accountLoginView ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone-login">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span class="custom-tabs-text">手机登录</span>
          </span>
        </template>
        <phoneLoginView ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <el-button
      style="width: 100%; margin-top: 20px"
      type="primary"
      @click="submitForm"
    >
      立即登录
    </el-button>
  </div>
</template>

<script setup>
import accountLoginView from '@/views/login/components/accountLoginView.vue';
import phoneLoginView from '@/views/login/components/phoneLoginView.vue';
import { ref, watch } from 'vue';

const currentTab = ref('account-login');
const accountRef = ref();
const phoneRef = ref();
async function submitForm() {
  // if (!accountRef.value.ruleFormRef.value) return;
  // await accountRef.value.ruleFormRef.value.validate((valid, fields) => {
  //   if (valid) {
  //     console.log('submit!');
  //   } else {
  //     console.log('error submit!', fields);
  //   }
  // });
  console.log(accountRef.value);
}
watch(
  () => accountRef.value,
  newVal => {
    if (newVal) {
      console.log(newVal.ruleFormRef.value);
    }
  },
  {
    immediate: true,
    deep: true
  }
);
</script>

<style lang="less" scoped>
.login-panel {
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  .custom-tabs-label {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .custom-tabs-text {
    margin-left: 10px;
  }
}
</style>
