<template>
  <div class="box">
    <h2>子组件 sub</h2>
    从父组件中获取的值:{{$store.state.num}}
    <br>
    <button @click="hClick">值-1</button>
    <button @click="hClickN">值-n</button>
  </div>
</template>
<style lang="css">
  .box{
    border:1px solid #ccc;
    width:200px;
    padding:5px;
    margin: 20px;
  }
</style>
<script>
// 映射使用
// 导入mapState
import {mapState} from 'vuex'

// 映射改值
import {mapMutations} from 'vuex'
export default {
  name: 'SubItem',
  // 数据映射为**计算属性**
  computed:{
    ...mapState(['num'])
  },
  methods:{
    hClick() {
      // 直接获取，不能修改
      // this.$store.state.num--

      // 直接使用mutation-改值
      // this.$store.commit('mSubNum1')

      // 映射使用mutation-改值
      // this.mSubNum1()
      this.newFuncName()

    },
    hClickN() {
      const n = Math.ceil(Math.random() *10)
      // this.$store.commit('mSubNumN',n)

      this.mSubNumN(n)
    },
    // ...mapMutations(['mSubNum1','mSubNumN'])
    // 可以改名字
    ...mapMutations([{newFuncName:'mSubNum1'},'mSubNumN'])
  }
}
</script>