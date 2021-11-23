<template>
  <Layout classPrefix="xxx">
    {{record}}
    <Tags/>
    <div class="notes">
      <FormItem field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateNotes"/>
    </div>
    <Tabs :data-source="recordTypeList" :value.sync="record.type"></Tabs>
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tags from '@/components/Money/Tags.vue';
import FormItem from '@/components/Money/FormItem.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';


@Component({
  components: {Tabs, NumberPad, FormItem, Tags},
})

export default class Money extends Vue {
  recordTypeList= recordTypeList
  get recordList(){
    return this.$store.state.recordList
  }
  record: RecordItem = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0,
    createAt: undefined
  };
  created(){
    this.$store.commit('fetchRecords')
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  // onUpdateType(value: string) {
  //   this.record.type = value;
  // }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    this.$store.commit('createRecord',(this.record))
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
