import { Modal, Form, Input } from "antd";
import React, { useState } from "react";
import { useAppDispatch } from "../../../app/hook";
import { supplier_adding } from "../../../features/supplierslice";
import {supplier_I} from "../../../Interfaces/supplierinterface"
interface addsupplier {
  addvisible: boolean;
  setaddvisible: React.Dispatch<React.SetStateAction<boolean>>;
}
interface initial_add_supplier {
  name: string;
  email: string;
  mobilenumber: string;
}
const initialState:supplier_I = {
  name: "",
  email: "",
  mobilenumber: "",
};
const Addsupplier = ({ addvisible, setaddvisible }: addsupplier) => {
  const dispatch=useAppDispatch()
  const [add_supplier, setadd_supplier] = useState(initialState);
  const { name, email, mobilenumber } = add_supplier;
  const handlesubmit = () => {
    console.log( add_supplier);
    dispatch(supplier_adding(add_supplier))
    setaddvisible(false)
  };
  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setadd_supplier({ ...add_supplier, [name]: value });
  };
  return (
    <div>
      <Modal
        title={<h2>Add Supplier</h2>}
        visible={addvisible}
        onOk={handlesubmit}
        onCancel={() => setaddvisible(false)}
      >
        <Form>
          <Form.Item
            label="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input name="name" value={name} onChange={onchange} />
          </Form.Item>
          <Form.Item
            label="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input name="email" value={email} onChange={onchange} />
          </Form.Item>
          <Form.Item
            label="mobilenumber"
            rules={[
              { required: true, message: "Please input your Mobilenumber!" },
            ]}
          >
            <Input
              name="mobilenumber"
              value={mobilenumber}
              onChange={onchange}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Addsupplier;
