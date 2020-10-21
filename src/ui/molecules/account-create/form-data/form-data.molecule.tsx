import React from "react";
import { Col, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { FormikErrors } from "formik";

import { FormControlMask, MaskHelper, ButtonPrimary } from "c4u-web-components";
import {
  H2,
  H4,
  Box,
  BoxTitles,
  DivButton,
  A,
} from "./form-data.molecule.style";
import { FormAccountCreate } from "../../../organisms/account-create/account-create.organism";

interface IProps {
  formik: {
    handleChange: (e: React.ChangeEvent<any>) => void;
    values: FormAccountCreate;
    errors: FormikErrors<FormAccountCreate>;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isSubmitting: boolean;
  };
}

export const FormCreateAccount: React.FC<IProps> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <BoxTitles>
        <H2>{t("Create an account now")}</H2>
        <H4>{t("To connect on the platform")}</H4>
      </BoxTitles>
      <Box>
        <Form
          className={"form-default"}
          noValidate
          onSubmit={props.formik.handleSubmit}
        >
          <Col md={12}>
            <Form.Row>
              <Form.Group as={Col} md={6} controlid="zipCode">
                <Form.Label>{t("Zip Code")}</Form.Label>
                <FormControlMask
                  mask={MaskHelper.Cep}
                  id={"zipCode"}
                  placeholder={t("Tab here")}
                  onChange={props.formik.handleChange}
                  value={props.formik.values?.zipCode}
                  isInvalid={!!props.formik.errors?.zipCode}
                />
                <Form.Control.Feedback type="invalid">
                  {props.formik.errors?.zipCode}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md={12} controlId="name">
                <Form.Label>{t("Full Name")}</Form.Label>
                <Form.Control
                  maxLength={100}
                  placeholder={t("Tab here")}
                  onChange={props.formik.handleChange}
                  value={props.formik.values?.name}
                  isInvalid={!!props.formik.errors?.name}
                />
                <Form.Control.Feedback type="invalid">
                  {props.formik.errors?.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md={12} controlId="email">
                <Form.Label>{t("Email")}</Form.Label>
                <Form.Control
                  maxLength={100}
                  placeholder={t("Tab here")}
                  onChange={props.formik.handleChange}
                  value={props.formik.values?.email}
                  isInvalid={!!props.formik.errors?.email}
                />
                <Form.Control.Feedback type="invalid">
                  {props.formik.errors?.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md={6} controlId="document">
                <Form.Label>{t("Personal Document")}</Form.Label>
                <FormControlMask
                  mask={MaskHelper.Cpf}
                  placeholder={"___.___.___-__"}
                  onChange={props.formik.handleChange}
                  value={props.formik.values?.document}
                  isInvalid={!!props.formik.errors?.document}
                />
                <Form.Control.Feedback type="invalid">
                  {props.formik.errors?.document}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md={6} controlId="cellphone">
                <Form.Label>{t("Cellphone")}</Form.Label>
                <FormControlMask
                  mask={MaskHelper.Cellphone}
                  placeholder={"(__) _____-____"}
                  onChange={props.formik.handleChange}
                  value={props.formik.values?.cellphone}
                  isInvalid={!!props.formik.errors?.cellphone}
                />
                <Form.Control.Feedback type="invalid">
                  {props.formik.errors?.cellphone}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <hr />
            <Form.Row>
              <Form.Group as={Col} md={6} controlId="password">
                <Form.Label>{t("Password")}</Form.Label>
                <Form.Control
                  type="password"
                  maxLength={20}
                  placeholder={t("Tab here")}
                  onChange={props.formik.handleChange}
                  value={props.formik.values?.password}
                  isInvalid={!!props.formik.errors?.password}
                />
                <Form.Control.Feedback type="invalid">
                  {props.formik.errors?.password}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md={6} controlId="passwordConfirm">
                <Form.Label>{t("Confirm password")}</Form.Label>
                <Form.Control
                  type="password"
                  maxLength={20}
                  placeholder={t("Tab here")}
                  onChange={props.formik.handleChange}
                  value={props.formik.values?.passwordConfirm}
                  isInvalid={!!props.formik.errors?.passwordConfirm}
                />
                <Form.Control.Feedback type="invalid">
                  {props.formik.errors?.passwordConfirm}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
          </Col>
          <Col md={12}>
            <DivButton>
              <ButtonPrimary
                type={"submit"}
                sizex={"lg"}
                loading={props.formik.isSubmitting}
              >
                {t("Create my account")}
              </ButtonPrimary>
              <A>{t("Back")}</A>
            </DivButton>
          </Col>
        </Form>
      </Box>
    </>
  );
};
