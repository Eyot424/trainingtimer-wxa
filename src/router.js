import Router from 'vue-router'
import music from '@/page/music'
import setting from '@/page/setting'
import timer from '@/page/timer'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'setting',
      component: setting
    },
    {
      path: '/timer',
      name: 'timer',
      component: timer
    },
    {
      path: '/music',
      name: 'music',
      component: music
    }
  ]
})
