<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <div>
      <Nav/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout"
}
</script>

<style scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  height:100vh;
}
.content {
  border: 1px solid blue;
  flex-grow: 1;
  overflow: auto;
}
</style>