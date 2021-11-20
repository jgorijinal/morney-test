<template>
  <div>
    <label class="formItem">
      <span class="name">{{ fieldName }}</span>
      <input @input="onValueChanged($event.target.value)" :value="value" type="text" :placeholder="placeholder">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {
  @Prop({default: ''}) readonly value!: string;
// onInput(event:InputEvent){
//   const inputValue = (event.target as HTMLInputElement).value
//   this.value = inputValue
// }
 // @Watch('value') //侦听 this.value,又$emit
  onValueChanged(value: string) {
      this.$emit('update:value', value);
  }

  @Prop() fieldName!: string;
  @Prop() placeholder!: string;
}
</script>

<style lang="scss" scoped>
.formItem {
  font-size: 16px;
  display: flex;
  padding-left: 16px;
  align-items: center;

  .name {

  }

  input {
    height: 48px;
    padding-left: 16px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>