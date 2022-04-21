import { Collapse, Divider, List } from "antd";
import React from "react";
import { useAppSelector } from "../../../app/hook";
const { Panel } = Collapse;

const Sell_list = () => {
  const sell_reports = useAppSelector((state) => state.sell.sell_report_list);
  const dates: string[] = [];
  return (
    <div
      style={{ color: "white", height: "70Vh", overflow: "auto" }}
      className="sell_list"
    >
      <Collapse defaultActiveKey={["1"]}>
        {sell_reports.map((report, i) => {
          const createat = report.createdAt.split("T")[0];
          const datepannel = () => {
            // console.log('pan');
            if (dates.includes(createat)) {
            } else {
              dates.push(createat);
              return (
                <Panel
                  style={{ backgroundColor: "orange", color: "black" }}
                  showArrow={false}
                  header={<h4>{createat}</h4>}
                  key={i}
                ></Panel>
              );
            }
          };

          return (
            <>
              {datepannel()}
              <Panel header={report.createdAt} key={report._id}>
                <h4>Total-price: Rs {report.totalprice}</h4>

                <div style={{ height: "70px", overflow: "auto" }}>
                  <table>
                    <tr>
                      <th>Product : </th>
                      <th> Quantity</th>
                    </tr>

                    {report.sellreport &&
                      report.sellreport.map((rep) => {
                        return (
                          <tr>
                            <td>{rep.product_Id.name}</td>
                            <td style={{ textAlign: "center" }}>
                              {rep.quantity}
                            </td>
                          </tr>
                        );
                        // <p>{rep.product_Id.name} - {rep.quantity}</p>
                      })}
                  </table>
                </div>
              </Panel>
            </>
          );
        })}
      </Collapse>
    </div>
  );
};

export default Sell_list;
