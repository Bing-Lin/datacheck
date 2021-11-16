import React, { Component } from 'react'
import { Checkbox, Row, Col, Button } from 'antd';

import './index.less';

export default class index extends Component {
 onChange = (checkedValues) => {
    // console.log('checked = ', checkedValues);
  }
  render() {
    return (
      <>
        <Checkbox.Group style={{ width: '200%' }} onChange={this.onChange}>
          <Row>
            <Col span={2}>
              <Checkbox value="A">条件A</Checkbox>
            </Col>
            <Col span={2}>
              <Checkbox value="B">条件B</Checkbox>
            </Col>
            <Col span={2}>
              <Checkbox value="C">条件C</Checkbox>
            </Col>
            <Col span={2}>
              <Checkbox value="D">条件D</Checkbox>
            </Col>
            <Col span={2}>
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
              <Checkbox value="I">条件I</Checkbox>
            </Col>
            <Col span={2}>
              <Checkbox value="J">条件J</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <div className="export" >
          <Button className='btn'>导出</Button>
        </div>
      </>
    )
  }
}
