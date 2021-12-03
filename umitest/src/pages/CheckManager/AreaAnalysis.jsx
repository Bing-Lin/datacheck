import React, { Component } from 'react'
import { Table } from 'antd';
import './Result.less';

export default class AreaAnalysis extends Component {
  state = {
    dataSource: [],
    total: 0,
    current: 1,

  }

  componentDidMount(){
    this.initialTable(1, 20);
  }

  initialTable = (pageNum, pageSize) => {
    let data = [];
    const xhr = new XMLHttpRequest()
    xhr.open("GET", `http://39.108.49.176:7321/DerivedInfo/selectAll?pageNum=${pageNum}&pageSize=${pageSize}`, true)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === xhr.DONE) {
        data = JSON.parse(xhr.responseText);
        this.setState({
          dataSource: data.records,
          total: data.total,
          current: data.current
        })
      }
    }
    xhr.send()
  }

  onChange = (pageNum, pageSize) => {
    this.initialTable(pageNum, pageSize)
  }
  render() {
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '残疾证号',
        dataIndex: 'id',
      },
      {
        title: '残疾类别',
        dataIndex: 'disabilityCategory',
        sorter: {
          compare: (a, b) => a.math - b.math,
          // multiple: 2,
        },
      },
      {
        title: '残疾等级',
        dataIndex: 'disabilityLevel',
        sorter: {
          compare: (a, b) => a.math - b.math,
          // multiple: 2,
        },
      },
      {
        title: '所在区划',
        dataIndex: 'regionId',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
      {
        title: '省份',
        dataIndex: 'province',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
      {
        title: '城市',
        dataIndex: 'city',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
      {
        title: '镇/区',
        dataIndex: 'regionId',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
      {
        title: '社区',
        dataIndex: 'community',
        sorter: {
          compare: (a, b) => a.english - b.english,
          // multiple: 1,
        },
      },
    ];
    
    const {dataSource, total, current} = this.state;
    return (
      <div className="contantbox">
        <Table bordered columns={columns} dataSource={dataSource} />
        <br/>
        <div className="pagination">
        <Pagination showQuickJumper total={total} defaultCurrent={current} pageSizeOptions={[10, 20]} onChange={this.onChange} />
        </div>
      </div>
    )
  }
}
