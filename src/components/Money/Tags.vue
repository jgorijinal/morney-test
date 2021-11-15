<template>
  <div class="tags">
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "tags"
}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding:16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  > .current{
    display: flex;
    flex-wrap: wrap-reverse;
    > li{
      background: #D9D9D9;
      $height:24px;
      line-height:$height ;
      border-radius:$height/2;
      padding:0 20px;
      text-align:center;
      margin-right: 12px;
      margin-top: 5px;
    }
  }
  > .new {
    padding-top:16px;
    button{
      background: transparent;
      border:none;
      border-bottom: 1px solid;
      padding:0 4px;
      color:#999;
    }
  }
}
</style>