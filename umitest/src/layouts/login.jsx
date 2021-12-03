// 登录页面的整体样式
import React, { Component } from 'react'
import SiderDemo from './index';
// import Login from '../pages/Login';

import 'antd/dist/antd.css';
import './login.less';

export default class login extends Component {

  render() {
    // 判断是否处于登录页面
    if (this.props.location.pathname === '/user/login') {
      return (
        <>
          <div className="loginbox">
            {this.props.children}
          </div>
        </>
      )
    }
    // 加载统一的layout
    return <SiderDemo />
  }
}

