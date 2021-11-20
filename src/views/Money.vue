<template>
  <Layout classPrefix="xxx">
    {{record}}
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <div class="notes">
      <FormItem field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateNotes"/>
    </div>
    <Types :value.sync="record.type" @update:value="onUpdateType"/>
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import Tags from '@/components/Money/Tags.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Types from '@/components/Money/Types.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const tagList = tagListModel.fetch()

@Component({
  components: {NumberPad, Types, FormItem, Tags}
})
export default class Money extends Vue {
  tags = tagList
  record: RecordItem = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0,
    createAt: undefined
  };
  recordList =  recordListModel.fetch();

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
    recordListModel.create(this.record)
  }
  @Watch('recordList')
  onRecordListChange(){
    recordListModel.save();
  }
}
</script>

<style lang="scss">
.xxx-content {
  display: flex;
  flex-direction: column;
  //justify-content: flex-end;
}
.notes{
  padding:12px 0 ;
}
</style>
