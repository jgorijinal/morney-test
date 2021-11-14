<template>
  <Layout>
    <div class="tag">
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
    <div class="notes">
      <label>
        <span class="name">备注</span>
        <input type="text" placeholder="在这里添加备注">
      </label>
    </div>
    <div>
      <ul class="types">
        <li><button>支出</button></li>
        <li><button>收入</button></li>
      </ul>
    </div>
    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>Del</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
        <button>清空</button>
        <button>OK</button>
      </div>
    </div>
  </Layout>
</template>

<script>

export default {
  name: "Money"
}
</script>

<style scoped>

</style>