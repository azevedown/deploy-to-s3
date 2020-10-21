import { useRequest, kbbHttp } from "../config";
import {
  LocationState,
  VehicleModel,
  VehicleVersion,
  Years,
  VehicleBrand,
  Vehicle,
  VehicleBrandModels,
  BaseResponseKbb,
  PriceAdvisorRequest,
  VehiclePrices,
} from "../../../models";
import { VehicleEquipment } from "c4u-web-components";
import { useTranslation } from "react-i18next";

export const useKbb = () => {
  const { get, post } = useRequest(kbbHttp, "Kbb");

  const { t } = useTranslation();

  const GetAllLocationState = async (): Promise<LocationState[]> => {
    const { data } = await get("GetAllLocationState");
    return data;
  };

  const GetAllVehicleBrand = async (): Promise<VehicleBrand[]> => {
    const { data } = await get("GetAllVehicleBrand");
    return data;
  };

  const GetAllVehicleModelByBrand = async (
    brandId: number,
    year: number | null = null
  ): Promise<VehicleModel[]> => {
    const { data } = await get(
      `GetAllVehicleModelByBrand/${brandId}` + (year ? `?year=${year}` : "")
    );
    return data;
  };

  const GetAllVehicleModels = async (): Promise<VehicleBrandModels[]> => {
    const { data } = await get(`GetAllVehicleModels`);
    return data;
  };

  const GetAllVehicleVersion = async (
    modelId: number,
    year: number
  ): Promise<VehicleVersion[]> => {
    const { data } = await get(`GetAllVehicleVersion/${year}/${modelId}`);
    return data;
  };

  const GetAllYears = async (): Promise<Years[]> => {
    const { data } = await get(`GetAllYears`);
    return data;
  };

  const GetVehicle = async (id: number): Promise<Vehicle> => {
    const { data } = await get(`GetVehicle/${id}`);
    if (data && !data?.name) {
      data.name = `${data?.brandName} ${data?.modelName} ${data?.hp} ${t(
        "Hp"
      )} - ${data?.year}`;
    }
    return data;
  };

  const GetAllVehicleGrade = async (): Promise<BaseResponseKbb[]> => {
    try {
      const { data } = await get(`GetAllVehicleGrade`);
      return data;
    } catch (error) {
      return [];
    }
  };

  const GetPriceAdvisor = async (
    request: PriceAdvisorRequest
  ): Promise<string> => {
    try {
      const { data } = await post(`GetPriceAdvisor`, request);
      return data.content;
    } catch (error) {
      return "";
    }
  };

  const GetAllEquipments = async (
    id: number | null = null,
    year: number | null = null
  ): Promise<VehicleEquipment[]> => {
    const { data } = await get(`GetAllEquipments${id ? `/${id}/${year}` : ""}`);
    return data;
  };

  const GetVehiclePrices = async (
    request: PriceAdvisorRequest
  ): Promise<VehiclePrices> => {
    try {
      const { data } = await post(`GetVehiclePrices`, request);
      return data;
    } catch (error) {
      return {} as VehiclePrices;
    }
  };

  return {
    GetAllLocationState,
    GetAllVehicleModelByBrand,
    GetAllVehicleVersion,
    GetAllYears,
    GetAllVehicleBrand,
    GetVehicle,
    GetAllVehicleModels,
    GetAllVehicleGrade,
    GetPriceAdvisor,
    GetAllEquipments,
    GetVehiclePrices,
  };
};
