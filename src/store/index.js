// 用来创建vuex的地方

import Vue from 'vue'
import Vuex from 'vuex'
// 由于Vuex是vue插件，还是以vue插件的方式挂载在vue上
// 1.以插件的方式挂载在vue上
// Vue.use(vue插件)  ---------- Vue.use(VueRouter)
Vue.use(Vuex)

// 2.创建Vuex.Store的实例
// Vuex.Store在这里当作构造器
const store = new Vuex.Store({
    // 各种配置项
    // （1）state。 就相当于vue组件中的data。它用来存放整个vue项目中公共的数据
    //  这个数据，在所有的vue组件中都可以访问到
    state:{
        num:1,
        msg:'hellow vuex'
    },
    // 定义mutations
    // 它们是一个一个的函数，用来对state中的数据进行修改
    mutations:{
        // 参数1 表示当前的state，在调用mutation会自动传入
        mAddNum1(state) {
            state.num = state.num +1
        },
        // 参数2 是可选的
        // 下面的参数中m是收不到值的,传个数组或者对象
        // mAddNumN(state,n,m)
        mAddNumN(state,n) {
            state.num = state.num +n
        },
        mSubNum1(state) {
            state.num = state.num -1
        },
        mSubNumN(state,n) {
            state.num = state.num -n
        },
    }
})

// 3.导出
export default store