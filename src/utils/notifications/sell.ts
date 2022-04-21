import { notification } from "antd";
export const add_sell_report_err = (placement:any='top') => {
    notification.error({
      message:"sell report not billed",
      placement,
    });
  };
  export const add_sell_report_succ = (placement:any='top') => {
    notification.success({
      message:'sell report Added Successfully and Bill is Being printing',
      placement,
      duration:1
    });
  };