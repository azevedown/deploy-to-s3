import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AdActiveTemplate,
  AdDoneTemplate,
  AdEmptyTemplate,
  AdInfoAccepted,
  CardVehicleAdDone,
  CardVehicleAdInfo,
} from "../..";
import { StatusAd } from "../../../../models";

interface IProps {
  photo: string;
  title: string;
  plate: string;
  status: StatusAd;
  priceStart?: number;
  priceEnd?: number;
  price?: number;
  button?: {
    type: "primary" | "secondary";
    text: string;
    onClick?: () => void;
  };
}
export const CardAd: React.FC<IProps> = (parameters) => {
  const { t } = useTranslation();

  const [props, setProps] = useState(parameters);

  useEffect(() => setProps(parameters), [parameters]);

  const getCardStatus = (): React.ReactNode => {
    switch (props.status) {
      case StatusAd.Incomplete:
        return (
          <AdEmptyTemplate
            labelButton={t("Continue")}
            title={t("Incomplete register")}
            onClick={props.button?.onClick}
          />
        );
      case StatusAd.WaitingAuction:
        return (
          <AdEmptyTemplate
            title={t("Waiting for auction")}
          />
        );
      case StatusAd.Inspection:
        return (
          <AdEmptyTemplate
            labelButton={t("More details")}
            title={t("Waiting inspection")}
          />
        );
      case StatusAd.Inactive:
        return (
          <AdActiveTemplate
            active={false}
            headerText={"10 dias de anuncio"}
            numberOffers={23}
            offerValue={20000}
            footer={{ textPrimary: t("Ad disabled") }}
          />
        );
      case StatusAd.OfferRefused:
        return (
          <AdActiveTemplate
            active={false}
            headerText={"10 dias de anuncio"}
            numberOffers={23}
            offerValue={20000}
            type={"deny"}
            footer={{
              textPrimary: t("Refused offer"),
            }}
          />
        );
      case StatusAd.OfferPending:
        return (
          <AdActiveTemplate
            active={true}
            headerText={"10 dias de anuncio"}
            numberOffers={23}
            offerValue={20000}
            type={"waiting"}
            footer={{
              textSecondary: t("Refuse offer"),
              textPrimary: t("Accept offer"),
            }}
          />
        );
      case StatusAd.OfferAccepted:
        return (
          <AdActiveTemplate
            active={true}
            headerText={t("Offer accepted")}
            numberOffers={23}
            offerValue={20000}
            type={"confirm"}
            footer={{
              textPrimary: t("More details"),
            }}
          />
        );
      case StatusAd.Schedule:
        return <AdDoneTemplate offerValue={323430} numberOffers={23} />;

      default:
        return <AdInfoAccepted />;
    }
  };

  return (
    <>
      {props.status === StatusAd.Schedule || props.status === StatusAd.Done ? (
        <CardVehicleAdDone
          photo={props.photo}
          plate={props.plate}
          title={props.title}
          price={props.price}
          priceStart={props.priceStart}
          priceEnd={props.priceStart}
          cardStatus={getCardStatus()}
        />
      ) : (
        <CardVehicleAdInfo
          photo={props.photo}
          plate={props.plate}
          title={props.title}
          price={props.price}
          priceStart={props.priceStart}
          priceEnd={props.priceStart}
          cardStatus={getCardStatus()}
          button={props.button}
        />
      )}
    </>
  );
};
