import React from "react";
import { useTranslation } from "react-i18next";
import { StatusHistory, StatusHistoryProps } from "../..";
import {
  AdvicePayment,
  WrapperStatusDeliveryPayment,
} from "./status-delivery-payment.molecule.style";

export const StatusDeliveryPayment: React.FC = () => {
  const { t } = useTranslation();

  const itemsStatus = [
    {
      status: "Pagamento solicitado",
      step: "done",
      dateTime: new Date(2020, 9, 15, 14, 33, 32),
    },
    {
      status: "Pagamento Realizado",
      step: "warning",
      dateTime: new Date(),
    },
    {
      status: "Pagamento Aprovado",
      step: "pending",
    },
  ] as StatusHistoryProps[];

  return (
    <WrapperStatusDeliveryPayment>
      <StatusHistory items={itemsStatus} />
      <AdvicePayment>
        <p>{t("MessagePaymentDone")}</p>
        <p>{t("MessagePaymentDoneObs")}</p>
      </AdvicePayment>
    </WrapperStatusDeliveryPayment>
  );
};
