import React, { Component } from 'react';
import { Table, Pagination, Checkbox, Row, Col, Button} from 'antd';
import './Result.less';

const errorType = {
  1: "受教育程度倒退",
  2: "填报“农村危房改造”但未填自建房",
  3: "R21智力残疾人选填“康复治疗(含手术、药物)”",
  4: "R21智力残疾人选填“辅助器具”",
  5: "R21精神残疾人选填“辅助器具”",
  6: "R22智力残疾人选填“康复治疗(含手术、药物)”",
  7: "R22智力残疾人选填“辅助器具”",
  8: "R22精神残疾人选填“辅助器具”"
}

const dataindex = {

}

export default class Result extends Component {
  state = {
    dataSource: [],
    current: 1,
    total: 0,
  }
  componentDidMount(){
    this.initialList(1, 10);
  }
  componentWillUnmount(){
    this.setState({
      dataSource: [],
      current: 1,
      total: 0,
      newColumn: []
    })
  }
  initialList = (pageNum, pageSize) => {
    let data = [];
    const xhr = new XMLHttpRequest()
    xhr.open("GET", `http://39.108.49.176:7321/ErrorInfo/selectAll?pageNum=${pageNum}&pageSize=${pageSize}`, true)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === xhr.DONE) {
        data = JSON.parse(xhr.responseText);
        // console.log(xhr.responseText);
        // console.log(data);
        // console.log(data.records);
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
    this.initialList(pageNum, pageSize);
  }

  onSelected(checkedValues) {
    const newArr = checkedValues.map( item => {
      return {
        title: item,
        width: 100,
        dataIndex: '',
        key: 'id',
        fixed: 'left',
      }
    })
  }

  render() {
    const columns = [
      {
        title: '残疾证号',
        width: 50,
        dataIndex: 'id',
        key: 'id',
        fixed: 'left',
      },
      {
        title: '姓名',
        width: 50,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
      },
      {
        title: '所在社区',
        width: 100,
        dataIndex: 'regionId',
        key: '1',
        // fixed: 'left',
      },
      {
        title: '错误类型',
        width: 100,
        dataIndex: 'errorType',
        key: '2',
        render: (text) => <span>{errorType[`${text}`]}</span>
      },

      // {
      //   title: 'Action',
      //   key: 'operation',
      //   fixed: 'right',
      //   width: 100,
      //   render: () => <a>action</a>,
      // },
    ];
    
    const {dataSource, total, current} = this.state;
    return (
      <div className="contantbox">
        <div className="toolbar">
          <div className="selected">
            <Checkbox.Group style={{ width: '100%' }} onChange={this.onSelected}>
              <Row >
                <Col span={3}>
                  <Checkbox value="1">A</Checkbox>
                </Col>
                <Col span={3}>
                  <Checkbox value="2">B</Checkbox>
                </Col>
                <Col span={3}>
                  <Checkbox value="3">C</Checkbox>
                </Col>
                <Col span={3}>
                  <Checkbox value="4">D</Checkbox>
                </Col>
                <Col span={3}>
                  <Checkbox value="5">E</Checkbox>
                </Col>
                <Col span={3}>
                  <Checkbox value="6">C</Checkbox>
                </Col>
                <Col span={3}>
                  <Checkbox value="7">D</Checkbox>
                </Col>
                <Col span={3}>
                  <Checkbox value="8">E</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </div>
          <div className="exportbtn">
            <Button type="primary" style={{ height: 45 ,borderRadius: 5}}>导出校验结果</Button>
          </div>
        </div>
        <hr/>
        <Table 
          columns={columns} 
          dataSource={dataSource} 
          scroll={{ x: 1500, y: 600 }} 
          pagination={false}
          />
          <br/>
        <div className="pagination">
        <Pagination showQuickJumper total={total} defaultCurrent={current} pageSizeOptions={[10, 20]} onChange={this.onChange} />
          {/* <Pagination showQuickJumper total={total} defaultCurrent={current} onChange={this.onChange} /> */}
        </div>
      </div>
    )
  }
}
