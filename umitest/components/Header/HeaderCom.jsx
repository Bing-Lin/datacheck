import React, { Component } from 'react'
import { history } from 'umi';
import { Row, Col, Avatar, Menu, Dropdown, Modal, Descriptions  } from 'antd';
import { UserOutlined,DownOutlined } from '@ant-design/icons';
import './HeaderCom.less';


export default class HeaderCom extends Component {
  state = {
    showInfo: false,
    userInfo: {},
  }
  //  preventDefault = (e) => {
  //   e.preventDefault();
  //   console.log('Clicked! But prevent default.');
  // }
  // showPersonal = () => {
  //   history.push('/user/personal');
  // }
  logOut = () => {
    history.push('/user/login');
  }

  showModal = () => {
    this.setState({
      showInfo: true
    })
  };

  handleOk = () => {
    this.setState({
      showInfo: false
    })
  };

  handleCancel = () => {
    this.setState({
      showInfo: false
    })
  };
  render() {
    const { showInfo } = this.state
    const menu = (
      <Menu className='nickitem'>
        <Menu.Item key="0">
          <a onClick={this.showModal}>个人中心</a>
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
        <Modal 
          title="用户信息" 
          visible={showInfo} 
          onOk={this.handleOk} 
          onCancel={this.handleCancel}
          bodyStyle={{padding: 30}}
        >
           <Descriptions >
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
            <Descriptions.Item label="Address">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>
        </Modal>

      </>
    )
  }
}
