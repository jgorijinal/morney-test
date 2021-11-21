<template>
 <Layout>
   <div class="navBar">
     <Icon class="left" name="left" @click="goBack"></Icon>
     <span class="title">编辑页面</span>
     <span class="right"></span>
   </div>
   <div class="form-wrapper">
   <FormItem :value="tag.name" @update:value="updateTag" field-name="标签名" placeholder="请输入标签名(不超过4个汉字)"/>
   </div>
   <div class="button-wrapper">
     <Button @click="remove">删除标签</Button>
   </div>

 </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';
@Component({
  components: {Button, FormItem}
})
export default class EditLabel extends Vue {
  tag?: { id: string, name: string } = undefined

  created() {
    const tag = window.findTag(this.$route.params.id)
    if (tag) {
      this.tag = tag
    } else {
      this.$router.replace('/404')
    }
  }

  updateTag(name: string) {
    if (this.tag) {
      window.updateTag(this.tag.id, name)
    }
  }

  remove() {
    if (this.tag) {
      if (window.removeTag(this.tag.id)) {
        window.alert('删除成功')
        this.$router.back()
      } else {
        window.alert('删除失败')

      }
    }
  }

  goBack() {
    this.$router.back()
  }
}
</script>

<style lang="scss" scoped>
.button-wrapper{
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
.navBar{
  text-align: center;
  background: white;
  display: flex;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  .left{
    width: 20px;
    height:20px;
  }
  .title{

  }
  .right{
    width: 20px;
    height:20px;
  }
}
.form-wrapper{
  background: white;
  margin-top: 8px;
}
</style>