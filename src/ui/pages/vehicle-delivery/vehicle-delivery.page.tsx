import React, { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { VehicleDeliveryProvider } from "../../../contexts";
import { useSessionContext } from "../../../hooks";
import { PaymentStatus } from "../../organisms";

export const VehicleDelivery: React.FC = () => {
  const { t } = useTranslation();

  const { setHeaderMainTemplate } = useSessionContext();

  useLayoutEffect(() => {
    setHeaderMainTemplate({
      Title: t("TitleVehicleDeliveryPage"),
      Description: t("DescriptionVehicleDeliveryPage"),
    });
  }, [setHeaderMainTemplate, t]);

  return (
    <VehicleDeliveryProvider>
      <PaymentStatus />
    </VehicleDeliveryProvider>
  );
};
