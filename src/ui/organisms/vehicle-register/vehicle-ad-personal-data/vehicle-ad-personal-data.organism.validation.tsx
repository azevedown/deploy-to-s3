import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { MsgValidation } from "../../../../constants";
import { YupHelper } from "c4u-web-components";
import { CustomerAd } from "../../../../models";

export const VehicleAdPersonalDataValidation = () => {
  const { t } = useTranslation();

  const msgRequired = t(MsgValidation.RequiredField);

  Yup.addMethod<Yup.StringSchema>(
    Yup.string,
    "isCpfValid",
    YupHelper.isCpfValid
  );
  Yup.addMethod<Yup.StringSchema>(
    Yup.string,
    "isDatePtBrValid",
    YupHelper.isDatePtBrValid
  );
  Yup.addMethod<Yup.StringSchema>(
    Yup.string,
    "greaterThanAgeDatePtBr",
    YupHelper.greaterThanAgeDatePtBr
  );

  const validations = Yup.object<CustomerAd>({
    birthDate: Yup.string()
      .nullable()
      .required(msgRequired)
      .isDatePtBrValid(t(MsgValidation.Date))
      .greaterThanAgeDatePtBr(18, t("Greater than 18 years")),
    name: Yup.string().nullable().required(msgRequired),
    personalDocument: Yup.string()
      .nullable()
      .required(msgRequired)
      .isCpfValid(t(MsgValidation.Cpf)),
    email: Yup.string()
      .email(t(MsgValidation.Email))
      .nullable()
      .required(msgRequired),
    cellphone: Yup.string().nullable().required(msgRequired),
    acceptSms: Yup.boolean().nullable().required(msgRequired),
    zipCode: Yup.string().nullable().required(msgRequired),
    street: Yup.string().nullable().required(msgRequired),
    number: Yup.string().nullable().required(msgRequired),
    neighborhood: Yup.string().nullable().required(msgRequired),
    city: Yup.string().nullable().required(msgRequired),
    state: Yup.string().nullable().required(msgRequired),
    bank: Yup.string().nullable().required(msgRequired),
    agency: Yup.string()
      .nullable()
      .typeError(msgRequired)
      .required(msgRequired),
    account: Yup.string().nullable().required(msgRequired),
    digit: Yup.string().nullable().required(msgRequired),
    complement: Yup.string().optional(),
    phoneNumber: Yup.string().optional(),
    kbbStateId: Yup.number().optional(),
  });

  return validations;
};
