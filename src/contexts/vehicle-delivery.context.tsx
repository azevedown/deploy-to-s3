import React, {
  createContext,
  FunctionComponent,
  useState,
} from "react";
import { IVehicleDeliveryProviderProps } from "../hooks/contexts/use-vehicle-delivery.hook";

const VehicleDeliveryContext = createContext({} as any);

const VehicleDeliveryProvider: FunctionComponent = (props) => {
  const [stepVDContext, setStepVDContext] = useState<number>(1);

  return (
    <VehicleDeliveryContext.Provider
      value={
        {
          stepVDContext,
          setStepVDContext
        } as IVehicleDeliveryProviderProps
      }
    >
      {props.children}
    </VehicleDeliveryContext.Provider>
  );
};

export { VehicleDeliveryContext, VehicleDeliveryProvider };
