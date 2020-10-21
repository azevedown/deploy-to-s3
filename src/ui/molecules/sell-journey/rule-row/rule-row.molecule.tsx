import React from 'react';
import { useTranslation } from 'react-i18next';

import { Wrapper, Title, Button, ButtonsWrapper } from './rule-row.molecule.style';
import { Row, Col } from 'react-bootstrap';

export const RuleRow = (
  props: {
    current: boolean,
    title: string,
    response: string | boolean,
    setResponse: (response: string) => void
    openModal: () => void
  }
) => {

  const { t } = useTranslation();

  const { current, title, setResponse, response, openModal } = props;

  const shouldShowButton = (answer: string) => !(response === answer || (typeof response == 'boolean' && !response))

  return (
    <Wrapper>
      <Row noGutters>
        <Col md={8}>
          <Title>
            {t(title)}
          </Title>
        </Col>
        <Col md={{ span: 3, offset: 1 }}>
          <ButtonsWrapper>

            <Button hide={shouldShowButton('yes')} onClick={() => setResponse('yes')} success current={current}>
              {t('yes')}
            </Button>

            <Button hide={shouldShowButton('no')} onClick={() => openModal()} current={current}>
              {t('no')}
            </Button>

          </ButtonsWrapper>
        </Col>
      </Row>
    </Wrapper>
  )
}