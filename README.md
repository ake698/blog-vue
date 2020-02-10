## 关于此项目说明

### 项目依赖
首先确保存在npm 和 vue环境
安装Element　[组件说明]("http://element-cn.eleme.io/#/zh-CN/component/",组件说明)
> npm i element-ui -S

### 1. 前端拦截器
  目前判断本地 Storage  是否存在 key 为user的对象来实现拦截

### 2. 导航实现

#### 2.1 上导航
因为不是所有页面都需要上方导航，所以通过建立父页面 home.vue引入导航模块（common/NavMenu）来实现其链接都包含页面上方导航，具体参考router/index.js 下的 /home 路由，其children的所有链接都存在上导航。

#### 2.2 library页面侧导航
library 文件夹下 libraryindex为主页，其余为组件，与home.vue 引入上导航组件一样引入侧组件 sidemenu模块

总结一下，当你通过点击选择侧边导航栏的一个标签后，发生了如下的动人的故事：

* 触发 <el-menu> 组件的 @select 事件，执行 handleSelect 方法
* handleSelect 方法触发 indexSelect 事件，并把 key，即 <el-menu-item> 标签的 index 属性的值赋给 data 中定义的属性，即分类码。
* 父组件收到指令，执行事件对应的方法，即 listByCategory 方法
发送请求，后端执行查询代码，返回数据，再通过 refs 修改 Books组件的 data 以动态渲染页面。


### 3. 开发过程报错例子
#### 3.1 Invalid prop: custom validator check failed for prop index
使用element-ui的菜单，在SubMenu Attribute中有一个index的属性，如果index的值从后端传入，则可能出现这个错误。 具体文件在sideMenu中，其分类是动态现实的，通过v-for来遍历，在index属性中值不能存在空格，且要为字符串类型，我传回来的值是id为整数型，所以只需要加上toString（）方法转换为字符串即可解决问题。


### 4. 个人感触
第一次使用vue,主要通过边抄边看，具体参考原文      [原文链接](https://blog.csdn.net/Neuf_Soleil/article/details/88925013 "原文")