import { Modal, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../app/hook";
import { supplier_edit } from "../../../features/supplierslice";
interface editsupplier {
    editVisible: boolean;
  seteditVisible: React.Dispatch<React.SetStateAction<boolean>>;
  editname:string
  edit_id:string | undefined
editemail:string
editmobilenumber:string 
}
interface initial_add_supplier {
  name: string;
  email: string;
  mobilenumber: string;
  _id:string | undefined 
}
const initialState: initial_add_supplier = {
  name: "",
  email: "",
  mobilenumber: "",
  _id:""
};

const Editsupplier = ({editVisible,seteditVisible,editname,edit_id,editemail,editmobilenumber}:editsupplier) => {
  const dispatch=useAppDispatch()  
  
  const [add_supplier, setadd_supplier] = useState(initialState);
    const { name, email, mobilenumber } = add_supplier;
    useEffect(()=>{
      console.log('useeffct supp',editname);
      
      setadd_supplier({ ...add_supplier, name: editname,email:editemail,mobilenumber:editmobilenumber,_id:edit_id })
    },[])
    const handlesubmit = () => {
      console.log( add_supplier);
      dispatch(supplier_edit(add_supplier))
      seteditVisible(false)
    };
    const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let { name, value } = e.target;
      setadd_supplier({ ...add_supplier, [name]: value });
    };
    return (
      <div>
        <Modal
          title={<h2>Add Supplier</h2>}
          visible={editVisible}
          onOk={handlesubmit}
          onCancel={() => seteditVisible(false)}
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
}

export default Editsupplier