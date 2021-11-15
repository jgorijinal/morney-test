<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav";
export  default {
  components: {Nav}
}
</script>

<style lang="scss">
@import '~@/assets/styles/helper.scss';
@import '~@/assets/styles/reset.scss';
body {
  font-family: $font-hei;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
}

</style>
