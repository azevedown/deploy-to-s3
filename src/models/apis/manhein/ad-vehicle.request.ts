import { IAdVehicleOption, Type } from "../..";

export interface IAdVehicleRequest {
  id: number;
  vehicleId: number;
  vehicleGradeId?: number;
  mileage?: number;
  licenseUf?: string;
  renavam?: string;
  plate?: string;
  adVehicleOptions?: AdVehicleOption[];
}

export class AdVehicleOption {
  tag: number | null;
  name: string | null;
  cost: number;

  constructor({ tag, name, cost }: IAdVehicleOption) {
    this.tag = Type.toNumberNull(tag);
    this.name = Type.toStringNull(name);
    this.cost = cost ? Number(cost) : 0;
  }
}

export class AdVehicleRequest {
  id: number | null;
  vehicleId: number | null;
  vehicleGradeId: number | null;
  mileage: number | null;
  licenseUf: string | null;
  renavam: string | null;
  plate: string | null;
  adVehicleOptions: AdVehicleOption[] | null;

  constructor({
    id,
    licenseUf,
    mileage,
    plate,
    renavam,
    vehicleGradeId,
    vehicleId,
    adVehicleOptions,
  }: IAdVehicleRequest) {
    this.id = Type.toNumberNull(id);
    this.licenseUf = Type.toStringNull(licenseUf);
    this.mileage = Type.toNumberNull(mileage);
    this.plate = Type.toStringNull(plate);
    this.renavam = Type.toStringNull(renavam);
    this.vehicleGradeId = Type.toNumberNull(vehicleGradeId);
    this.vehicleId = Type.toNumberNull(vehicleId);
    this.adVehicleOptions = adVehicleOptions ? adVehicleOptions : null;
  }
}
