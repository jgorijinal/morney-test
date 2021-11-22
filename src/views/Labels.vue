<template>
  <Layout>
    <div class="tags">
      <router-link :to="`/labels/edit/${tag.id}`" class="tag" v-for="tag in tags" :key="tag.id">
        <span>{{tag.name }}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="newTag">
      <Button @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({

})
export default class Labels extends Vue {
  get tags(){
    return this.$store.state.tagList
  }
  beforeCreate(){
    this.$store.commit('fetchTags')
  }
  createTag() {
    const newTag = window.prompt('请输入新的标签:');
    if (newTag === '') {
      window.alert('标签名不能为空');
    } else if (newTag === null) {
      return;
    } else if (newTag!.length > 4) {
      window.alert('标签名过长(不超过4个汉字),请重新输入');
    } else {
      this.$store.commit('createTag',newTag)
    }
  }

}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 16px;
  background: white;

  > .tag {
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
 text-align: center;

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