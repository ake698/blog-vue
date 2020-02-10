<template>
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <switch></switch>
      <!--@indexSelect="listByCategory"，这个东西为 listByCategory() 方法设置了触发事件。
        为了触发这个事件，在子组件，也即 SideMenu 里有有个handleSelect方法：
      -->
      <SideMenu @indexSelect="listByCategory" ref="sideMenu"></SideMenu>
    </el-aside>
    <el-main>
      <books class="books-area" ref="booksArea"></books>
    </el-main>
  </el-container>
</template>

<script>
  import SideMenu from './SideMenu'
  import Books from './Books'

  export default {
    name: 'AppLibrary',
    components: {Books, SideMenu},
    mounted: function () {
        this.loadCategory()
      },
    methods: {
      //分类这个功能的前端实现逻辑是，点击左侧导航栏，向后端发送一个带有参数的 get 请求，
      //然后同样是修改 data 里的数据以实现动态渲染。
      listByCategory () {
        var _this = this
        var cid = this.$refs.sideMenu.cid
        var url = 'category/' + cid + '/books'
        this.$axios.get(url).then(resp => {
          if (resp && resp.status === 200) {
            _this.$refs.booksArea.books = resp.data
          }
        })
      },
      loadCategory(){
        this.$axios.get('/category').then(resp=>{
          if (resp && resp.status === 200) {
            this.$refs.sideMenu.categories = resp.data;
          }else{
            this.$message.warning('获取目录失败！')
          }
        })
      }
    }
  }
</script>

<style scoped>
  .books-area {
    width: 990px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

