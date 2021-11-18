import React, { Component } from 'react'
import { Checkbox, Row, Col, Button } from 'antd';

import './index.less';

export default class Conditions extends Component {
  state = {
    newColums: [],        // 存放新构建列表头数据
    oldColumns: [],       // 存放来自 props 得表头数据
    exportColumns: [],    // 导出数据表表头
    fileName: '',         // 导出的文件名
  }

  // 选择校验条件
  onChange = (checkedValues) => {
    //  需要将筛选添加数据传递给父组件
    // console.log('checkedValues', checkedValues);

    this.props.getConditions(checkedValues);
  }

  // 数据表导出
  exportExcel = (headers, data, fileName = '请假记录表.xlsx') => {
    const _headers = headers
      .map((item, i) => Object.assign({}, { key: item.key, title: item.title, position: String.fromCharCode(65 + i) + 1 }))
      .reduce((prev, next) => Object.assign({}, prev, { [next.position]: { key: next.key, v: next.title } }), {});

    const _data = data
      .map((item, i) => headers.map((key, j) => Object.assign({}, { content: item[key.key], position: String.fromCharCode(65 + j) + (i + 2) })))
      // 对刚才的结果进行降维处理（二维数组变成一维数组）
      .reduce((prev, next) => prev.concat(next))
      // 转换成 worksheet 需要的结构
      .reduce((prev, next) => Object.assign({}, prev, { [next.position]: { v: next.content } }), {});

    // 合并 headers 和 data
    const output = Object.assign({}, _headers, _data);
    // 获取所有单元格的位置
    const outputPos = Object.keys(output);
    // 计算出范围 ,["A1",..., "H2"]
    const ref = `${outputPos[0]}:${outputPos[outputPos.length - 1]}`;

    // 构建 workbook 对象
    const wb = {
      SheetNames: ['mySheet'],
      Sheets: {
        mySheet: Object.assign(
          {},
          output,
          {
            '!ref': ref,
            '!cols': [{ wpx: 45 }, { wpx: 100 }, { wpx: 200 }, { wpx: 80 }, { wpx: 150 }, { wpx: 100 }, { wpx: 300 }, { wpx: 300 }],
          },
        ),
      },
    };

    // 导出 Excel
    XLSX.writeFile(wb, fileName);
  }


  render() {
    console.log('条件筛选组件的props', this.props.columns);
    return (
      <>
        <Checkbox.Group style={{ width: '200%' }} onChange={this.onChange}>
          <Row>
            <Col span={2}>
              <Checkbox value="R8">受教育程度</Checkbox>
            </Col>
            <Col span={2}>
              <Checkbox value="R15">住房改善情况</Checkbox>
            </Col>
            <Col span={2}>
              <Checkbox value="R21">过去一年享受的服务情况</Checkbox>
            </Col>
            <Col span={2}>
              <Checkbox value="R22">目前享受的服务情况</Checkbox>
            </Col>
            {/* <Col span={2}>
              <Checkbox value="E">条件E</Checkbox>
            </Col>
            <Col span={2}>
              <Checkbox value="F">条件F</Checkbox>
            </Col>
            <Col span={2}>
              <Checkbox value="G">条件G</Checkbox>
            </Col>
            <Col span={2}>
              <Checkbox value="H">条件H</Checkbox>
            </Col>
            <Col span={2}>
              <Checkbox value="I">I</Checkbox>
            </Col>
            <Col span={2}>
              <Checkbox value="J">条件J</Checkbox>
            </Col> */}
          </Row>
        </Checkbox.Group>
        <div className="export" >
          <Button className='btn' onClick={this.exportExcel}>导出</Button>
        </div>
      </>
    )
  }
}
