<template>
  <Layout class-prefix="xxx">
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
    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text" placeholder="在这里添加备注">
      </label>
    </div>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
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
  </Layout>
</template>

<script>

export default {
  name: "Money"
}
</script>

<style>
.xxx-content{
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
<style lang="scss" scoped>
@import '~@/assets/styles/helper.scss';
.tags {
  font-size: 14px;
  padding:16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  > .current{
       display: flex;
     flex-wrap: wrap-reverse;//!!!!!!!!!!!!!!!!!!!!!!!可能有问题
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
.types{
  background: #c4c4c4;
  display: flex;
  font-size: 18px;
  > li{
    width:50%;
    text-align: center;
    line-height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .selected::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width:100%;
    height:4px;
    background:black ;
  }

}
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