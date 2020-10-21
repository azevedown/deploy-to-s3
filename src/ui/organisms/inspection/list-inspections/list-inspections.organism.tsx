import { Combo, DropdownDefault } from "c4u-web-components";
import { parseISO } from "date-fns";
import React, { useCallback, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useKbb, useManhein } from "../../../../hooks";
import {
  AdModel,
  InspectionStatus,
  StatusPayment,
  StatusReport,
} from "../../../../models";
import { CardInspection } from "../../../molecules";
import { ComboSort } from "./list-inspections.organism.style";

interface IListInspection {
  status: number;
  statusHistory: InspectionStatus[];
  statusReport: StatusReport;
  statusPayment: StatusPayment;
  ad: AdModel;
  vehicleDescription: string;
  inspectionDate: Date;
  inspectionHour: string;
  inspectionUnit: string;
  inspectionPhone: string;
}

export const ListInspection: React.FC = () => {
  const { t } = useTranslation();

  const { getAllAdInspections } = useManhein();

  const { GetVehicle } = useKbb();

  const [listInspection, setListInspection] = useState<IListInspection[]>();
  const [loadVehicle, setLoadVehicle] = useState(true);

  const hourFormat = (hour: number) => {
    if (!hour) return "--";
    let hourString = hour.toString();
    if (hourString.length === 1) hourString = "0" + hourString;
    hourString = hourString.padEnd(4, "0");
    return hourString.substr(0, 2) + ":" + hourString.substr(2, 2);
  };

  const handlStatusReport = (status: number): StatusReport => {
    switch (status) {
      case 0: //Registered
      case 1: //PaidOut
      case 3: //PaymentDeclined
      default:
        return StatusReport.Pending;

      case 4: //Approved
        return StatusReport.Approved;
      case 5: //Refused
        return StatusReport.Refused;
      case 6: //RefusedAppointments
        return StatusReport.Appointments;
    }
  };

  const handlStatusPayment = (status: number): StatusPayment => {
    switch (status) {
      case 0: //Registered
        return StatusPayment.Pending;
      case 1: //PaidOut
        return StatusPayment.Approved;
      case 3: //PaymentDeclined
        return StatusPayment.Refused;
      default:
      case 4: //Approved
      case 5: //Refused
      case 6: //RefusedAppointments
        return StatusPayment.Approved;
    }
  };

  const getAllAdInspectionsAsync = useCallback(async () => {
    const adInspection = await getAllAdInspections();
    const inspectionsList = adInspection.map((m) => {
      return {
        ad: m.ad,
        status: m.status,
        statusHistory: m.inspectionStatuses,
        statusReport: handlStatusReport(m.status),
        statusPayment: handlStatusPayment(m.status),
        vehicleDescription: `${t("Loading")}...`,
        inspectionDate: m.inspectionDate,
        inspectionHour: hourFormat(m.inspectionPeriod),
        inspectionUnit: m.inspectionPlaceName ?? "",
        inspectionPhone: m.inspectionPlacePhones
          ? m.inspectionPlacePhones?.join(" / ")
          : "",
      } as IListInspection;
    });

    setListInspection(inspectionsList);
  }, [getAllAdInspections, t]);

  const getVehiclesAsync = useCallback(async () => {
    if (listInspection) {
      const inspectionsList = await Promise.all(
        listInspection.map(async (m) => {
          const vehicle = await GetVehicle(m.ad?.vehicleId);

          return {
            ...m,
            vehicleDescription: vehicle.name,
          } as IListInspection;
        })
      );

      setListInspection(inspectionsList);
      setLoadVehicle(false);
    }
  }, [GetVehicle, listInspection]);

  useEffect(() => {
    getAllAdInspectionsAsync();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (listInspection && loadVehicle) getVehiclesAsync();
  }, [listInspection]); // eslint-disable-line react-hooks/exhaustive-deps

  const itensCombo = [
    { title: t("SortRecents"), value: 0 },
    { title: t("SortOldest"), value: 1 },
  ] as Combo[];

  const dateSort = (a: any, b: any, asc: boolean) => {
    const key = "inspectionDate";
    if (a && b) {
      if (parseISO(a[key]) > parseISO(b[key])) {
        return asc ? 1 : -1;
      } else if (parseISO(a[key]) < parseISO(b[key])) {
        return !asc ? 1 : -1;
      }
    }
    return 0;
  };

  const handleChange = (value: Combo) => {
    const list = [].slice.call(listInspection) as IListInspection[];
    const listOrder = list.sort((a, b) => dateSort(a, b, value.value === 0));
    setListInspection(listOrder);
  };

  return (
    <>
      {!listInspection ? (
        <div
          className={"h-100 d-flex align-items-center justify-content-center"}
        >
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <ComboSort>
            <DropdownDefault
              selectText={t("Select")}
              data={itensCombo}
              onChange={handleChange}
              disabled={loadVehicle}
            />
          </ComboSort>
          {listInspection?.map((m, i) => (
            <CardInspection
              key={i}
              id={m.ad.id}
              statusReport={m.statusReport}
              statusPayment={m.statusPayment}
              vehicleDescription={m.vehicleDescription}
              inspectionDate={m.inspectionDate}
              inspectionHour={m.inspectionHour}
              inspectionUnit={m.inspectionUnit}
              inspectionPhone={m.inspectionPhone}
              statusHistory={m.statusHistory}
              status={m.status}
            />
          ))}
        </>
      )}
      {/* <CardInspection
        statusReport={StatusReport.Pending}
        statusPayment={StatusPayment.Pending}
        vehicleDescription={
          "AUDI A1 SPORTBACK AMBITION 1.4 16V TFSI STRONIC 185 CV - 2016"
        }
        inspectionDate={new Date()}
        inspectionHour={"09:00"}
        inspectionUnit={"Av. Giovanni Gronchi, 6.093, Morumbi, SÃO PAULO, SP"}
        inspectionPhone={"(11) 3739-4973"}
      />
      <CardInspection
        statusReport={StatusReport.Pending}
        statusPayment={StatusPayment.Refused}
        vehicleDescription={
          "AUDI A1 SPORTBACK AMBITION 1.4 16V TFSI STRONIC 185 CV - 2016"
        }
        inspectionDate={new Date()}
        inspectionHour={"09:00"}
        inspectionUnit={"Av. Giovanni Gronchi, 6.093, Morumbi, SÃO PAULO, SP"}
        inspectionPhone={"(11) 3739-4973 / (11) 94753-2691"}
      />
      <CardInspection
        statusReport={StatusReport.Pending}
        statusPayment={StatusPayment.Approved}
        vehicleDescription={
          "AUDI A1 SPORTBACK AMBITION 1.4 16V TFSI STRONIC 185 CV - 2016"
        }
        inspectionDate={new Date()}
        inspectionHour={"09:00"}
        inspectionUnit={"Av. Giovanni Gronchi, 6.093, Morumbi, SÃO PAULO, SP"}
        inspectionPhone={"(11) 3739-4973 / (11) 94753-2691"}
      />
      <CardInspection
        statusReport={StatusReport.Approved}
        statusPayment={StatusPayment.Approved}
        vehicleDescription={
          "AUDI A1 SPORTBACK AMBITION 1.4 16V TFSI STRONIC 185 CV - 2016"
        }
        inspectionDate={new Date()}
        inspectionHour={"09:00"}
        inspectionUnit={"Av. Giovanni Gronchi, 6.093, Morumbi, SÃO PAULO, SP"}
        inspectionPhone={"(11) 3739-4973 / (11) 94753-2691"}
      />
      <CardInspection
        statusReport={StatusReport.Appointments}
        statusPayment={StatusPayment.Approved}
        vehicleDescription={
          "AUDI A1 SPORTBACK AMBITION 1.4 16V TFSI STRONIC 185 CV - 2016"
        }
        inspectionDate={new Date()}
        inspectionHour={"09:00"}
        inspectionUnit={"Av. Giovanni Gronchi, 6.093, Morumbi, SÃO PAULO, SP"}
        inspectionPhone={"(11) 3739-4973 / (11) 94753-2691"}
      />
      <CardInspection
        statusReport={StatusReport.Refused}
        statusPayment={StatusPayment.Approved}
        vehicleDescription={
          "AUDI A1 SPORTBACK AMBITION 1.4 16V TFSI STRONIC 185 CV - 2016"
        }
        inspectionDate={new Date()}
        inspectionHour={"09:00"}
        inspectionUnit={"Av. Giovanni Gronchi, 6.093, Morumbi, SÃO PAULO, SP"}
        inspectionPhone={"(11) 3739-4973 / (11) 94753-2691"}
      /> */}
    </>
  );
};
