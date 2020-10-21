import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  Label,
  Row1,
  Row2,
  Value,
} from "./../card-inspection/card-inspection.molecute.style";

interface IProps {
  vehicleDescription: string;
  inspectionDate?: Date;
  inspectionHour: string;
  inspectionUnit: string;
}
export const CardInspectionPaymentTemplate: React.FC<IProps> = (parameters) => {
  const { t } = useTranslation();

  const [props, setProps] = useState(parameters);

  useEffect(() => setProps(parameters), [parameters]);

  const getDateFormat = (date: any) => {
    try {
      return date ? format(date, "dd/MM/yyyy") : "";
    } catch (error) {
      return "";
    }
  };

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
          <Label>{t("Inspecion date")}</Label>
          <Value>
            {getDateFormat(props.inspectionDate)} - {props.inspectionHour}
          </Value>
        </Col>
        <Col sm={"auto"}>
          <Label>{t("Unit inspecion")}</Label>
          <Value>{props.inspectionUnit}</Value>
        </Col>
      </Row2>
    </>
  );
};
