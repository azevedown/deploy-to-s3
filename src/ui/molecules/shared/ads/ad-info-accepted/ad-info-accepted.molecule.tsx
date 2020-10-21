import { CoxIcon } from "c4u-web-components";
import React from "react";
import {
  LabelDaysAd,
  LabelOfferInfo,
  LabelOffers,
  OfferValue,
  StatusLabel,
  StatusOffer,
  WrapperAdInfoAccepted,
  WrapperLabels,
} from "./ad-info-accepted.molecule.style";

interface IProps {
  aham?: string;
}
export const AdInfoAccepted: React.FC<IProps> = (parameters) => {
  return (
    <WrapperAdInfoAccepted>
      <LabelDaysAd>10 dias de anuncio</LabelDaysAd>
      <WrapperLabels>
        <LabelOffers>23 Ofertas</LabelOffers>
        <LabelOfferInfo><CoxIcon name={'dolar-circle'} /> Oferta final</LabelOfferInfo>
        <OfferValue>R$ 87.170,00</OfferValue>
        <StatusOffer>Disputa encerrada</StatusOffer>
      </WrapperLabels>
      <StatusLabel>Oferta aceita</StatusLabel>
    </WrapperAdInfoAccepted>
  );
};
