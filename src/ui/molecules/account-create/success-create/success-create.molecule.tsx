import React from "react";
import { useTranslation } from "react-i18next";

import { ButtonPrimary, CoxIcon } from "c4u-web-components";
import {
  H2,
  H3,
  H4,
  Box,
  BoxTitles,
  Icon,
} from "./success-create.molecule.style";

export const SuccessCreate: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <BoxTitles>
        <H2>{t("Congratulations")}</H2>
        <H4>{t("Now you can")}</H4>
      </BoxTitles>
      <Box>
        <Icon>
          <CoxIcon name="checked" width={32} height={32} />
        </Icon>
        <H3>{t("Welcome")}</H3>
        <ButtonPrimary type={"submit"} sizex={"lg"}>
          {t("Access my account")}
        </ButtonPrimary>
      </Box>
    </>
  );
};
