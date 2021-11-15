<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里添加备注">
    </label>
  </div>
</template>

<script>
export default {
  name: "notes"
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background:#f5f5f5 ;
  display: flex;
  padding-left:16px;
  align-items: center;
  .name{

  }
  input{
    height:64px;
    padding-left: 16px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right:16px;
  }
}
</style>