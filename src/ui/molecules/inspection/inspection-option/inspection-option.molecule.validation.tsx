import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { MsgValidation } from "../../../../constants";
import { InspectionOptionForm } from "./inspection-option.molecute";

export const InspectionOptionValidation = () => {
  const { t } = useTranslation();

  const msgRequired = t(MsgValidation.RequiredField);

  const validations = Yup.object<InspectionOptionForm>({
    hour: Yup.string().nullable().required(msgRequired),
    date: Yup.date().nullable().required(msgRequired),
  });

  return validations;
};
