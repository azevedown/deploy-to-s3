import { ButtonSecondary, Img, NumberHelper } from "c4u-web-components";
import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  BoxImg,
  BoxPriceAsked,
  BoxVehicleDetail,
  KbbRangePrice,
  KbbTitle,
  LabelPlate,
  LabelPriceAdvice,
  VehicleName,
  VehiclePlate,
  WrapperBoxPrice,
  WrapperImgTitle,
  WrapperVechicleDetails,
} from "./card-vehicle-details.molecute.style";
import { KbbLogoMedium } from "./../../../assets";

interface IProps {
  photo?: string;
  title?: string;
  plate?: string;
  priceStart?: number;
  priceEnd?: number;
  price?: number;
  onClickEditVehicle?: () => void;
}
export const CardVehicleDetails: React.FC<IProps> = (parameters) => {
  const { t } = useTranslation();

  const [props, setProps] = useState(parameters);

  useEffect(() => setProps(parameters), [parameters]);

  return (
    <BoxVehicleDetail>
      <Row>
        <Col lg={4}>
          {props?.photo ? (
            <BoxImg>
              <Img src={props.photo} />
            </BoxImg>
          ) : (
            <div
              className={
                "h-100 d-flex align-items-center justify-content-center"
              }
            >
              <Spinner animation="border" />
            </div>
          )}
        </Col>
        <Col lg={4} className={"m-auto"}>
          <WrapperVechicleDetails>
            <VehicleName>{props.title}</VehicleName>
            <LabelPlate>{t("Plate")}</LabelPlate>
            <VehiclePlate>{props.plate}</VehiclePlate>
            <ButtonSecondary sizex={"md"} sizey={"thin"} onClick={props.onClickEditVehicle}>
              {t("Edit vehicle")}
            </ButtonSecondary>
          </WrapperVechicleDetails>
        </Col>
        <Col lg={4}>
          <WrapperBoxPrice>
            <WrapperImgTitle>
              <Img src={KbbLogoMedium} />
              <KbbTitle>{t("ReseachKbb")}</KbbTitle>
            </WrapperImgTitle>
            <KbbRangePrice>
              {`${t("$")}  ${NumberHelper.toFormatString(
                props.priceStart
              )} - ${t("$")}  ${NumberHelper.toFormatString(props.priceEnd)}`}
            </KbbRangePrice>
            <LabelPriceAdvice>{t("Market price")}</LabelPriceAdvice>
            <BoxPriceAsked>
              {t("Asked price")}{" "}
              <span>
                {t("$")} {NumberHelper.toFormatString(props.price)}
              </span>
            </BoxPriceAsked>
          </WrapperBoxPrice>
        </Col>
      </Row>
    </BoxVehicleDetail>
  );
};
