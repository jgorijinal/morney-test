<template>
  <div class="nav-wrapper">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot></slot>
    </div>
    <div>
      <Nav/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  props:['classPrefix']
}
</script>

<style lang="scss">
.xxx { //
  border: 1px solid red;
}
.nav-wrapper{
  overflow: auto;
}
</style>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  height:100vh;
}
.content {
  flex-grow: 1;
  overflow: auto;
}
</style>