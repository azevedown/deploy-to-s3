import React from "react";
import { Col, Form } from "react-bootstrap";

import { useTranslation } from "react-i18next";
import { FormikErrors } from "formik";
import { CoxIcon, FormControlMask } from "c4u-web-components";
import { PaymentCrediCardButton } from "./payment-credit-card.molecute.style";

export interface PaymentCreditCardForm {
  creditCardNumber: string;
  name: string;
  month: string;
  year: string;
  cv: string;
}

interface IProps {
  formik: {
    handleChange: (e: React.ChangeEvent<any>) => void;
    values: PaymentCreditCardForm;
    errors: FormikErrors<PaymentCreditCardForm>;
  };
}
export const PaymentCreditCard: React.FC<IProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={"form-default"}>
      <PaymentCrediCardButton>
        <CoxIcon name={"credit-card"} />
        {t("Creditcard")}
      </PaymentCrediCardButton>
      <Form.Row>
        <Form.Group as={Col} md={6} controlId="creditCardNumber">
          <Form.Label>{t("Creditcard number")}</Form.Label>
          <FormControlMask
            mask={[
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              ".",
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              ".",
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              ".",
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
            placeholder={t("Tab here")}
            onChange={props.formik.handleChange}
            value={props.formik.values?.creditCardNumber}
            isInvalid={!!props.formik.errors?.creditCardNumber}
          />

          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.creditCardNumber}
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} md={6} controlId="name">
          <Form.Label>{t("Creditcard name")}</Form.Label>
          <Form.Control
            placeholder={t("Tab here")}
            onChange={props.formik.handleChange}
            value={props.formik.values?.name}
            isInvalid={!!props.formik.errors?.name}
          />
          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={"2"} controlId="month">
          <Form.Label>{t("Month")}</Form.Label>
          <FormControlMask
            mask={[/\d/, /\d/]}
            placeholder={t("Tab here")}
            onChange={props.formik.handleChange}
            value={props.formik.values?.month}
            isInvalid={!!props.formik.errors?.month}
          />
          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.month}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={"2"} controlId="year">
          <Form.Label>{t("Year")}</Form.Label>
          <FormControlMask
            mask={[/\d/, /\d/, /\d/, /\d/]}
            placeholder={t("Tab here")}
            onChange={props.formik.handleChange}
            value={props.formik.values?.year}
            isInvalid={!!props.formik.errors?.year}
          />
          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.year}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={"2"} controlId="cv">
          <Form.Label>{t("Creditcard code")}</Form.Label>
          <FormControlMask
            mask={[/\d/, /\d/, /\d/, /\d?/]}
            placeholder={t("Tab here")}
            onChange={props.formik.handleChange}
            value={props.formik.values?.cv}
            isInvalid={!!props.formik.errors?.cv}
            placeholderChar={"\u2000"}
          />
          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.cv}
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
    </div>
  );
};
