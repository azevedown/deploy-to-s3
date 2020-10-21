import React from 'react';
import { useTranslation } from 'react-i18next';

import { Wrapper, CircleNumber } from './stepper.molecule.style';
import { Row, Col } from 'react-bootstrap';

export const Stepper = (props: {rules: boolean}) => {
  const { t } = useTranslation();

  const { rules } = props;

  return (
    <Wrapper>
      <Row noGutters>
        <Col md={{ span: '2', offset: '5' }}>
          <CircleNumber title={t('sell journey')} selected>
            1
          </CircleNumber>
          <CircleNumber title={t('rules')} selected={rules}>
            2
          </CircleNumber>
        </Col>
      </Row>
    </Wrapper>
  )
}