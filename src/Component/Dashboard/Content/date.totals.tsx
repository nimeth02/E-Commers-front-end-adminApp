import { Button, Calendar, Card, Col, DatePicker, Popover, Row } from "antd";
import React, { useEffect, useState } from "react";
import "../style.css";
import moment from 'moment';
import { get_total } from "../../../features/dashboard";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
interface content {
  admin: string;
  from: string;
  to: string;
  setfrom: React.Dispatch<React.SetStateAction<string>>
  setto: React.Dispatch<React.SetStateAction<string>>
}
const Datetotals = ({ admin,from,to,setfrom,setto }: content) => {
  const dispatch=useAppDispatch()
  const total = useAppSelector((state) => state.dashboard.total);
  const [datechange, setdatechange] = useState(false);
  
  const dateFormat = 'YYYY/MM/DD';

  const handleFrom =(date:any, dateString:string)=> {
   // console.log(date, dateString);
    setfrom(dateString)
    setdatechange(true)
  }
  
  const handleTo =(date:any, dateString:string)=> {
    console.log(date, dateString);
    setto(dateString)
    setdatechange(true)
  }
 

  return (
    <div>
      {" "}
      <Row>
        <Card
          bordered={false}
          style={{
            width: "96%",
            margin: "1.5% auto",
            borderRadius: "5px",
            height: "auto",
          }}
        >
          {/* buttonbuttonbuttonbuttonbuttonbuttonbuttonbuttonbuttonbuttonbuttonbutton */}
          <Row
            style={{
              textAlign: "center",
              marginBottom: "4%",
            }}
          >
            <Col span={12}>
              <DatePicker defaultValue={moment(new Date(), dateFormat)} onChange={handleFrom} />
                <Button type="primary">
                  From
                </Button>
              
            </Col>
            <Col span={12}>
            <DatePicker defaultValue={moment(new Date(), dateFormat)}  onChange={handleTo} />
                <Button type="primary" >
                  To
                </Button>
             
            </Col>
          </Row>
          {/* buttonbuttonbuttonbuttonbuttonbuttonbuttonbuttonbuttonbuttonbuttonbutton */}
        <Row>
            <Col span={12}>
              {" "}
              <Card
                bordered={false}
                style={{
                  width: "96%",
                  margin: " auto",
                  borderRadius: "5px",
                  height: "auto",
                  backgroundColor: "rgb(20, 33, 96)",
                  color: "white",
                }}
              >
                <Row>
                  <Col span={12}>Total Amount :</Col>
                  <Col span={12}>{total ? total.totalAmount : 0 }</Col>
                </Row>
              </Card>
            </Col>
            <Col span={12}>
              {" "}
              <Card
                bordered={false}
                style={{
                  width: "96%",
                  margin: "auto",
                  borderRadius: "5px",
                  height: "auto",
                  backgroundColor: "rgb(20, 33, 96)",
                  color: "white",
                }}
              >
                <Row>
                  <Col span={12}>Total Billed :</Col>
                  <Col span={12}>{total ? total.billCount : 0 }</Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Card>
      </Row>
    </div>
  );
};

export default Datetotals;
