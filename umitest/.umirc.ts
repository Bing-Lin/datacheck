import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: '@/layouts/login.jsx',
      routes: [
        {
          path: '/login',
          component: '@/pages/Login'
        }
      ]
    },
    {
      path: '/',
      component: '@/layouts',
      routes: [
        { path: '/upload', component: '@/pages/Upload' },
        { path: '/files', component: '@/pages/Upload/Files' },
        { path: '/datacheck', component: '@/pages/DataCheck' },
        { path: '/personal', component: '@/pages/User' },
        { path: '/register', component: '@/pages/Register' },
        { path: '/test', component: '@/pages/test' },

      ]
    }
  ],


  fastRefresh: {},
});
