import React, { useState } from "react";
import { Card, Avatar, Rate, Popover, Button } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Gmailmodal from "./gmailmodal";
import Editsupplier from "./Edit.supplier";
import Deletesupplier from "./Delete.supplier";
import { supplier_I } from "../../../Interfaces/supplierinterface";

const { Meta } = Card;
const Suppliercard = ({name,email,mobilenumber,_id}:supplier_I) => {
  const [gmailVisible, setgmailVisible] = useState(false);
  const [editVisible, seteditVisible] = useState(false);
  const [deleteVisible, setdeleteVisible] = useState(false);
  
  
  const content = (
    <div
      style={{ width: 150, display: "flex", justifyContent: "space-between" }}
      
   >
      <Button style={{ backgroundColor: "orange", color: "white" }} onClick={()=>seteditVisible(true)}>
        Edit
      </Button>
      <Button style={{ backgroundColor: "red", color: "white" }}
       onClick={()=>setdeleteVisible(true)}
      >
          Delete
          </Button>
    </div>
  );
  return (
    <div className="supplier_card">
      <Card
        size="default"
        style={{ width: 200,
          // border:'2px solid rgb(4, 14, 48)' 
          // backgroundColor:'rgb(4, 14, 48)'
          boxShadow: '0 1.3px 17px -10px rgb(4, 14, 48)'

        }}
        cover={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "10%",
            }}
          >
            <Avatar size={64} icon={<UserOutlined style={{}}/>} />
          </div>
        }
        actions={[
          <Popover content={content}>
            <SettingOutlined key="setting" />,
          </Popover>,
          <div className="mail" onClick={() => setgmailVisible(true)}>
            {" "}
            <MailOutlined style={{color:'green'}}/>
          </div>,
        ]}
      >
        <Meta
          title={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "orange",
              }}
            >
              {name}
            </div>
          }
          description={<><h3 style={{textAlign:'center'}}>{email}</h3><h4 style={{color:'grey',textAlign:'center'}}>{mobilenumber}</h4></>}
        />
      </Card>
      ,{gmailVisible && <Gmailmodal />}
      {editVisible && <Editsupplier editVisible={editVisible} seteditVisible={seteditVisible} 
      editname={name} editemail={email} editmobilenumber={mobilenumber} edit_id={_id}
       />}
      {deleteVisible && <Deletesupplier deleteVisible={deleteVisible} setdeleteVisible={setdeleteVisible} _id={_id} name={name}/>}
    </div>
  );
};

export default Suppliercard;
