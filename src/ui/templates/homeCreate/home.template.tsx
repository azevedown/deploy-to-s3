import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useSessionContext } from "../../../hooks";
import { Header, FooterCreate, FeedbackModal } from "../../molecules";
import { Container } from "./home.template.style";

export const HomeCreateTemplate: FunctionComponent = (props) => {
  const {
    genericModalMsg,
    genericErrorModal,
    hideGenericErrorModal,
    genericWarningModal,
    hideGenericWarningModal,
  } = useSessionContext();

  const { t } = useTranslation();
  
  return (
    <>
      <Header showButtons={false} />
      <Container fluid>{props.children}</Container>
      <FooterCreate />
      <FeedbackModal
        type={"error"}
        show={genericErrorModal}
        onHide={hideGenericErrorModal}
        title={t("Error")}
        content={genericModalMsg ?? t("GenericErrorMsg")}
      />
      <FeedbackModal
        type={"warning"}
        show={genericWarningModal}
        onHide={hideGenericWarningModal}
        title={t("Warning")}
        content={genericModalMsg ?? t("GenericWarningMsg")}
      />
    </>
  );
};
