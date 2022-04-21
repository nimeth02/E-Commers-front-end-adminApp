import { ToolOutlined } from '@ant-design/icons'
import { Card, Col, Row } from 'antd'
import React from 'react'
import AddSell from './AddSell'
import img from './landing_00-720x379.jpg'
import Purches from './Purches'
import './style.css'
const Home = () => {
  return (
    <div className='dashboard'>
 <Row>
   <Col span={12}>
   <div className='Addsell'><AddSell /></div>
 </Col>
 <Col span={12}>
 <div className='Purches'><Purches /></div>
 <Card
              bordered={false}
              style={{
                margin: "15% ",
                borderRadius: "5px",
                height: "",
                textAlign: "center",
                color: "orange",
                backgroundColor:'rgb(14, 24, 96)'
              }}
            >
              {" "}
              Available in After implement Instant messaging edition
            </Card>
 </Col>
 </Row>
</div>
  )
}

export default Home