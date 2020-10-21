import React, { useState } from 'react';
import { Wrapper, DepositionsWrapper, H2, Controls, ControlsWrapper } from './depositions.organism.style';
import { CardDeposition } from '../../../molecules';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-bootstrap';

const personMock = require('../../../assets/images/person-mock.png');

export const Depositions = () => {
  const [index, setIndex] = useState(0);

  const { t } = useTranslation();

  const depositions = [
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel ante in velit condimentum viverra. Phasellus ornare varius arcu, eu gravida tortor ullamcorper finibus.',
      name: 'Nome Sobrenome',
      profession: 'Profissão',
      rate: 5,
      image: personMock,
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel ante in velit condimentum viverra. Phasellus ornare varius arcu, eu gravida tortor ullamcorper finibus.',
      name: 'Nome Sobrenome',
      profession: 'Profissão',
      rate: 3,
      image: personMock,
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel ante in velit condimentum viverra. Phasellus ornare varius arcu, eu gravida tortor ullamcorper finibus.',
      name: 'Nome Sobrenome',
      profession: 'Profissão',
      rate: 5,
      image: personMock,
    }
  ];

  const handleSelecte = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  }


  return (
    <Wrapper>
      <H2>
        {t('depositions title')}
      </H2>

      <Carousel activeIndex={index} onSelect={handleSelecte} fade interval={null} keyboard={false} controls={false} indicators={false}>
        {[1, 2, 3].map(
          (item, itemIndex) => <Carousel.Item key={itemIndex}>
            <DepositionsWrapper>
              {
                depositions.map((card, index) =>
                  <CardDeposition
                    key={index}
                    description={card.description}
                    profession={card.profession}
                    image={card.image}
                    name={card.name}
                    rate={card.rate}
                  />)
              }
            </DepositionsWrapper>
          </Carousel.Item>
        )}
      </Carousel>

      <ControlsWrapper>
        <Controls onClick={() => setIndex(0)} selected={index === 0} />
        <Controls onClick={() => setIndex(1)} selected={index === 1} />
        <Controls onClick={() => setIndex(2)} selected={index === 2} />
      </ControlsWrapper>
    </Wrapper>
  )
}