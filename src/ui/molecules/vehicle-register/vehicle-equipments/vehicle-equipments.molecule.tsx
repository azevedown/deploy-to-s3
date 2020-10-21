import { EquipmentsOptions, VehicleEquipment } from "c4u-web-components";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Wrapper } from "./vehicle-equipments.molecule.style";
import { useKbb, useVehicleRegisterContext } from "../../../../hooks";

interface IProps {
  onSearchEquipments: (equipments: VehicleEquipment[]) => void;
}

export const VehicleEquipments: React.FC<IProps> = (props) => {
  const { t } = useTranslation();

  const { vehicleContext, setAdContext } = useVehicleRegisterContext();

  const [vehicleEquipment, setVehicleEquipment] = useState<
    VehicleEquipment[]
  >();
  const [vehicleId, setVehicleId] = useState<number>();

  const { GetAllEquipments } = useKbb();

  const allEquips = useMemo(() => {
    return vehicleEquipment
      ?.map((m) => m.subCategory.map((sb) => sb.equipments))
      ?.flatMap((fm) => fm.flatMap((f) => f));
  }, [vehicleEquipment]);

  const getEquipmentsAsync = useCallback(async () => {
    if (vehicleContext) {
      const equipmentsService = await GetAllEquipments(
        vehicleContext.vehicle?.id,
        vehicleContext.vehicle?.year
      );
      setVehicleEquipment(equipmentsService);
      setVehicleId(vehicleContext.vehicle?.id);
      props.onSearchEquipments(equipmentsService);
    }
  }, [vehicleContext, GetAllEquipments, props]);

  const setEquipments = (
    colorId: number | null = null,
    equipmentsIds: number[] | null = null,
    coast: number | null = null
  ) => {
    const vehicle = { ...vehicleContext };
    vehicle.vehicleInfo = vehicle.vehicleInfo ? vehicle.vehicleInfo : {};
    vehicle.vehicleInfo.equipmentColorId = colorId
      ? colorId
      : vehicle.vehicleInfo.equipmentColorId;

    vehicle.vehicleInfo.vehicleColorId = colorId
      ? Number(allEquips?.find((f) => f.equipmentID === colorId)?.tag)
      : vehicle.vehicleInfo.vehicleColorId;

    vehicle.vehicleInfo.equipments = equipmentsIds
      ? equipmentsIds
      : vehicle.vehicleInfo.equipments;
    vehicle.vehicleInfo.equipmentCoast = coast
      ? coast
      : vehicle.vehicleInfo.equipmentCoast;

    setAdContext(vehicle);
  };

  const handleChangeColor = (colorId: number) => {
    setEquipments(colorId);
  };

  const handleChangeEquipments = (equipmentsIds: number[]) => {
    setEquipments(null, equipmentsIds);
  };

  const handleChangeCoast = (coast: number) => {
    setEquipments(null, null, coast);
  };

  useEffect(() => {
    if (!vehicleId) getEquipmentsAsync();
  }, [vehicleId]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (
      vehicleContext?.vehicle &&
      !!vehicleId &&
      vehicleId !== vehicleContext.vehicle.id
    ) {
      setVehicleId(undefined);
    }
  }, [vehicleContext]); // eslint-disable-line react-hooks/exhaustive-deps

  const text = {
    Included: t("Included"),
    Optional: t("Optional"),
    OnlyEditableOptions: t("Show only edit options"),
  };

  return (
    <Wrapper>
      {vehicleEquipment && (
        <EquipmentsOptions
          EquipmentsIds={vehicleContext.vehicleInfo?.equipments}
          Equipments={vehicleEquipment}
          onChangeColor={handleChangeColor}
          onChangeEquipment={handleChangeEquipments}
          onChangeEquipmentCost={handleChangeCoast}
          Text={text}
        />
      )}
    </Wrapper>
  );
};
