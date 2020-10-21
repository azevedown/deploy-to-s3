import { Routers } from "../models";
import {
  AccountCreate,
  AuctionPage,
  VechicleAdVehicleRegister,
  VechicleAdPersonalData,
  VechicleAdPhotos,
  VechicleAdValues,
  SellJourney,
  Inspection,
  MyInspections,
  VehicleDelivery,
  MyAds,
} from "../ui/pages";

import {
  HomeTemplate,
  HomeCreateTemplate,
  MainTemplate,
} from "../ui/templates";

const paths = {
  auction: () => "/",
  sellJourney: () => "/sell-journey",
  vehicleRegister: () => "/vehicle-register/:id",
  vehicleRegisterPhotos: () => "/vehicle-register/:id/photos",
  VehicleRegisterValues: () => "/vehicle-register/:id/values",
  VechicleAdPersonalData: () => "/vehicle-register/:id/personal-data",
  accountCreate: () => "/account-create",
  Inspection: () => "/inspection/:id",
  MyInspections: () => "/my-inspections",
  VehicleDelivery: () => "/vehicle-delivery/:id",
  MyAds: () => "/my-ads",
};

const routes = [
  {
    path: paths.auction(),
    component: AuctionPage,
    template: HomeTemplate,
    title: "AuctionPage",
  },
  {
    path: paths.sellJourney(),
    component: SellJourney,
    template: HomeTemplate,
    title: "Jornada de Venda",
  },
  {
    path: paths.vehicleRegister(),
    component: VechicleAdVehicleRegister,
    template: MainTemplate,
    title: "VehicleRegister",
    backTo: paths.auction(),
  },
  {
    path: paths.vehicleRegisterPhotos(),
    component: VechicleAdPhotos,
    template: MainTemplate,
    title: "VehicleRegisterPhotos",
    backTo: paths.VehicleRegisterValues(),
  },
  {
    path: paths.VehicleRegisterValues(),
    component: VechicleAdValues,
    template: MainTemplate,
    title: "VehicleRegisterValues",
    backTo: paths.vehicleRegister(),
  },
  {
    path: paths.VechicleAdPersonalData(),
    component: VechicleAdPersonalData,
    template: MainTemplate,
    title: "VechicleAdPersonalData",
    backTo: paths.vehicleRegisterPhotos(),
  },
  {
    path: paths.Inspection(),
    component: Inspection,
    template: MainTemplate,
    title: "Inspection",
  },
  {
    path: paths.MyInspections(),
    component: MyInspections,
    template: MainTemplate,
    title: "MyInpections",
  },
  {
    path: paths.VehicleDelivery(),
    component: VehicleDelivery,
    template: MainTemplate,
    title: "VehicleDelivery",
  },
  {
    path: paths.MyAds(),
    component: MyAds,
    template: MainTemplate,
    title: "MyAds",
  },
  {
    path: paths.accountCreate(),
    component: AccountCreate,
    template: HomeCreateTemplate,
    title: "AccountCreate",
    backTo: paths.auction(),
  },
] as Routers[];

export { paths, routes as default };
