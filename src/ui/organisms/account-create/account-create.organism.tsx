import React from "react";

import { useFormik } from "formik";

import {
  FormCreateAccount,
  SuccessCreate,
  ModalSuccess,
} from "../../molecules";
import {
  Wrapper,
  Container,
  Image,
  ImageWrapper,
  SectionImage,
  SectionForm,
} from "./account-create.organism.style";
import { AccountCreateValidation } from "./account-create.organism.validation";
import { useManhein, useSessionContext } from "../../../hooks";
import { CustomerRequest } from "../../../models";

const car = require("../../assets/images/audi-a1-reverse.png");

export interface FormAccountCreate {
  zipCode: string;
  name: string;
  email: string;
  document: string;
  cellphone: string;
  password: string;
  passwordConfirm: string;
}

export const AccountSubmit: React.FC = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [finishCreate, setFinishCreate] = React.useState(false);

  const { handleFormikError } = useSessionContext();

  const { saveCustomer } = useManhein();

  const inicialValues = {} as FormAccountCreate;

  const formik = useFormik<FormAccountCreate>({
    initialValues: inicialValues,
    onSubmit: async (values, { setErrors }) => {
      try {
        const request = new CustomerRequest({
          document: values.document,
          email: values.email,
          mobile: values.cellphone,
          name: values.name,
          zipCode: values.zipCode, //08090-284
        });
        request.id = 0;
        await saveCustomer(request);

        setModalShow(true);
        setFinishCreate(true);
      } catch (e) {
        handleFormikError(e, setErrors);
      }
    },
    validationSchema: AccountCreateValidation(),
    validateOnBlur: true,
    validateOnChange: false,
  });

  return (
    <Wrapper>
      <Container>
        <SectionImage>
          <ImageWrapper>
            <Image src={car} alt="audi-a1" />
          </ImageWrapper>
        </SectionImage>
        <SectionForm>
          <ModalSuccess show={modalShow} onHide={() => setModalShow(false)} />
          {finishCreate ? (
            <SuccessCreate />
          ) : (
            <FormCreateAccount
              formik={{
                handleChange: formik.handleChange,
                values: formik.values,
                errors: formik.errors,
                handleSubmit: formik.handleSubmit,
                isSubmitting: formik.isSubmitting
              }}
            />
          )}
        </SectionForm>
      </Container>
    </Wrapper>
  );
};
