import React from "react";
import { useTranslation } from "react-i18next";
import { Wrapper } from "./ad-personal-bank-data.molecule.style";
import { Col, Form } from "react-bootstrap";

import { Combo, DropdownDefault, FormControlMask } from "c4u-web-components";
import { FormikErrors } from "formik";
import { CustomerAd } from "../../../../models";

interface IProps {
  formik: {
    handleChange: (e: React.ChangeEvent<any>) => void;
    values: CustomerAd;
    errors: FormikErrors<CustomerAd>;
  };
}

export const AdPersonalBankData: React.FC<IProps> = (props) => {
  const { t } = useTranslation();

  const banks = [
    {
      title: "001 - Banco do Brasil",
      value: "001",
    },
    {
      title: "031 - Itaú",
      value: "031",
    },
  ] as Combo[];

  const maskAccount = [
    /\d/,
    /\d?/,
    /\d?/,
    /\d?/,
    /\d?/,
    /\d?/,
    /\d?/,
    /\d?/,
    /\d?/,
    /\d?/,
    /\d?/,
    /\d?/,
    /\d?/,
  ];

  return (
    <Wrapper>
      <Form.Row>
        <Form.Group as={Col} md={6} controlId="nameRead">
          <Form.Label>{t("All name")}</Form.Label>
          <Form.Control value={props.formik.values?.name} disabled={true} />
        </Form.Group>

        <Form.Group as={Col} md={3} controlId="cpfRead">
          <Form.Label>{t("Personal Document")}</Form.Label>
          <Form.Control
            value={props.formik.values?.personalDocument}
            disabled={true}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} md={6} controlId="bank">
          <Form.Label>{t("Bank")}</Form.Label>
          <DropdownDefault
            data={banks}
            selectText={t("Select")}
            id={"bank"}
            searchField={true}
            placeholder={t("Tab here")}
            isInvalid={!!props.formik.errors?.bank}
            onChangeSelect={props.formik.handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.bank}
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} md={4} controlId="agency">
          <Form.Label>{t("Agency")}</Form.Label>
          <FormControlMask
            mask={[/\d/, /\d/, /\d/, /\d/]}
            placeholder={t("Tab here")}
            onChange={props.formik.handleChange}
            value={props.formik.values?.agency}
            isInvalid={!!props.formik.errors?.agency}
          />
          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.agency}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} controlId="account">
          <Form.Label>{t("Account")}</Form.Label>
          <FormControlMask
            mask={maskAccount}
            placeholderChar={"\u2000"}
            placeholder={t("Tab here")}
            onChange={props.formik.handleChange}
            value={props.formik.values?.account}
            isInvalid={!!props.formik.errors?.account}
          />
          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.account}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} controlId="digit">
          <Form.Label>{t("Digit")}</Form.Label>
          <FormControlMask
            mask={[/\d/, /\d?/]}
            placeholderChar={"\u2000"}
            placeholder={t("Tab here")}
            onChange={props.formik.handleChange}
            value={props.formik.values?.digit}
            isInvalid={!!props.formik.errors?.digit}
          />
          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.digit}
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
    </Wrapper>
  );
};
