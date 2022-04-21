import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import  axios  from 'axios'
import type { RootState } from '../app/store'
import { supplier_I, supplier_list_I } from '../Interfaces/supplierinterface'
import { add_supplier_err, add_supplier_succ } from '../utils/notifications/supplier'






const initialState:supplier_list_I={
  supplier_list:[]
}
  
export const supplier_get = createAsyncThunk('supplier_get', async () => {
    console.log('supplier_get')
      const res=await axios.get('http://localhost:4020/supplier/getall',{ withCredentials: true })
      console.log(res.data.data);
      return res.data.data
   
    
  })

  export const supplier_adding = createAsyncThunk('sell_adding', async (add_supplier:supplier_I) => {
    console.log('sell_adding',add_supplier)
      const res=await axios.post('http://localhost:4020/supplier/create',{...add_supplier},{ withCredentials: true })
      console.log(res.data.data) 
     if(res.status === 200){
      add_supplier_succ()
     }else{
      add_supplier_err()
     }
     return res.data.data    
  })

  export const supplier_edit = createAsyncThunk('supplier_edit', async (add_supplier:supplier_I) => {
    console.log('supplier_edit',add_supplier)
      const res=await axios.put(`http://localhost:4020/supplier/edit/${add_supplier._id}`,{...add_supplier},{ withCredentials: true })
      console.log(res.data.data) 
     if(res.status === 200){
      add_supplier_succ()
     }else{
      add_supplier_err()
     }
     return res.data.data    
  })
  export const supplier_delete = createAsyncThunk('supplier_delete', async (_id:string) => {
    console.log('supplier_delete',_id)
      const res=await axios.delete(`http://localhost:4020/supplier/delete/${_id}`,{ withCredentials: true })
      console.log(res.data.data) 
     if(res.status === 200){
     // add_supplier_succ()
     }else{
      //add_supplier_err()
     }
     return res.data.data    
  })

export const supplierSlice = createSlice({
  name: 'supplier',
 
  initialState,
  reducers: {

  },
  extraReducers:(builder)=>{
    builder.addCase(supplier_get.pending,(state,action)=>{
      
    })
    builder.addCase(supplier_get.fulfilled,(state,action)=>{
      state.supplier_list=action.payload
    })
    builder.addCase(supplier_get.rejected,(state,action)=>{
    })
    builder.addCase(supplier_adding.pending,(state,action)=>{
      
    })
    builder.addCase(supplier_adding.fulfilled,(state,action)=>{
      state.supplier_list.push(action.payload)
    })
    builder.addCase(supplier_adding.rejected,(state,action)=>{
    })
    builder.addCase(supplier_edit.pending,(state,action)=>{
      
    })
    builder.addCase(supplier_edit.fulfilled,(state,action)=>{
      state.supplier_list=state.supplier_list.map((supl)=>{
        if(supl._id == action.payload._id){ 
          return action.payload
        }
        else{
          return supl
        }
      })
    })
    builder.addCase(supplier_edit.rejected,(state,action)=>{
    })
    builder.addCase(supplier_delete.pending,(state,action)=>{
      
    })
    builder.addCase(supplier_delete.fulfilled,(state,action)=>{
      state.supplier_list=state.supplier_list.filter((supl)=> supl._id !== action.payload._id)
    })
    builder.addCase(supplier_delete.rejected,(state,action)=>{
    })
 
  }
})


export default supplierSlice.reducer