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

  checkPast = () => {
    history.push('/checkmanagement/past');
  }   

  checkNow = () => {
    history.push('/checkmanagement/now');
  }   

  // 跳转文件列表页面
  toPastFiels = () => {
    history.push({ pathname: '/filemanager/past', year: 'past' });
  }
  toNowFiels = () => {
    history.push({ pathname: '/filemanager/now', year: 'now' });
  }

  // 跳转到文件上传页面
  toUpload = () => {
    history.push('/filemanager/upload');
  }

  // 跳转到校验页面
  toDatacheck = () => {
    history.push('/fileset/checking');
  }

  toResult = () => {
    history.push('/checkmanagement/result')
  }
  toAreaAnalysis = () => {
    history.push('/checkmanagement/areaanalysis')
  }
  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" >网站logo</div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
            <SubMenu key="sub1" icon={<UserOutlined />} title="用户管理">
              <Menu.Item key="3">管理员</Menu.Item>
              <Menu.Item key="4">普通用户</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="检验管理">
              <Menu.Item key="6" onClick={this.checkPast}>往年数据</Menu.Item>
              <Menu.Item key="8" onClick={this.checkNow}>本年数据</Menu.Item>
              <Menu.Item key="12" onClick={this.toResult}>校验结果</Menu.Item>
              <Menu.Item key="13" onClick={this.toAreaAnalysis}>本年数据区域解析</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<FileOutlined />} title="文件管理">
              <Menu.Item key="9" onClick={this.toPastFiels}>往年文件</Menu.Item>
              <Menu.Item key="10" onClick={this.toNowFiels}>本年文件</Menu.Item>
              <Menu.Item key="11" onClick={this.toUpload}>文件上传</Menu.Item>
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