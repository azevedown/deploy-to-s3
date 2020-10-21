import React, { FunctionComponent } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSessionContext } from "../../../hooks";
import {
  Header,
  BreadcrumbMolecule,
  HeaderMainTemplate,
  FeedbackModal,
} from "../../molecules";
import { BackgroudBreadcrumb } from "./main.template.style";

export const MainTemplate: FunctionComponent = (props) => {
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
      <Header showButtons={true} />
      <BackgroudBreadcrumb>
        <Container>
          <BreadcrumbMolecule />
        </Container>
      </BackgroudBreadcrumb>
      <HeaderMainTemplate />
      <Container>{props.children}</Container>
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
