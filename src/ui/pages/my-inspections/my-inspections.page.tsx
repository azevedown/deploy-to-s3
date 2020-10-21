import React, { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSessionContext } from "../../../hooks";
import { ListInspection } from "../../organisms";

export const MyInspections: React.FC = () => {
  const { t } = useTranslation();
  
  const { setHeaderMainTemplate } = useSessionContext();

  useLayoutEffect(() => {
    setHeaderMainTemplate({
      Title: t("TitleMyInspectionsPage"),
      Description: t("DescriptionMyInspectionsPage"),
    });
  }, [setHeaderMainTemplate, t]);

  return <ListInspection />;
};
