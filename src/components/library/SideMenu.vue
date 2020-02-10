<template>
  <el-menu
    class="categories"
    default-active="0"
    @select="handleSelect"
    active-text-color="red">
    <el-menu-item index="0">
      <i class="el-icon-menu"></i>
      <span slot="title">全部</span>
    </el-menu-item>
    <el-menu-item v-for="category in categories" :key="category.id" :index="category.id.toString()">
      <i class="el-icon-menu"></i>
      <span slot="title">{{category.name}}</span>
    </el-menu-item>
    <!-- <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">流行</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-menu"></i>
      <span slot="title">文化</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-menu"></i>
      <span slot="title">生活</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-menu"></i>
      <span slot="title">经管</span>
    </el-menu-item>
    <el-menu-item index="6">
      <i class="el-icon-menu"></i>
      <span slot="title">科技</span>
    </el-menu-item> -->
  </el-menu>
</template>

<script>
  export default {
    name: 'SideMenu',
    data () {
      return {
        cid: '',
        categories:[],
      }
    },
    // mounted: function () {
    //   this.loadCategory()
    // },
    methods: {
      handleSelect (key, keyPath) {
        this.cid = key
        //emit，即触发，在子组件中使用 $emit 方法，即可触发在父组件中定义的事件。
        //而这个 handleSelect 方法，则由 @select 事件触发。
        this.$emit('indexSelect')
      },
      // loadCategory(){
      //   this.$axios.get('/category').then(resp=>{
      //     if (resp && resp.status === 200) {
      //       this.categories = resp.data
      //     }else{
      //       this.$message.warning('获取目录失败！')
      //     }
      //   })
      // }
    }
  }
</script>

<style scoped>
  .categories {
    position: fixed;
    margin-left: 50%;
    left: -600px;
    top: 100px;
    width: 150px;
  }
</style>

<!--
总结一下，当你通过点击选择侧边导航栏的一个标签后，发生了如下的动人的故事：
  触发 <el-menu> 组件的 @select 事件，执行 handleSelect 方法
  handleSelect 方法触发 indexSelect 事件，并把 key，即 <el-menu-item> 标签的 index 属性的值赋给 data 中定义的属性，即分类码。
  父组件收到指令，执行事件对应的方法，即 listByCategory 方法
  发送请求，后端执行查询代码，返回数据，再通过 refs 修改 Books组件的 data 以动态渲染页面。
-->