import { defineConfig } from 'umi';

export default defineConfig({
  
  locale: {
    default: 'zh-CN', 
    baseNavigator: true, 
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      redirect: 'user/login'
    },
    {
      path: '/user/login',
      component: '@/layouts/login.jsx',
      routes: [
        {
          path: '/user/login',
          component: '@/pages/User/Login'
        }
      ]
    },
    {
      path: '/',
      component: '@/layouts',
      routes: [
        { 
          path: '/filemanager', 
          routes: [
            { 
              path: '/filemanager/upload', 
              component: '@/pages/FileManager'
            },
            {
              path: '/filemanager/past',
              component: '@/pages/FileManager/FileDetail.jsx'
            },
            {
              path: '/filemanager/now',
              component: '@/pages/FileManager/FileDetail.jsx'
            },
          ]
        },
  
        {
          path: '/checkmanagement',
          routes: [
            {
              path: '/checkmanagement/result',
              component: '@/pages/CheckManager/Result.jsx'
            },
            {
              path: '/checkmanagement/past',
              component: '@/pages/CheckManager/CheckPast.jsx'
            },
            {
              path: '/checkmanagement/now',
              component: '@/pages/CheckManager/CheckNow.jsx'
            },
            {
              path: '/checkmanagement/areaanalysis',
              component: '@/pages/CheckManager/AreaAnalysis.jsx'
            },
            
          ]
        },


    //     // { path: '/filedetail', component: '@/pages/Upload/Files/FileDetail' },
    //     // { path: '/datacheck/checking', component: '@/pages/DataCheck' },
    //     // { path: '/user/personal', component: '@/pages/User' },
    //     // { path: '/user/register', component: '@/pages/Register' },
    //     // { path: '/test', component: '@/pages/test' },

    //   ]
    // }
  ],
  fastRefresh: {},
}]});
