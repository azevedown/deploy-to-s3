//apis
export type { LocationState } from "./apis/kbb/location-state.model";
export type { Geolocation } from "./apis/geolocation/geolocation.model";
export type { VehicleBrand } from "./apis/kbb/vehicle-brand.model";
export type { VehicleModel } from "./apis/kbb/vehicle-model.model";
export type { VehicleVersion } from "./apis/kbb/vehicle-version.model";
export type { VehicleBrandModels } from "./apis/kbb/vehicle-brand-models.model";
export type { VehiclePrices } from "./apis/kbb/vehicle-prices.model";
export type { Years } from "./apis/kbb/years.model";
export type { Vehicle } from "./apis/kbb/vehicle.model";
export type { BaseResponseKbb } from "./apis/kbb/base-response-kbb.model";
export type { PriceAdvisorRequest } from "./apis/kbb/price-advisor-request.model";
export type { AdVehiclePicture } from "./apis/manhein/ad-vehicle-picture.model";

//ui
export type { ButtonProps } from "./ui/buton-props.model";
export type { AccordionDefaultItems } from "./ui/accordion-default-items.model";

//shared
export type { LinkGroupItems } from "./shared/link-group-items.model";
export { Combo } from "./shared/combo.model";
export { ComboGroup } from "./shared/combo-group.model";
export type { Routers } from "./shared/routers.model";
export type { CreditCard } from "./shared/credit-card.model";
export type { HeaderMainTemplate } from "./shared/header-main-template";

//ad
export type { VehicleAd } from "./ad/vehicle-ad.model";
export type { CustomerAd } from "./ad/customer-ad.model";
export type { VehicleInfo } from "./ad/vehicle-info.model";
export type { VehiclePrice } from "./ad/vehicle-price.model";
export type { PhotoAd, Photos } from "./ad/photo-ad.model";
export type { Inspection } from "./ad/inspection.model";

//api/manhein
export type {
  AdModel,
  CreateAdModel,
  IAdVehicleOption,
} from "./apis/manhein/ad.model";
export {
  AdVehicleOption,
  AdVehicleRequest,
} from "./apis/manhein/ad-vehicle.request";
export { AdVehicleValueRequest } from "./apis/manhein/ad-vehicle-value.request";
export { CustomerRequest } from "./apis/manhein/customer.request";
export { AdVehiclePhotosRequest } from "./apis/manhein/ad-vehicle-photos.request";
export { AdVahiclePersonalDataRequest } from "./apis/manhein/ad-vehicle-personal-data.request";
export { AdInspectionRequest } from "./apis/manhein/ad-inspection.request";
export { AdInspectionPaymentRequest } from "./apis/manhein/ad-inspection-payment.request";
export type { CustomerModel } from "./apis/manhein/customer.model";
export type { InspectionPlan } from "./apis/manhein/inspection-plan.model";
export type { InspectionUnit } from "./apis/manhein/inspection-unit.model";
export type {
  AdInspectionModel,
  InspectionStatus,
} from "./apis/manhein/ad-inspection.model";
export type { VehicleDebit } from "./apis/manhein/vehicle-debits.model";

export {
  RequestError,
  GeneralRequestError,
  ConflictRequestError,
} from "./apis/request-error/request-error.model";

//enum
export { InspectionCompany } from "./enum/inspection-companies.enum";
export { InspectionSteps } from "./enum/inspection-steps.enum";
export { StatusPayment } from "./enum/status-payments.enum";
export { StatusReport } from "./enum/status-report.enum";
export { StatusAd } from "./enum/status-ad.enum";
export { ZapayTypeDebits } from "./enum/zapay-type-debits.enum";

//helper
export { Type } from "./../typings/helper/Type";
