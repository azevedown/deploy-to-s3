import React from 'react';
import { H2, Wrapper } from './deposition-carrousel.molecule.style';
import { useTranslation } from 'react-i18next';

export const Advantages = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <H2>
        {t('schedule survey')}
      </H2>
      <H2>
        {t('receive best offer')}
      </H2>
      <H2>
        {t('receive value cash')}
      </H2>
    </Wrapper>
  )
};