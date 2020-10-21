import React, { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { InspectionProvider } from "../../../contexts";
import { useSessionContext } from "../../../hooks";
import { InspectionRegister } from "../../organisms";

export const Inspection: React.FC = () => {
  const { t } = useTranslation();

  const { setHeaderMainTemplate } = useSessionContext();

  useLayoutEffect(() => {
    setHeaderMainTemplate({
      Title: t("TitleInspectionPage"),
      Description: t("DescriptionInspectionPage"),
    });
  }, [setHeaderMainTemplate, t]);
  
  return (
    <InspectionProvider>
      <InspectionRegister />
    </InspectionProvider>
  );
};
