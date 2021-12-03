import React, { Component } from 'react'
import {Button, Table, Pagination} from 'antd'
import Conditions from '../../../components/Conditions';
import './index.less';

// 存放校验条件关键字对应的详细描述
const titleName = [
  { index: '1', value: '受教育程度', dataIndex: 'education_level' },
  { index: '2', value: '住房改善情况', dataIndex: 'relief_housing_improvement' },
  { index: '3', value: '过去一年享受的服务情况', dataIndex: 'service_received' },
  { index: '4', value: '目前享受的服务情况', dataIndex: 'service_demand' },
]

// 数据校验页
export default class DataCheck extends Component {
  state = {
    checkConditions: [],    // 保存筛选条件
    dataSource: [],         // 保存列表数据
    nTitle: [],             // 组装好了的表头数据
    allTitle: [],                      // 保存全部的 表头数据
    total: 0,
    current: 1
  }

  componentDidMount() {
    this.getDataList(1, 20);
  }
  // 初始化列表数据

    
  

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
              fixed: 'right',
            }
            break;
          }
        }
        return tempItem
      })
      // console.log('组装好的的数据', newTitle);
      this.setState({
        nTitle: newTitle
      })
    }
  }

  // 获取2020年列表数据 params = {[pageNum, pageSize]}
  // filterValues = ['1', '2', ...] 
  getDataList = (pageNum, pageSize) => {
    let data = []
    const xhr = new XMLHttpRequest()
    xhr.open("GET", `http://39.108.49.176:7321/disabilityInfoPast/selectAll?pageNum=${pageNum}&pageSize=${pageSize}`, true)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === xhr.DONE) {
        data = JSON.parse(xhr.responseText);
        console.log(data);
        this.setState({
          dataSource: data.records,
          total: data.total,
          current: data.current
        })

      }
    }
    xhr.send()
  }
  onChange = (pageNum, pageSige) => {
    this.getDataList(pageNum, pageSige);

  }


  render() {

    // 表头数据
    const tempColumns = [
      {
        title: '残疾证号',
        width: 200,
        dataIndex: 'id',
        key: 'id',
        fixed: 'left',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
      },
      {
        title: '所在区域',
        dataIndex: 'regionId',
        key: 'regionId',
        width: 150,
      },
      {
        title: '户口性质',
        dataIndex: 'householdType',
        key: 'householdType',
        width: 150,
      },
      {
        title: '婚姻状况',
        dataIndex: 'maritalStatus',
        key: 'maritalTtatus',
        width: 150,
      },
      {
        title: '联系人姓名',
        dataIndex: 'contactName',
        key: 'contactName',
        width: 150,
      },
      {
        title: '固定电话',
        dataIndex: 'fixedTelephone',
        key: 'fixedTelephone',
        width: 150,
      },
      {
        title: '手机号码',
        dataIndex: 'phone',
        key: 'phone',
        width: 150,
      },
      {
        title: '是否在福利院',
        dataIndex: 'inNursingHome',
        key: 'inNursingHome',
        width: 150,
      },
      {
        title: '家庭收入状态',
        dataIndex: 'householdIncome',
        key: 'householdIncome',
        width: 100,
      },
      {
        title: '家庭住房状态(非农业)',
        dataIndex: 'houseType',
        key: 'houseType',
        width: 100,
      },
      {
        title: '家庭住房状态(农业)',
        dataIndex: 'houseTypeAgriculture',
        key: 'houseTypeAgriculture',
        width: 100,
      },
      // {
      //   title: '农村危房',
      //   dataIndex: 'ruralDilapidatedHouse',
      //   key: 'ruralDilapidatedHouse',
      //   width: 150,
      // },
      {
        title: '贫困与建档立卡状况(农业)',
        dataIndex: 'povertyFilingCard',
        key: 'povertyFilingCard',
        width: 100,
      },
      {
        title: '受否识字',
        dataIndex: 'literacy',
        key: 'literacy',
        width: 100,
      },
      {
        title: '受教育程度',
        dataIndex: 'educationLevel',
        key: 'educationLevel',
        width: 100,
      },
      {
        title: '普通教育机构',
        dataIndex: 'generalEducation',
        key: 'generalEducation',
        width: 100,
      },
      {
        title: '特殊教育机构',
        dataIndex: 'specialEducation',
        key: 'specialEducation',
        width: 100,
      },
      {
        title: '未入学原因',
        dataIndex: 'notSchoolReason',
        key: 'notSchoolReason',
        width: 100,
      },
      {
        title: '是否就业',
        dataIndex: 'obtainEmployment',
        key: 'obtainEmployment',
        width: 150,
      },
      {
        title: '残疾人就业形式',
        dataIndex: 'employmentForm',
        key: 'employmentForm',
        width: 150,
      },
      {
        title: '主要生活来源',
        dataIndex: 'householdIncome',
        key: 'householdIncome',
        width: 100,
      },
      {
        title: '未就业主要生活来源',
        dataIndex: 'sourseOfLife',
        key: 'sourseOfLife',
        width: 100,
      },


      {
        title: '未就业主要原因',
        dataIndex: 'notEmploymentReason',
        key: 'notEmploymentReason',
        width: 100,
      },

      {
        title: '动态更新年内得到的就业扶贫帮扶',
        dataIndex: 'employmentAssistanceReceived',
        key: 'employmentAssistanceReceived',
        width: 150,
      },
      {
        title: '目前就业帮扶需求',
        dataIndex: 'employmentAssistance',
        key: 'employmentAssistance',
        width: 150,
      },
      {
        title: '参加职工社会保险情况',
        dataIndex: 'socialInsurance',
        key: 'socialInsurance',
        width: 150,
      },
      {
        title: '是否参加医疗保险(城镇居民/新农合)',
        dataIndex: 'medicalInsulance',
        key: 'medicalInsulance',
        width: 150,
      },
      {
        title: '是否享受基本医疗保险个人缴费补贴',
        dataIndex: 'medicalInsulanceSubsidy',
        key: 'medicalInsulanceSubsidy',
        width: 150,
      },

      {
        title: '过去一年内社会救助及住房改善情况',
        dataIndex: 'reliefHousingImprovement',
        key: 'reliefHousingImprovement',
        width: 150,
      },
      {
        title: '目前托养服务需求',
        dataIndex: 'care_service',
        key: 'care_service',
        width: 150,
      },
      {
        title: '残疾人养老服务--服务现状',
        dataIndex: 'pensionService',
        key: 'pensionService',
        width: 150,
      },
      {
        title: '残疾人养老服务--服务需求',
        dataIndex: 'pensionServiceDemand',
        key: 'pensionServiceDemand',
        width: 150,
      },
      {
        title: '以老养残家庭基本情况1-2',
        dataIndex: 'dependant_age',
        key: 'dependant_age',
        width: 150,
      },
      {
        title: '以老养残家庭基本情况3-4',
        dataIndex: 'disable_count',
        key: 'disable_count',
        width: 150,
      },
      {
        title: '个人或家庭是否签订家庭医生服务协议',
        dataIndex: 'familyDoctor',
        key: 'familyDoctor',
        width: 150,
      },
      {
        title: '针对自身残疾,过去一年内是否得到过以下服务',
        dataIndex: 'serviceReceived',
        key: 'serviceReceived',
        width: 150,
      },
      {
        title: '针对自身残疾,目前是否还需要以下服务',
        dataIndex: 'serviceDemand',
        key: 'serviceDemand',
        width: 150,
      },
      {
        title: '过去一年内您家是否进行过无障碍改造',
        dataIndex: 'barrierFreeTrans',
        key: 'barrierFreeTrans',
        width: 150,
      },
      {
        title: '过去一年内是否经常参加文化体育活动',
        dataIndex: 'recreationalActivitie',
        key: 'recreationalActivitie',
        width: 150,
      },
      {
        title: '不能经常参加文化体育活动的原因',
        dataIndex: 'recreationalActivitieHinder',
        key: 'recreationalActivitieHinder',
        width: 150,
      },
      {
        title: '户主姓名',
        dataIndex: 'householderName',
        key: 'householderName',
        width: 150,
      },
      {
        title: '户主身份证号',
        dataIndex: 'householderId',
        key: 'householderId',
        width: 150,
      },
      {
        title: '申报人',
        dataIndex: 'declarant',
        key: 'declarant',
        width: 150,
      },
      {
        title: '信息采集员',
        dataIndex: 'collector',
        key: 'collector',
        width: 150,
      },
      {
        title: '填表日期',
        dataIndex: 'date',
        key: 'date',
        width: 150,
      },
  // {
  //   title: 'Action',
  //   key: 'operation',
  //   fixed: 'right',
  //   width: 100,
  //   render: () => <a>action</a>,
  // },

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

    const { dataSource, nTitle, total, current } = this.state;
    const columns = [...tempColumns, ...nTitle];


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
      <div className="contantbox">
        <Table
          bordered
          columns={columns}
            dataSource={dataSource}
            scroll={{ y: 550 }}
          sticky
          loading = {false}
            pagination={false}
       />
       <div className="pagination">
       <Pagination showQuickJumper total={total} defaultCurrent={current} pageSizeOptions={[10, 20]} onChange={this.onChange} />
       </div>
      </div>
      
      </>
    )
  }
}
