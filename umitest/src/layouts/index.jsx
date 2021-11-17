import React from 'react';
import { history } from 'umi';
import { Layout, Menu, loading } from 'antd';
import {
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import HeaderCom from '../../components/Header/HeaderCom';


import 'antd/dist/antd.css';
import './index.less';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  // 跳转文件列表页面
  toFiels = () => {
    history.push('/files');
  }

  // 跳转到文件上传页面
  toUpload = () => {
    history.push('/upload');
  }

  // 跳转到校验页面
  toDatacheck = () => {
    history.push('/datacheck');
  }

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" >网站logo</div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="DataCheck">
              <Menu.Item key="6" onClick={this.toDatacheck}>Checking</Menu.Item>
              {/* <Menu.Item key="8">Team 2</Menu.Item> */}
            </SubMenu>
            <SubMenu key="sub3" icon={<FileOutlined />} title="FileSet">
              <Menu.Item key="9" onClick={this.toFiels}>文件列表</Menu.Item>
              <Menu.Item key="10" onClick={this.toUpload}>文件上传</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} >
            <HeaderCom></HeaderCom>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <br/>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 600 }}>
              {this.props.children}
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>底部</Footer> */}
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;