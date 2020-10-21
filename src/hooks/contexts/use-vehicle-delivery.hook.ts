import { useContext } from 'react';
import { VehicleDeliveryContext } from '../../contexts';

export interface IVehicleDeliveryProviderProps {
  stepVDContext: number;
  setStepVDContext: React.Dispatch<React.SetStateAction<number>>;
}

export const useVehicleDeliveryContext = () => {
  const context = useContext<IVehicleDeliveryProviderProps>(VehicleDeliveryContext);

  if (!context) {
    throw new Error('Empty context');
  }

  return context;
};
