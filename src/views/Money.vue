<template>
  <Layout classPrefix="xxx">
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <Notes @update:value="onUpdateNotes"/>
    <Types :value.sync="record.type" @update:value="onUpdateType"/>
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import Types from '@/components/Money/Types.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import model from '@/model';


@Component({
  components: {NumberPad, Types, Notes, Tags}
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  record: recordItem = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0,
    createAt: undefined
  };
  recordList: recordItem[] = model.fetch();

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  };

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateType(value: string) {
    this.record.type = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    const recordClone = model.clone(this.record);
    recordClone.createAt = new Date();
    this.recordList.push(recordClone);
  }
  @Watch('recordList')
  onRecordListChange(){
    model.save(this.recordList);
  }
}
</script>

<style lang="scss">
.xxx-content {
  display: flex;
  flex-direction: column;
  //justify-content: flex-end;
}
</style>
