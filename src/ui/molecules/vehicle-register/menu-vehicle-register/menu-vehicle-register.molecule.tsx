import React, { useEffect, useMemo, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { SideStepper } from "../..";
import {
  Span,
} from "./menu-vehicle-register.molecule.style";

interface IMenuVehicleRegisterProps {
  step: number;
}

export const MenuVehicleRegister: React.FC<IMenuVehicleRegisterProps> = (
  props
) => {
  const { t } = useTranslation();

  const [step, setStep] = useState(props.step);

  useEffect(() => setStep(props.step), [props.step]);

  const itemsMenu = useMemo(() => {
    return [t("Vehicle"), t("Values"), t("Photos"), t("Personal Data")];
  }, [t]);

  return (
    <>
      <Row>
        <Col>
          <Span>{t("Register data")}</Span>
        </Col>
      </Row>
      <SideStepper step={step} items={itemsMenu} />
    </>
  );
};
