import React, { Component } from 'react'
import { Checkbox, Row, Col, Button, message, Modal,Result } from 'antd';
import $ from 'jquery';

import './index.less';

export default class Conditions extends Component {
  state = {
    newColums: [],                              // 存放新构建列表头数据
    oldColumns: [],                             // 存放来自 props 得表头数据
    exportColumns: [...this.props.columns],     // 导出数据表表头
    fileName: '',                               // 导出的文件名
    showModal: false
  }

  toCheck = () => {
    // let list = ["1", "2", "3", "4", "5", "6", "7", "8"]
    // let data = [];
    // // const { pageNum, pageSize } = params ? params : { pageNum: 1, pageSize: 20 };
    // const xhr = new XMLHttpRequest()

    // xhr.open("POST", `http://39.108.49.176:7321/check`, true)

    // // 如果想要使用post提交数据,必须添加此行
    // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // // 将数据通过send方法传递
    // xhr.send('list:["1","2","3","4","5","6","7","8"]');
    // xhr.onreadystatechange = () => {
    //   // console.log("ee");
    //   if (xhr.readyState == 4 && xhr.status == 200) {
    //     console.log(xhr.responseText);
    //   }
    // }
    // $.ajax({
    //   type: "post",
    //   url: "http://39.108.49.176:7321/check",

    //   data: JSON.stringify(["1", "2", "3", "4", "5", "6", "7", "8"]),
    //   dataType: "json",
    //   success: (e) => {
    //     console.log(e);
    //   }
    // })
    let list = ["1", "2", "3", "4", "5", "6", "7", "8"];
    $.ajax({
      headers: {
        'Content-Type': 'application/json'
      },
      type: "post",
      url: "http://39.108.49.176:7321/check",
      data: JSON.stringify(list),
      success: (e) => {
        console.log(e);
        setTimeout(()=>{
          this.setState({
            showModal: true
          })
        }, 300)
      },
      error: (error) => {
        message.error(error);
      }
    })

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

  handleOk = () => {
    setIsModalVisible(false);
  };

  handleCancel = () => {
    this.setState({
      showModal: false
    })
  };


  render() {
    const { showModal } = this.state;
    return (
      <>
        <Button
          type="primary"
          className='checkbtn'
          onClick={this.toCheck}
        >一键校验
        </Button>
        <Modal 
          visible={showModal}
          // onOk={this.handleOk} 
          onCancel={this.handleCancel}
          footer={null}
          >
          <Result
            status="success"
            title="校验成功"
            subTitle="请前往--校验结果--页面查看详情"
          />
        </Modal>
      </>
    )
  }
}
