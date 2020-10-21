import React, {
  createContext,
  FunctionComponent,
  useCallback,
  useState,
} from "react";
import { useKbb, useManhein } from "../hooks";
import { IVehicleRegisterProviderProps } from "../hooks/contexts/use-vehicle-register-context.hook";
import {
  CustomerAd,
  PhotoAd,
  PriceAdvisorRequest,
  VehicleAd,
  VehiclePrice,
} from "../models";

const VehicleRegisterContext = createContext({} as any);

const VehicleRegisterProvider: FunctionComponent = (props) => {
  const { GetVehicle, GetVehiclePrices } = useKbb();
  const { getAd, getCustomer } = useManhein();

  const [vehicleContext, setAdContext] = useState<VehicleAd | null>(null);

  const setAdContextPhotos = (photosAd: PhotoAd) => {
    const newVehicleContext = { ...vehicleContext, photosAd };
    setAdContext(newVehicleContext);
  };
  const setAdContextPersonalData = (customer: CustomerAd) => {
    const newVehicleContext = { ...vehicleContext, customer };
    setAdContext(newVehicleContext);
  };

  const setAdContextAsync = useCallback(
    async (vehicleId: number): Promise<void> => {
      if (vehicleId) {
        const vehicle = await GetVehicle(vehicleId);

        if (!!vehicleContext) {
          vehicleContext.vehicle = vehicle;
          setAdContext({ ...vehicleContext, vehicle: vehicle });
        } else {
          setAdContext({ vehicle: vehicle } as VehicleAd);
        }
      }
    },
    [GetVehicle, setAdContext, vehicleContext]
  );

  const setVehiclePricesContextAsync = useCallback(async (): Promise<void> => {
    if (!!vehicleContext) {
      const request = {
        colorID: vehicleContext.vehicleInfo?.vehicleColorId
          ? vehicleContext.vehicleInfo?.vehicleColorId
          : null,
        equipmentCost: vehicleContext.vehicleInfo?.equipmentCoast
          ? vehicleContext.vehicleInfo?.equipmentCoast
          : 0,
        locationStateID: vehicleContext.customer?.kbbStateId ?? 25,
        mileage: vehicleContext.vehicleInfo?.mileage
          ? vehicleContext.vehicleInfo?.mileage
          : 200000,
        vehicleGradeID: vehicleContext.vehicleInfo?.gradeId
          ? vehicleContext.vehicleInfo?.gradeId
          : 3,
        vehicleID: vehicleContext.vehicle?.id,
        vehiclePriceTypeID: 1,
        year: vehicleContext.vehicle?.year,
      } as PriceAdvisorRequest;

      const price = await GetVehiclePrices(request);

      const vehiclePrice = {
        priceKbbInitial: price.priceLow,
        priceKbbFinal: price.priceHigh,
      } as VehiclePrice;

      setAdContext({ ...vehicleContext, vehiclePrice: vehiclePrice });
    }
  }, [GetVehiclePrices, setAdContext, vehicleContext]);

  const setSavedAdContextAsync = useCallback(
    async (id: number): Promise<void> => {
      const adResponse = await getAd(id);
      if (!adResponse.customer) {
        adResponse.customer = await getCustomer();
      }
      const vehicle = adResponse.vehicleId
        ? await GetVehicle(adResponse.vehicleId)
        : undefined;

      const color = adResponse.adVehicleOptions?.find((f) => !f.cost);
      const coast = adResponse.adVehicleOptions?.reduce(
        (sum, current) => sum + (current?.cost ?? 0),
        0
      );

      const photosAd = {
        description: adResponse.observation,
      } as PhotoAd;

      const ad = {
        id: adResponse.id,
        vehicleInfo: {
          equipmentColorId: color?.tag,
          vehicleColorId: color?.tag,
          equipmentCoast: coast,
          equipments: adResponse.adVehicleOptions?.map((m) => m.tag),
          gradeId: adResponse.vehicleGradeId,
          mileage: adResponse.mileage,
          plate: adResponse.plate,
          priceAsked: adResponse.sellValue,
          renavam: adResponse.renavam,
          stateLicense: adResponse.licenseUf,
        },
        vehicle,
        photosAd,
        customer: {
          bank: '',
          agency: '',
          account: '',
          digit: '',
          birthDate: '',
          name: adResponse.customer.name,
          personalDocument: adResponse.customer.document,
          email: adResponse.customer.email,
          phoneNumber: adResponse.customer.mobile,
          cellphone: adResponse.customer.phoneNumber,
          acceptSms: adResponse.customer.acceptedReceiveSms,
          zipCode: adResponse.customer.address.zipCode,
          street: adResponse.customer.address.street,
          number: adResponse.customer.address.number,
          complement: adResponse.customer.address.complement,
          neighborhood: adResponse.customer.address.neighborhood,
          city: adResponse.customer.address.city,
          state: adResponse.customer.address.state,
        },
        vehiclePrice: {
          priceKbbInitial: adResponse.minKbbValue,
          priceKbbFinal: adResponse.maxKbbValue,
        },
      } as VehicleAd;

      setAdContext(ad);
    },
    [setAdContext, getAd, getCustomer, GetVehicle]
  );

  return (
    <VehicleRegisterContext.Provider
      value={
        {
          vehicleContext,
          setAdContext,
          setAdContextAsync,
          setVehiclePricesContextAsync,
          setSavedAdContextAsync,
          setAdContextPhotos,
          setAdContextPersonalData,
        } as IVehicleRegisterProviderProps
      }
    >
      {props.children}
    </VehicleRegisterContext.Provider>
  );
};

export { VehicleRegisterContext, VehicleRegisterProvider };
