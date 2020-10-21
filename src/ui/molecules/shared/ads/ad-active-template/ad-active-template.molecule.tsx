import { CoxIcon, NumberHelper } from "c4u-web-components";
import React, { useEffect, useState } from "react";
import {
  Accept,
  ActionButtonsWrapper,
  LabelDaysAd,
  LabelOfferInfo,
  LabelOffers,
  OfferValue,
  Refused,
  StatusLabel,
  StatusOffer,
  WrapperAdInfo,
  WrapperLabels,
} from "./ad-active-template.molecule.style";
import { useTranslation } from "react-i18next";
import { Col } from "react-bootstrap";

interface IProps {
  headerText: string;
  numberOffers: number;
  offerValue: number;
  active: boolean;
  type?: "confirm" | "waiting" | "deny";
  footer: {
    textPrimary: string;
    textSecondary?: string;
    primaryClick?: () => void;
    secondaryClick?: () => void;
  };
}
export const AdActiveTemplate: React.FC<IProps> = (parameters) => {
  const { t } = useTranslation();

  const [props, setProps] = useState(parameters);
  useEffect(() => setProps(parameters), [parameters]);

  return (
    <WrapperAdInfo>
      <LabelDaysAd active={props.active} confirm={props.type === "confirm"}>
        {props.headerText}
      </LabelDaysAd>
      <WrapperLabels active={props.active}>
        <LabelOffers>
          {props.numberOffers} {t("Offers")}
        </LabelOffers>
        <LabelOfferInfo>
          <CoxIcon name={"dolar-circle"} /> {t("Final offers")}
        </LabelOfferInfo>
        <OfferValue>
          {t('$')}  {NumberHelper.toFormatString(props.offerValue)}
        </OfferValue>
        <StatusOffer>{t("Dispute closed")}</StatusOffer>
      </WrapperLabels>
      {(!props.type || props.type === "deny") && (
        <StatusLabel confirm={false} active={!!props?.type}>
          {props.footer.textPrimary}
        </StatusLabel>
      )}
      {props.type === "confirm" && (
        <StatusLabel confirm={true} active={!!props.type}>
          <div onClick={props.footer.primaryClick}>
            <span>{props.footer.textPrimary}</span>
            <CoxIcon name={"arrow-circle"} />
          </div>
        </StatusLabel>
      )}
      {props.type === "waiting" && (
        <ActionButtonsWrapper className={"m-0"}>
          <Col className={"p-0"}>
            <Refused onClick={props.footer.secondaryClick}>
              {props.footer.textSecondary}
            </Refused>
          </Col>
          <Col className={"p-0"}>
            <Accept onClick={props.footer.primaryClick}>
              {props.footer.textPrimary}
            </Accept>
          </Col>
        </ActionButtonsWrapper>
      )}
    </WrapperAdInfo>
  );
};
