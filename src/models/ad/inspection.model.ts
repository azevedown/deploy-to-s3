import { CreditCard, InspectionPlan, InspectionUnit } from "..";
import { InspectionCompany } from "../enum/inspection-companies.enum";

export interface Inspection {
  id?: number;
  inspectionCompany: InspectionCompany;
  inspectionPlan?: InspectionPlan;
  creditCard: CreditCard;
  dateSchedule?: Date;
  hourSchedule?: string;
  unitSchedule?: InspectionUnit;
  status?: number;
}
