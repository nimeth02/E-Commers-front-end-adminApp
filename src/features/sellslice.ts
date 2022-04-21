import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import  axios  from 'axios'
import type { RootState } from '../app/store'
import { sell_adding_I, sell_add_list_item_I, sell_list_I, sell_list_item_I, sell_report_list_item_detail } from '../Interfaces/sellInterface'
import { updateprofile } from '../Interfaces/userInterface'
import { add_sell_report_err, add_sell_report_succ } from '../utils/notifications/sell'

interface sell_initial_interface{
  sell_product_list:sell_list_item_I[]
  sell_report_list:sell_report_list_item_detail[]  
}

const initialState:sell_initial_interface={
   sell_product_list:[],
   sell_report_list:[]
}
  
export const sell_list_get = createAsyncThunk('sell_list_get', async (admin:string) => {
  //  console.log('sell_list_get')
      const res=await axios.post('http://localhost:4020/sell/getAll',{admin},{ withCredentials: true })
     // console.log(res.data.data);
      return res.data.data
   
    
  })
  export const sell_product_one = createAsyncThunk('sell_product_one', async ({productId,quantity}:sell_add_list_item_I) => {
    console.log('sell_product_one',productId,quantity)
      const res=await axios.post('http://localhost:4020/product/getone',{productId},{ withCredentials: true })
      console.log(res.data.data) 
      res.data.data.quantity=quantity 
      return res.data.data 
          
  })
  export const sell_adding = createAsyncThunk('sell_adding', async ({sell_product_list,total}:sell_adding_I) => {
    console.log('sell_adding',sell_product_list,total)
      const res=await axios.post('http://localhost:4020/sell/add',{sellreport:sell_product_list,totalprice:total},{ withCredentials: true })
      console.log(res.data.data) 
     if(res.status === 200){
      add_sell_report_succ()
     }else{
      add_sell_report_err()
     }
          
  })

export const sellSlice = createSlice({
  name: 'sell',
 
  initialState,
  reducers: {
    sellclear:(state)=>{
      state.sell_product_list=[]
    }

  },
  extraReducers:(builder)=>{
    builder.addCase(sell_product_one.pending,(state,action)=>{
      
    })
    builder.addCase(sell_product_one.fulfilled,(state,action)=>{
      state.sell_product_list.push(action.payload)
    })
    builder.addCase(sell_product_one.rejected,(state,action)=>{
    })
    builder.addCase(sell_list_get.pending,(state,action)=>{
      
    })
    builder.addCase(sell_list_get.fulfilled,(state,action)=>{
      state.sell_report_list=action.payload
    })
    builder.addCase(sell_list_get.rejected,(state,action)=>{
    })
 
  }
})
export const { sellclear } = sellSlice.actions

export default sellSlice.reducer