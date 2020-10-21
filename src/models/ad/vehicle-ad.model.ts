import { VehicleInfo, Vehicle, CustomerAd, VehiclePrice, PhotoAd } from "..";

export interface VehicleAd {
  id?: number;
  vehicle?: Vehicle;
  customer?: CustomerAd;
  vehiclePrice?: VehiclePrice;
  vehicleInfo?: VehicleInfo;
  photosAd?: PhotoAd;
}
