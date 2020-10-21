import React, { useState } from 'react';
import { H1, H4, Wrapper, Col, Row, Image, ImageWrapper } from './top-searched.molecule.style';
import { ButtonArrow } from '../../../atoms';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-bootstrap';

const car = require('../../../assets/images/audi-a1-big.png')

export const TopSearched = () => {
  const [index, setIndex] = useState(0);

  const { t } = useTranslation();

  const handleSelecte = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  }

  const paginate = (direction: string) => {

    if (direction === 'prev') {
      index > 0 && setIndex(index - 1);
    }
    
    if (direction === 'next') {
      index <= 2 && setIndex(index + 1);
    }
  }

  return (
    <Wrapper>
      <Row>
        <Col md={6}>
          <H1>
            {t('most searched month')}
          </H1>
          <H4>
            {t('MOCK CAR NAME')}
          </H4>
          <div className="d-flex">
            <ButtonArrow onClick={() => paginate('prev')} disabled={index === 0} />
            <ButtonArrow onClick={() => paginate('next')} disabled={index >= 2} right />
          </div>
        </Col>
        <Col md={6}>
          <ImageWrapper>
            <Carousel activeIndex={index} onSelect={handleSelecte} fade interval={null} keyboard={false} controls={false} indicators={false}>
              <Carousel.Item>
                <Image src={car} alt="audi-a1" />
              </Carousel.Item >
              <Carousel.Item>
                <Image src={car} alt="audi-a1" />
              </Carousel.Item >
              <Carousel.Item>
                <Image src={car} alt="audi-a1" />
              </Carousel.Item >
            </Carousel>
          </ImageWrapper>
        </Col>
      </Row>
    </Wrapper>
  )
}