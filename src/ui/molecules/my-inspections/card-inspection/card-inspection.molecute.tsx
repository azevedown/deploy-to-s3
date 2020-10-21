import { CoxIcon, Img } from "c4u-web-components";
import { parseISO } from "date-fns";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  CardInspectionPaymentTemplate,
  CardInspectionReportTemplate,
  CardInspectionStatusPaymentTemplate,
  CardInspectionStatusReportTemplate,
  StatusInspectionHistory,
} from "../..";
import {
  InspectionStatus,
  StatusPayment,
  StatusReport,
} from "../../../../models";
import { SupervisaoLogo } from "./../../../assets";
import {
  BoxCardInspection,
  CarCirle,
  Content,
  Details,
  DivContent,
  DivStatus,
  StatusBarLateral,
  StatusFlyer,
  Wrapper,
  WrapperDetails,
  WrapperInspection,
} from "./card-inspection.molecute.style";

interface IProps {
  id: number;
  status: number;
  statusReport: StatusReport;
  statusPayment: StatusPayment;
  vehicleDescription: string;
  inspectionDate?: Date;
  inspectionHour: string;
  inspectionUnit: string;
  inspectionPhone: string;
  statusHistory?: InspectionStatus[];
}
export const CardInspection: React.FC<IProps> = (parameters) => {
  const { t } = useTranslation();

  const [props, setProps] = useState<IProps>();
  const [seeMore, setSeemore] = useState(false);

  useEffect(() => {
    const date = parameters.inspectionDate
      ? parameters.inspectionDate instanceof Date
        ? parameters.inspectionDate
        : parseISO(parameters.inspectionDate)
      : undefined;

    const newParameters = { ...parameters, inspectionDate: date };

    if (parameters.statusHistory?.length === 0) {
      newParameters.statusHistory = [
        {
          date: new Date(),
          status: Number(parameters.status),
        },
      ] as InspectionStatus[];
    }

    setProps(newParameters);
  }, [parameters]);

  const getStatusPaymentName = (status: StatusPayment) => {
    switch (status) {
      case StatusPayment.Refused:
        return t("Refused");
      case StatusPayment.Pending:
        return t("Pending");
      case StatusPayment.Approved:
        return t("Approved");

      default:
        return "";
    }
  };
  const getIconStatus = (status: StatusPayment) => {
    switch (status) {
      case StatusPayment.Refused:
        return "danger";
      case StatusPayment.Pending:
        return "warning";
      case StatusPayment.Approved:
        return "approved";

      default:
        return "";
    }
  };

  return (
    <>
      {!!props && (
        <BoxCardInspection>
          {props.statusReport === StatusReport.Pending && (
            <StatusFlyer status={props.statusPayment}>
              <CoxIcon name={getIconStatus(props.statusPayment)} />
              <span className={"mx-3"}>{t("Payment")}</span>
              <b>{getStatusPaymentName(props.statusPayment)}</b>
              <div>
                <CoxIcon name={"shadow-corner"} />
              </div>
            </StatusFlyer>
          )}
          <Wrapper>
            <DivStatus>
              <StatusBarLateral status={props.statusReport}>
                &nbsp;
              </StatusBarLateral>
            </DivStatus>
            <DivContent>
              <Content>
                <Container fluid className={"mb-4"}>
                  <Row>
                    <Col md={"auto"}>
                      <WrapperInspection>
                        <CarCirle>
                          <CoxIcon name={"car"} />
                        </CarCirle>
                        <Img src={SupervisaoLogo} />
                      </WrapperInspection>
                    </Col>
                    <Col md={"auto"}>
                      {props.statusReport === StatusReport.Pending ? (
                        <CardInspectionPaymentTemplate
                          vehicleDescription={props.vehicleDescription}
                          inspectionDate={props.inspectionDate}
                          inspectionHour={props.inspectionHour}
                          inspectionUnit={props.inspectionUnit}
                        />
                      ) : (
                        <CardInspectionReportTemplate
                          vehicleDescription={props.vehicleDescription}
                          inspectionDate={props.inspectionDate}
                          inspectionHour={props.inspectionHour}
                        />
                      )}
                    </Col>
                    <Col sm>
                      {props.statusReport === StatusReport.Pending ? (
                        <CardInspectionStatusPaymentTemplate
                          phone={props.inspectionPhone}
                        />
                      ) : (
                        <CardInspectionStatusReportTemplate
                          status={props.statusReport}
                        />
                      )}
                    </Col>
                  </Row>
                </Container>

                <WrapperDetails onClick={() => setSeemore(!seeMore)}>
                  <Details close={seeMore}>{t("More details")}</Details>
                  <CoxIcon
                    name={!seeMore ? "arrow-circle" : "arrow-circle-closed"}
                  />
                </WrapperDetails>
                {seeMore && (
                  <>
                    <hr />
                    <Row>
                      <Col>
                        <StatusInspectionHistory
                          id={props.id}
                          statusHistory={props.statusHistory}
                        />
                      </Col>
                    </Row>
                  </>
                )}
              </Content>
            </DivContent>
          </Wrapper>
        </BoxCardInspection>
      )}
    </>
  );
};
