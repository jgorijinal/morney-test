<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
      <ol>
        <li v-for="(group,index) in groupList" :key="index">
          <h3 class="title">{{beautify(group.title)}} </h3>
          <ol>
            <li class="record"   v-for="item in group.items" :key="item.id">
              <span>{{tagString(item.tags)}}</span>
              <span class="notes">{{item.notes}}</span>
              <span>￥{{item.amount}}</span>
            </li>
          </ol>
        </li>
      </ol>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';
import dayjs from 'dayjs'
import clone from '@/lib/clone';

const now = new Date()
const oneDay = 86400*1000
@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  name = 'statistics';
  type = '-';
  typeList = recordTypeList;


  beautify(string:string){
    if(dayjs(string).isSame(now,'day')){
      return '今天'
    }else if(dayjs(string).isSame(now.valueOf() - oneDay,'day')){
      return  '昨天'
    }else if(dayjs(string).isSame(now.valueOf() - 2*oneDay,'day')){
      return '前天'
    }else {
      return dayjs(string).format('YYYY年MM月DD日')
    }
  }
  beforeCreate() {
    this.$store.commit('fetchRecords');
  }

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get groupList() {
    const recordList = this.recordList;
    type HashTableValue = {title:string,items:RecordItem[]};

   const newList = clone(recordList).sort((a,b)=>dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf())
    const result:HashTableValue[] = [{title:dayjs(newList[0].createAt).format('YYYY-MM-DD'),items:[newList[0]]}]
    for (let i = 1;i<newList.length;i++){
      const current = newList[i]
      const last = result[result.length - 1]
      if(dayjs(last.title).isSame(dayjs(current.createAt),'day')){
          last.items.push(current)
      }else {
        result.push({title:dayjs(current.createAt).format('YYYY-MM-DD'),items:[current]})
      }

    }
    return result
  }
  tagString(tags:Tag[]){
    return tags.length === 0 ? '无' : tags.join(',')
  }
}
</script>

<style scoped lang="scss">
::v-deep .type-tabs-item {
  background: #c4c4c4;
  &.selected {
    background: white;
    &::after {
      display: none;
    }
  }
}
::v-deep .interval-tabs {
  height: 48px;
}
%item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:8px 16px;
  line-height: 24px;
}
.title{
  @extend %item
}
.record{
  background: white;
  @extend %item
}
.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>