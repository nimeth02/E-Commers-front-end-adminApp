import { Button, Tree } from 'antd';
import React, { useState } from 'react'
import { useAppSelector } from '../../../app/hook';
import { Category } from '../../../Interfaces/categoryInterface';
import Suppliercard from './supplier.card';
import '../style.css'
import Addsupplier from './Add.supplier';


const Content = () => {
  const[addvisible,setaddvisible]=useState(false)
  const supplier=useAppSelector(state => state.supplier)
  console.log(supplier);
  
  return (<>
  <p style={{float:'right',margin:'5%'}}><Button type="primary" onClick={()=>setaddvisible(true)} >Add supplier</Button></p>
 <div className="supplier_card_list">
   {supplier.supplier_list.map((supplier)=>{
    return<Suppliercard key={supplier._id} _id={supplier._id} name={supplier.name} email={supplier.email} mobilenumber={supplier.mobilenumber}/>
   })}
   
  </div> 
  {addvisible && <Addsupplier addvisible={addvisible} setaddvisible={setaddvisible}/>}
  </>
  )
}

export default Content