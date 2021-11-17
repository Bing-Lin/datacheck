import React, { Component, useState } from 'react';
import { Table, Pagination} from 'antd';

import './index.less';

const columns = [
  {
    title: '残疾证号',
    width: 100,
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
    dataIndex: 'region_id',
    key: 'region_id',
    width: 150,
  },
  {
    title: '户口性质',
    dataIndex: 'household_type',
    key: 'household_type',
    width: 150,
  },
  {
    title: '婚姻状况',
    dataIndex: 'marital_status',
    key: 'marital_status',
    width: 150,
  },
  {
    title: '联系人姓名',
    dataIndex: 'contact_name',
    key: 'contact_name',
    width: 150,
  },
  {
    title: '固定电话',
    dataIndex: 'fixed_telephone',
    key: 'fixed_telephone',
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
    dataIndex: 'in_nursing_home',
    key: 'in_nursing_home',
    width: 150,
  },
  {
    title: '家庭住房状态',
    dataIndex: 'house_type',
    key: 'house_type',
    width: 100,
  },
  {
    title: '农村危房',
    dataIndex: 'rural_dilapidated_house',
    key: 'rural_dilapidated_house',
    width: 150,
  },
  {
    title: '受教育程度',
    dataIndex: 'education_level',
    key: 'education_level',
    width: 100,
  },
  {
    title: '是否就业',
    dataIndex: 'obtain_employment',
    key: 'obtain_employment',
    width: 150,
  },
  {
    title: '未就业主要生活来源',
    dataIndex: 'sourse_of_life',
    key: 'sourse_of_life',
    width: 100,
  },
  {
    title: '目前就业帮扶需求',
    dataIndex: 'employment_assistance',
    key: 'employment_assistance',
    width: 150,
  },
  {
    title: '参加职工社会保险情况',
    dataIndex: 'social_insurance',
    key: 'social_insurance',
    width: 150,
  },
  {
    title: '是否参加城乡居民基本医疗保险',
    dataIndex: 'medical_insulance',
    key: 'medical_insulance',
    width: 150,
  },
  {
    title: '是否享受基本医疗保险个人缴费补贴',
    dataIndex: 'medical_insulance_subsidy',
    key: 'medical_insulance_subsidy',
    width: 150,
  },
  {
    title: '过去一年内社会救助及住房改善情况',
    dataIndex: 'relief_housing_improvement',
    key: 'relief_housing_improvement',
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
    dataIndex: 'penson_service',
    key: 'penson_service',
    width: 150,
  },
  {
    title: '残疾人养老服务--服务需求',
    dataIndex: 'penson_service_demand',
    key: 'penson_service_demand',
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
    dataIndex: 'family_doctor',
    key: 'family_doctor',
    width: 150,
  },
  {
    title: '针对自身残疾,过去一年内是否得到过以下服务',
    dataIndex: 'service_received',
    key: 'service_received',
    width: 150,
  },
  {
    title: '针对自身残疾,目前是否还需要以下服务',
    dataIndex: 'service_demand',
    key: 'service_demand',
    width: 150,
  },
  {
    title: '过去一年内您家是否进行过无障碍改造',
    dataIndex: 'barrier_free_trans',
    key: 'barrier_free_trans',
    width: 150,
  },
  {
    title: '过去一年内是否经常参加文化体育活动',
    dataIndex: 'recreational_activitie',
    key: 'recreational_activitie',
    width: 150,
  },
  {
    title: '不能经常参加文化体育活动的原因',
    dataIndex: 'recreational_activitie_hinder',
    key: 'recreational_activitie_hinder',
    width: 150,
  },
  {
    title: '户主姓名',
    dataIndex: 'householder_name',
    key: 'householder_name',
    width: 150,
  },
  {
    title: '户主身份证号',
    dataIndex: 'householder_id',
    key: 'householder_id',
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



const Files = () => {  
  return (
    <Table
      bordered
      columns={columns}
      dataSource={data}
      scroll={{ x: 3000, y: 550 }}
      sticky
      loading = {false}
      pagination
    />    
  );
};

export default Files;