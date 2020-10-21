import React, { useState } from 'react';
import { MainWrapper, Title, Text, ContentWrapper, Wrapper, Collapse } from './faq-item.molecule.style';
import { useTranslation } from 'react-i18next';
import { ButtonArrow } from '../../../atoms';

export const FAQItem = (props: { title: string, text: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, text } = props;
  const { t } = useTranslation();

  return (
    <Wrapper>

      <MainWrapper >
        <Title>
          {t(title)}
        </Title>
        <ButtonArrow collapse onClick={() => setIsOpen(!isOpen)} />
      </MainWrapper>

      <ContentWrapper isOpen={isOpen} >
        <Collapse in={isOpen} >
          <Text>
            {t(text)}
          </Text>
        </Collapse>
      </ContentWrapper>

    </Wrapper>
  )
};