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
      <button @click="create">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">

 import Vue from "vue";
 import {Component,Prop} from "vue-property-decorator";

@Component
 export default class Tags extends Vue{
  @Prop() readonly dataSource: string[] | undefined  //为什么readonly: dataSource是外部传来的数据 ,我不能更改
  selectedTags:string[] = []
  toggle(tag:string){
    const index = this.selectedTags.indexOf(tag)
    if(index >= 0){
      this.selectedTags.splice(index,1)
    }else{
      this.selectedTags.push(tag)
    }
   this.$emit('update:value',this.selectedTags)
  }
  create(){
    const newTag = window.prompt('请输入新的标签:')
    if(newTag === ''){
      window.alert('标签名不能为空')
    }else if(this.dataSource){
      this.$emit('update:dataSource',[...this.dataSource,newTag]) //组件不能更改props外部的数据 所以要用外部家.sync,内部用$emit出发这个事件
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