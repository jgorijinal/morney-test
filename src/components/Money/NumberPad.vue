<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button>+</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button>-</button>
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="inputContent">.</button>
      <button @click="inputContent">0</button>
      <button @click="remove" >
        <Icon name="delete"/>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  output: string = '0';

  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const input = button.textContent as string;
    if (this.output.length === 16) {
      return;
    }
    if (this.output === '0') {
      if ('0123456789'.indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf('.') >= 0) {
      if (input === '.') {
        return;
      }
    }
    this.output += input;
  };

  remove() {
    if(this.output.length === 1){
      this.output = '0'
    }else {
      this.output = this.output.slice(0, -1);
    }

  }
  ok(){
    if(this.output.indexOf('.') === this.output.length-1){
      this.output = this.output.slice(0,this.output.indexOf('.'))
    }
   this.$emit('update:value',this.output)
    this.$emit('submit',this.output)
    this.output = '0'
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/helper.scss';

.numberPad {
  .output {
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    min-height: 78px;
    @extend %innerShadow;
  }

  .buttons {
    font-size: 18px;
    @extend %clearfix;

    > button {
      width: 25%;
      height: 64px;
      background: whitesmoke;
      border: 0.2px solid white;
      float: left;
    }

    .ok {
      height: 64*2px;
      float: right;
    }
  }
}
</style>