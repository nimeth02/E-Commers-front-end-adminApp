import { Card, Row, Col, Popover } from "antd";
import React from "react";
import { useAppSelector } from "../../../app/hook";

const Openclose = ({admin}:{admin:string}) => {
  const atendence = useAppSelector((state) => state.dashboard.atendence_list);
  //console.log(atendence.atendence);
  const title = () => {
    return (
      <Card
        bordered={false}
        style={{
          width: "500px",
          margin: "2% auto",
          borderRadius: "5px",
          height: "",
          textAlign: "center",
        }}
      > 
        {" "}
        <Row>
          <Col span={12}>
            <div className="open">Opens At</div>
          </Col>
          <Col span={12}>
            <div className="close">Closed At </div>{" "}
          </Col>
        </Row>
      </Card>
    );
  };

  const content = () => {
    return (
      <Card
        bordered={false}
        style={{
          width: "500px",
          margin: " auto",
          borderRadius: "5px",
          height: "",
          textAlign: "center",
          maxHeight: "200px",
          overflow: "auto",
        }}
      >
        {atendence.atendence.map((attend) => {
          return (
            <div key={attend._id}>
              <Row>
                <div className="day">{attend.Date}</div>
              </Row>

              <Row>
                <Col span={12}>
                  {new Date(attend.opensAt).toLocaleTimeString()}
                </Col>
                <Col span={12}>
                  {" "}
                  {attend.closedAt
                    ? new Date(
                        attend.closedAt
                      ).toLocaleTimeString()
                    : "Not yet"}
                </Col>
              </Row>
            </div>
          );
        })}
      </Card>
    );
  };

  return (
    <>
      {atendence && (
        <Row>
          <Popover content={content} title={title}>
            <Card
              bordered={false}
              style={{
                width: "97%",
                margin: "1% auto",
                borderRadius: "5px",
                padding:0,
                height: "auto",
                textAlign: "center",
              }}
            >
              {" "}
              {admin == 'All' && <div className="specialadmin" style={{
                borderRadius: "5px",
                textAlign: "center",
              }}>Super Admin</div>}
              <Row>
                <Col span={12}>
                  <div className="open">Opens At : </div>
                  {atendence.atendence.length > 0 &&
                    new Date(
                      atendence.atendence[
                        atendence.atendence.length - 1
                      ].opensAt
                    ).toLocaleTimeString()}
                </Col>
                <Col span={12}>
                  {" "}
                  <div className="close">Closed At : </div>
                  {atendence.atendence.length > 0 &&
                  atendence.atendence[atendence.atendence.length - 1].closedAt
                    ? new Date(
                        atendence.atendence[
                          atendence.atendence.length - 1
                        ].closedAt
                      ).toLocaleTimeString()
                    : "Not yet"}
                </Col>
              </Row>
              <Row>
                <div style={{margin:' 0 40%',textAlign:'center'}} className="day">{atendence.atendence.length > 0 &&  atendence.atendence[
                        atendence.atendence.length - 1
                      ].Date}</div>
              </Row>
            </Card>
          </Popover>
        </Row>
      )}
    </>
  );
};

export default Openclose;
