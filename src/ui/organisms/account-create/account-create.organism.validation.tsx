import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { MsgValidation } from "../../../constants";
import { YupHelper } from "c4u-web-components";
import { FormAccountCreate } from "./account-create.organism";

export const AccountCreateValidation = () => {
  const { t } = useTranslation();

  const msgRequired = t(MsgValidation.RequiredField);

  Yup.addMethod<Yup.StringSchema>(
    Yup.string,
    "isCpfValid",
    YupHelper.isCpfValid
  );

  const validations = Yup.object<FormAccountCreate>({
    zipCode: Yup.string().nullable().required(msgRequired),
    name: Yup.string().nullable().required(msgRequired),
    email: Yup.string()
      .email(t(MsgValidation.Email))
      .nullable()
      .required(msgRequired),
    document: Yup.string()
      .nullable()
      .required(msgRequired)
      .isCpfValid(t(MsgValidation.Cpf)),
    cellphone: Yup.string().nullable().required(msgRequired),
    password: Yup.string().min(6, t('ValidationPassword')).required(msgRequired),
    passwordConfirm: Yup.string()
      .test("passwords-match", "As senhas devem corresponder", function (
        value
      ) {
        return this.parent.password === value;
      })
      .required(msgRequired),
  });

  return validations;
};
