import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/register',
    component: () => import('@/views/login/register'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    redirect: '/contentimport/add'
  },
  {
    path: '/contentimport',
    component: Layout,
    children: [
      {
        path: 'add',
        name: 'Contentimport',
        component: () => import('@/views/table/contentimport'),
        meta: { title: '批量导入', icon: 'tree' }
      }
    ]
  },
  {
    path: '/contentimports',
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'Contentimports',
        component: () => import('@/views/table/contentimports'),
        meta: { title: '导入记录', icon: 'table' }
      }
    ]
  },
  {
    path: '/contentparses',
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'Contentparses',
        component: () => import('@/views/table/contentparses'),
        meta: { title: '导入进度', icon: 'table' }
      }
    ]
  },
  {
    path: '/contents',
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'Contents',
        component: () => import('@/views/table/contents'),
        meta: { title: '已导入内容', icon: 'table' }
      }
    ]
  },
  {
    path: '/proofs',
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'Proofs',
        component: () => import('@/views/table/proofs'),
        meta: { title: '内容凭证', icon: 'table' }
      }
    ]
  },

  // {
  //   path: '/tv',
  //   component: Layout,
  //   meta: { title: '视频管理', icon: 'dashboard' },
  //   children: [
  //     // {
  //     //   path: 'upload',
  //     //   name: 'Upload',
  //     //   component: () => import('@/views/table/upload'),
  //     //   meta: { title: '视频上载', icon: 'table' }
  //     // },
  //     {
  //       path: 'import',
  //       name: 'Import',
  //       component: () => import('@/views/table/import'),
  //       meta: { title: '批量导入', icon: 'tree' }
  //     },
  //     {
  //       path: 'importPlan',
  //       name: 'ImportPlan',
  //       component: () => import('@/views/table/importPlan'),
  //       meta: { title: '导入进度', icon: 'table' }
  //     },
  //     {
  //       path: 'videos',
  //       name: 'Videos',
  //       component: () => import('@/views/table/videos'),
  //       meta: { title: '已导入视频', icon: 'table' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
