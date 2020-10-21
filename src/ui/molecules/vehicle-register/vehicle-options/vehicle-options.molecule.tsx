import {
  Combo,
  VehicleSearchOptions,
  VehicleSearchOptionsProps,
  SortHelper,
} from "c4u-web-components";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useKbb, useVehicleRegisterContext } from "../../../../hooks";
import { VehicleModel, Years } from "../../../../models";
import { ColOptions } from "./vehicle-options.molecule.style";
import { Row } from "react-bootstrap";

interface IProps {
  vehicleKbb?: {
    idKbb: number;
    idBrand: number;
    year: number;
    idModel: number;
  };
}

export const VehicleOptions: React.FC<IProps> = (props) => {
  const { t } = useTranslation();

  const { setAdContext, vehicleContext } = useVehicleRegisterContext();

  const {
    GetAllVehicleBrand,
    GetAllVehicleModelByBrand,
    GetAllVehicleVersion,
    GetAllYears,
    GetVehicle,
  } = useKbb();

  const [editMode, setEditMode] = useState<boolean>();

  const [vehicleBrandCombo, setVehicleBrandCombo] = useState<Combo[]>();
  const [vehicleModelCombo, setVehicleModelCombo] = useState<Combo[]>();
  const [vehicleVersionCombo, setVehicleVersionCombo] = useState<Combo[]>();
  const [yearsCombo, setYearsCombo] = useState<Combo[]>();

  const [vehicleBrandSelected, setVehicleBrandSelected] = useState<Combo>();
  const [vehicleYearSelected, setVehicleYearSelected] = useState<Combo>();
  const [vehicleModelSelected, setVehicleModelSelected] = useState<Combo>();
  const [vehicleVersionSelected, setVehicleVersionSelected] = useState<Combo>();

  const [vehicleYears, setVehicleYears] = useState<Years[]>();
  const [vehicleModels, setVehicleModels] = useState<VehicleModel[]>();

  const getVehiclesBrandAsync = useCallback(async (): Promise<void> => {
    const items = await GetAllVehicleBrand();
    const itemsCombo = items?.map(
      (m) =>
        new Combo({
          title: m.name,
          value: m.id,
        })
    );
    setVehicleBrandCombo(itemsCombo);
  }, [GetAllVehicleBrand]);

  const getVehicleVersionAsync = useCallback(
    async (modelId: number, year: number): Promise<void> => {
      if (modelId && year) {
        const items = await GetAllVehicleVersion(modelId, year);
        const itemsCombo = items?.map(
          (m) =>
            new Combo({
              title: m.name,
              value: m.kbbid,
            })
        );
        setVehicleVersionCombo(itemsCombo);
      }
    },
    [GetAllVehicleVersion]
  );

  const getVehiclesModelAsync = useCallback(
    async (brandId: number, year: number | null = null): Promise<void> => {
      if (brandId) {
        const items = await GetAllVehicleModelByBrand(brandId, year);
        setVehicleModels(items);
        const itemsCombo = items?.map(
          (m) =>
            new Combo({
              title: m.name,
              value: m.id,
            })
        );
        setVehicleModelCombo(itemsCombo);

        if (vehicleModelSelected && year) {
          const modelExists = itemsCombo.find(
            (f) => f.value === vehicleModelSelected?.value
          );
          if (modelExists) {
            getVehicleVersionAsync(Number(modelExists.value), year);
          } else {
            setVehicleModelSelected(undefined);
          }
        }
      }
    },
    [GetAllVehicleModelByBrand, getVehicleVersionAsync, vehicleModelSelected]
  );

  const getVehicleAsync = useCallback(
    async (vehicleId: number): Promise<void> => {
      if (vehicleId) {
        const vehicle = await GetVehicle(vehicleId);
        let ad = { ...vehicleContext };
        ad.vehicle = vehicle;
        setAdContext(ad);
      }
    },
    [GetVehicle, setAdContext, vehicleContext]
  );

  const GetAllYearsAsync = useCallback(async (): Promise<void> => {
    const items = await GetAllYears();
    setVehicleYears(items);
    const itemsCombo = items?.map(
      (m) =>
        new Combo({
          title: m.year,
          value: m.year,
        })
    );
    setYearsCombo(itemsCombo);
  }, [GetAllYears]);

  const handleChangeBrand = useCallback(
    (comboValue: Combo) => {
      setVehicleBrandSelected(comboValue);
      setVehicleModelSelected(undefined);
      setVehicleVersionSelected(undefined);
      const vehicleNew = { ...vehicleContext };
      vehicleNew.vehicle = undefined;
      setAdContext(vehicleNew);
    },
    [setAdContext, vehicleContext]
  );

  const handleChangeYear = useCallback(
    (comboValue: Combo) => {
      setVehicleYearSelected(comboValue);
      setVehicleVersionSelected(undefined);
      const vehicleNew = { ...vehicleContext };
      vehicleNew.vehicle = undefined;
      setAdContext(vehicleNew);
    },
    [setAdContext, vehicleContext]
  );

  const handleChangeModel = useCallback(
    (comboValue: Combo) => {
      setVehicleModelSelected(comboValue);
      setVehicleVersionSelected(undefined);
      const vehicleNew = { ...vehicleContext };
      vehicleNew.vehicle = undefined;
      setAdContext(vehicleNew);
    },
    [setAdContext, vehicleContext]
  );

  const handleChangeVerion = useCallback(
    (comboValue: Combo) => {
      setVehicleVersionSelected(comboValue);
      const vehicleNew = { ...vehicleContext };
      vehicleNew.vehicle = undefined;
      setAdContext(vehicleNew);
    },
    [setAdContext, vehicleContext]
  );

  useEffect(() => {
    getVehiclesBrandAsync();
    GetAllYearsAsync();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (editMode === undefined && props.vehicleKbb) setEditMode(true);
  }, [props.vehicleKbb]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (vehicleBrandSelected && vehicleYearSelected)
      getVehiclesModelAsync(
        Number(vehicleBrandSelected.value),
        Number(vehicleYearSelected.value)
      );
  }, [vehicleBrandSelected, vehicleYearSelected]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (vehicleModelSelected && vehicleYearSelected)
      getVehicleVersionAsync(
        Number(vehicleModelSelected.value),
        Number(vehicleYearSelected.value)
      );
  }, [vehicleModelSelected, vehicleYearSelected]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (vehicleModels && vehicleModelSelected) {
      const modelSelected = vehicleModels.find(
        (f) => f.id === vehicleModelSelected.value
      );

      const itemsComboYears = modelSelected?.years.sort(SortHelper.desc).map(
        (y) =>
          new Combo({
            title: y,
            value: y,
          })
      );
      if (itemsComboYears) setYearsCombo(itemsComboYears);
    } else {
      const itemsCombo = vehicleYears?.map(
        (m) =>
          new Combo({
            title: m.year,
            value: m.year,
          })
      );

      if (itemsCombo) setYearsCombo(itemsCombo);
    }
  }, [vehicleModelSelected]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (vehicleVersionSelected)
      getVehicleAsync(Number(vehicleVersionSelected.value));
  }, [vehicleVersionSelected]); // eslint-disable-line react-hooks/exhaustive-deps

  //EDITMODE
  useEffect(() => {
    if (editMode) {
      const brand = vehicleBrandCombo?.find(
        (f) => f.value === props.vehicleKbb?.idBrand
      );
      setVehicleBrandSelected(brand);

      const year = yearsCombo?.find((f) => f.value === props.vehicleKbb?.year);
      setVehicleYearSelected(year);
    }
  }, [editMode]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (editMode && vehicleModelCombo) {
      const model = vehicleModelCombo?.find(
        (f) => f.value === props.vehicleKbb?.idModel
      );
      setVehicleModelSelected(model);
    }
  }, [editMode, vehicleModelCombo]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (editMode && vehicleVersionCombo) {
      const version = vehicleVersionCombo?.find(
        (f) => f.value === props.vehicleKbb?.idKbb
      );
      setVehicleVersionSelected(version);
      setEditMode(false);
    }
  }, [editMode, vehicleVersionCombo]); // eslint-disable-line react-hooks/exhaustive-deps

  const propsVehicleSearchOptions = useMemo((): VehicleSearchOptionsProps => {
    return {
      Dropdowns: {
        Brand: {
          placeholder: t("Select") + "...",
          Options: vehicleBrandCombo,
          onChange: handleChangeBrand,
          Value: vehicleBrandSelected,
        },
        Model: {
          placeholder: t("Select") + "...",
          Options: vehicleModelCombo,
          onChange: handleChangeModel,
          Value: vehicleModelSelected,
        },
        Version: {
          placeholder: t("Select") + "...",
          Options: vehicleVersionCombo,
          onChange: handleChangeVerion,
          Value: vehicleVersionSelected,
        },
        Year: {
          placeholder: t("Select") + "...",
          Options: yearsCombo,
          onChange: handleChangeYear,
          Value: vehicleYearSelected,
        },
      },
      Texts: {
        Brand: t("Brand"),
        ClearFilter: t("Clean Filters"),
        Loading: t("Loading"),
        Model: t("Model"),
        NoMatchesFound: t("No Matches Found"),
        Others: t("Others"),
        TitleYears: t("Select the year of the model"),
        Version: t("Version"),
      },
    };
  }, [
    vehicleBrandCombo,
    yearsCombo,
    vehicleModelCombo,
    vehicleVersionCombo,
    vehicleBrandSelected,
    vehicleYearSelected,
    vehicleModelSelected,
    vehicleVersionSelected,
    t,
    handleChangeBrand,
    handleChangeYear,
    handleChangeModel,
    handleChangeVerion,
  ]);

  return (
    <>
      <Row>
        <ColOptions>
          <VehicleSearchOptions {...propsVehicleSearchOptions} />
        </ColOptions>
      </Row>
    </>
  );
};
