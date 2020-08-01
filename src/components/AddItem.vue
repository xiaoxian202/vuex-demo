<template>
  <div class="box">
    <h2>子组件 add</h2>
    <!-- 1-1.直接使用 -->
    从父组件中获取的值:{{$store.state.num}}
    <br>
    {{abc}}
    <button @click="hClick">值+1</button>
    <button @click="hClickN">值+n</button>
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
//1-2. 通过映射的方式去获取vuex的数据,  获取数据不能修改
// es6中的按需导入
// vuex中有许多的属性，其中一个叫mapState
// 步骤一：导入
import {mapState} from 'vuex'
// mapState()是一个函数，它接收一个数据，返回一个对象
// const result = mapState(['msg'])
// console.log(result);
// computed:{
//   ...mapState(['msg'])
// }

// 导入
import {mapMutations} from 'vuex'
// mapMutations 是一个函数，在vuex中定义的。
// mapMutations(['mAdd1', 'mAddN'])的返回值是一个对象
// 这个对象类似于{mAdd1:function(){}, mAddN:function(){}}
export default {
  name: 'AddItem',
  // 步骤二：数据映射为**计算属性**
  computed:{
    // ...表示把result对象中的键值对展开放到这里面
    // ...result  // 对象前的...，相当于就是展开
    ...mapState(['num']),
    
    // 也可以有自己的计算机属性
    abc() {
      return "adc"
    }
  },
  methods:{
    hClick() {
      // 2.1.直接修改，不推荐
      // this.$store.state.num++

      // 2.2 通过mutation修改，实现+1功能-直接使用
      // this.$store.commit('mAddNum1')

      this.mAddNum1()
    },
    hClickN() {
      // 通过mutation修改，实现+n功能
      const n = Math.ceil(Math.random() *10)
      // this.$store.commit('mAddNumN',n)

      this.mAddNumN(n)
    },
    // 把vuex中定义的mutations  mAddNum1复制到当前的methods
    //2.3 映射使用-mutation修改
    ...mapMutations(['mAddNum1','mAddNumN'])
  }
}
</script>