
import React, { Component } from 'react'

// 引入excel文件操作依赖包
import XLSX from 'xlsx';

import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import './index.less';

const { Dragger } = Upload;





export default class UploadCom extends Component {
  state = {
    pastFile: [],     // 往年数据文件名
    nowFile: [],      // 本年数据文件名
    pastDisabled: false,
    nowDisabled: false
  }

  // 导入excel文件方法
  // importExcel = (file, data) => {
  //   console.log('file', file, 'data', data);
  //   获取上传的文件对象
  //   const { files } = file.target;
  //   // 通过FileReader对象读取文件
  //   const fileReader = new FileReader();
  //   fileReader.onload = event => {
  //     try {
  //       const { result } = event.target;
  //       // 以二进制流方式读取得到整份excel表格对象
  //       const workbook = XLSX.read(result, { type: 'binary' });
  //       let data = []; // 存储获取到的数据
  //       // 遍历每张工作表进行读取（这里默认只读取第一张表）
  //       for (const sheet in workbook.Sheets) {
  //         if (workbook.Sheets.hasOwnProperty(sheet)) {
  //           // 利用 sheet_to_json 方法将 excel 转成 json 数据
  //           data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
  //           // break; // 如果只取第一张表，就取消注释这行
  //         }
  //       }
  //       console.log(data);
  //     } catch (e) {
  //       // 这里可以抛出文件类型错误不正确的相关提示
  //       console.log('文件类型不正确');
  //       return;
  //     }
  //   };
  //   // 以二进制方式打开文件
  //   fileReader.readAsBinaryString(files[0]);
  // }



  render() {
    let that = this
    const { pastDisabled, nowDisabled } = this.state;
    const propsPast = {
      name: 'filePast',
      multiple: true,
      disabled: pastDisabled,
      action: 'http://39.108.49.176:7321/import/past',
      beforeUpload(file) {
        return false
      },


      onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
          that.setState({
            pastDisabled: true
          })
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
      // onchange: this.importExcel(f),
      onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
      },
    };

    const propsNow = {
      name: 'fileNow',
      multiple: true,
      disabled: nowDisabled,
      action: 'http://39.108.49.176:7321/import/now',

      onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
          that.setState({
            nowDisabled: true
          })
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
      // onchange: this.importExcel(f),
      onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
      },
    };


    return (
      <div className="uploadbox">
        <div className="uploadcontant">
          <Dragger {...propsPast} beforeUpload={this.importExcel}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">点击上传<strong>往年</strong>数据文件</p>
            <p className="ant-upload-hint">
              <i>仅支持单文件上传，请勿同时选择多个文件</i>
            </p>
          </Dragger>
        </div>
        <div className="uploadcontant">
          <Dragger {...propsNow} beforeUpload={this.importExcel}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">点击上传<strong>本年</strong>数据文件</p>
            <p className="ant-upload-hint">
              <i>仅支持单文件上传，请勿同时选择多个文件</i>
            </p>
          </Dragger>
        </div>
      </div>

    )
  }
}
