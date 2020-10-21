import React from "react";
import { Modal } from "react-bootstrap";
import {
  ModalBody,
  Title,
  SubTitle,
  Doubts,
  Icon,
} from "./modalsuccess.molecule.style";
import { useTranslation } from "react-i18next";
import { ButtonSecondary, CoxIcon } from "c4u-web-components";

interface IProps {
  show: boolean;
  onHide: () => void;
}

export const ModalSuccess: React.FC<IProps> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <Modal
        show={props.show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalBody>
          <Icon>
            <CoxIcon name="checked" width={32} height={32} />
          </Icon>
          <Title>
            Tudo certo! <br /> Agora acesse seu e-mail
          </Title>
          <SubTitle>
            Caso não localize nosso e-mail, verifique a sua caixa de spam.
          </SubTitle>
          <Doubts>
            Em casos de dúvidas, entre em contato: email@email.com.br
          </Doubts>
          <ButtonSecondary onClick={props.onHide} sizex={"lg"}>
            {t("OK")}
          </ButtonSecondary>
        </ModalBody>
      </Modal>
    </>
  );
};
