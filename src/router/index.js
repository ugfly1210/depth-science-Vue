import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Micro from '@/components/Micro'
import News from '@/components/News'
import Course from '@/components/Course'
import NewDetail from '@/components/NewDetail'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/micro',
      name: 'micro',
      component: Micro
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/new-detail/:id/',
      name: 'new-detail',
      component: NewDetail
    },
    {
      path: '/course',
      name: 'course',
      component: Course
    },
  ],
  mode: 'history'     // 去掉路由中的 # 
})
