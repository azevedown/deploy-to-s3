import React from 'react';
import { Wrapper } from './check-confirm.atom.style';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const CheckConfirm = (props: { setAccordance: any }) => {
  const { t } = useTranslation();
  const { setAccordance } = props;
  return (
    <Wrapper>
      <Form>
        <Form.Check onChange={(ev: any) => setAccordance(ev.target.checked)} type="checkbox" label={t('in accordance')} />
      </Form>
    </Wrapper>
  );
}