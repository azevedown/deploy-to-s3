import { Type } from "../..";

export interface IAdInspectionRequest {
  id?: number;
  partnerId?: number;
  inspectionPlanId?: string;
  inspectionPlanName?: string;
  inspectionPlanValue?: number;
  inspectionPlaceId?: string;
  inspectionPlaceName?: string;
  inspectionDescription?: string;
  inspectionPlacePhones?: string[];
  inspectionPlaceEmails?: string[];
  inspectionDate?: Date;
  inspectionPeriod?: number | string;
  adId?: number;
}

export class AdInspectionRequest {
  id: number | null;
  partnerId: number | null;
  inspectionPlanId: string | null;
  inspectionPlanName: string | null;
  inspectionPlanValue: number | null;
  inspectionPlaceId: string | null;
  inspectionDescription: string | null;
  inspectionPlaceName: string | null;
  inspectionPlacePhones: string[] | null;
  inspectionPlaceEmails: string[] | null;
  inspectionDate: Date | null;
  inspectionPeriod: number | null;
  adId: number | null;

  constructor({
    id,
    partnerId,
    inspectionPlanId,
    inspectionPlanName,
    inspectionPlanValue,
    inspectionPlaceId,
    inspectionDescription,
    inspectionPlaceName,
    inspectionPlacePhones,
    inspectionPlaceEmails,
    inspectionDate,
    inspectionPeriod,
    adId,
  }: IAdInspectionRequest) {
    this.id = Type.toNumberNull(id);
    this.adId = Type.toNumberNull(adId);
    this.partnerId = Type.toNumberNull(partnerId); 
    this.inspectionPlanId = Type.toStringNull(inspectionPlanId);
    this.inspectionPlanName = Type.toStringNull(inspectionPlanName);
    this.inspectionPlanValue = Type.toNumberNull(inspectionPlanValue);
    this.inspectionPlaceId = Type.toStringNull(inspectionPlaceId);
    this.inspectionPlaceName = Type.toStringNull(inspectionPlaceName);
    this.inspectionDescription = Type.toStringNull(inspectionDescription);
    this.inspectionPlacePhones = inspectionPlacePhones ?? null;
    this.inspectionPlaceEmails = inspectionPlaceEmails ?? null;
    this.inspectionDate = Type.toDateNull(inspectionDate);
    this.inspectionPeriod = Type.toNumberNull(inspectionPeriod);
  }
}
