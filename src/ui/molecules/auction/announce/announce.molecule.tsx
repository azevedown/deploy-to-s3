import React from 'react';
import { H1, H3, H4, Wrapper, Button } from './announce.molecule.style';
import { useTranslation } from 'react-i18next';

export const Announce = (props: { toggleCEP: any, showCEP: boolean }) => {
  const { t } = useTranslation();
  const { toggleCEP, showCEP } = props;

  return (
    <Wrapper>
      <H1>
        {t('Negotiate now')}
      </H1>
      <H4>
        {t('Pregao Online')}
      </H4>
      {showCEP &&
        <H3>
          {t('before proceeding')}
        </H3>
      }
      {!showCEP &&
        <Button onClick={() => toggleCEP(true)} sizex="md">
          {t('ANNOUNCE VEHICLE')}
        </Button>
      }
    </Wrapper>
  )
};