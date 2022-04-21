import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hook'
import { supplier_get } from '../../features/supplierslice'
import Content from './content/content'
import Sidebar from './sidebar'

const Supplier = () => {
  const supplier=useAppSelector(state => state.supplier)
  const dispatch=useAppDispatch()
  useEffect(()=>{
    dispatch(supplier_get())
  },[])
  return  (
    <div><Row className='category_row'>
      <Col span={5} className='category_col_side'>
        <Sidebar />
      </Col>
      <Col span={19} className='category_col'>
        <Content />
      </Col>
      </Row>  </div>
  )
}

export default Supplier