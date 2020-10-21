import { Type } from "../..";

export interface IAdVehiclePhotosRequest {
  adId?: number;
  observation?: string;
}

export class AdVehiclePhotosRequest {
  adId: number | null;
  observation: string | null;

  constructor({ adId, observation }: IAdVehiclePhotosRequest) {
    this.adId = Type.toNumberNull(adId);
    this.observation = Type.toStringNull(observation);
  }
}
