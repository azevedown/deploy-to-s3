import { ButtonPrimary, CoxIcon } from "c4u-web-components";
import { format } from "date-fns";
import { parseISO } from "date-fns/esm";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { paths } from "../../../../constants";
import { InspectionStatus } from "../../../../models";
import {
  BarStatus,
  InfoStatus,
  SvgBackgroud,
  TitleStatus,
  WrapperStatus,
  WrapperStatusItems,
} from "./status-inspection-history.style";

interface IProps {
  id: number;
  statusHistory?: InspectionStatus[];
}

export const StatusInspectionHistory: React.FC<IProps> = (props) => {
  const { t } = useTranslation();

  const getState = (status: number): string => {
    /*
    Registered,
    PaidOut,
    PaymentDeclined,
    Approved,
    Refused,
    ApprovedAppointments
    */
    switch (status) {
      default:
      case 0:
        return t("Order completed");
      case 1:
        return t("Payment made");
      case 2:
        return t("Payment refused");
      case 3:
        return t("Report approved");
      case 4:
        return t("Report refused");
      case 5:
        return t("Report approved with appointments");
    }
  };

  const getDate = (date: any) => {
    try {
      const dateParsed = parseISO(date);
      return format(dateParsed, "dd/MM/yyyy HH:mm");
    } catch (error) {
      return "";
    }
  };
  const history = useHistory();

  return (
    <WrapperStatus>
      <Container fluid>
        <Row>
          {props.statusHistory?.map((m, i) => (
            <Col key={i} md className={"m-0 p-0"}>
              <WrapperStatusItems>
                <TitleStatus>{getState(m.status)}</TitleStatus>
                <SvgBackgroud>
                  <CoxIcon name={"confirmation"} />
                </SvgBackgroud>
                {m.status === 0 ? (
                  <ButtonPrimary
                    sizex={"md"}
                    onClick={() =>
                      history.push(
                        `${paths
                          .Inspection()
                          .replace(":id", props.id.toString())}`
                      )
                    }
                  >
                    Efeturar pagamento
                  </ButtonPrimary>
                ) : (
                  <InfoStatus>{getDate(m.date)}</InfoStatus>
                )}

                <BarStatus
                  last={
                    props.statusHistory && props.statusHistory.length - 1 === i
                  }
                  className={"d-none d-md-flex"}
                  active={true}
                >
                  &nbsp;
                </BarStatus>
              </WrapperStatusItems>
            </Col>
          ))}
          {/* <Col md className={"m-0 p-0"}>
            <WrapperStatusItems>
              <TitleStatus>Pedido Realizado</TitleStatus>
              <SvgBackgroud>
                <CoxIcon name={"confirmation"} />
              </SvgBackgroud>
              <InfoStatus>22/08/2020 08:30</InfoStatus>
              <BarStatus className={"d-none d-md-flex"} active={true}>
                &nbsp;
              </BarStatus>
            </WrapperStatusItems>
          </Col>
          <Col md className={"m-0 p-0"}>
            <WrapperStatusItems>
              <TitleStatus>Pedido Realizado</TitleStatus>
              <SvgBackgroud>
                <CoxIcon name={"confirmation"} />
              </SvgBackgroud>
              <InfoStatus>22/08/2020 08:30</InfoStatus>
              <BarStatus className={"d-none d-md-flex"} active={true}>
                &nbsp;
              </BarStatus>
            </WrapperStatusItems>
          </Col>
          <Col md className={"m-0 p-0"}>
            <WrapperStatusItems>
              <TitleStatus>Pagamento Pendente</TitleStatus>
              <SvgBackgroud>
                <CoxIcon name={"atention"} />
              </SvgBackgroud>
              <ButtonPrimary sizex={"md"}>Efeturar pagamento</ButtonPrimary>
              <BarStatus className={"d-none d-md-flex"} active={false}>
                &nbsp;
              </BarStatus>
            </WrapperStatusItems>
          </Col>
          <Col md className={"m-0 p-0"}>
            <WrapperStatusItems>
              <TitleStatus>Vistoria Pendente</TitleStatus>
              <SvgBackgroud>
                <CoxIcon name={"atention-disabled"} />
              </SvgBackgroud>
              <InfoStatus></InfoStatus>
              <BarStatus className={"d-none d-md-flex"} active={false}>
                &nbsp;
              </BarStatus>
            </WrapperStatusItems>
          </Col>
          <Col md className={"m-0 p-0"}>
            <WrapperStatusItems>
              <TitleStatus>Vistoria Pendente</TitleStatus>
              <SvgBackgroud>
                <CoxIcon name={"atention-disabled"} />
              </SvgBackgroud>
              <InfoStatus></InfoStatus>
              <BarStatus className={"d-none d-md-flex"} active={false}>
                &nbsp;
              </BarStatus>
            </WrapperStatusItems>
          </Col>
          <Col md className={"m-0 p-0"}>
            <WrapperStatusItems>
              <TitleStatus>Vistoria Pendente</TitleStatus>
              <SvgBackgroud>
                <CoxIcon name={"atention-disabled"} />
              </SvgBackgroud>
              <InfoStatus></InfoStatus>
              <BarStatus last className={"d-none d-md-flex"} active={false}>
                &nbsp;
              </BarStatus>
            </WrapperStatusItems>
          </Col> */}
        </Row>
      </Container>
    </WrapperStatus>
  );
};
