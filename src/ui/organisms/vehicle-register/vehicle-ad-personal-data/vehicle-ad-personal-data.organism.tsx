import { ButtonPrimary, LabelDefault, MaskHelper } from "c4u-web-components";
import { useFormik } from "formik";
import React, { useEffect, useMemo } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { VehicleAdPersonalDataValidation } from "./vehicle-ad-personal-data.organism.validation";
import {
  AdPersonalBankData,
  AdPersonalData,
  MenuVehicleRegister,
} from "../../../molecules";
import {
  Box,
  BoxContent,
  BoxTitle,
  DivButtonAdvance,
  RowContent,
} from "./vehicle-ad-personal-data.organism.style";
import {
  useManhein,
  useSessionContext,
  useVehicleRegisterContext,
} from "../../../../hooks";
import { AdVahiclePersonalDataRequest, CustomerAd } from "../../../../models";
import { useHistory, useParams } from "react-router-dom";
import { conformToMask } from "react-text-mask";

export const VehicleAdPersonalData: React.FC = () => {
  const { t } = useTranslation();

  const { saveAdPersonalData } = useManhein();

  const {
    vehicleContext,
    setSavedAdContextAsync,
  } = useVehicleRegisterContext();

  const { handleFormikError } = useSessionContext();

  const hisotry = useHistory();
  const params = useParams();

  const idAdRegister = useMemo((): number => {
    return (params as any).id;
  }, [params]);

  const inicialValues = {
    acceptSms: true,
  } as CustomerAd;

  const formik = useFormik<CustomerAd>({
    initialValues: inicialValues,
    onSubmit: async (values, { setErrors }) => {
      try {
        const request = new AdVahiclePersonalDataRequest({
          acceptedReceiveSms: values.acceptSms,
          account: values.account,
          accountVerifyingDigit: values.digit,
          adId: idAdRegister,
          bank: values.bank,
          branch: values.agency,
          city: values.city,
          complement: values.complement,
          neighborhood: values.neighborhood,
          number: values.number,
          phoneNumber: values.phoneNumber,
          state: values.state,
          street: values.street,
        });
        const response = await saveAdPersonalData(request);
        hisotry.push(`/inspection/${response.id}`);
      } catch (e) {
        handleFormikError(e, setErrors);
      }
    },
    validationSchema: VehicleAdPersonalDataValidation(),
    validateOnBlur: true,
    validateOnChange: false,
  });

  useEffect(() => {
    if (!vehicleContext && idAdRegister) {
      setSavedAdContextAsync(idAdRegister);
    } else if (vehicleContext?.customer) {
      const cpf = conformToMask(
        vehicleContext.customer.personalDocument,
        MaskHelper.Cpf,
        { guide: false }
      );
      const cellphone = conformToMask(
        vehicleContext.customer.cellphone,
        MaskHelper.Cellphone,
        { guide: false }
      );
      const birthDate = conformToMask(
        vehicleContext.customer.birthDate ?? "",
        MaskHelper.Date,
        { guide: false }
      );
      const phone = conformToMask(
        vehicleContext.customer.phoneNumber ?? "",
        MaskHelper.Landline,
        { guide: false }
      );
      const zipCode = conformToMask(
        vehicleContext.customer.zipCode,
        MaskHelper.Cep,
        { guide: false }
      );
      formik.setValues({
        ...vehicleContext.customer,
        personalDocument: cpf.conformedValue,
        cellphone: cellphone.conformedValue,
        phoneNumber: phone.conformedValue,
        birthDate: birthDate.conformedValue,
        zipCode: zipCode.conformedValue,
      });
    }
  }, [vehicleContext, idAdRegister]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Form
      className={"form-default"}
      noValidate
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => formik.handleSubmit(e)}
    >
      <RowContent>
        <Col md={2}>
          <MenuVehicleRegister step={4} />
        </Col>
        <Col md={10}>
          <Box>
            <BoxTitle>{t("Personal Data")}</BoxTitle>
            <BoxContent>
              <AdPersonalData
                formik={{
                  handleChange: formik.handleChange,
                  values: formik.values,
                  errors: formik.errors,
                  initialValues: vehicleContext?.customer,
                }}
              />
            </BoxContent>
          </Box>

          <Box>
            <BoxTitle>{t("Bank Data")}</BoxTitle>
            <BoxContent>
              <Row className={"form-row"}>
                <Col>
                  <LabelDefault>{t("Only customer own account")}</LabelDefault>
                </Col>
              </Row>
              <AdPersonalBankData
                formik={{
                  handleChange: formik.handleChange,
                  values: formik.values,
                  errors: formik.errors,
                }}
              />
            </BoxContent>
          </Box>
        </Col>
      </RowContent>
      <RowContent>
        <Col md={2}></Col>
        <Col md={10}>
          <DivButtonAdvance>
            <ButtonPrimary
              type={"submit"}
              sizex={"md"}
              loading={formik.isSubmitting}
            >
              {t("Advance")}
            </ButtonPrimary>
          </DivButtonAdvance>
        </Col>
      </RowContent>
    </Form>
  );
};
