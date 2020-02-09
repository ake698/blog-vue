import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//导入组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Home from '@/components/Home'
import LibraryIndex from '@/components/library/LibraryIndex'
import NavMenu from '@/components/common/NavMenu'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/',
      name: 'index',
      redirect:'/index',
      component: AppIndex
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/nav',
      name: 'NavMenu',
      component: NavMenu
    },
  ]
})
