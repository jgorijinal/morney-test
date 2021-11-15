<template>
  <Layout class-prefix="xxx">
    <Tags/>
    <Notes/>
    <Types/>
    <NumberPad/>
  </Layout>
</template>

<script>

import Tags from "@/components/Money/Tags";
import Notes from "@/components/Money/Notes";
import Types from "@/components/Money/Types";
import NumberPad from "@/components/Money/NumberPad";
export default {
  name: "Money",
  components: {NumberPad, Types, Notes, Tags}
}
</script>

<style>
.xxx-content{
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
