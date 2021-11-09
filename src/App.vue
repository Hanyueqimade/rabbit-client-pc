<template>
  <div id="nav">
    {{ $store.state.user }}
    <button @click="$store.commit('user/setUser', { token: 'test' })">
      按钮
    </button>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
