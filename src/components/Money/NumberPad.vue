<template>
  <div class="numberPad">
    <div class="output">100</div>
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">OK</button>
      <button>.</button>
      <button>0</button>
      <button><Icon name="delete"/></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NumberPad"
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/helper.scss';
.numberPad{
  .output{
    font-size: 36px;
    font-family: Consolas,monospace;
    padding: 9px 16px;
    text-align: right;
    @extend %innerShadow;
  }
  .buttons{
    font-size: 18px;
    @extend %clearfix;
    > button{
      width:25%;
      height:64px;
      background: whitesmoke;
      border:0.2px solid white;
      float: left;
    }
    .ok{
      height:64*2px;
      float: right;
    }
  }
}
</style>