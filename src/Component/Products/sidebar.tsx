import { Button,  Checkbox, Divider, Input, Row, Slider } from 'antd';
import React from 'react'
import { filter_state } from '../../Interfaces/productInterface';
const { Search } = Input;

interface pd_props{
  filter_state:filter_state
  set_filter_state: React.Dispatch<React.SetStateAction<filter_state>>
  handleall:()=> void
  handlefilter:()=> void
}

const Sidebar = (props:pd_props) => {
  const {filter_state,set_filter_state,handleall,handlefilter}=props
  const handle_instock=(e:any)=>{
    console.log('instock',e.target);
    set_filter_state({...filter_state,instock:e.target.checked})
  }
  const handle_outofstock=(e:any)=>{
    console.log('outstock',e.target);
    set_filter_state({...filter_state,outstock:e.target.checked})
  }
  const handle_range=(value:any)=>{
    console.log('range',value);
    set_filter_state({...filter_state,range:value})
  }
  return (
    
    
    <div className='sidebar_div_product'> <>
   
    <Search className='product_search' placeholder="Products" size='large' enterButton />
    <div className='filter_div_product'>
    
      <div className="checkbox_div_product_filter">
        <p>Price :</p>
      <Slider   range={{ draggableTrack: true }} max={100000} step={1} onChange={handle_range}  value={filter_state.range} />
        <Row>
        <Checkbox  className="checkbox_product_filter" checked={filter_state.instock} onChange={handle_instock}>In stock</Checkbox>
        </Row>
        <Row>
        <Checkbox className="checkbox_product_filter" checked={filter_state.outstock} onChange={handle_outofstock}>Out of stock</Checkbox>
        </Row>

    
      </div>
      
    <Button type="primary" shape="round" size={'large'} onClick={handlefilter}>
          filter
        </Button>
        <Button type="primary" shape="round" size={'large'}  onClick={handleall}>
          All
        </Button>
    </div>
   
  </></div>
  )
}

export default Sidebar







