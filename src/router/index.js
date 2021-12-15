import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import V2THome from '../views/vue2test/v2thome.vue'
import V2T_0001 from '../views/vue2test/test/v2t0001'
import V2T_0002 from '../views/vue2test/test/v2t0002'
import V2T_0003 from '../views/vue2test/test/v2t0003'
import V2T_0004 from '../views/vue2test/test/v2t0004'
import V2T_0005 from '../views/vue2test/test/v2t0005'
import V2T_0006 from '../views/vue2test/test/v2t0006'
import '../views/vue2test/test/index'

// 冗余导航报错
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/V2THome',
    name: 'V2THome',
    component: V2THome,
    children: [
      {
        path: '0001',
        name: 'V2T_0001',
        component: V2T_0001,
      },
      {
        path: '0002',
        name: 'V2T_0002',
        component: V2T_0002,
      },
      {
        path: '0003',
        name: 'V2T_0003',
        component: V2T_0003,
      },
      {
        path: '0004',
        name: 'V2T_0004',
        component: V2T_0004,
      },
      {
        path: '0005',
        name: 'V2T_0005',
        component: V2T_0005,
      },
      {
        path: '0006',
        name: 'V2T_0006',
        component: V2T_0006,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
