<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    type:{{ type }}
    <hr>
    interval:{{ interval }}
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import intervalList from "@/constants/intervalList";
import recordTypeList from '@/constants/recordTypeList';
@Component({
  components:{Tabs}
})
export default class Statistics extends Vue {
  name = 'statistics';
  type = '-';
  interval = 'day';
  typeList = recordTypeList
  intervalList =intervalList
}
</script>

<style scoped lang="scss">
@import '~@/assets/styles/helper.scss';
::v-deep .type-tabs-item {
  background: white;
  @extend %outerShadow;
  &.selected {
    background: #c4c4c4;

    &::after {
      display: none;
    }
  }
}
</style>