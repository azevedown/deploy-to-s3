import { Combo, FormControlMask, NumberHelper } from "c4u-web-components";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Wrapper } from "./vehicle-data.molecule.style";
import { Col, Form } from "react-bootstrap";
import { DropdownDefault } from "c4u-web-components";
import { useKbb, useVehicleRegisterContext } from "../../../../hooks";

interface IProps {
  data?: {
    gradeId: number;
    mileage: number;
    plate: string;
    renavam: string;
    stateLicense: string;
  };
}

export const VehicleData: React.FC<IProps> = (props) => {
  const { t } = useTranslation();

  const { vehicleContext, setAdContext } = useVehicleRegisterContext();

  const { GetAllVehicleGrade, GetAllLocationState } = useKbb();

  const [vehicleGrades, setVehicleGrades] = useState<Combo[]>([]);
  const [statesCombo, setStatesCombo] = useState<Combo[]>([
    new Combo({ title: `${t("Loading")}...`, value: "" }),
  ]);
  const [vehicleGradeSelected, setVehicleGradeSelected] = useState<Combo>();
  const [stateSelected, setStateSelected] = useState<Combo>();

  const [km, setKm] = useState<string>();
  const [renavam, setRenavam] = useState<string>();
  const [plate, setPlate] = useState<string>();

  const getVehicleGradesAsync = useCallback(async () => {
    const vehicleGrade = await GetAllVehicleGrade();
    const vehicleGrandeCombo = vehicleGrade?.map(
      (vg) =>
        new Combo({
          title: t(vg.name),
          value: vg.id,
        })
    );
    setVehicleGrades(vehicleGrandeCombo);
  }, [GetAllVehicleGrade, t]);

  const getStatesAsync = useCallback(async () => {
    const states = await GetAllLocationState();
    const statesCombo = states?.map(
      (m) =>
        new Combo({
          title: m.name,
          value: m.twoLetterCode,
        })
    );
    setStatesCombo(statesCombo);
  }, [GetAllLocationState]);

  useEffect(() => {
    getVehicleGradesAsync();
    getStatesAsync();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (props.data) {
      if (vehicleGrades) {
        setVehicleGradeSelected(
          vehicleGrades.find((f) => f.value === props.data?.gradeId)
        );
      }

      const mileage = NumberHelper.toNumber(props.data.mileage);
      setKm(mileage > 0 ? mileage.toString() : undefined);

      const renavam = NumberHelper.toNumber(props.data.renavam);
      setRenavam(renavam > 0 ? renavam.toString() : undefined);

      setPlate(props.data.plate?.toString());

      if (statesCombo) {
        setStateSelected(
          statesCombo.find((f) => f.value === props.data?.stateLicense)
        );
      }
    }
  }, [props, vehicleGrades, statesCombo]); // eslint-disable-line react-hooks/exhaustive-deps

  const setVehicleInfoValue = (key: string, value: any) => {
    let newVehicleContext = { ...vehicleContext };
    if (!newVehicleContext?.vehicleInfo) newVehicleContext.vehicleInfo = {};
    let item = newVehicleContext.vehicleInfo as any;
    item[key] = value;
    newVehicleContext.vehicleInfo = item;
    setAdContext(newVehicleContext);
  };

  const handleVehicleGradeSelected = (value: Combo) => {
    setVehicleGradeSelected(value);
    setVehicleInfoValue(
      "gradeId",
      value?.value ? Number(value.value) : undefined
    );
  };
  const handleStateSelected = (value: Combo) => {
    setStateSelected(value);
    setVehicleInfoValue(
      "stateLicense",
      value?.value ? value.value.toString() : undefined
    );
  };
  const handleKm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKm(e.target.value);
    setVehicleInfoValue("mileage", Number(e.target.value));
  };
  const handleRenavam = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRenavam(e.target.value);
    setVehicleInfoValue("renavam", Number(e.target.value));
  };
  const handlePlate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlate(e.target.value);
    setVehicleInfoValue("plate", e.target.value);
  };

  return (
    <Wrapper>
      <Form.Row>
        {vehicleContext?.vehicle && (
          <Form.Group as={Col} xs={6} controlId="Conditions">
            <Form.Label>{t("Vehicle Conditions")}</Form.Label>
            <DropdownDefault
              data={vehicleGrades}
              selectText={t("Select")}
              value={vehicleGradeSelected}
              searchField={false}
              onChange={handleVehicleGradeSelected}
            />
          </Form.Group>
        )}
        {(vehicleGradeSelected || km) && (
          <Form.Group as={Col} xs={6} controlId="Mileage">
            <Form.Label>{t("Mileage")}</Form.Label>
            <FormControlMask
              mask={[/\d/, /\d?/, /\d?/, /\d?/, /\d?/, /\d?/]}
              placeholderChar={"\u2000"}
              placeholder={t("Tab here")}
              onChange={handleKm}
              value={km ? km : ""}
            />
          </Form.Group>
        )}
      </Form.Row>

      <Form.Row>
        {(km || stateSelected) && (
          <Form.Group as={Col} xs={6} controlId="StateSingle">
            <Form.Label>{t("StateSingle")}</Form.Label>
            <DropdownDefault
              data={statesCombo}
              selectText={t("Select")}
              value={stateSelected}
              searchField={true}
              onChange={handleStateSelected}
            />
          </Form.Group>
        )}
        {(stateSelected || renavam) && (
          <Form.Group as={Col} xs={6} controlId="Renavam">
            <Form.Label>{t("Renavam")}</Form.Label>
            <FormControlMask
              mask={[
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
              placeholder={t("Tab here")}
              onChange={handleRenavam}
              value={renavam}
            />
          </Form.Group>
        )}
      </Form.Row>

      <Form.Row>
        {(renavam || plate) && (
          <Form.Group as={Col} xs={6} controlId="Plate">
            <Form.Label>{t("Vehicle Plate")}</Form.Label>
            <Form.Control
              value={plate}
              placeholder={t("Tab here")}
              onChange={handlePlate}
              maxLength={7}
            />
          </Form.Group>
        )}
      </Form.Row>
    </Wrapper>
  );
};
