import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  routes: [
  
    {
      path: '/',
      component: '@/layouts/index',
      // redirect: '/upload',
      routes: [
        { path: '/upload', component: '@/pages/Upload' },
        { path: '/files', component: '@/pages/Upload/Files' },
        { path: '/datacheck', component: '@/pages/DataCheck' },
        { path: '/personal', component: '@/pages/User'},
        { path: '/login', component:'@/pages/Login'},
        { path: '/register', component: '@/pages/Register'}

      ]
    }, 
  ],
  fastRefresh: {},
});
