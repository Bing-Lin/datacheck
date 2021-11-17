// 模拟用户的登录api
export default {
  // 支持值为 obj Array
  'GET /api/isLogin':
  {
    userName: '15718390386',
    userPsw: '111111'
  },

  // GET 可以忽略
  // 'api/isLogin': { user: { name: '15718390386', psw: '111111' } },

  // 支持自定义函数, api
  'POST /api/users/regist': (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  }
}