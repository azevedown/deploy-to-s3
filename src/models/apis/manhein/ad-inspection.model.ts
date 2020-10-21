import { AdModel } from "./ad.model";

export interface InspectionStatus {
  status: number;
  date: Date;
}

export interface AdInspectionModel {
  id: number;
  partnerId: number;
  status: number;
  reportLink: string;
  inspectionPlanId: string;
  inspectionPlaceId: string;
  inspectionPlaceName: string;
  inspectionDescription: string;
  inspectionPlacePhones: string[];
  inspectionDate: Date;
  inspectionPeriod: number;
  ad: AdModel;
  inspectionStatuses: InspectionStatus[];
}
