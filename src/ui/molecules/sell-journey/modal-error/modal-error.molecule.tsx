import React from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonSecondary, CoxIcon } from 'c4u-web-components';

import { Wrapper, Text, Title } from './modal-error.molecule.style';
import { Modal } from 'react-bootstrap';

export const ModalError = (
  props: {
    close: () => void,
    show: boolean,
  }
) => {

  const { t } = useTranslation();

  const { show, close } = props;

  return (
    <Modal
      show={show}
      centered>
      <Wrapper>
        <CoxIcon name="error" />
        <Title>
          {t('Error')}
        </Title>

        <Text>
          {t('survey error text')}
        </Text>

        <ButtonSecondary sizex="lg" onClick={() => close()}>
          {t('ok')}
        </ButtonSecondary>
      </Wrapper>
    </Modal>
  )
}