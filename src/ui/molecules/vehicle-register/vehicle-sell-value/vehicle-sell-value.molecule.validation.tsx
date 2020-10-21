import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { MsgValidation } from "../../../../constants";
import { useVehicleRegisterContext } from "../../../../hooks";

export const VehicleSellValueValidation = () => {
  const { t } = useTranslation();

  const { vehicleContext } = useVehicleRegisterContext();

  const msgRequired = t(MsgValidation.Required);

  const validations = Yup.object({
    sellPrice: Yup.string()
      .nullable()
      .required(msgRequired)
      .test("invalid", t(MsgValidation.Invalid), (value: any): boolean => {
        const valMinKbb = vehicleContext?.vehiclePrice?.priceKbbInitial ?? 0;
        const min = valMinKbb - valMinKbb * 0.2;

        const valMaxKbb = vehicleContext?.vehiclePrice?.priceKbbFinal ?? 0;
        const max = valMaxKbb + valMaxKbb * 0.2;

        const val = value ? Number(value.replace(/[^\d]/g, "")) : 0;
        
        return val >= min && val <= max;
      }),
  });

  return validations;
};
