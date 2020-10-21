import React, { useState } from "react";
import { Wrapper, ButtonWrapper } from "./rules.organism.style";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  RuleRow,
  ModalError,
  ModalSuccessJourney as ModalSuccess,
} from "../../../molecules";
import { ButtonPrimary, ButtonSecondary } from "c4u-web-components";

import { useManhein } from "../../../../hooks";
import { useHistory } from "react-router-dom";
import { paths } from "../../../../constants";

export const Rules = (props: { changeStep: (index: number) => void }) => {
  const { t } = useTranslation();

  const { changeStep } = props;

  const history = useHistory();

  const [id, setId] = useState<number>();
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [rules, setRules] = useState<
    { title: string; response: boolean | string }[]
  >([
    { title: "i am vehicle owner", response: false },
    { title: "dut in hands", response: false },
    { title: "car is paid", response: false },
    { title: "car free from judicial restrictions", response: false },
    { title: "car never auctioned", response: false },
  ]);

  const { createAd } = useManhein();

  const submit = async () => {
    try {
      const response = await createAd({
        acceptedRules: true,
        acceptedTerms: true,
      });
      if (response) {
        setId(response.id);
        setShowSuccessModal(true);
      }
    } catch (error) {}
  };

  const getResponse = (resp: string, index: number) => {
    const virtualArr = [...rules];

    virtualArr[index].response = resp;

    setRules(virtualArr);
  };

  const closeModal = () => {
    setShowErrorModal(false);
    setRules([
      { title: "i am vehicle owner", response: false },
      { title: "dut in hands", response: false },
      { title: "car is paid", response: false },
      { title: "car free from judicial restrictions", response: false },
      { title: "car never auctioned", response: false },
    ]);
  };

  const onCloseModal = () => {
    if (id)
      history.push(paths.vehicleRegister().replace(":id", id?.toString()));
    setShowSuccessModal(false);
  };

  return (
    <Wrapper>
      <ModalError show={showErrorModal} close={closeModal} />
      <ModalSuccess show={showSuccessModal} close={onCloseModal} />
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          {rules.map(
            ({ title, response }, index, arr) =>
              (response ||
                arr.filter((item) => item.response).length === index) && (
                <RuleRow
                  title={title}
                  current={!response}
                  response={response}
                  openModal={() => setShowErrorModal(true)}
                  setResponse={(resp: string) => getResponse(resp, index)}
                />
              )
          )}
        </Col>

        <ButtonWrapper>
          <ButtonSecondary onClick={() => changeStep(0)} sizex={"md"}>
            {t("Back")}
          </ButtonSecondary>

          <ButtonPrimary
            onClick={() => submit()}
            disabled={!rules.every((item) => item.response)}
            sizex={"md"}
          >
            {t("Advance")}
          </ButtonPrimary>
        </ButtonWrapper>
      </Row>
    </Wrapper>
  );
};
