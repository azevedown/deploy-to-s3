import { CustomerModel } from "./customer.model";

export interface AdModel {
    id: number;
    vehicleId: number;
    vehicleGradeId: number;
    mileage: number;
    licenseUf?: any;
    renavam?: any;
    plate?: any;
    step: number;
    trafficPenaltyValue: number;
    acceptedTerms: boolean;
    acceptedRules: boolean;
    observation?: any;
    sellValue: number;
    customerId: number;
    partnerCatalogId?: any;
    maxKbbValue?: any;
    minKbbValue?: any;
    kbbValueDate?: any;
    customer?: CustomerModel;
    adVehicleOptions: IAdVehicleOption[];
}

export interface CreateAdModel {
  acceptedTerms: boolean;
  acceptedRules: boolean;
}

export interface IAdVehicleOption {
    tag?: number;
    name?: string;
    cost?: number;
  }