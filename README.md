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



### 3. 个人感触
第一次使用vue,主要通过边抄边看，具体参考原文      [原文链接](https://blog.csdn.net/Neuf_Soleil/article/details/88925013 "原文")