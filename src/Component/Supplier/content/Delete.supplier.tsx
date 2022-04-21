import { InfoCircleOutlined } from "@ant-design/icons";
import { Modal, Form, Input, Alert, Row, Col } from "antd";
import React, { useState } from "react";
import { useAppDispatch } from "../../../app/hook";
import { supplier_delete } from "../../../features/supplierslice";
interface deletesupplier {
    deleteVisible: boolean;
  setdeleteVisible: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  _id: string | undefined;
}



const Deletesupplier = ({deleteVisible,setdeleteVisible,_id,name}:deletesupplier) => {
  const dispatch=useAppDispatch()
    const handlesubmit = () => {
      dispatch(supplier_delete(_id as string))
      setdeleteVisible(false)
    };
    return (
      <div>
        <Modal
          title={<h2>Add Supplier</h2>}
          visible={deleteVisible}
          onOk={handlesubmit}
          onCancel={() => setdeleteVisible(false)}
        >
          <Alert
        
        message={<Row><Col span={2} ><h2><InfoCircleOutlined /></h2></Col><Col><h3>Supplier:  {name}</h3></Col></Row>}
        type="error"
       
      />
        </Modal>
      </div>
    );
}

export default Deletesupplier