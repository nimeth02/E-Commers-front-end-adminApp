import { Col, Row } from 'antd'
import React, { useState } from 'react'
import Content from './Content/content'
import Sidebar from './sidebar'
import './style.css'
const Dashboard = () => {
  const [admin,setadmin]=useState('All')
  return (
    <div><Row className='category_row'>
    <Col span={5} className='dashboard_col_side'>
      <Sidebar admin={admin} setadmin={setadmin}/>
    </Col>
    <Col span={19} className='dashboard_col'>
      <Content  admin={admin} setadmin={setadmin}/>
    </Col>
    </Row> </div>
  )
}

export default Dashboard