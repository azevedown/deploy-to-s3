import {
  ButtonPrimary,
  ButtonSecondary,
  CoxIcon,
  NumberHelper,
} from "c4u-web-components";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  BoxResumeEvaluation,
  WrapperResume,
  IconCircle,
  InfoInspection,
  BoxResumeValue,
  SectionTitle,
  TitleInspection,
  VehicleDataInfo,
  VehicleDataInfoDescription,
  VehicleDataInfoTitle,
  WrapperBoxCheckout,
  DivWrapperSpace,
  WrapperInpectionInfo,
  ColInspectionResume,
  ColBorder,
  IconCircleCalendar,
} from "./checkout-inspection.molecute.style";

interface IProps {
  id: number;
  vehicleDescription: string;
  plate: string;
  inpectionTime: string;
  inspectionUnit: string;
  inspectionAddress: string;
  inspectionPlan: string;
  inspectionValue: number;
  date: Date;
  loading: boolean;
  onClickChangeData: () => void;
  onClickChangeInspection: () => void;
  onClickFinish?: () => void;
}
export const CheckoutInspection: React.FC<IProps> = (parameters) => {
  const { t } = useTranslation();

  const [props, setProps] = useState(parameters);

  useEffect(() => setProps(parameters), [parameters]);

  return (
    <WrapperBoxCheckout>
      <Row>
        <ColBorder md={6}>
          <DivWrapperSpace>
            <Row>
              <Col sm={2}>
                <IconCircle>
                  <CoxIcon name={"car"} />
                </IconCircle>
              </Col>
              <Col sm={10}>
                <VehicleDataInfo>
                  <div>
                    <VehicleDataInfoTitle>
                      {t("Vehicle registered")}
                    </VehicleDataInfoTitle>
                    <VehicleDataInfoDescription>
                      {props.vehicleDescription}
                    </VehicleDataInfoDescription>
                  </div>
                  <div>
                    <VehicleDataInfoTitle>{t("Plate")}</VehicleDataInfoTitle>
                    <VehicleDataInfoDescription>
                      {props.plate}
                    </VehicleDataInfoDescription>
                  </div>
                </VehicleDataInfo>
              </Col>
            </Row>
          </DivWrapperSpace>
          <Row>
            <ColInspectionResume>
              <DivWrapperSpace>
                <Row>
                  <Col sm={2}>
                    <IconCircleCalendar>
                      <CoxIcon name={"calendar-check"} />
                    </IconCircleCalendar>
                  </Col>
                  <Col sm={10}>
                    <WrapperInpectionInfo>
                      <div>
                        <TitleInspection>
                          {t("Inspection schedule to")}
                        </TitleInspection>
                        <InfoInspection>{props.inpectionTime}</InfoInspection>
                        <ButtonSecondary
                          sizey={"thin"}
                          sizex={"md"}
                          onClick={props.onClickChangeData}
                        >
                          {t("Change date")}
                        </ButtonSecondary>
                      </div>
                      <div>
                        <TitleInspection>
                          {props.inspectionUnit}
                        </TitleInspection>
                        <InfoInspection>
                          {props.inspectionAddress}
                        </InfoInspection>
                        <ButtonSecondary
                          sizey={"thin"}
                          sizex={"md"}
                          onClick={props.onClickChangeInspection}
                        >
                          {t("Change inspection")}
                        </ButtonSecondary>
                      </div>
                    </WrapperInpectionInfo>
                  </Col>
                </Row>
              </DivWrapperSpace>
            </ColInspectionResume>
          </Row>
        </ColBorder>
        <Col md={6}>
          <WrapperResume>
            <SectionTitle>{t("Purchase summary")}</SectionTitle>
            <div>
              <Row>
                <Col>
                  <span>{t("Purchase number")}</span>
                </Col>
                <Col>
                  <span>{props.id}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span>{t("Purchase date")}</span>
                </Col>
                <Col>
                  <span>{format(props.date, "dd/MM/yyyy")}</span>
                </Col>
              </Row>
            </div>
            <div>
              <BoxResumeEvaluation>
                <Row>
                  <Col>
                    <span>{props.inspectionPlan}</span>
                  </Col>
                  <Col>
                    <span>
                      {t("$")}{" "}
                      {NumberHelper.toFormatString(props.inspectionValue, 2)}
                    </span>
                  </Col>
                </Row>
              </BoxResumeEvaluation>
            </div>
            <Row>
              <Col>
                <span>
                  {t("Payment type")}: {t("Creditcard")}
                </span>
              </Col>
            </Row>
            <div>
              <BoxResumeValue>
                <Row>
                  <Col>
                    <span>{t("Total value")}</span>
                  </Col>
                  <Col>
                    <span>
                      {t("$")}{" "}
                      {NumberHelper.toFormatString(props.inspectionValue, 2)}
                    </span>
                  </Col>
                </Row>
              </BoxResumeValue>
            </div>
            <Row>
              <Col>
                <ButtonPrimary onClick={props.onClickFinish} loading={props.loading}>
                  {t("Finish purchase")}
                </ButtonPrimary>
              </Col>
            </Row>
          </WrapperResume>
        </Col>
      </Row>
    </WrapperBoxCheckout>
  );
};
