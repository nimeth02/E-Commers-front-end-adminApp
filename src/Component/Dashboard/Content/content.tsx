import { Button, Calendar, Card, Col, Progress, Row, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../app/hook";
import { get_total, openclose } from "../../../features/dashboard";
import { sell_list_get } from "../../../features/sellslice";
import Datetotals from "./date.totals";
import Openclose from "./open.close";
import Sell_list from "./sell_list";
interface content {
  admin: string;
  setadmin: React.Dispatch<React.SetStateAction<string>>;
}

const Content = (props: content) => {
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(openclose(props.admin))
    dispatch(sell_list_get(props.admin));
    
  
  }, [props.admin]);
  useEffect(() => {
    dispatch(get_total({admin:props.admin,from,to}))
    
  
  }, [props.admin,to,from]);
  return (
    <div>
      <Row className="">
        <Col span={15} className="">
          <Row>
            <Card
              bordered={false}
              style={{
                width: "97%",
                margin: "2% auto",
                borderRadius: "5px",
                height: "180px",
                textAlign: "center",
                color: "orange",
              }}
            >
              {" "}
              Available in After implement Instant messaging edition
            </Card>
          </Row>
          {/* date total bill ///////////////////////////////////////////////////////////////////////*/}
       <Datetotals admin={props.admin} from={from} to={to} setfrom={setfrom} setto={setto}/>
     
        <Openclose admin={props.admin}/>
        </Col>
        <Col span={9}>
          {" "}
          <Card
            bordered={false}
            style={{
              width: "97%",
              margin: "3% auto",
              borderRadius: "5px",
              height: "86Vh",
            }}
          >
            <h3 style={{ textAlign: "center", color: "orange" }}>Sell List</h3>
            <Sell_list />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Content;
