import { Type } from "../..";

export interface IAdVehicleValueRequest {
  id?: number;
  trafficPenaltyValue?: number;
  sellValue?: number;
  maxKbbValue?: number;
  minKbbValue?: number;
  kbbValueDate?: Date;
}

export class AdVehicleValueRequest {
  id: number | null;
  trafficPenaltyValue: number | null;
  sellValue: number | null;
  maxKbbValue: number | null;
  minKbbValue: number | null;
  kbbValueDate: Date | null;

  constructor({
    id,
    trafficPenaltyValue,
    sellValue,
    maxKbbValue,
    minKbbValue,
    kbbValueDate,
  }: IAdVehicleValueRequest) {
    this.id = Type.toNumberNull(id);
    this.trafficPenaltyValue = Type.toNumberNull(trafficPenaltyValue);
    this.sellValue = Type.toNumberNull(sellValue);
    this.maxKbbValue = Type.toNumberNull(maxKbbValue);
    this.minKbbValue = Type.toNumberNull(minKbbValue);
    this.kbbValueDate = Type.toDateNull(kbbValueDate);
  }
}
