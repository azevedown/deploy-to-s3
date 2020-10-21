import React, { useState } from 'react';
import { H2, Wrapper, Row, Col, Controls, ControlsWrapper } from './advantages.molecule.style';
import { useTranslation } from 'react-i18next';
import { CardSimple } from '../../shared/carrousel/card-simple/card-simple.molecule';
import { Carousel } from 'react-bootstrap';

export const Advantages = () => {
  const [index, setIndex] = useState(0);

  const { t } = useTranslation();

  const handleSelecte = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  }

  return (
    <Wrapper>
      <H2>
        {t('advantages title')}
      </H2>
      <Carousel activeIndex={index} onSelect={handleSelecte} fade interval={null} keyboard={false} controls={false} indicators={false}>
        <Carousel.Item>
          <Row noGutters>
            <Col md={6}>
              <CardSimple title={t('security')} subtitle={t('for buyer')} description={t('for buyer text')} />
            </Col>
            <Col md={6}>
              <CardSimple title={t('security')} subtitle={t('for seller')} description={t('for seller text')} />
            </Col>
          </Row >
        </Carousel.Item>

        <Carousel.Item>
          <Row noGutters>
            <Col md={6}>
              <CardSimple title={t('security')} subtitle={t('for buyer')} description={t('for buyer text')} />
            </Col>
            <Col md={6}>
              <CardSimple title={t('security')} subtitle={t('for seller')} description={t('for seller text')} />
            </Col>
          </Row >
        </Carousel.Item>

        <Carousel.Item>
          <Row noGutters>
            <Col md={6}>
              <CardSimple title={t('security')} subtitle={t('for buyer')} description={t('for buyer text')} />
            </Col>
            <Col md={6}>
              <CardSimple title={t('security')} subtitle={t('for seller')} description={t('for seller text')} />
            </Col>
          </Row >
        </Carousel.Item>
      </Carousel>

      <ControlsWrapper>
        <Controls onClick={() => setIndex(0)} selected={index === 0} />
        <Controls onClick={() => setIndex(1)} selected={index === 1} />
        <Controls onClick={() => setIndex(2)} selected={index === 2} />
      </ControlsWrapper>
    </Wrapper >
  )
};