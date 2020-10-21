import { Type } from "../..";
import { InspectionCompany } from "../../enum/inspection-companies.enum";

export interface IAdInspectionPaymentRequest {
  partnerId?: InspectionCompany;
  inspectionId?: number;
  creditCardNumber?: string;
  creditCardName?: string;
  creditCardYearValid?: string;
  creditCardMonthValid?: string;
  creditCardCvv?: string;
  plate?: string;
  renavam?: string;
  inspectionPlanId?: string;
  inspectionPlaceId?: string;
}

export class AdInspectionPaymentRequest {
  partnerId: InspectionCompany | null;
  inspectionId: number | null;
  creditCardNumber: string | null;
  creditCardName: string | null;
  creditCardYearValid: string | null;
  creditCardMonthValid: string | null;
  creditCardCvv: string | null;
  plate: string | null;
  renavam: string | null;
  inspectionPlanId: string | null;
  inspectionPlaceId: string | null;

  constructor({
    partnerId,
    inspectionId,
    creditCardNumber,
    creditCardName,
    creditCardMonthValid,
    creditCardYearValid,
    creditCardCvv,
    plate,
    renavam,
    inspectionPlanId,
    inspectionPlaceId,
  }: IAdInspectionPaymentRequest) {
    this.partnerId = Type.toNumberNull(partnerId);
    this.inspectionId = Type.toNumberNull(inspectionId);
    this.creditCardNumber = this.removeNotNumber(creditCardNumber);
    this.creditCardName = Type.toStringNull(creditCardName);
    this.creditCardMonthValid = Type.toStringNull(creditCardMonthValid);
    this.creditCardYearValid = Type.toStringNull(creditCardYearValid);
    this.creditCardCvv = this.removeNotNumber(creditCardCvv);
    this.plate = Type.toStringNull(plate);
    this.renavam = this.removeNotNumber(renavam);
    this.inspectionPlanId = Type.toStringNull(inspectionPlanId);
    this.inspectionPlaceId = Type.toStringNull(inspectionPlaceId);
  }

  private removeNotNumber = (item: string | undefined): string | null => {
    const value = Type.toStringNull(item);
    if (value) return value.replace(/[^\d]/g, "");
    return value;
  };
}
