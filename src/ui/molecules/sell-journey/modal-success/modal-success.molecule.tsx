import React from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonPrimary, CoxIcon } from 'c4u-web-components';

import { Wrapper, Text, Title } from './modal-success.molecule.style';
import { Modal } from 'react-bootstrap';

export const ModalSuccess = (
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
        <CoxIcon name="checked" />
        <Title>
          {t('all right')}
        </Title>
        <Title className="mt-4">
          {t('your ad complies')}
        </Title>

        <Text>
          {t('you can proceed')}
        </Text>
        <Text>
          {t('define your vehicle')}
        </Text>

        <ButtonPrimary sizex="lg" onClick={() => close()}>
          {t('ok')}
        </ButtonPrimary>
      </Wrapper>
    </Modal>
  )
}