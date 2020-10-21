import { ButtonPrimary, VehicleEquipment } from "c4u-web-components";
import React, { useEffect, useMemo, useState } from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useHistory, useParams } from "react-router-dom";
import {
  useManhein,
  useSessionContext,
  useVehicleRegisterContext,
} from "../../../../hooks";
import { AdVehicleOption, AdVehicleRequest, Vehicle } from "../../../../models";
import {
  MenuVehicleRegister,
  VehicleData,
  VehicleEquipments,
  VehicleInformation,
  VehicleOptions,
} from "../../../molecules";
import { DivButtonAdvance, RowContent } from "./vehicle-choose.organism.style";

export const VehicleChoose: React.FC = () => {
  const { t } = useTranslation();

  const [submiting, setSubmiting] = useState(false);

  const history = useHistory();
  const params = useParams();

  const [vehicleEquipment, setVehicleEquipment] = useState<
    VehicleEquipment[]
  >();

  const idAdRegister = useMemo((): number => {
    return (params as any).id;
  }, [params]);

  const { saveAdVehicle } = useManhein();
  const [vehicle, setVehicle] = useState<Vehicle>();

  const { showGenericErrorModal } = useSessionContext();
  const {
    vehicleContext,
    setSavedAdContextAsync,
  } = useVehicleRegisterContext();

  const vehicleValid = useMemo((): boolean => {
    if (!vehicleContext) return false;

    const result =
      !!vehicleContext.vehicle &&
      !!vehicleContext.vehicleInfo?.gradeId &&
      !!vehicleContext.vehicleInfo?.mileage &&
      !!vehicleContext.vehicleInfo?.stateLicense &&
      !!vehicleContext.vehicleInfo?.renavam &&
      !!vehicleContext.vehicleInfo?.plate;

    return result;
  }, [vehicleContext]);

  const buttonValid = useMemo((): boolean => {
    if (!vehicleContext) return false;

    return !!vehicleValid && !!vehicleContext.vehicleInfo?.equipmentColorId;
  }, [vehicleContext, vehicleValid]);

  const handleSearchEquipments = (equipments: VehicleEquipment[]) => {
    setVehicleEquipment(equipments);
  };

  const allEquips = useMemo(() => {
    return vehicleEquipment
      ?.map((m) => m.subCategory.map((sb) => sb.equipments))
      ?.flatMap((fm) => fm.flatMap((f) => f));
  }, [vehicleEquipment]);

  const handleSave = async () => {
    setSubmiting(true);
  };

  const save = async () => {
    try {
      const equipmentsChoose = vehicleContext.vehicleInfo?.equipments?.map(
        (m) => allEquips?.find((f) => f.equipmentID === m)
      );

      const options = equipmentsChoose?.map(
        (m) =>
          new AdVehicleOption({
            tag: m?.equipmentID,
            name: m?.name,
            cost: m?.price,
          })
      );

      const request = new AdVehicleRequest({
        id: idAdRegister,
        licenseUf: vehicleContext.vehicleInfo?.stateLicense,
        mileage: vehicleContext.vehicleInfo?.mileage,
        plate: vehicleContext.vehicleInfo?.plate,
        renavam: vehicleContext.vehicleInfo?.renavam,
        vehicleGradeId: vehicleContext.vehicleInfo?.gradeId,
        vehicleId: Number(vehicleContext.vehicle?.id),
        adVehicleOptions: options,
      });

      const response = await saveAdVehicle(request);

      history.push(`/vehicle-register/${response.id}/values`);
    } catch (e) {
      console.log(e);
      showGenericErrorModal();
    } finally {
      setSubmiting(false);
    }
  };

  useEffect(() => {
    if (idAdRegister > 0) {
      setSavedAdContextAsync(idAdRegister);
    }
  }, [idAdRegister]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (submiting) {
      save();
    }
  }, [submiting]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (idAdRegister && vehicleContext?.vehicle) {
      setVehicle(vehicleContext.vehicle);
    }
  }, [idAdRegister, vehicleContext]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <RowContent>
        <Col md={2}>
          <MenuVehicleRegister step={1} />
        </Col>
        <Col md={5}>
          <VehicleOptions
            vehicleKbb={
              vehicle
                ? {
                    idBrand: vehicle.brandID,
                    idKbb: vehicle.id,
                    idModel: vehicle.modelID,
                    year: vehicle.year,
                  }
                : undefined
            }
          />
          <VehicleData
            data={
              !!vehicleContext?.vehicleInfo
                ? {
                    gradeId: Number(vehicleContext.vehicleInfo.gradeId),
                    mileage: Number(vehicleContext.vehicleInfo.mileage),
                    plate: vehicleContext.vehicleInfo.plate?.toString() ?? "",
                    renavam:
                      vehicleContext.vehicleInfo.renavam?.toString() ?? "",
                    stateLicense:
                      vehicleContext.vehicleInfo.stateLicense?.toString() ?? "",
                  }
                : undefined
            }
          />
        </Col>
        <Col md={5}>
          <VehicleInformation reduced={false} />
        </Col>
      </RowContent>
      {vehicleValid && (
        <>
          <RowContent>
            <Col md={2}></Col>
            <Col md={10}>
              <VehicleEquipments onSearchEquipments={handleSearchEquipments} />
            </Col>
          </RowContent>
          <RowContent>
            <Col md={2}></Col>
            <Col md={10}>
              <DivButtonAdvance>
                <ButtonPrimary
                  onClick={handleSave}
                  disabled={!buttonValid}
                  sizex={"md"}
                  loading={submiting}
                >
                  {t("Advance")}
                </ButtonPrimary>
              </DivButtonAdvance>
            </Col>
          </RowContent>
        </>
      )}
    </>
  );
};
