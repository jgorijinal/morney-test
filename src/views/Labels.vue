<template>
  <Layout>
    <ul class="tags">
      <li v-for="tag in tags" :key="tag.id"><span>{{ tag.name }}</span>
        <Icon name="right"/>
      </li>

    </ul>
    <div class="newTag">
      <button @click="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';

tagListModel.fetch();
@Component
export default class Labels extends Vue {
  tags = tagListModel.data;

  createTag() {
    const name = window.prompt('请输入标签名:');
    if (name) {
      const message = tagListModel.create(name);
      if (message === 'duplicated') {
        window.alert('标签名已存在');
      } else if (message === 'success') {
        window.alert('新的标签添加成功');
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 16px;

  > li {
    min-height: 44px;
    box-shadow: inset 0px -0.5px 0px #BCBBC1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    margin-left: 12px;
  }
}

.newTag {
  display: flex;
  justify-content: center;

  button {
    border: none;
    color: #FFFFFF;
    padding: 9px 15px;
    background: #767676;
    margin-top: 54px;
    margin-bottom: 54px;
    border-radius: 5px;
  }
}
</style>