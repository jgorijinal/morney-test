<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag"
          :class="selectedTags.indexOf(tag)>=0 && 'selected'"
           @click="toggle(tag)">
        {{tag}}
      </li>
    </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">

 import Vue from "vue";
 import {Component,Prop} from "vue-property-decorator";

@Component
 export default class Tags extends Vue{
  @Prop() dataSource: string[] | undefined
  selectedTags:string[] = []
  toggle(tag:string){
    const index = this.selectedTags.indexOf(tag)
    if(index >= 0){
      this.selectedTags.splice(index,1)
    }else{
      this.selectedTags.push(tag)
    }

  }
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
      &.selected {
        background: #d7d768;
      }
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