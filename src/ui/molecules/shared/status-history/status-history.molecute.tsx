import { CoxIcon } from "c4u-web-components";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { format } from "date-fns";
import {
  BarStatus,
  InfoStatus,
  SvgBackgroud,
  TitleStatus,
  WrapperStatus,
  WrapperStatusItems,
} from "./status-history.style";

interface IProps {
  items: StatusHistoryProps[];
}
export interface StatusHistoryProps {
  status: string;
  step: "done" | "pending" | "warning";
  dateTime?: Date;
  node?: React.ReactNode | JSX.Element;
}

export const StatusHistory: React.FC<IProps> = (parameters) => {
  const [props, setProps] = useState(parameters.items);
  useEffect(() => setProps(parameters.items), [parameters.items]);

  return (
    <WrapperStatus>
      <Container fluid>
        <Row>
          {props.map((m, i) => (
            <Col key={`Col-${i}`} md className={"m-0 p-0"}>
              <WrapperStatusItems key={`WrapperStatusItems-${i}`}>
                <TitleStatus key={`TitleStatus-${i}`}>{m.status}</TitleStatus>
                <SvgBackgroud>
                  {m.step === "done" && <CoxIcon name={"confirmation"} />}
                  {m.step === "pending" && (
                    <CoxIcon key={`CoxIcon-${i}`} name={"atention-disabled"} />
                  )}
                  {m.step === "warning" && <CoxIcon name={"atention"} />}
                </SvgBackgroud>
                {m.node ? (
                  m.node
                ) : (
                  <>
                    <InfoStatus key={`InfoStatus-${i}`}>
                      {!!m.dateTime
                        ? format(m.dateTime, "dd/MM/yyyy HH:mm")
                        : ""}
                    </InfoStatus>
                  </>
                )}

                <BarStatus
                  last={i + 1 === props.length}
                  className={"d-none d-md-flex"}
                  active={m.step === "done"}
                  key={`BarStatus-${i}`}
                >
                  &nbsp;
                </BarStatus>
              </WrapperStatusItems>
            </Col>
          ))}
        </Row>
      </Container>
    </WrapperStatus>
  );
};
