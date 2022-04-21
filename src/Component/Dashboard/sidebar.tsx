import { Button, List } from 'antd'
import Search from 'antd/lib/input/Search'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hook'
import { all_admin_get } from '../../features/dashboard'
interface sidebar {
  admin:string
  setadmin: React.Dispatch<React.SetStateAction<string>>
}
const Sidebar = (props:sidebar) => {
  const dispatch=useAppDispatch()
  const userAdmins=useAppSelector(state => state.dashboard.admin_list)
  useEffect(()=>{
    dispatch(all_admin_get())
  },[])


  
  return (
    <div> <Search className='category_search' placeholder="  Category" size='large' enterButton />
   
   <div className="dashboard_admin_list">
   <Button  onClick={()=>props.setadmin('All')} style={{marginBottom:'15%'}} className='dashboard_admin_one' type='primary'>All</Button>
    {
      userAdmins.map((useradmin,i)=>{
       return <Button key={useradmin._id} onClick={()=>props.setadmin(useradmin._id)}  className='dashboard_admin_one' type='primary'>{useradmin.name}</Button>
      })
    }
  
    </div> 
    </div>
  )
}

export default Sidebar