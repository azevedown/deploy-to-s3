import React from 'react';
import { useTranslation } from 'react-i18next';

import { Wrapper, Title } from './header-sell-journey.molecule.style';
import { ButtonSecondary } from 'c4u-web-components';

export const HeaderSellJourney = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <ButtonSecondary sizex={'sm'} sizey={'thin'}>{t('Back')}</ButtonSecondary>
      <Title>{t('Register ad')}</Title>
    </Wrapper>
  )
}