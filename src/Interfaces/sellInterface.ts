export interface sell_add_list_item_I{
    productId:string,
    quantity:number,
   
}

export interface sell_list_item_I extends sell_add_list_item_I{
  _id:string
  name:string,
  price:number,
  toatal:number
   quantity:number
}
export interface sell_adding_I {
  sell_product_list:sell_list_item_I[]
    total:number
 }

export interface sell_list_item_product_detail {
  _id:string
  name:string
  price:string 
 }
 export interface sell_list_item_sellreport_item_detail {
  _id:string
  quantity:number
  product_Id:sell_list_item_product_detail 
 }
 export interface sell_report_list_item_detail {
  _id:string
  totalprice:number
  sellreport:sell_list_item_sellreport_item_detail[]
  adminId:string
  createdAt:string 
 }
 export interface sell_list_I {
  sell_product_list:sell_list_item_I[]
  
 }

 
