import { notification } from "antd";
export const add_supplier_err = (placement:any='top') => {
    notification.error({
      message:"Supplier not billed",
      placement,
    });
  };
  export const add_supplier_succ = (placement:any='top') => {
    notification.success({
      message:'Supplier Added Successfully ',
      placement,
      duration:1
    });
  };