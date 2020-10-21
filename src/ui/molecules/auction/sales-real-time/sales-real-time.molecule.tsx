import React from 'react';
import { H2, H1, H3, Wrapper } from './sales-real-time.molecule.style';
import { useTranslation } from 'react-i18next';
import { ButtonSecondary } from 'c4u-web-components';

export const SalesRealTime = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <H2>
        {t('sales real time')}
      </H2>
      <H1>
        435.860
      </H1>
      <H3>
        {t('sales each minute')}
      </H3>
      <ButtonSecondary sizex="lg">
        {t('announce my vehicle')}
      </ButtonSecondary>
    </Wrapper>
  )
};