import React, { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSessionContext } from "../../../hooks";
import { VehicleValues } from "../../organisms";

export const VechicleAdValues: React.FC = () => {
  const { t } = useTranslation();

  const { setHeaderMainTemplate } = useSessionContext();

  useLayoutEffect(() => {
    setHeaderMainTemplate({
      Title: t("TitleVehicleAdPage"),
      Description: t("DescriptionVehicleAdPage"),
    });
  }, [setHeaderMainTemplate, t]);

  return <VehicleValues />;
};
