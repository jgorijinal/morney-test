<template>
  <Layout class-prefix="xxx">
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <Notes @update:value="onUpdateNotes"/>
    <Types :value.sync="record.type" @update:value="onUpdateType"/>
    <NumberPad @update:value="onUpdateAmount"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import Types from "@/components/Money/Types.vue";
import NumberPad from "@/components/Money/NumberPad.vue";

type Record = {   // type关键字 声明'类型'
  tags:string[],
  notes:string,
  type:string,
  amount:number
}
@Component({
  components:{NumberPad, Types, Notes, Tags}
})
export default class Money extends Vue{
  tags = ['衣','食','住','行']
  record:Record={
    tags:[],
    notes:'',
    type:'-',
    amount:0
  }

  onUpdateTags(value:string[]){
    this.record.tags = value
  };
  onUpdateNotes(value:string){
    this.record.notes = value
  }
  onUpdateType(value:string){
    this.record.type = value
  }
  onUpdateAmount(value:string){
    this.record.amount = parseFloat(value)
  }
}
</script>

<style>
.xxx-content{
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
