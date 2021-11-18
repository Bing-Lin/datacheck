import React, { Component } from 'react';

import { Button, message } from 'antd';

import * as XLSX from 'xlsx';

import './index.less';
let styles = {
  'file-uploader': 'height:30px',
  'upload-text': 'height:30px',
  'upload-tip': 'display:block'
}
class Excel extends Component {

  state = {
    // 存放已经上传的文件数据[{id: '', fileName: ''}, {}]
    fileList: [],

    // 需要展示的数据源,从上传的文件直接读取
    dataList: {}
  }
  onImportExcel = file => {
    let tempArr = file.target.value.split('\\');
    const fileName = tempArr[tempArr.length - 1];
    console.log("filename", fileName);
    // console.log('tempArr', tempArr);
    // console.log('file', file.target.value);
    const { files } = file.target;

    // 通过FileReader对象读取文件
    const fileReader = new FileReader();
    fileReader.onload = event => {

      try {
        const { result } = event.target;
        // console.log('result', result);

        // 以二进制流方式读取得到整份excel表格对象
        const workbook = XLSX.read(result, { type: 'binary' });

        // 存储获取到的数据
        let data = [];

        // 遍历每张工作表进行读取（这里默认只读取第一张表）
        for (const sheet in workbook.Sheets) {
          // esline-disable-next-line
          if (workbook.Sheets.hasOwnProperty(sheet)) {

            // 利用 sheet_to_json 方法将 excel 转成 json 数据
            data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
            // break; // 如果只取第一张表，就取消注释这行
          }
        }

        // 最终获取到并且格式化后的 json 数据
        message.success('上传成功！')
        // console.log("data", data);
        let newArr = fileList.find(item => {
          if(item != fileName){
            
          }
          
        })
        this.setState({
          fileList: [fileName]
        })

      } catch (e) {
        // 这里可以抛出文件类型错误不正确的相关提示
        console.log(e, 'eeee')
        message.error('文件类型不正确！');
      }
    };

    // 以二进制方式打开文件
    fileReader.readAsBinaryString(files[0]);
  }

  render() {
    const { fileList, dataList } = this.state
    console.log("fileList", fileList);
    return (
      <div>
        <Button >
          <input
            className={styles['file-uploader']}
            type='file'
            accept='.xlsx, .xls'
            onChange={this.onImportExcel}
          />
          <span className={styles['upload-text']}>上传文件</span>
        </Button>
        <p className={styles['upload-tip']}>支持 .xlsx、.xls 格式的文件</p>
        {/* 封装自己的组件展示上传的数据列表 */}
        <br />
        <div className="dataList">
          <div className="dataItem">
            <ul>
              <li >filename</li>
              <li >filename</li>
              <li >filename</li>
              <li >filename</li>
            </ul>
          </div>
        </div>
      </div >

    );
  }
}

export default Excel;
