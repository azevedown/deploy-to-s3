import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  Label,
  Row1,
  Row2,
  Value,
  WrapperReportDid,
} from "./../card-inspection/card-inspection.molecute.style";

interface IProps {
  vehicleDescription: string;
  inspectionDate?: Date;
  inspectionHour: string;
}
export const CardInspectionReportTemplate: React.FC<IProps> = (parameters) => {
  const { t } = useTranslation();

  const [props, setProps] = useState(parameters);

  useEffect(() => setProps(parameters), [parameters]);

  return (
    <>
      <Row1>
        <Col sm={"auto"}>
          <Label>{t("Vehicle registered")}</Label>
          <Value>{props.vehicleDescription}</Value>
        </Col>
      </Row1>
      <Row2>
        <Col sm={"auto"}>
          <WrapperReportDid>
            <Label>{t("Report DID in")}</Label>
            <Value>
              {props.inspectionDate
                ? format(props.inspectionDate, "dd/MM/yyyy")
                : ""}{" "}
              - {props.inspectionHour}
            </Value>
          </WrapperReportDid>
        </Col>
      </Row2>
    </>
  );
};
