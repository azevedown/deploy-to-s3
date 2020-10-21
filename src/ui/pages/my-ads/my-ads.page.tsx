import React, { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSessionContext } from "../../../hooks";
import { ListAds } from "../../organisms";

export const MyAds: React.FC = () => {
  const { t } = useTranslation();
  
  const { setHeaderMainTemplate } = useSessionContext();

  useLayoutEffect(() => {
    setHeaderMainTemplate({
      Title: t("TitleMyAdsPage"),
      Description: t("DescriptionMyAdsPage"),
    });
  }, [setHeaderMainTemplate, t]);

  return <ListAds />;
};
