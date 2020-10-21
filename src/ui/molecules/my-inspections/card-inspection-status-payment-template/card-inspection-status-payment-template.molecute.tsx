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
  phone: string;
}
export const CardInspectionStatusPaymentTemplate: React.FC<IProps> = (
  parameters
) => {
  const { t } = useTranslation();

  const [props, setProps] = useState(parameters);

  useEffect(() => setProps(parameters), [parameters]);

  return (
    <>
      <Row1 className={"d-none d-lg-flex"}>
        <Col sm={"auto"}>
          <Label>&nbsp;</Label>
          <Value>&nbsp;</Value>
        </Col>
      </Row1>
      <Row2>
        <Col sm={"12"}>
          <Label>{t("Phone")}</Label>
          <Value>{props.phone}</Value>
        </Col>
      </Row2>
    </>
  );
};
