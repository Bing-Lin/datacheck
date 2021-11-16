// 登录页面的整体样式
import React, { Component } from 'react'
// import Login from '../pages/Login';

import 'antd/dist/antd.css';
import './login.less';

export default class login extends Component {
  render() {
    return (
      <>
        <div className="loginbox">
          {this.props.children}
        </div>
      </>
    )
  }
}

