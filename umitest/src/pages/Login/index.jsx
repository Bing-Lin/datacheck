// 登录页面
import React, { Component } from 'react'
import { history } from 'umi';
import { Form, Input, Button, Checkbox, message as Message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { getUserInfo } from '../../../services/login.js';

import './index.less';
// const { getFiledValue } = Form;
export default class Login extends Component {
  // 初始化用户信息
  state = {
    userName: '',
    userPsw: ''
  }

  // antd 表单的普通用法,收集表单数据  
  onFinish = (values) => {
    this.setState({
      userName: values.username,
      userPsw: values.password
    })
  }
  toPage = async () => {
    // 获取用户信息
    const userInfo = await getUserInfo();
    console.log(userInfo);
    history.push('/upload');
  }
  render() {
    return (
      <>
        <div className="logincontainer">
          <div className="loginleft">
            <div className="image">
              <img src={require('../../asserts/images/login.png')} alt="介绍图片" />
            </div>
          </div>
          <div className="loginright">
            <div className="logininfo">
              <h3 className="webname">数据校验系统</h3>
              <h1 className="welcome">欢迎登录</h1>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.toPage}>
                    Log in
                  </Button>
                  Or <a href="">register now!</a>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </>
    )
  }
}
