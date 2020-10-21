import { CoxIcon, Img } from "c4u-web-components";
import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  BoxImg,
  BoxVehicleDetail,
  DescriptionInfo,
  GroupLabelInfo,
  LabelPlate,
  StatusFlyer,
  TitleInfo,
  VehicleName,
  VehiclePlate,
  WrapperBoxPrice,
  WrapperVechicleDetails,
} from "./card-vehicle-ad-done.molecule.style";

interface IProps {
  photo?: string;
  title: string;
  cardStatus: React.ReactNode | JSX.Element;
  action?: React.ReactNode | JSX.Element;
  plate?: string;
  priceStart?: number;
  priceEnd?: number;
  price?: number;
}
export const CardVehicleAdDone: React.FC<IProps> = (parameters) => {
  const { t } = useTranslation();

  const [props, setProps] = useState(parameters);

  useEffect(() => setProps(parameters), [parameters]);

  return (
    <BoxVehicleDetail>
      <Row>
        <Col lg={3} className={"o-hidden"}>
          <BoxImg>
            {props.photo ? (
              <Img src={props.photo} />
            ) : (
              <div
                className={
                  "spinner-div d-flex align-items-center justify-content-center"
                }
              >
                <Spinner animation="border" />
              </div>
            )}
          </BoxImg>
        </Col>
        <Col lg={3} className={"m-auto"}>
          <WrapperVechicleDetails>
            <VehicleName>{props.title}</VehicleName>
            <LabelPlate>{t("Plate")}</LabelPlate>
            <VehiclePlate>{props.plate}</VehiclePlate>
            <StatusFlyer>
              <CoxIcon name={"approved"} />
              <span>{t("Payment")}</span>
              <b>Agendado</b>
              <div>
                <CoxIcon name={"shadow-corner"} />
              </div>
            </StatusFlyer>
          </WrapperVechicleDetails>
        </Col>
        <Col lg={3} className={"border-left"}>
          <WrapperBoxPrice>
            <GroupLabelInfo>
              <TitleInfo>{t("Date of vehicle delivery")}</TitleInfo>
              <DescriptionInfo>01/09/2020 ás 09:00hs</DescriptionInfo>
            </GroupLabelInfo>
            <GroupLabelInfo>
              <TitleInfo>{t("Unit inspecion")}</TitleInfo>
              <DescriptionInfo>
                Av. Giovanni Gronchi, 6.093, Morumbi, SÃO PAULO, SP
              </DescriptionInfo>
            </GroupLabelInfo>
            <GroupLabelInfo>
              <TitleInfo>{t("Phone")}</TitleInfo>
              <DescriptionInfo>
                (11) 3739-4973 / (11) 94753-2691
              </DescriptionInfo>
            </GroupLabelInfo>
          </WrapperBoxPrice>
        </Col>
        <Col lg={3}>{props.cardStatus}</Col>
      </Row>
    </BoxVehicleDetail>
  );
};
