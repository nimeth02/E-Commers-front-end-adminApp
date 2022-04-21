import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import "./style.css";
import { Col, Row } from "antd";
import Content from "./Content/content";
import { useAppDispatch } from "../../app/hook";
import { product_get } from "../../features/productslice";
import { categories_get } from "../../features/categoryslice";
import { button_state, filter_state } from "../../Interfaces/productInterface";

const initialbuttons: button_state = {
  filter: false,
  all: true,
};
const initialfilter: filter_state = {
  instock: true,
  outstock: true,
  range: [0, 100000],
};
const Product = () => {
  const dispatch = useAppDispatch();
  const [buttons_state, set_buttons_state] = useState(initialbuttons);
  const [filter_state, set_filter_state] = useState(initialfilter);

  const handlefilter = () => {
    set_buttons_state({ ...buttons_state, filter: true, all: false });
  };
  const handleall = () => {
    set_buttons_state(initialbuttons);
    set_filter_state(initialfilter)
  };

  useEffect(() => {
    console.log("product useEffect");

    dispatch(product_get({buttons_state,filter_state}));
    dispatch(categories_get());
  }, [buttons_state]);

console.log(buttons_state,'---',filter_state);

  return (
    <div>
      <Row className="">
        <Col span={5} className="product_col_side">
          <Sidebar
            filter_state={filter_state}
            set_filter_state={set_filter_state}
            handleall={handleall}
            handlefilter={handlefilter}
          />
        </Col>
        <Col span={19} className="product_col">
          <Content />
        </Col>
      </Row>
    </div>
  );
};

export default Product;
