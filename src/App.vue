<template>
  <div class="box"></div>

  <RouterView />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less">
.box {
  color: @xtxColor;
}
</style>
