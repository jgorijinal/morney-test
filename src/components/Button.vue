<template>
  <div>
    <button class="button" @click="$emit('click',$event)"><slot/></button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Button extends Vue {

}
</script>

<style lang="scss" scoped>
.button {
  border: none;
  color: #FFFFFF;
  padding: 9px 15px;
  background: #767676;
  //margin-top: 54px;
  //margin-bottom: 54px;
  border-radius: 5px;
}
</style>