import React, { Component } from 'react'
import { history } from 'umi';
import { Row, Col, Avatar, Menu, Dropdown, Tag } from 'antd';
import { UserOutlined,DownOutlined } from '@ant-design/icons';
import './HeaderCom.less';


export default class HeaderCom extends Component {
   preventDefault = (e) => {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  }
  toPersonal = () => {
    history.push('/user/personal');
  }
  logOut = () => {
    history.push('/login');
  }
  render() {
    
    const menu = (
      <Menu className='nickitem'>
        <Menu.Item key="0">
          <a onClick={this.toPersonal}>个人中心</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a onClick={this.logOut}>退出登录</a>
        </Menu.Item>
      </Menu>
    );
    return (
      <>
         <Row>
           {/* 导航栏相关 */}
            <Col span={19} >
              {/* <div className="navlist">
                <Tag closable className="navitem" >
                  Tag 2
                </Tag>
                <Tag closable className="navitem" onClose={this.preventDefault}>
                  Prevent Default
                </Tag>
              </div> */}
            </Col>
            {/* 用户信息相关 */}
            <Col span={5} align='center'>
              <div className="userinfo">
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                <Dropdown overlay={menu} trigger={['click']} className='nickname'>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    用户名： <DownOutlined />
                  </a>
                </Dropdown>
              </div>
            </Col>
          </Row>
      </>
    )
  }
}
