import React from 'react';
import { TextButton, Wrapper } from './schedule-survey.molecule.style';
import { useTranslation } from 'react-i18next';

export const Advantages = (props: { selected: number, setSelected: any }) => {
  const { t } = useTranslation();
  const { selected, setSelected } = props;

  return (
    <Wrapper>
      <TextButton onClick={() => setSelected(0)} selected={selected === 0}>
        {t('schedule survey')}
      </TextButton>
      <TextButton onClick={() => setSelected(1)} selected={selected === 1}>
        {t('receive best offer')}
      </TextButton>
      <TextButton onClick={() => setSelected(2)} selected={selected === 2}>
        {t('receive value cash')}
      </TextButton>
    </Wrapper>
  )
};