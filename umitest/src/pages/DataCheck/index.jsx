import React, { Component } from 'react'
import {Button, Table} from 'antd'
import Conditions from '../../../components/Conditions';
import './index.less';

// 存放校验条件关键字对应的详细描述
const titleName = [
  { index: 'R8', value: '受教育程度', dataIndex: 'education_level' },
  { index: 'R15', value: '住房改善情况', dataIndex: 'relief_housing_improvement' },
  { index: 'R21', value: '过去一年享受的服务情况', dataIndex: 'service_received' },
  { index: 'R22', value: '目前享受的服务情况', dataIndex: 'service_demand' },
]

// 数据校验页
export default class DataCheck extends Component {
  state = {
    checkConditions: [],    // 保存筛选条件
    dataSource: [],         // 保存列表数据
    nTitle: [],             // 组装好了的表头数据
    allTitle: [],                      // 保存全部的 表头数据
  }

  // 初始化列表数据
  initialDataList = async (fileId) => {
    const { checkConditions } = this.state;
    // 判断是否有筛选条件
    if (this.state.checkConditions.length > 0) {

      const res = await fetchListData(fileId, checkConditions);

      // 设置列表数据之前需要做某些判断,确定有数据请求回来
      this.setState({
        dataSource: res
      })
    }
  }

  // 从子组件中获取筛选条件参数
  getConditions = (values) => {
    // 组装成新的列表,作为表头添加到table中
    // 组装好的新的表头数据
    let len = titleName.length;
    let tempItem = null;
    const { allTitle } = this.state;
    if (len > 0) {
      const newTitle = values.map(item => {
        for (let i = 0; i < len; i++) {
          if (titleName[i].index == item) {
            tempItem = {
              title: titleName[i].value,
              width: 100,
              dataIndex: titleName[i].dataIndex,
              key: titleName[i].dataIndex,
            }
            break;
          }
        }
        return tempItem
      })
      console.log('组装好的的数据', newTitle);
      this.setState({
        nTitle: newTitle
      })
    }
  }


  render() {

    // 表头数据
    const tempColumns = [
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
      // { title: 'Column 8', 
      //   dataIndex: 'address',
      //   key: '8'
      // }
      // {
      //   title: 'Action',
      //   key: 'operation',
      //   fixed: 'right',
      //   width: 100,
      //   render: () => <a>action</a>,
      // }
    ];
    const { dataSource } = this.state;
    const columns = [...tempColumns, ...this.state.nTitle];


    return (
      <>
      {/* 筛选条件列表 */}
      <div className="conditions">
          <Conditions
            getConditions={this.getConditions}
            dataSource={dataSource}
            columns={columns}
          >

          </Conditions>
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
            dataSource={dataSource}
            scroll={{ y: 550 }}
          sticky
          loading = {false}
          pagination
       />
      </div>
      
      </>
    )
  }
}
