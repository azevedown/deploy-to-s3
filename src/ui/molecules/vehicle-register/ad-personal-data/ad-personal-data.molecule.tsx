import React from "react";
import { useTranslation } from "react-i18next";
import { Wrapper } from "./ad-personal-data.molecule.style";
import { Col, Form } from "react-bootstrap";
import { FormControlMask, MaskHelper } from "c4u-web-components";
import { FormikErrors } from "formik";
import { CustomerAd } from "../../../../models";

interface IProps {
  formik: {
    handleChange: (e: React.ChangeEvent<any>) => void;
    initialValues?: CustomerAd;
    values: CustomerAd;
    errors: FormikErrors<CustomerAd>;
  };
}

export const AdPersonalData: React.FC<IProps> = (props) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Form.Row>
        <Form.Group as={Col} md={8} controlId="name">
          <Form.Label>{t("All name")}</Form.Label>
          <Form.Control
            placeholder={t("Tab here")}
            onChange={props.formik.handleChange}
            value={props.formik.values?.name}
            isInvalid={!!props.formik.errors?.name}
            disabled={true}
          />
          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} controlId="birthDate">
          <Form.Label>{t("Birth Date")}</Form.Label>
          <FormControlMask
            mask={MaskHelper.Date}
            placeholder={t("Tab here")}
            onChange={props.formik.handleChange}
            value={props.formik.values?.birthDate}
            isInvalid={!!props.formik.errors?.birthDate}
          />
          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.birthDate}
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} md={4} controlId="personalDocument">
          <Form.Label>{t("Personal Document")}</Form.Label>
          <FormControlMask
            mask={MaskHelper.Cpf}
            guide={false}
            placeholder={t("Tab here")}
            onChange={props.formik.handleChange}
            value={props.formik.values?.personalDocument}
            isInvalid={!!props.formik.errors?.personalDocument}
            disabled={true}
          />
          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.personalDocument}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} controlId="email">
          <Form.Label>{t("Email")}</Form.Label>
          <Form.Control
            placeholder={t("Tab here")}
            onChange={props.formik.handleChange}
            value={props.formik.values?.email}
            isInvalid={!!props.formik.errors?.email}
            disabled={true}
          />
          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} controlId="phoneNumber">
          <Form.Label>{t("Phone")}</Form.Label>
          <FormControlMask
            mask={MaskHelper.Landline}
            placeholder={t("Tab here")}
            onChange={props.formik.handleChange}
            value={props.formik.values?.phoneNumber}
            isInvalid={!!props.formik.errors?.phoneNumber}
          />
          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.phoneNumber}
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} md={4} controlId="cellphone">
          <Form.Label>{t("Cellphone")}</Form.Label>
          <FormControlMask
            mask={MaskHelper.Cellphone}
            placeholder={t("Tab here")}
            onChange={props.formik.handleChange}
            value={props.formik.values?.cellphone}
            isInvalid={!!props.formik.errors?.cellphone}
            disabled={true}
          />
          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.cellphone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={8} controlId="acceptSms">
          <Form.Check
            type="checkbox"
            label={t("Accept receive SMS and messages about Manhein")}
            onChange={props.formik.handleChange}
            checked={props.formik.values?.acceptSms}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} md={4} controlId="zipCode">
          <Form.Label>{t("Zip Code")}</Form.Label>
          <FormControlMask
            mask={MaskHelper.Cep}
            placeholder={t("Tab here")}
            onChange={props.formik.handleChange}
            value={props.formik.values?.zipCode}
            isInvalid={!!props.formik.errors?.zipCode}
            disabled={!!props.formik.initialValues?.zipCode}
          />
          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.zipCode}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={8} controlId="street">
          <Form.Label>{t("Address")}</Form.Label>
          <Form.Control
            placeholder={t("Tab here")}
            onChange={props.formik.handleChange}
            value={props.formik.values?.street}
            isInvalid={!!props.formik.errors?.street}
            disabled={!!props.formik.initialValues?.street}
          />
          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.street}
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} md={4} controlId="number">
          <Form.Label>{t("Number")}</Form.Label>
          <Form.Control
            placeholder={t("Tab here")}
            onChange={props.formik.handleChange}
            value={props.formik.values?.number}
            isInvalid={!!props.formik.errors?.number}
          />
          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.number}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} controlId="complement">
          <Form.Label>{t("Complement")}</Form.Label>
          <Form.Control
            placeholder={t("Tab here")}
            onChange={props.formik.handleChange}
            value={props.formik.values?.complement}
            isInvalid={!!props.formik.errors?.complement}
          />
          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.complement}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} controlId="neighborhood">
          <Form.Label>{t("Neighborhood")}</Form.Label>
          <Form.Control
            placeholder={t("Tab here")}
            onChange={props.formik.handleChange}
            value={props.formik.values?.neighborhood}
            isInvalid={!!props.formik.errors?.neighborhood}
            disabled={!!props.formik.initialValues?.neighborhood}
          />
          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.neighborhood}
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} md={4} controlId="city">
          <Form.Label>{t("City")}</Form.Label>
          <Form.Control
            placeholder={t("Tab here")}
            onChange={props.formik.handleChange}
            value={props.formik.values?.city}
            isInvalid={!!props.formik.errors?.city}
            disabled={!!props.formik.initialValues?.city}
          />
          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.city}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md={4} controlId="state">
          <Form.Label>{t("State")}</Form.Label>
          <Form.Control
            placeholder={t("Tab here")}
            onChange={props.formik.handleChange}
            value={props.formik.values?.state}
            isInvalid={!!props.formik.errors?.state}
            disabled={!!props.formik.initialValues?.state}
          />
          <Form.Control.Feedback type="invalid">
            {props.formik.errors?.state}
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
    </Wrapper>
  );
};
