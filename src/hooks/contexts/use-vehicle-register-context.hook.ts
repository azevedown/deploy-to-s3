import { useContext } from 'react';
import { VehicleRegisterContext } from '../../contexts';
import { CustomerAd, PhotoAd, VehicleAd } from '../../models';

export interface IVehicleRegisterProviderProps {
  vehicleContext: VehicleAd;
  setAdContext: React.Dispatch<React.SetStateAction<VehicleAd | null>>;
  setAdContextAsync: (vehicleId: number) => void;
  setSavedAdContextAsync: (id: number) => void;
  setVehiclePricesContextAsync: () => void;
  setAdContextPhotos: (photosAd: PhotoAd) => void;
  setAdContextPersonalData: (customer: CustomerAd) => void;
}

export const useVehicleRegisterContext = () => {
  const context = useContext<IVehicleRegisterProviderProps>(VehicleRegisterContext);

  if (!context) {
    throw new Error('Empty context');
  }

  return context;
};
