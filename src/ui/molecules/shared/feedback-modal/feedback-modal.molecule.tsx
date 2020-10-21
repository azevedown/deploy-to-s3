import React from "react";
import { Modal } from "react-bootstrap";
import {
  ModalBody,
  Title,
  Icon,
  Content,
  ModalHeader,
  ContentModalMsg,
} from "./feedback-modal.molecule.style";
import { useTranslation } from "react-i18next";
import { ButtonSecondary, CoxIcon } from "c4u-web-components";

interface IProps {
  type: "success" | "error" | "warning";
  show: boolean;
  onHide: () => void;
  onClickButton?: () => void;
  title: string;
  textButton?: string;
  content?: string;
}

export const FeedbackModal: React.FC<IProps> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <Modal
        show={props.show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={props.onHide}
      >
        <ModalHeader closeButton></ModalHeader>
        <ModalBody>
          <Icon>
            {props.type === "success" && (
              <CoxIcon name="checked" width={32} height={32} />
            )}
            {props.type === "error" && (
              <CoxIcon name="danger-color" width={32} height={32} />
            )}
            {props.type === "warning" && (
              <CoxIcon name="warning-color" width={32} height={32} />
            )}
          </Icon>
          <Title>{props.title}</Title>
          <Content>
            {props.children ? (
              props.children
            ) : (
              <ContentModalMsg>{props.content}</ContentModalMsg>
            )}
          </Content>
          {props.type === "success" && (
            <ButtonSecondary
              onClick={props.onClickButton ? props.onClickButton : props.onHide}
              sizex={"md"}
            >
              {props.textButton ? props.textButton : t("OK")}
            </ButtonSecondary>
          )}
          {props.type === "error" && (
            <ButtonSecondary
              onClick={props.onClickButton ? props.onClickButton : props.onHide}
              sizex={"md"}
            >
              {props.textButton ? props.textButton : t("OK")}
            </ButtonSecondary>
          )}
          {props.type === "warning" && (
            <ButtonSecondary
              onClick={props.onClickButton ? props.onClickButton : props.onHide}
              sizex={"md"}
            >
              {props.textButton ? props.textButton : t("OK")}
            </ButtonSecondary>
          )}
        </ModalBody>
      </Modal>
    </>
  );
};
