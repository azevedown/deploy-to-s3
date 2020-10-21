import React, { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSessionContext } from "../../../hooks";
import { VehicleChoose } from "../../organisms";

export const VechicleAdVehicleRegister: React.FC = () => {
  const { t } = useTranslation();

  const { setHeaderMainTemplate } = useSessionContext();

  useLayoutEffect(() => {
    setHeaderMainTemplate({
      Title: t("TitleVehicleAdPage"),
      Description: t("DescriptionVehicleAdPage"),
    });
  }, [setHeaderMainTemplate, t]);
  return <VehicleChoose />;
};
