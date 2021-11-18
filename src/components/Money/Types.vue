<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'"@click="selectType('+')" >收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  type:string = '-' // -表示支出 ,+表示收入
  selectType(type:string){
  this.type = type
  }
  @Watch('type')
  onTypeChanged(value: string, oldValue: string) {
    this.$emit('update:value',value)
  }
}
</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  font-size: 18px;

  > li {
    width: 50%;
    text-align: center;
    line-height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .selected::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: black;
  }

}
</style>