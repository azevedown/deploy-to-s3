export interface PriceAdvisorRequest {
    vehiclePriceTypeID: number;
    vehicleGradeID: number;
    vehicleID: number;
    mileage: number;
    year: number;
    locationStateID: number;
    equipmentCost: number;
    colorID: number | null;
}