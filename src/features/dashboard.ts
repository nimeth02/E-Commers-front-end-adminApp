import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import  axios  from 'axios'
import type { RootState } from '../app/store'
import { dashboard_admin, dashboard_admin_list } from '../Interfaces/dashboardinterface'
import { sell_adding_I, sell_add_list_item_I, sell_list_I } from '../Interfaces/sellInterface'
import { updateprofile } from '../Interfaces/userInterface'
import { add_sell_report_err, add_sell_report_succ } from '../utils/notifications/sell'

interface initial_Interface extends dashboard_admin{

}

const initialState:initial_Interface={
    admin_list:[],
    total:{
      totalAmount:0,
      billCount:0
    },
    atendence_list:{
      adminId:'',
      atendence:[]
    }
}
  
export const all_admin_get = createAsyncThunk('all_admin_get', async () => {
  //  console.log('all_admin_get slice')
      const res=await axios.get('http://localhost:4020/userAdmin/dashboard/allusers',{ withCredentials: true })
      //console.log(res.data.data);
      return res.data.data
   
    
  })
  export const get_total = createAsyncThunk('get_total', async ({admin,from,to}:{admin:string,from:string,to:string}) => {
    console.log('get_total slice',admin,from,to)
      const res=await axios.post('http://localhost:4020/sell/gettotals',{admin,from,to},{ withCredentials: true })
      //console.log(res.data.data);
      return res.data.data
   
    
  })
  export const openclose = createAsyncThunk('openclose', async (admin:string) => {
    console.log('openclose slice')
      const res=await axios.post('http://localhost:4020/employee/atendence',{admin},{ withCredentials: true })
      console.log(res.data.data);
      return res.data.data
   
    
  })

export const dashboardSlice = createSlice({
  name: 'dashboard',
 
  initialState,
  reducers: {

  },
  extraReducers:(builder)=>{
    builder.addCase(all_admin_get.pending,(state,action)=>{
      
    })
    builder.addCase(all_admin_get.fulfilled,(state,action)=>{
      state.admin_list=action.payload
    })
    builder.addCase(all_admin_get.rejected,(state,action)=>{
    })
    builder.addCase(openclose.pending,(state,action)=>{
      
    })
    builder.addCase(openclose.fulfilled,(state,action)=>{
    state.atendence_list=action.payload
    })
    builder.addCase(openclose.rejected,(state,action)=>{
    })
    builder.addCase(get_total.pending,(state,action)=>{
      
    })
    builder.addCase(get_total.fulfilled,(state,action)=>{
    state.total=action.payload
    })
    builder.addCase(get_total.rejected,(state,action)=>{
    })
  
  
 
  }
})


export default dashboardSlice.reducer