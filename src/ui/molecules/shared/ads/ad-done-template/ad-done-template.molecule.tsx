import { CoxIcon, NumberHelper } from "c4u-web-components";
import React, { useEffect, useState } from "react";
import {
  LabelOfferInfo,
  LabelOffers,
  OfferValue,
  StatusOffer,
  WrapperAdInfo,
  WrapperLabels,
} from "./ad-done-template.molecule.style";
import { useTranslation } from "react-i18next";

interface IProps {
  numberOffers: number;
  offerValue: number;
}
export const AdDoneTemplate: React.FC<IProps> = (parameters) => {
  const { t } = useTranslation();

  const [props, setProps] = useState(parameters);
  useEffect(() => setProps(parameters), [parameters]);

  return (
    <WrapperAdInfo>
      <div></div>
      <WrapperLabels>
        <LabelOffers>
          {props.numberOffers} {t("Offers")}
        </LabelOffers>
        <LabelOfferInfo>
          <CoxIcon name={"dolar-circle"} /> {t("Final offers")}
        </LabelOfferInfo>
        <OfferValue>
          {t('$')} {NumberHelper.toFormatString(props.offerValue)}
        </OfferValue>
        <StatusOffer>{t("Dispute closed")}</StatusOffer>
      </WrapperLabels>
      <div></div>
    </WrapperAdInfo>
  );
};
