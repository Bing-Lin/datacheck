import React, { useState, useEffect } from 'react';
import { Table, Pagination} from 'antd';
import { history } from 'umi';

import './FileDetail.less';


// 表头数据
const columns = [
  {
    title: '残疾证号',
    width: 200,
    dataIndex: 'id',
    key: 'id',
    fixed: 'left',
    render: text => <a
      onClick={(e) => {
        // /fileset/files/filedetail
        // history.push(`/fileset/files/filedetail?fileId=${text}`)
      }}
    >{text}</a>
  },
  {
    title: '姓名',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
    render: text => <a >{text}</a>
  },
  {
    title: '所在区域',
    width: 100,
    dataIndex: 'regionId',
    key: 'regionId',
  },
  {
    title: '户口性质',
    width: 100,
    dataIndex: 'householdType',
    key: 'householdType',
  },
  {
    title: '婚姻状况',
    width: 100,
    dataIndex: 'maritalStatus',
    key: 'maritalStatus',
  },
  {
    title: '联系人姓名',
    width: 100,
    dataIndex: 'contactName',
    key: 'contactName',
  },
  {
    title: '固定电话',
    width: 150,
    dataIndex: 'fixedTelephone',
    key: 'fixedTelephone',
  },
  {
    title: '手机号码',
    width: 150,
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '是否在福利院',
    width: 80,
    dataIndex: 'inNursingHome',
    key: 'inNursingHome',
  },
  {
    title: '家庭收入状况(非农业)',
    width: 100,
    dataIndex: 'householdIncome',
    key: 'householdIncome',
  },
  {
    title: '家庭住房情况(非农业)',
    width: 100,
    dataIndex: 'houseType',
    key: 'houseType',
  },
  {
    title: '家庭住房情况(农业)',
    width: 100,
    dataIndex: 'houseTypeAgriculture',
    key: 'houseTypeAgriculture',
  },
  {
    title: '贫困与建档立卡状况(农业)',
    width: 100,
    dataIndex: 'povertyFilingCard',
    key: 'povertyFilingCard',
  },
  {
    title: '是否识字',
    width: 100,
    dataIndex: 'literacy',
    key: 'literacy',
  },
  {
    title: '受教育程度',
    width: 120,
    dataIndex: 'educationLevel',
    key: 'educationLevel',
  },
  {
    title: '普通教育机构',
    width: 100,
    dataIndex: 'generalEducation',
    key: 'generalEducation',
  },
  {
    title: '特殊教育机构',
    width: 100,
    dataIndex: 'specialEducation',
    key: 'specialEducation',
  },
  {
    title: '未入学主要原因',
    width: 100,
    dataIndex: 'notSchoolReason',
    key: 'notSchoolReason',
  },
  {
    title: '是否就业',
    width: 100,
    dataIndex: 'obtainOmployment',
    key: 'obtainOmployment',
  },
  {
    title: '残疾人就业形式',
    width: 130,
    dataIndex: 'employmentForm',
    key: 'employmentForm',
  },
  {
    title: '未就业主要生活来源',
    width: 100,
    dataIndex: 'sourceOfLife',
    key: 'sourceOfLife',
  },
  {
    title: '未就业主要原因',
    width: 100,
    dataIndex: 'notEmploymentReason',
    key: 'notEmploymentReason',
  },
  {
    title: '动态更新年度内得到的就业扶贫帮扶',
    width: 150,
    dataIndex: 'employmentAssistanceReceived',
    key: 'employmentAssistanceReceived',
  },
  {
    title: '目前就业帮扶需求',
    width: 100,
    dataIndex: 'employmentAssistanceDemand',
    key: 'employmentAssistanceDemand',
  },
  {
    title: '参加职工社会保险情况',
    width: 180,
    dataIndex: 'socialInsurance',
    key: 'socialInsurance',
  },
  {
    title: '是否参加城乡居民养老保险',
    width: 100,
    dataIndex: 'endowmentInsurance',
    key: 'endowmentInsurance',
  },
  {
    title: '是否享受城乡居民养老保险缴费补贴补贴',
    width: 150,
    dataIndex: 'endowmentInsuranceSubsidy',
    key: 'endowmentInsuranceSubsidy',
  },
  {
    title: '是否参加医疗保险',
    width: 80,
    dataIndex: 'medicalInsurance',
    key: 'medicalInsurance',
  },
  {
    title: '是否享受医疗保险缴费补贴',
    width: 100,
    dataIndex: 'medicalInsuranceSubsidy',
    key: 'medicalInsuranceSubsidy',
  },
  {
    title: '动态更新年度内社会救助及住房改善情况',
    width: 180,
    dataIndex: 'reliefHousingImprovement',
    key: 'reliefHousingImprovement',
  },
  {
    title: '动态更新年度内社会福利补贴情况',
    width: 180,
    dataIndex: 'socialWelfareSubsidies',
    key: 'socialWelfareSubsidies',
  },
  {
    title: '除残疾外，过去两周内是否患有其他疾病',
    width: 120,
    dataIndex: 'disease',
    key: 'disease',
  },
  {
    title: '过去两周内是否已就诊或治疗',
    width: 100,
    dataIndex: 'treatment',
    key: 'treatment',
  },
  {
    title: '未就诊或治疗原因',
    width: 100,
    dataIndex: 'noTreatmentReason',
    key: 'noTreatmentReason',
  },
  {
    title: '是否享受托养服务',
    width: 100,
    dataIndex: 'pensionService',
    key: 'pensionService',
  },
  {
    title: '目前托养服务需求',
    width: 100,
    dataIndex: 'pensionServiceDemand',
    key: 'pensionServiceDemand',
  },
  {
    title: '个人或家庭是否签订家庭医生服务协议',
    width: 150,
    dataIndex: 'familyDoctor',
    key: 'familyDoctor',
  },
  {
    title: '针对自身残疾，过去一年内是否得到过以下服务',
    width: 150,
    dataIndex: 'serviceReceived',
    key: 'serviceReceived',
  },
  {
    title: '未得到康复服务的原因',
    width: 100,
    dataIndex: 'notServiceReason',
    key: 'notServiceReason',
  },
  {
    title: '针对自身残疾，目前是否还需要以下服务',
    width: 150,
    dataIndex: 'serviceDemand',
    key: 'serviceDemand',
  },
  {
    title: '过去一年内您家是否进行过无障碍改造',
    width: 100,
    dataIndex: 'barrierFreeTrans',
    key: 'barrierFreeTrans',
  },
  {
    title: '目前您家有哪些无障碍改造需求',
    width: 100,
    dataIndex: 'barrierFreeDemand',
    key: 'barrierFreeDemand',
  },

  {
    title: '过去一年内是否经常参加文化体育活动',
    width: 100,
    dataIndex: 'recreationalActivitie',
    key: 'recreationalActivitie',
  },
  {
    title: '不能经常参加文化体育活动的原因',
    width: 100,
    dataIndex: 'recreationalActivitieHinder',
    key: 'recreationalActivitieHinder',
  },
  {
    title: '户主',
    width: 100,
    dataIndex: 'householderName',
    key: 'householderName',
  },
  {
    title: '户主身份证号',
    width: 100,
    dataIndex: 'householderId',
    key: 'householderId',
  },
  {
    title: '申报人',
    width: 100,
    dataIndex: 'eclarant',
    key: 'eclarant',
  },
  {
    title: '信息采集员',
    width: 100,
    dataIndex: 'collector',
    key: 'collector',
  },
  {
    title: '填表日期',
    width: 150,
    dataIndex: 'date',
    key: 'date',
  },
];

const FileDetail = (props) => {
  // console.log(props);
  const [dataSources, setDataSources] = useState([]);
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    initialFileList(1, 10);
  }, [])
  // initialFileList(pageNum = 1, pageSize = 10);

  // 初始化列表数据
  const initialFileList = (pageNum, pageSize) => {
    const time = props.location.year;
    let data = [];
    // const { pageNum, pageSize } = params ? params : { pageNum: 1, pageSize: 20 };
    const xhr = new XMLHttpRequest()
    if (time == 'past') {
      xhr.open("GET", `http://39.108.49.176:7321/disabilityInfoPast/selectAll?pageNum=${pageNum}&pageSize=${pageSize}`, true)
    } else {
      xhr.open("GET", `http://39.108.49.176:7321/disabilityInfoNow/selectAll?pageNum=${pageNum}&pageSize=${pageSize}`, true)
    }

    xhr.onreadystatechange = () => {
      if (xhr.readyState === xhr.DONE) {
        data = JSON.parse(xhr.responseText);
        setDataSources(data.records);
        setTotal(data.total);
        setCurrent(data.current)
      }
    }
    xhr.send()
  // data.push(dataList);
  }

  const onChange = (pageNumber, pageSize) => {
    initialFileList(pageNumber, pageSize);
  }

  return (
    <div className="contantbox">
      <Table
        bordered
        columns={columns}
        dataSource={dataSources}
        scroll={{ y: '65vh' }}
        sticky={false}
        loading={false}
        pagination={false}
      />
      <br />
      <div className="pagination">
      <Pagination showQuickJumper total={total} defaultCurrent={current} pageSizeOptions={[10, 20]} onChange={onChange} />
      </div>
    </div>

  );
};

export default FileDetail;