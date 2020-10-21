import {
  ButtonPrimary,
  ButtonSecondary,
  Img,
  NumberHelper,
} from "c4u-web-components";
import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { KbbLogo } from "../../../../assets";
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
} from "./card-vehicle-ad-info.molecule.style";

interface IProps {
  photo?: string;
  title: string;
  cardStatus: React.ReactNode | JSX.Element;
  action?: React.ReactNode | JSX.Element;
  plate?: string;
  priceStart?: number;
  priceEnd?: number;
  price?: number;
  button?: {
    type: "primary" | "secondary";
    text: string;
    onClick?: () => void;
  };
}
export const CardVehicleAdInfo: React.FC<IProps> = (parameters) => {
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
            {props.button?.type === "primary" && (
              <ButtonPrimary
                onClick={props.button.onClick}
                sizex={"md"}
                sizey={"thin"}
              >
                {props.button.text}
              </ButtonPrimary>
            )}
            {props.button?.type === "secondary" && (
              <ButtonSecondary
                onClick={props.button.onClick}
                sizex={"md"}
                sizey={"thin"}
              >
                {props.button.text}
              </ButtonSecondary>
            )}
          </WrapperVechicleDetails>
        </Col>
        <Col lg={3} className={"border-left"}>
          <WrapperBoxPrice>
            <WrapperImgTitle>
              <Img src={KbbLogo} />
            </WrapperImgTitle>
            <div>
              <KbbTitle>{t("ReseachKbb")}</KbbTitle>
            </div>
            <KbbRangePrice>
              {`${t("$")}  ${NumberHelper.toFormatString(
                props.priceStart
              )} - ${t("$")}  ${NumberHelper.toFormatString(props.priceEnd)}`}
            </KbbRangePrice>
            <LabelPriceAdvice>{t("Market price")}</LabelPriceAdvice>
            <LabelPriceAdvice>
              Valor fornecido em 23/06/2020 para São Paulo
            </LabelPriceAdvice>
            <BoxPriceAsked>
              {t("Asked price")}{" "}
              <span>
                {t("$")} {NumberHelper.toFormatString(props.price)}
              </span>
            </BoxPriceAsked>
          </WrapperBoxPrice>
        </Col>
        <Col lg={3}>{props.cardStatus}</Col>
      </Row>
    </BoxVehicleDetail>
  );
};
