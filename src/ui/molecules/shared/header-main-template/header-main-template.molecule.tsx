import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ButtonSecondary } from "c4u-web-components";
import {
  SubTitle,
  Title,
  DivButton,
  DivText,
  Wrapper,
  DivContent,
  WrapperHeaderMainTemplate,
} from "./header-main-template.molecule.style";
import { useSessionContext } from "../../../../hooks";
import { useHistory } from "react-router-dom";

export const HeaderMainTemplate: React.FC = () => {
  const { t } = useTranslation();

  const { headerMainTemplate } = useSessionContext();

  let history = useHistory();

  const handleClickBack = () => {
    if (headerMainTemplate?.BackTo) history.push(headerMainTemplate.BackTo);
    history.goBack();
  };

  return (
    <WrapperHeaderMainTemplate>
      <Container>
        <Row>
          <Col>
            <Wrapper>
              <DivContent>
                <DivButton>
                  <ButtonSecondary sizex={"sm"} sizey={"thin"} onClick={handleClickBack}>
                    {t("Back")}
                  </ButtonSecondary>
                </DivButton>
                <DivText>
                  <Title>{headerMainTemplate?.Title}</Title>
                  <SubTitle>{headerMainTemplate?.Description}</SubTitle>
                </DivText>
              </DivContent>
            </Wrapper>
          </Col>
        </Row>
      </Container>
      <hr />
    </WrapperHeaderMainTemplate>
  );
};
