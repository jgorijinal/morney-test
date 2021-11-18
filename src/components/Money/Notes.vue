<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input @input="onInput" :value="value" type="text" placeholder="在这里添加备注">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component,Watch} from 'vue-property-decorator';
@Component
export default class Types extends Vue {
value:string = ''
onInput(event:InputEvent){
  const inputValue = (event.target as HTMLInputElement).value
  this.value = inputValue
}
  @Watch('value') //侦听 this.value,又$emit
  onValueChanged(value: string, oldValue: string) {
    this.$emit('update:value',value)
  }

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
    height:48px;
    padding-left: 16px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right:16px;
  }
}
</style>