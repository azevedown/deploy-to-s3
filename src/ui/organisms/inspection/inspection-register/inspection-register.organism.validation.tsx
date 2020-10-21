import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { MsgValidation } from "../../../../constants";
import { PaymentCreditCardForm } from "../../../molecules";

export const InspectionRegisterValidation = () => {
  const { t } = useTranslation();

  const msgRequired = t(MsgValidation.RequiredField);

  const validations = Yup.object<PaymentCreditCardForm>({
    creditCardNumber: Yup.string()
      .nullable()
      .required(msgRequired)
      .test(
        "invalid",
        t("Invalid creditcard number"),
        (value: any): boolean => {
          return /^\d{4}\.\d{4}\.\d{4}\.\d{4}$/.test(value);
        }
      ),
    cv: Yup.string()
      .nullable()
      .required(msgRequired)
      .test("invalid", t("Invalid"), (value: any): boolean => {
        return /^\d{3,4}$/.test(value.trim());
      }),
    month: Yup.string()
      .nullable()
      .required(msgRequired)
      .test("invalid", t("Invalid"), (value: any): boolean => {
        if (/^\d{2}$/.test(value)) {
          const month = Number(value);
          return month > 0 && month <= 12;
        }

        return false;
      }),
    name: Yup.string().nullable().required(msgRequired),
    year: Yup.string()
      .nullable()
      .required(msgRequired)
      .test("invalid", t("Invalid"), (value: any): boolean => {
        if (/^\d{4}$/.test(value)) {
          const year = Number(value);
          return year >= new Date().getFullYear();
        }

        return false;
      }),
  });

  return validations;
};
