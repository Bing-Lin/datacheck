import React, { Component } from 'react'
import {Button, Table} from 'antd'
import Conditions from '../../../components/Conditions';
import './index.less';

// 数据校验页
export default class DataCheck extends Component {
  // 此处为实例添加方法和属性
  render() {
    const columns = [
      {
        title: 'Full Name',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
      },
      {
        title: 'Age',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        fixed: 'left',
      },
      {
        title: 'Column 1',
        dataIndex: 'address',
        key: '1',
        width: 150,
      },
      {
        title: 'Column 2',
        dataIndex: 'address',
        key: '2',
        width: 150,
      },
      {
        title: 'Column 3',
        dataIndex: 'address',
        key: '3',
        width: 150,
      },
      {
        title: 'Column 4',
        dataIndex: 'address',
        key: '4',
        width: 150,
      },
      {
        title: 'Column 5',
        dataIndex: 'address',
        key: '5',
        width: 150,
      },
      {
        title: 'Column 6',
        dataIndex: 'address',
        key: '6',
        width: 150,
      },
      {
        title: 'Column 7',
        dataIndex: 'address',
        key: '7',
        width: 150,
      },
      { title: 'Column 8', 
        dataIndex: 'address',
        key: '8' },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a>action</a>,
      },
    ];
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
      });
    }
    return (
      <>
      {/* 筛选条件列表 */}
      <div className="conditions">
        <Conditions></Conditions>
      </div>

      {/* 数据导出按钮 */}
      <br />
      <hr></hr>
      <br />
      {/* 筛选结果展示列表 */}
      <div className="content">
        <Table
          bordered
          columns={columns}
          dataSource={data}
          scroll={{ x: 3000, y: 550 }}
          sticky
          loading = {false}
          pagination
       />
      </div>
      
      </>
    )
  }
}
