<template>
  <div class="login">
    <div class="login-panel">
      <h2>搜也后台管理系统</h2>
      <loginPanelView />
    </div>
  </div>
</template>

<script setup>
import loginPanelView from '@/views/login/components/loginPanelView.vue';
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-image: url(../../assets/images/login-bg.svg);
}
</style>
