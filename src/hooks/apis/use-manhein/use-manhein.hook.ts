import { useRequest, manheinHttp } from "../config";
import {
  AdModel,
  AdVehicleRequest,
  AdVehicleValueRequest,
  AdVehiclePicture,
  CustomerRequest,
  CustomerModel,
  AdVehiclePhotosRequest,
  AdVahiclePersonalDataRequest,
  InspectionCompany,
  InspectionPlan,
  InspectionUnit,
  AdInspectionRequest,
  AdInspectionModel,
  CreateAdModel,
  AdInspectionPaymentRequest,
  VehicleDebit,
} from "../../../models";
import axios from "axios";

export const useManhein = () => {
  const { get, post, put } = useRequest(manheinHttp, "");

  const getAd = async (id: number): Promise<AdModel> => {
    const { data } = await get(`Ad/${id}`);
    return data;
  };

  const getAllAds = async (): Promise<AdModel[]> => {
    const { data } = await get(`Ad`);
    return data;
  };

  const createAd = async (request: CreateAdModel): Promise<AdModel> => {
    const { data } = await post(`Ad`, request);
    return data;
  };

  const saveAdVehicle = async (request: AdVehicleRequest): Promise<AdModel> => {
    const { data } = await post(`Ad/vehicle`, request);
    return data;
  };

  const saveAdVehicleValue = async (
    request: AdVehicleValueRequest
  ): Promise<AdModel> => {
    const { data } = await post(`Ad/vehicleValue`, request);
    return data;
  };

  const saveAdVehiclePhotos = async (
    request: AdVehiclePhotosRequest
  ): Promise<AdModel> => {
    const { data } = await post(`Ad/finishVehiclePicture`, request);
    return data;
  };

  const saveCustomer = async (
    request: CustomerRequest
  ): Promise<CustomerModel> => {
    const { data } = await post(`customer`, request);
    return data;
  };

  const getCustomer = async (): Promise<CustomerModel> => {
    const { data } = await get(`customer`);
    return data;
  };

  const saveAdPersonalData = async (
    request: AdVahiclePersonalDataRequest
  ): Promise<AdModel> => {
    const { data } = await post(`Ad/personalData`, request);
    return data;
  };

  const getAllAdInspections = async (): Promise<AdInspectionModel[]> => {
    const { data } = await get(`AdInspection`);
    return !!data ? data : [];
  };

  const getPlans = async (
    inspectionCompany: InspectionCompany
  ): Promise<InspectionPlan[]> => {
    const { data } = await get(`AdInspection/plans/${inspectionCompany}`);
    return !!data ? data : [];
  };

  const getUnits = async (
    inspectionCompany: InspectionCompany,
    zipcode: number,
    limit: number,
    offset: number
  ): Promise<InspectionUnit[]> => {
    const { data } = await get(
      `AdInspection/units/${inspectionCompany}/${zipcode}/${limit}/${offset}`
    );
    return !!data ? data : [];
  };

  const saveAdInspection = async (
    request: AdInspectionRequest
  ): Promise<AdInspectionModel> => {
    const { data } = await post(`AdInspection`, request);
    return data;
  };

  const payAdInspection = async (
    request: AdInspectionPaymentRequest
  ): Promise<AdInspectionModel> => {
    const { data } = await put(`AdInspection/Payment`, request);
    return data;
  };

  const getAdInspection = async (id: number): Promise<AdInspectionModel> => {
    const { data } = await get(`AdInspection/${id}`);
    return data;
  };

  const getVehicleDebits = async (id: number): Promise<VehicleDebit[]> => {
    const { data } = await get(`Ad/${id}/vehicleDebits`);
    return data;
  };

  const uploadPicture = async (
    request: AdVehiclePicture,
    onUploadProgress: any,
    returnCancel: any
  ): Promise<string> => {
    try {
      const CancelToken = axios.CancelToken;
      let cancel = null;

      const config = {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress,
        cancelToken: new CancelToken(function executor(c) {
          cancel = c;
        }),
      };

      returnCancel(cancel);

      let formData = new FormData();
      formData.append("AdId", request.adId.toString());
      formData.append("PicturePosition", request.picturePosition.toString());
      formData.append("PictureFile", request.pictureFile);

      const response = await post("Ad/vehiclePicture", formData, config);

      return response;
    } catch (error) {
      console.log("error: ", error);
      return "";
    }
  };

  return {
    getCustomer,
    payAdInspection,
    getAdInspection,
    getAllAdInspections,
    saveAdInspection,
    getUnits,
    getPlans,
    uploadPicture,
    getAd,
    getAllAds,
    createAd,
    saveAdVehicle,
    saveAdVehicleValue,
    saveCustomer,
    saveAdVehiclePhotos,
    saveAdPersonalData,
    getVehicleDebits,
  };
};
