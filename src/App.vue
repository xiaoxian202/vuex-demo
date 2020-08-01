<template>
  <div id="app">
    <h1>根组件</h1>
    {{$store.state.num}}
    <input type="text" v-model="$store.state.num">
    <add-item></add-item>
    <hr>
    <sub-item></sub-item>
  </div>
</template>

<script>
import AddItem from './components/AddItem.vue'
import SubItem from './components/SubItem.vue'

export default {
  name: 'app',
  // 自己不需要定义数据了，直接引用vuex中的数据
  // data:function(){
  //   return {
  //     num:1
  //   }
  // },
  components: {
    AddItem,
    SubItem
  },
}
</script>

<style>
#app {
  width: 300px;
  margin: 20px auto;
  border:1px solid #ccc;
  padding:4px;
}
</style>
